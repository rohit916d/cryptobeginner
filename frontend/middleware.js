export const config = {
  matcher: ["/learn/:slug", "/blog/:slug"],
};

const BOT_PATTERNS = [
  "facebookexternalhit",
  "facebot",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "slackbot",
  "discordbot",
  "googlebot",
  "bingbot",
  "redditbot",
  "pinterest",
  "skypeuripreview",
  "vkshare",
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  return BOT_PATTERNS.some((p) => ua.includes(p));
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"]/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
  ));
}

export default async function middleware(request) {
  const ua = request.headers.get("user-agent") || "";
  if (!isBot(ua)) return; // real users: pass through to the normal SPA untouched

  const url = new URL(request.url);
  const parts = url.pathname.split("/").filter(Boolean); // e.g. ["learn", "some-slug"]
  if (parts.length !== 2) return;

  const [section, slug] = parts;
  if (section !== "learn" && section !== "blog") return;

  const apiPath = section === "learn" ? `/api/lessons/${slug}` : `/api/blog/${slug}`;

  try {
    const res = await fetch(`${url.origin}${apiPath}`, {
      headers: { accept: "application/json" },
    });
    if (!res.ok) return; // let the normal SPA 404 page handle it

    const data = await res.json();
    const title = data.title || "Crypto Beginner";
    const description = (section === "learn" ? data.summary : data.excerpt) || "";
    const image = data.cover_image || `${url.origin}/cryptobeginner-icon.png`;
    const canonical = url.href;

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)} — Crypto Beginner</title>
<meta name="description" content="${escapeHtml(description)}" />
<link rel="canonical" href="${escapeHtml(canonical)}" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Crypto Beginner" />
<meta property="og:title" content="${escapeHtml(title)} — Crypto Beginner" />
<meta property="og:description" content="${escapeHtml(description)}" />
<meta property="og:url" content="${escapeHtml(canonical)}" />
<meta property="og:image" content="${escapeHtml(image)}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escapeHtml(title)} — Crypto Beginner" />
<meta name="twitter:description" content="${escapeHtml(description)}" />
<meta name="twitter:image" content="${escapeHtml(image)}" />
</head>
<body>
<h1>${escapeHtml(title)}</h1>
<p>${escapeHtml(description)}</p>
<a href="${escapeHtml(canonical)}">Read the full ${escapeHtml(section)} on Crypto Beginner</a>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (e) {
    return; // any failure: fall through to the normal SPA rather than breaking the request
  }
}
