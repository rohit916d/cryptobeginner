import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight, Sparkles, ShieldCheck, BookOpen, TrendingUp } from "lucide-react";
import MarketStats from "../components/MarketStats";
import CryptoTable from "../components/CryptoTable";
import { useSEO } from "../lib/seo";
import CryptoNews from "../components/CryptoNews";

export default function Home() {
  useSEO({
    title: "Learn Crypto, Bitcoin & Blockchain From Zero",
    description:
      "Learn Crypto, Bitcoin, Blockchain, Web3, Wallets, DeFi and Cryptocurrency from scratch with beginner-friendly guides, tutorials and live market data.",
    keywords:
      "crypto, cryptocurrency, bitcoin, blockchain, web3, defi, crypto for beginners, learn crypto, bitcoin guide, crypto education, wallets, ethereum",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
    image: "https://cryptobeginner.in/cryptobeginner-icon.png",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Crypto Beginner",
      description: "Beginner-friendly crypto education platform.",
      url: typeof window !== "undefined" ? window.location.origin : "",
    },
  });
  useEffect(() => {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/market/stats`).catch(() => {});
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/news`).catch(() => {});
    });
  }
}, []);
  return (
    <>
      {/* HERO */}
      <section data-testid="hero" className="relative overflow-hidden">
        <div className="orb -top-32 -left-24 w-[480px] h-[480px]" style={{ background: "radial-gradient(circle, rgba(255,191,0,0.25), transparent 60%)" }} />
        <div className="orb top-20 right-0 w-[420px] h-[420px]" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 60%)" }} />
        <div className="bg-grain absolute inset-0 opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-zinc-300">
                <Sparkles size={12} className="text-[#FFBF00]" />
                Crypto education for absolute beginners
              </div>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95]">
                <span className="text-white">Learn Crypto</span>
                <br />
                <span className="brand-grad-text">From Zero.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
                Simple crypto education for complete beginners. Bitcoin, blockchain, wallets, scams, security — all explained without jargon, hype, or financial advice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/learn" data-testid="hero-cta-start" className="btn-primary inline-flex items-center gap-2">
                  Start Learning <ArrowRight size={16} />
                </Link>
                <a href="#market" data-testid="hero-cta-market" className="btn-secondary inline-flex items-center gap-2">
                  Explore Market <TrendingUp size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-xs text-zinc-500">
                <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#FFBF00]" /> No financial advice</div>
                <div className="flex items-center gap-2"><BookOpen size={14} className="text-[#FFBF00]" /> 15+ free lessons</div>
                <div className="flex items-center gap-2"><Sparkles size={14} className="text-[#FFBF00]" /> Live market data</div>
              </div>
            </div>

            <div className="lg:col-span-5 fade-up" style={{ animationDelay: "180ms" }}>
              <div className="relative card-base p-6 md:p-7">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(600px circle at 0% 0%, rgba(255,191,0,0.08), transparent 40%)" }} />
                <div className="label-eyebrow">A 60-second primer</div>
                <h3 className="text-xl font-bold text-white mt-2">What is crypto, really?</h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  Crypto is digital money that lives on a public ledger called a blockchain — no banks, no middlemen. It's borderless, scarce, and programmable.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { k: "21M", v: "BTC supply cap" },
                    { k: "24/7", v: "Markets open" },
                    { k: "0", v: "Middlemen needed" },
                  ].map((s) => (
                    <div key={s.k} className="rounded-xl bg-white/[0.02] border border-white/5 p-3">
                      <div className="font-mono text-lg text-[#FFBF00] font-bold">{s.k}</div>
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="gold-divider my-5" />
                <Link to="/learn/what-is-cryptocurrency" data-testid="hero-primer-link" className="text-sm text-[#FFBF00] hover:underline inline-flex items-center gap-1">
                  Read the full primer <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="mb-6">
          <div className="label-eyebrow">Market Overview</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Today in crypto</h2>
        </div>
        <MarketStats />
      </section>

      {/* TOP 10 TABLE */}
      <section id="market" data-testid="market-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <CryptoTable />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <CryptoNews />
      </section>

      {/* LEARNING PATH CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: "Beginner", desc: "Bitcoin, blockchain, wallets, exchanges — start here.", to: "/learn?level=beginner", color: "from-amber-400/20 to-transparent" },
            { title: "Intermediate", desc: "DeFi, staking, smart contracts, NFTs, L1 vs L2.", to: "/learn?level=intermediate", color: "from-yellow-300/20 to-transparent" },
            { title: "Security", desc: "Scams, phishing, wallet & seed phrase protection.", to: "/learn?level=security", color: "from-rose-400/20 to-transparent" },
          ].map((t) => (
            <Link
              key={t.title}
              to={t.to}
              data-testid={`path-card-${t.title.toLowerCase()}`}
              className="card-base p-7 hover-lift relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-50 group-hover:opacity-80 transition-opacity`} />
              <div className="relative">
                <div className="label-eyebrow">Track</div>
                <h3 className="text-2xl font-bold text-white mt-2">{t.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{t.desc}</p>
                <div className="mt-6 text-sm text-[#FFBF00] inline-flex items-center gap-1">
                  Explore lessons <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
