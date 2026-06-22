import { useSEO } from "../lib/seo";

const COOKIE_SECTIONS = [
  ["What are cookies?", "Cookies are small text files stored on your device by your browser when you visit a website. They help the site remember things about your visit."],
  ["How we use cookies", "Crypto Beginner uses a minimal set of first-party cookies to keep the site running smoothly and to understand which lessons and articles are most useful. We do not use cookies for ad-targeting."],
  ["Types of cookies we use", "Essential cookies (required for the site to function), preference cookies (remember your category filters), and anonymous analytics cookies (page-view counts and aggregated usage)."],
  ["Third-party cookies", "Live market data is fetched from CoinGecko via our backend, so no third-party cookies are set in your browser from that source. We do not use advertising networks or social trackers."],
  ["Managing cookies", "You can disable cookies entirely from your browser settings. The site will continue to work, although some preferences may not be remembered between visits."],
  ["Updates", "We may update this Cookie Policy as our analytics setup evolves. The latest version will always be available on this page."],
];

export default function CookiePolicy() {
  useSEO({
    title: "Cookie Policy",
    description: "How Crypto Beginner uses cookies and how you can control them.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20" data-testid="legal-cookie-policy">
      <div className="label-eyebrow">Legal</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
      <p className="mt-4 text-zinc-400">How Crypto Beginner uses cookies and how you can control them.</p>
      <p className="mt-2 text-xs text-zinc-600 font-mono">Last updated: February 2026</p>

      <div className="mt-10 space-y-8">
        {COOKIE_SECTIONS.map(([h, p]) => (
          <section key={h}>
            <h2 className="text-xl font-bold text-white">{h}</h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">{p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
