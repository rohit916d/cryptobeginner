import { useSEO, SITE_ORIGIN } from "../lib/seo";

const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    description: "How Crypto Beginner collects, uses, and protects your information.",
    sections: [
      ["What we collect", "We collect minimal data: page analytics, contact-form submissions you voluntarily provide, newsletter email addresses you voluntarily submit, and standard server logs. We do not run ads and we do not sell user data."],
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
  "editorial-policy": {
    title: "Editorial Policy",
    description: "How Crypto Beginner researches, writes, fact-checks and corrects its crypto guides for Indian beginners.",
    sections: [
      ["Who writes our content", "Crypto Beginner is founded and edited by Rohit Prajapati. Every guide is researched, written and reviewed by our editorial team under his direction, and published under an accountable byline — never anonymously."],
      ["How we research", "We start from primary sources wherever possible: official project documentation, regulator and government notices (including the RBI, SEBI and FIU-IND), exchange announcements, and reputable industry research. News-led articles are cross-checked against at least two independent sources before publishing."],
      ["Original content only", "Every article on this site is written from scratch for Indian beginners. We never copy, translate or spin other websites' articles, and we never present anyone else's work as our own."],
      ["Fact-checking and updates", "Figures, tax rules and platform details are checked at the time of writing. When facts change — a tax rule is amended, an exchange changes its policy — we update the article. If you spot an error, email hello@cryptobeginner.in and we will correct it."],
      ["No financial advice", "Our content explains how things work; it never tells you what to buy or sell. We do not publish price predictions, coin picks, or guaranteed-return claims. Crypto is a high-risk asset class — always do your own research and consult a qualified professional before investing."],
      ["Affiliate and sponsored content", "Some services listed on our Recommendations page are affiliate partners. Those links carry a clear disclosure on the page and are marked as sponsored links; partners never pay to influence our guides, and educational articles are never paid placements."],
      ["Corrections", "If we make a mistake, we fix it in the article itself. Reader corrections are always welcome at hello@cryptobeginner.in."],
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

export default function LegalPage({ slug }) {
  const data = CONTENT[slug];
  useSEO({
    title: data.title,
    description: data.description,
    canonical: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : undefined,
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20" data-testid={`legal-${slug}`}>
      <div className="label-eyebrow">{slug === "editorial-policy" ? "About" : "Legal"}</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight">{data.title}</h1>
      <p className="mt-4 text-zinc-400">{data.description}</p>
      <p className="mt-2 text-xs text-zinc-400 font-mono">Last updated: September 2026</p>

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
