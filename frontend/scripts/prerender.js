/*
 * Build-time prerendering for cryptobeginner.in
 *
 * Why: the app is a client-rendered SPA, so crawlers and the AdSense
 * reviewer (which do not run JavaScript) saw an empty shell on every
 * page — the direct cause of the 2026-10-22 "Low-value content"
 * rejection. This script runs after `craco build` and writes real,
 * complete HTML (unique title, meta description, canonical, and the
 * full page content) for the homepage, the blog index, every blog
 * post, and the main static pages into the build output. The React
 * app still boots on top for real users (index.js uses root.render,
 * which replaces the prerendered markup).
 *
 * It never fails the build: on any error it logs loudly and exits 0
 * so a blog push can never take the site down.
 */
const fs = require("fs");
const path = require("path");

const FRONT = path.join(__dirname, "..");
const BUILD = path.join(FRONT, "build");
const ORIGIN = "https://cryptobeginner.in";

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadMarkdownLib() {
  const src = fs.readFileSync(path.join(FRONT, "src", "lib", "markdown.js"), "utf8");
  const factory = new Function(
    src.replace(/^export\s+/gm, "") + "; return { renderMarkdown, formatDate };"
  );
  return factory();
}

let yaml = null;
try {
  yaml = require("js-yaml");
} catch (e) {
  yaml = null;
}

function parsePost(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  let fm = {};
  if (yaml) {
    fm = yaml.load(m[1]) || {};
  } else {
    // Minimal fallback for our known frontmatter shape.
    let curKey = null;
    for (const line of m[1].split("\n")) {
      const km = line.match(/^([a-z_]+):\s*(.*)$/);
      if (km) {
        curKey = km[1];
        fm[curKey] = km[2].replace(/^"|"$/g, "");
        if (curKey === "faqs") fm.faqs = [];
        continue;
      }
      const q = line.match(/^\s*-\s*question:\s*"?(.*?)"?\s*$/);
      if (q && Array.isArray(fm.faqs)) fm.faqs.push({ question: q[1], answer: "" });
      const a = line.match(/^\s*answer:\s*"?(.*?)"?\s*$/);
      if (a && Array.isArray(fm.faqs) && fm.faqs.length)
        fm.faqs[fm.faqs.length - 1].answer = a[1];
    }
  }
  return { fm, body: m[2] };
}

function findPostsDir() {
  const candidates = [
    path.join(FRONT, "..", "backend", "content", "blog"),
    path.join(FRONT, "backend", "content", "blog"),
    path.join(process.cwd(), "..", "backend", "content", "blog"),
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
}
function setMeta(html, attrName, attrVal, content) {
  const re = new RegExp(`(<meta[^>]*${attrName}="${attrVal}"[^>]*?content=")[^"]*(")`, "s");
  if (re.test(html)) return html.replace(re, `$1${esc(content)}$2`);
  return html.replace("</head>", `<meta ${attrName}="${attrVal}" content="${esc(content)}" />\n</head>`);
}
function setCanonical(html, url) {
  const re = /(<link[^>]*rel="canonical"[^>]*?href=")[^"]*(")/s;
  if (re.test(html)) return html.replace(re, `$1${url}$2`);
  return html.replace("</head>", `<link rel="canonical" href="${url}" />\n</head>`);
}

function buildPage(tpl, opts) {
  let h = tpl;
  h = setTitle(h, opts.title);
  h = setMeta(h, "name", "description", opts.desc);
  h = setMeta(h, "property", "og:title", opts.title);
  h = setMeta(h, "property", "og:description", opts.desc);
  h = setMeta(h, "property", "og:url", opts.url);
  h = setCanonical(h, opts.url);
  if (opts.jsonLd) {
    h = h.replace(
      "</head>",
      `<script type="application/ld+json">${opts.jsonLd}</script>\n</head>`
    );
  }
  const start = h.indexOf('<div id="root">');
  const end = h.lastIndexOf("</body>");
  if (start === -1 || end === -1 || end <= start) return h;
  const tail = h.slice(start, end);
  const tailScripts = (tail.match(/<script[^>]*src="[^"]+"[^>]*>\s*<\/script>/g) || []).join("\n");
  h =
    h.slice(0, start) +
    `<div id="root">${opts.bodyHtml}</div>\n` +
    (tailScripts ? tailScripts + "\n" : "") +
    h.slice(end);
  return h;
}

function writePage(tpl, routePath, opts) {
  const dir = path.join(BUILD, routePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), buildPage(tpl, opts));
}

let appFormatDate = null;
function fmtDate(iso) {
  if (appFormatDate) {
    try {
      return appFormatDate(iso);
    } catch (e) {
      /* fall through */
    }
  }
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return "";
  }
}

function main() {
  const tplPath = path.join(BUILD, "index.html");
  if (!fs.existsSync(tplPath)) {
    console.error("[prerender] build/index.html missing — skipping");
    return;
  }
  const tpl = fs.readFileSync(tplPath, "utf8");
  const mdLib = loadMarkdownLib();
  const renderMarkdown = mdLib.renderMarkdown;
  appFormatDate = mdLib.formatDate || null;

  const postsDir = findPostsDir();
  const posts = [];
  if (postsDir) {
    for (const file of fs.readdirSync(postsDir)) {
      if (!file.endsWith(".md")) continue;
      const slug = file.replace(/\.md$/, "");
      const parsed = parsePost(fs.readFileSync(path.join(postsDir, file), "utf8"));
      if (!parsed || !parsed.fm.title) continue;
      posts.push({ slug, ...parsed });
    }
  } else {
    console.error("[prerender] WARNING: blog content dir not found — no post pages generated");
  }
  posts.sort((a, b) => new Date(b.fm.created_at || 0) - new Date(a.fm.created_at || 0));
  console.log(`[prerender] ${posts.length} posts found`);

  const postLinks = (list) =>
    list
      .map(
        (p) =>
          `<li><a href="/blog/${p.slug}">${esc(p.fm.title)}</a> — ${esc(p.fm.excerpt || "")}</li>`
      )
      .join("\n");

  const homePostCards = (list) =>
    list
      .map(
        (p) =>
          `<li><a href="/blog/${p.slug}"><span class="guide-title">${esc(p.fm.title)}</span><span class="guide-excerpt">${esc(p.fm.excerpt || "")}</span></a></li>`
      )
      .join("\n");

  /* ---------------- Blog post pages ---------------- */
  for (const p of posts) {
    const url = `${ORIGIN}/blog/${p.slug}`;
    const contentHtml = renderMarkdown(p.body);
    const faqs = Array.isArray(p.fm.faqs) ? p.fm.faqs : [];
    const faqHtml = faqs.length
      ? `<div class="mt-12"><h2 class="text-2xl font-bold text-white mb-4">Frequently asked questions</h2><div class="space-y-3">${faqs
          .map(
            (f) =>
              `<details class="card-base p-4"><summary class="cursor-pointer text-white font-medium">${esc(
                f.question
              )}</summary><p class="text-sm text-zinc-400 mt-3 leading-relaxed">${esc(f.answer)}</p></details>`
          )
          .join("")}</div></div>`
      : "";
    const related = posts
      .filter((q) => q.slug !== p.slug && q.fm.category === p.fm.category)
      .slice(0, 3);
    const relatedHtml = related.length
      ? `<div class="mt-12"><h2 class="text-2xl font-bold text-white mb-5">Related guides</h2><ul>${postLinks(
          related
        )}</ul></div>`
      : "";
    const bodyHtml = `<article class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<p><a href="/blog" class="text-sm text-zinc-400">← Back to all guides</a></p>
<div class="text-xs font-bold uppercase tracking-[0.15em] text-[#C8F169]">${esc(p.fm.category || "")}</div>
<h1 class="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">${esc(p.fm.title)}</h1>
<div class="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500"><span>${esc(p.fm.read_time || "")} min read</span><span>${esc(p.fm.author || "Crypto Beginner Editorial Team")}</span><span>${esc(fmtDate(p.fm.created_at))}</span></div>
${
  p.fm.cover_image
    ? `<div class="mt-8 rounded-2xl overflow-hidden border border-white/5"><img src="${esc(p.fm.cover_image)}" alt="${esc(p.fm.title)}" class="w-full aspect-[16/9] object-cover" /></div>`
    : ""
}
<div class="prose-amber mt-10">${contentHtml}</div>
${faqHtml}
${relatedHtml}
</article>`;
    const jsonLd = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: p.fm.title,
          description: p.fm.excerpt || "",
          author: { "@type": "Organization", name: p.fm.author || "Crypto Beginner Editorial Team" },
          datePublished: p.fm.created_at || undefined,
          image: p.fm.cover_image ? ORIGIN + p.fm.cover_image : undefined,
          mainEntityOfPage: url,
        },
        ...(faqs.length
          ? [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              },
            ]
          : []),
      ],
    });
    writePage(tpl, path.join("blog", p.slug), {
      title: `${p.fm.title} — Crypto Beginner`,
      desc: p.fm.excerpt || "",
      url,
      bodyHtml,
      jsonLd,
    });
  }
  console.log("[prerender] post pages written");

  /* ---------------- Blog index ---------------- */
  writePage(tpl, "blog", {
    title: "Crypto Blog for Beginners in India — Crypto Beginner",
    desc: "Beginner-friendly crypto guides for India: Bitcoin, wallets, taxes, security, DeFi and scams — explained in simple language, with new guides every week.",
    url: `${ORIGIN}/blog`,
    bodyHtml: `<main class="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Crypto guides for beginners in India</h1>
<p class="mt-4 text-zinc-400">Original, educational guides on Bitcoin, blockchain, wallets, crypto taxes in India, security and scams — written in simple language. Educational content only, not financial advice.</p>
<ul class="mt-10 space-y-4">${postLinks(posts)}</ul>
</main>`,
  });

  /* ---------------- Learn lessons ---------------- */
  const lessonsDir = postsDir ? path.join(path.dirname(postsDir), "lessons") : null;
  const lessons = [];
  if (lessonsDir && fs.existsSync(lessonsDir)) {
    for (const file of fs.readdirSync(lessonsDir)) {
      if (!file.endsWith(".md")) continue;
      const slug = file.replace(/\.md$/, "");
      const parsed = parsePost(fs.readFileSync(path.join(lessonsDir, file), "utf8"));
      if (!parsed || !parsed.fm.title) continue;
      lessons.push({ slug, ...parsed });
    }
  }
  lessons.sort((a, b) => (a.fm.order || 99) - (b.fm.order || 99));
  console.log(`[prerender] ${lessons.length} lessons found`);
  for (const l of lessons) {
    const url = `${ORIGIN}/learn/${l.slug}`;
    const sameLevel = lessons.filter((q) => q.fm.level === l.fm.level);
    const idx = sameLevel.findIndex((q) => q.slug === l.slug);
    const next = idx >= 0 && idx < sameLevel.length - 1 ? sameLevel[idx + 1] : null;
    writePage(tpl, path.join("learn", l.slug), {
      title: `${l.fm.title} — Crypto Beginner`,
      desc: l.fm.summary || "",
      url,
      bodyHtml: `<article class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<p><a href="/learn" class="text-sm text-zinc-400">← Back to all lessons</a></p>
<div class="text-xs font-bold uppercase tracking-[0.15em] text-[#C8F169]">${esc(l.fm.level || "")} lesson</div>
<h1 class="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">${esc(l.fm.title)}</h1>
<div class="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500"><span>${esc(l.fm.read_time || "")} min read</span><span>${esc(l.fm.author || "Crypto Beginner Editorial Team")}</span></div>
<div class="prose-amber mt-10">${renderMarkdown(l.body)}</div>
${
  next
    ? `<div class="mt-12"><h2 class="text-2xl font-bold text-white mb-4">Next lesson</h2><p><a href="/learn/${next.slug}">${esc(next.fm.title)}</a> — ${esc(next.fm.summary || "")}</p></div>`
    : ""
}
</article>`,
    });
  }
  if (lessons.length) {
    const levels = [...new Set(lessons.map((l) => l.fm.level || "beginner"))];
    const groups = levels
      .map(
        (lv) =>
          `<h2 class="text-2xl font-bold text-white mt-10 mb-4" style="text-transform:capitalize">${esc(lv)} track</h2><ul class="space-y-3">${lessons
            .filter((l) => (l.fm.level || "beginner") === lv)
            .map(
              (l) =>
                `<li><a href="/learn/${l.slug}">${esc(l.fm.title)}</a> — ${esc(l.fm.summary || "")}</li>`
            )
            .join("")}</ul>`
      )
      .join("");
    writePage(tpl, "learn", {
      title: "Learn Crypto Step by Step — Crypto Beginner",
      desc: "Structured crypto learning paths for absolute beginners in India — beginner, intermediate and security tracks that build from zero to confident.",
      url: `${ORIGIN}/learn`,
      bodyHtml: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Learn crypto, step by step</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">Structured lessons for beginners in India — from what Bitcoin is, to wallets, security, taxes and DeFi. Free, in simple language, educational only.</p>
${groups}
</main>`,
    });
  }
  console.log("[prerender] lesson pages written");

  /* ---------------- Static pages ---------------- */
  const legal = {
    privacy: {
      title: "Privacy Policy",
      description: "How Crypto Beginner collects, uses, and protects your information.",
      sections: [
        ["What we collect", "We collect minimal data: page analytics, contact-form submissions you voluntarily provide, newsletter email addresses you voluntarily submit, and standard server logs. We do not sell user data."],
        ["Newsletter", "If you subscribe to our newsletter, we store your email address solely to send you educational emails. We never share it with third parties. You can unsubscribe at any time using the unsubscribe option in any newsletter signup box, and your address is then deleted from our list."],
        ["How we use it", "To improve content, respond to your messages, send newsletters you requested, and detect abuse. That's it."],
        ["Cookies", "We use first-party cookies for analytics and session continuity. You can disable them in your browser at any time. See our Cookie Policy for details."],
        ["Third parties", "Our market data is sourced from CoinGecko. No data is sold."],
        ["Your rights", "You may request deletion of your contact submissions or newsletter subscription by emailing hello@cryptobeginner.in."],
        ["Updates", "We may update this policy. Significant changes will be reflected on this page with a new date."],
      ],
    },
    terms: {
      title: "Terms & Conditions",
      description: "By using Crypto Beginner, you agree to these terms.",
      sections: [
        ["Educational content only", "All content on this platform is provided for educational purposes only. It does not constitute financial, investment, legal, or tax advice."],
        ["No guarantees", "Cryptocurrency markets are volatile. Past performance never indicates future returns. We make no guarantees about accuracy, completeness, or timeliness of any content."],
        ["Use at your own risk", "Any actions you take based on information from this site are entirely at your own risk. We accept no liability for any losses."],
        ["Intellectual property", "All content is © Crypto Beginner (cryptobeginner.in). You may quote with attribution but not republish in full without permission."],
        ["Acceptable use", "Do not use this site to spread misinformation, harm others, scrape data aggressively, or engage in illegal activity."],
        ["Changes", "We may update these terms at any time. Continued use of the site constitutes acceptance."],
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      description: "Important: Crypto Beginner provides educational content only, not financial advice.",
      sections: [
        ["Not financial advice", "Nothing on Crypto Beginner is financial, investment, trading, tax, or legal advice. We are educators, not advisors."],
        ["High-risk asset class", "Cryptocurrencies are highly volatile and can lose value rapidly. Many projects fail. Many are scams. Never invest funds you cannot afford to lose entirely."],
        ["Do your own research", "Always do your own research (DYOR) and consult qualified professionals before making financial decisions."],
        ["No endorsements", "Mention of any coin, exchange, wallet, or service in our educational articles is for illustration only and is not an endorsement or recommendation. Our separate Recommendations page lists services we suggest based on our own criteria — those listings may include referral links, as disclosed on that page — but inclusion there is still not financial advice."],
        ["Third-party data", "Market data is provided by CoinGecko. We make no warranty about its accuracy or completeness."],
        ["Stay safe", "Never share your seed phrase, private keys, or passwords with anyone — including anyone claiming to represent Crypto Beginner."],
      ],
    },
  };
  for (const [slug, data] of Object.entries(legal)) {
    writePage(tpl, slug, {
      title: `${data.title} — Crypto Beginner`,
      desc: data.description,
      url: `${ORIGIN}/${slug}`,
      bodyHtml: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20"><h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">${esc(
        data.title
      )}</h1>${data.sections
        .map(
          (s) =>
            `<h2 class="text-xl font-bold text-white mt-8">${esc(s[0])}</h2><p class="text-zinc-400 mt-2 leading-relaxed">${esc(s[1])}</p>`
        )
        .join("")}</main>`,
    });
  }

  const statics = [
    {
      route: "about",
      title: "About Us — Crypto Beginner",
      desc: "Crypto Beginner is a free crypto education site for India: original, jargon-free guides on Bitcoin, wallets, taxes and security. Educational content only.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">About Crypto Beginner</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">Crypto Beginner (cryptobeginner.in) is a free education website that explains cryptocurrency to complete beginners in India — in simple language, without jargon and without hype.</p>
<h2 class="text-xl font-bold text-white mt-8">Our mission</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">Most crypto content in India is either trading hype or copied news. We publish original, carefully researched guides that answer one beginner question at a time: how Bitcoin and blockchains work, how wallets and seed phrases keep you safe, how India's 30% tax and 1% TDS rules work, and how to spot the scams that target new investors.</p>
<h2 class="text-xl font-bold text-white mt-8">What we publish</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">Step-by-step beginner guides, a structured learning track, a plain-English crypto dictionary, a risk-free demo trading simulator, and new blog guides every week — all written by the Crypto Beginner Editorial Team.</p>
<h2 class="text-xl font-bold text-white mt-8">Our editorial standards</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">Every article is 100% original, carries a clear educational disclaimer, and is reviewed against our quality checklist before publishing. We never publish price predictions, coin picks, or guaranteed-return claims. Nothing on this site is financial advice.</p>
<h2 class="text-xl font-bold text-white mt-8">Contact</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">Questions or corrections: hello@cryptobeginner.in — or use our <a href="/contact">contact page</a>.</p>
</main>`,
    },
    {
      route: "contact",
      title: "Contact Us — Crypto Beginner",
      desc: "Contact Crypto Beginner: questions, corrections and feedback about our beginner crypto guides for India.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Contact us</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">Have a question about one of our guides, spotted an error, or want to suggest a topic for Indian beginners? Email us at <strong>hello@cryptobeginner.in</strong>.</p>
<p class="text-zinc-400 mt-4 leading-relaxed">Please note: we are educators, not financial advisors — we cannot tell you what to buy or sell, and we will never ask for your seed phrase, passwords, or money. Anyone who does is a scammer.</p>
</main>`,
    },
    {
      route: "cookie-policy",
      title: "Cookie Policy — Crypto Beginner",
      desc: "How Crypto Beginner uses cookies: analytics and session continuity only, and how to disable them.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Cookie Policy</h1>
<h2 class="text-xl font-bold text-white mt-8">What cookies we use</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">We use first-party cookies for page analytics and session continuity — for example, remembering your progress in the demo trading simulator. We do not sell data collected through cookies.</p>
<h2 class="text-xl font-bold text-white mt-8">How to disable cookies</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">You can disable cookies at any time in your browser settings. The site will still work; some convenience features may reset between visits.</p>
<h2 class="text-xl font-bold text-white mt-8">More information</h2>
<p class="text-zinc-400 mt-2 leading-relaxed">See our <a href="/privacy">Privacy Policy</a> for how we handle your information overall.</p>
</main>`,
    },
    {
      route: "dictionary",
      title: "Crypto Dictionary — Crypto Beginner",
      desc: "Plain-English definitions of crypto terms for Indian beginners: blockchain, wallet, seed phrase, DeFi, staking, gas fees and more.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Crypto dictionary</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">Every crypto term a beginner meets — blockchain, wallet, seed phrase, gas fees, staking, DeFi — defined in plain English with India context. For full explanations, read our beginner guides:</p>
<ul class="mt-6 space-y-3">${postLinks(posts.slice(0, 8))}</ul>
</main>`,
    },
    {
      route: "recommended",
      title: "Recommended Platforms — Crypto Beginner",
      desc: "Platforms the Crypto Beginner team suggests for Indian beginners, with clear affiliate disclosure. Educational information only, not financial advice.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Recommended platforms</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">These are services we suggest for Indian beginners based on our own criteria — ease of use, INR support, and safety features. Listings on this page may include referral (affiliate) links, which means we may earn a commission at no extra cost to you; this is disclosed here and on the page itself. Inclusion is not financial advice — always do your own research and read our <a href="/disclaimer">disclaimer</a>.</p>
</main>`,
    },
    {
      route: "demo-trading",
      title: "Demo Trading Simulator — Crypto Beginner",
      desc: "Practice crypto trading with virtual money in our free demo simulator. Learn orders, portfolios and risk without risking real rupees.",
      body: `<main class="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
<h1 class="text-4xl md:text-5xl font-normal text-white tracking-tight">Demo trading simulator</h1>
<p class="text-zinc-400 mt-4 leading-relaxed">Practice buying and selling crypto with virtual money before you risk a single real rupee. Learn how market and limit orders work, watch your virtual portfolio move, and build confidence safely. The simulator runs in your browser — enable JavaScript to use it.</p>
<p class="text-zinc-400 mt-4 leading-relaxed">New to the basics? Start with our <a href="/blog">beginner guides</a>.</p>
</main>`,
    },
  ];
  for (const s of statics) {
    writePage(tpl, s.route, {
      title: s.title,
      desc: s.desc,
      url: `${ORIGIN}/${s.route}`,
      bodyHtml: s.body,
    });
  }
  console.log("[prerender] static pages written");

  /* ---------------- Homepage ---------------- */
  const homeBody = `<main class="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
<section class="hero-shell">
<span class="hero-chip"><span class="dot"></span> Free crypto education · Made for India</span>
<h1 class="text-4xl md:text-6xl font-normal text-white tracking-tight leading-tight" style="margin-top:1.25rem">Crypto For Beginners in India — Learn <span class="brand-grad-text">Bitcoin, Blockchain &amp; Wallets</span></h1>
<p class="mt-5 text-lg text-zinc-300 leading-relaxed" style="max-width:44rem">Crypto Beginner is a free education site for India. Learn how Bitcoin and blockchain work, how to use wallets safely, how India's crypto tax rules (30% tax + 1% TDS) apply to you, and how to spot scams — in simple language, with no hype and no financial advice.</p>
<div class="mt-8" style="display:flex;flex-wrap:wrap;gap:0.75rem">
<a href="/learn" class="btn-primary" style="display:inline-flex;align-items:center;text-decoration:none">Start learning free →</a>
<a href="/blog" class="btn-secondary" style="display:inline-flex;align-items:center;text-decoration:none">Read the latest guides</a>
</div>
<div class="stat-band" style="margin-top:2rem">
<div class="stat-item"><span class="stat-num">130+</span><span class="stat-label">Beginner guides</span></div>
<div class="stat-item"><span class="stat-num teal">31</span><span class="stat-label">Structured lessons</span></div>
<div class="stat-item"><span class="stat-num gold">3</span><span class="stat-label">Learning tracks</span></div>
<div class="stat-item"><span class="stat-num">100%</span><span class="stat-label">Free, no paywall</span></div>
</div>
</section>
<nav class="quick-links" style="margin-top:1.75rem" aria-label="Explore">
<a href="/learn">Learn step by step</a>
<a href="/blog">Latest guides</a>
<a href="/dictionary">Crypto dictionary</a>
<a href="/demo-trading">Demo trading simulator</a>
<a href="/recommended">Recommended platforms</a>
<a href="/about">About us</a>
</nav>
<h2 class="text-2xl md:text-3xl font-bold text-white mt-14 mb-5">Latest guides</h2>
<ul class="guide-list">${homePostCards(posts.slice(0, 12))}</ul>
<p class="mt-10 text-sm text-zinc-500">Educational content only. This is not financial advice. Crypto markets are volatile — never invest money you can't afford to lose.</p>
</main>`;
  fs.writeFileSync(
    tplPath,
    buildPage(tpl, {
      title: "Crypto For Beginners in India — Crypto Beginner",
      desc: "Crypto for beginners in India — learn Bitcoin, blockchain, wallets, DeFi and security with free, beginner-friendly guides. No hype, no financial advice.",
      url: `${ORIGIN}/`,
      bodyHtml: homeBody,
    })
  );
  console.log("[prerender] homepage written");
  console.log("[prerender] DONE");
}

try {
  main();
} catch (e) {
  console.error("[prerender] FAILED (build continues):", e && e.stack ? e.stack : e);
}
