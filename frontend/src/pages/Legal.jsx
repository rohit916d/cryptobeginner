import { useSEO } from "../lib/seo";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    description: "How CryptoBeginnersHub collects, uses, and protects your information.",
    sections: [
      ["What we collect", "We collect minimal data: page analytics (PostHog), contact-form submissions you voluntarily provide, and standard server logs. We do not run ads and we do not sell user data."],
      ["How we use it", "To improve content, respond to your messages, and detect abuse. That's it."],
      ["Cookies", "We use first-party cookies for analytics and session continuity. You can disable them in your browser at any time."],
      ["Third parties", "Our market data is sourced from CoinGecko. Analytics from PostHog. No data is sold."],
      ["Your rights", "You may request deletion of your contact submissions by emailing hello@cryptobeginnershub.com."],
      ["Updates", "We may update this policy. Significant changes will be reflected on this page with a new date."],
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "By using CryptoBeginnersHub, you agree to these terms.",
    sections: [
      ["Educational content only", "All content on this platform is provided for educational purposes only. It does not constitute financial, investment, legal, or tax advice."],
      ["No guarantees", "Cryptocurrency markets are volatile. Past performance never indicates future returns. We make no guarantees about accuracy, completeness, or timeliness of any content."],
      ["Use at your own risk", "Any actions you take based on information from this site are entirely at your own risk. We accept no liability for any losses."],
      ["Intellectual property", "All content is © CryptoBeginnersHub. You may quote with attribution but not republish in full without permission."],
      ["Acceptable use", "Do not use this site to spread misinformation, harm others, scrape data aggressively, or engage in illegal activity."],
      ["Changes", "We may update these terms at any time. Continued use of the site constitutes acceptance."],
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important: CryptoBeginnersHub provides educational content only, not financial advice.",
    sections: [
      ["Not financial advice", "Nothing on CryptoBeginnersHub is financial, investment, trading, tax, or legal advice. We are educators, not advisors."],
      ["High-risk asset class", "Cryptocurrencies are highly volatile and can lose value rapidly. Many projects fail. Many are scams. Never invest funds you cannot afford to lose entirely."],
      ["Do your own research", "Always do your own research (DYOR) and consult qualified professionals before making financial decisions."],
      ["No endorsements", "Mention of any coin, exchange, wallet, or service is for illustration only and is not an endorsement or recommendation."],
      ["Third-party data", "Market data is provided by CoinGecko. We make no warranty about its accuracy or completeness."],
      ["Stay safe", "Never share your seed phrase, private keys, or passwords with anyone — including anyone claiming to represent CryptoBeginnersHub."],
    ],
  },
};

export default function LegalPage({ slug }) {
  const data = CONTENT[slug];
  useSEO({
    title: data.title,
    description: data.description,
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20" data-testid={`legal-${slug}`}>
      <div className="label-eyebrow">Legal</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">{data.title}</h1>
      <p className="mt-4 text-zinc-400">{data.description}</p>
      <p className="mt-2 text-xs text-zinc-600 font-mono">Last updated: February 2026</p>

      <div className="mt-10 space-y-8">
        {data.sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="text-xl font-bold text-white">{h}</h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">{p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
