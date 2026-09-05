import { Link } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { ArrowRight, Sparkles, ShieldCheck, BookOpen, TrendingUp, GraduationCap, Lock, Layers } from "lucide-react";
import { useSEO } from "../lib/seo";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";
import AnimatedCounter from "../components/AnimatedCounter";

const MarketStats = lazy(() => import("../components/MarketStats"));
const CryptoTable = lazy(() => import("../components/CryptoTable"));
const CryptoNews = lazy(() => import("../components/CryptoNews"));
const Block3DScene = lazy(() => import("../components/Block3DScene"));

export default function Home() {
  useSEO({
    title: "Learn Crypto, Bitcoin & Blockchain From Zero",
    description:
      "Learn Crypto, Bitcoin, Blockchain, Web3, Wallets, DeFi and Cryptocurrency from scratch with beginner-friendly guides, tutorials and live market data.",
    keywords:
      "crypto, cryptocurrency, bitcoin, blockchain, web3, defi, crypto for beginners, learn crypto, bitcoin guide, crypto education, wallets, ethereum",
    canonical: typeof window !== "undefined" ? window.location.origin + window.location.pathname : undefined,
    image: "https://cryptobeginner.in/cryptobeginner-icon.png",
    jsonLd: [
      {
        "@type": "WebSite",
        name: "Crypto Beginner",
        description: "Beginner-friendly crypto education platform.",
        url: typeof window !== "undefined" ? window.location.origin : "",
      },
      {
        "@type": "Organization",
        name: "Crypto Beginner",
        url: typeof window !== "undefined" ? window.location.origin : "",
        logo: typeof window !== "undefined" ? window.location.origin + "/cryptobeginner-icon.png" : "",
        description: "Free, beginner-friendly education platform for learning cryptocurrency, Bitcoin, and blockchain.",
      },
    ],
  });
  
  return (
    <>
      {/* HERO */}
      <section data-testid="hero" className="relative overflow-hidden">
        <div className="aurora-bg" />
        <div className="absolute inset-0 ledger-rule-bg opacity-60" />
        <div
          className="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(200,241,105,0.06), transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(155,135,245,0.05), transparent 65%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up ledger-rail">
              <div className="block-tag">
                <span className="dot" />
                ENTRY 001 · GENESIS LESSON
              </div>
              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[0.98]">
                <span className="text-white">Learn Crypto</span>
                <br />
                <span className="brand-grad-text italic">From Zero.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
                Simple crypto education for complete beginners. Bitcoin, blockchain, wallets, scams, security — all explained without jargon, hype, or financial advice.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton as={Link} to="/learn" data-testid="hero-cta-start" className="btn-primary inline-flex items-center gap-2">
                  Start Learning <ArrowRight size={16} />
                </MagneticButton>
                <a href="#market" data-testid="hero-cta-market" className="btn-secondary inline-flex items-center gap-2">
                  Explore Market <TrendingUp size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-xs text-zinc-500">
                <div className="flex items-center gap-2"><ShieldCheck size={14} className="text-[#C8F169]" /> No financial advice</div>
                <div className="flex items-center gap-2"><BookOpen size={14} className="text-[#C8F169]" /> 15+ free lessons</div>
                <div className="flex items-center gap-2"><Sparkles size={14} className="text-[#9B87F5]" /> Live market data</div>
              </div>
            </div>

            <div className="lg:col-span-5 fade-up" style={{ animationDelay: "180ms" }}>
              <div className="hidden md:block mb-2 glow-border rounded-2xl overflow-hidden">
                <Suspense fallback={<div style={{ height: 320 }} />}>
                  <Block3DScene height={320} />
                </Suspense>
              </div>
              <TiltCard className="glow-border relative card-base p-6 md:p-7">
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(600px circle at 0% 0%, rgba(200,241,105,0.06), transparent 40%)" }} />
                <div className="label-eyebrow">A 60-second primer</div>
                <h3 className="text-xl font-normal text-white mt-2">What is crypto, really?</h3>
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
                      <div className="font-mono text-lg text-[#C8F169] font-bold">
                        <AnimatedCounter value={s.k} />
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-zinc-500 mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="gold-divider my-5" />
                <Link to="/learn/what-is-cryptocurrency" data-testid="hero-primer-link" className="text-sm text-[#C8F169] hover:underline inline-flex items-center gap-1">
                  Read the full primer <ArrowRight size={13} />
                </Link>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* TOPIC MARQUEE */}
      <div className="relative border-y border-white/5 bg-white/[0.015] overflow-hidden py-3 mb-14">
        <div className="marquee-track flex gap-10 whitespace-nowrap text-xs font-mono uppercase tracking-[0.2em] text-zinc-600">
          {[...Array(2)].flatMap((_, loopIdx) =>
            ["Bitcoin", "Blockchain", "Wallets", "DeFi", "Security", "Web3", "NFTs", "Staking", "Ethereum", "Exchanges"].map((t) => (
              <span key={`${loopIdx}-${t}`} className="flex items-center gap-2 shrink-0">
                <span className="w-1 h-1 rounded-full bg-[#C8F169]" /> {t}
              </span>
            ))
          )}
        </div>
      </div>

      {/* MARKET STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="mb-6">
          <div className="label-eyebrow">Market Overview</div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Today in crypto</h2>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
  <MarketStats />
</Suspense>
      </section>

      {/* WHY CRYPTO BEGINNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="label-eyebrow justify-center flex">Why Crypto Beginner</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Built for people who've never touched crypto</h2>
          <p className="mt-3 text-zinc-400">No hype, no price predictions, no jargon dumps — just clear explanations and real market context.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: GraduationCap, title: "Zero to fluent", desc: "Structured lessons that build on each other — start with \u201cwhat is a blockchain\u201d and end up confident." },
            { icon: ShieldCheck, title: "Safety first", desc: "Dedicated modules on scams, phishing and seed-phrase security, covered before we even talk about investing." },
            { icon: TrendingUp, title: "Live market context", desc: "Real prices, market cap and dominance data sit alongside every lesson — theory meets the real thing." },
            { icon: Lock, title: "No financial advice", desc: "We teach concepts, not predictions. You'll never see \u201cbuy this coin now\u201d on this site." },
          ].map((f, i) => (
            <TiltCard key={f.title} maxTilt={5} className="card-base p-6 hover-lift fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-xl bg-[#C8F169]/10 flex items-center justify-center mb-4">
                <f.icon size={18} className="text-[#C8F169]" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{f.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* TOP 10 TABLE */}
<section
  id="market"
  data-testid="market-section"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
>
  <Suspense fallback={<div className="text-center text-white py-10">Loading Market...</div>}>
    <CryptoTable />
  </Suspense>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  <Suspense fallback={<div className="text-center text-white py-10">Loading News...</div>}>
    <CryptoNews />
  </Suspense>
</section>

      {/* LEARNING PATH CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-10">
          <div className="label-eyebrow">Choose a track</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">Where do you want to start?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", icon: BookOpen, title: "Beginner", desc: "Bitcoin, blockchain, wallets, exchanges — start here.", to: "/learn?level=beginner", color: "from-lime-300/20 to-transparent" },
            { n: "02", icon: Layers, title: "Intermediate", desc: "DeFi, staking, smart contracts, NFTs, L1 vs L2.", to: "/learn?level=intermediate", color: "from-violet-400/20 to-transparent" },
            { n: "03", icon: ShieldCheck, title: "Security", desc: "Scams, phishing, wallet & seed phrase protection.", to: "/learn?level=security", color: "from-rose-400/20 to-transparent" },
          ].map((t) => (
            <TiltCard
              as={Link}
              key={t.title}
              to={t.to}
              maxTilt={6}
              data-testid={`path-card-${t.title.toLowerCase()}`}
              className="card-base glow-border p-7 relative overflow-hidden group block"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-50 group-hover:opacity-80 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <t.icon size={18} className="text-[#C8F169]" />
                  </div>
                  <span className="font-mono text-xs text-zinc-600">{t.n}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-4">{t.title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{t.desc}</p>
                <div className="mt-6 text-sm text-[#C8F169] inline-flex items-center gap-1">
                  Explore lessons <ArrowRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* HOW YOU'LL LEARN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="label-eyebrow">The process</div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">How you'll learn</h2>
            <p className="mt-3 text-zinc-400 max-w-sm leading-relaxed">
              Three steps, no fluff. Most people finish the beginner track in a weekend.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {[
              { title: "Pick your track", desc: "Beginner, Intermediate or Security — jump in wherever matches what you already know." },
              { title: "Read bite-sized lessons", desc: "Each guide takes 5\u201310 minutes and builds on the last, with the dictionary a click away." },
              { title: "Check it against live markets", desc: "Apply what you learned on real, live prices and data — no simulations." },
            ].map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start card-base p-5 hover-lift">
                <div className="font-mono text-2xl text-[#C8F169]/60 font-bold w-10 shrink-0">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden rounded-3xl glow-border card-base p-10 md:p-16 text-center">
          <div
            className="absolute inset-0 opacity-60 pointer-events-none"
            style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(200,241,105,0.12), transparent 60%)" }}
          />
          <div className="relative">
            <div className="label-eyebrow justify-center flex">Ready when you are</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-2xl mx-auto leading-tight">
              Start with lesson one — it's free, forever.
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
              No sign-up walls, no paywalls on core lessons. Just clear crypto education.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton as={Link} to="/learn" data-testid="final-cta-start" className="btn-primary inline-flex items-center gap-2">
                Start Learning <ArrowRight size={16} />
              </MagneticButton>
              <Link to="/dictionary" data-testid="final-cta-dictionary" className="btn-secondary inline-flex items-center gap-2">
                Browse the dictionary
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
