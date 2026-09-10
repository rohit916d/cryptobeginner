import { ExternalLink, ShieldCheck } from "lucide-react";
import { useSEO } from "../lib/seo";
import { EXCHANGES } from "../lib/affiliates";

function PartnerCard({ item }) {
  return (
    <div className="card-base glow-border p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-sm shrink-0"
          style={{ backgroundColor: item.color }}
        >
          {item.initials}
        </div>
        <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-[#C8F169]/10 text-[#C8F169]">
          {item.badge}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white">{item.name}</h3>
      <p className="text-sm text-zinc-400 mt-1.5 leading-relaxed flex-1">{item.description}</p>
      <ul className="mt-4 space-y-1.5">
        {item.features.map((f) => (
          <li key={f} className="text-xs text-zinc-500 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#C8F169] shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        data-testid={`partner-link-${item.id}`}
        className="btn-secondary inline-flex items-center justify-center gap-2 mt-5 w-full"
      >
        Get Started <ExternalLink size={14} />
      </a>
    </div>
  );
}

export default function Recommended() {
  useSEO({
    title: "Recommended Crypto Exchanges for Beginners",
    description:
      "Compare beginner-friendly crypto exchanges in India — CoinDCX, Bybit, Binance, CoinSwitch and more.",
    keywords: "best crypto exchange india, beginner exchange, coindcx, bybit, binance, coinswitch",
    canonical: typeof window !== "undefined" ? window.location.origin + window.location.pathname : undefined,
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      <div className="mb-8">
        <div className="block-tag mb-3">
          <span className="dot" />
          PARTNER PICKS
        </div>
        <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight">
          Recommended <span className="brand-grad-text italic">Exchanges</span>
        </h1>
        <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
          Platforms we think are solid for a first-time crypto buyer in India — where to actually
          buy, and what to look for before you sign up.
        </p>
      </div>

      {/* DISCLOSURE */}
      <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 mb-10 flex items-start gap-2.5">
        <ShieldCheck size={15} className="text-[#C8F169] shrink-0 mt-0.5" />
        <p className="text-xs text-zinc-500 leading-relaxed">
          <span className="text-zinc-300 font-medium">Affiliate disclosure:</span> some links below are
          referral links — if you sign up through them, we may earn a commission at no extra cost to
          you. We only list platforms we'd genuinely suggest to a beginner; this isn't financial advice,
          and always do your own research before choosing where to trade.
        </p>
      </div>

      {/* EXCHANGES */}
      <div>
        <h2 className="text-xl font-bold text-white mb-5">Exchanges — where to buy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXCHANGES.map((ex) => (
            <PartnerCard key={ex.id} item={ex} />
          ))}
        </div>
      </div>
    </section>
  );
}
