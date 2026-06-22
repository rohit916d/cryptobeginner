import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { api } from "../lib/api";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { useSEO } from "../lib/seo";

const LEVELS = [
  { key: "beginner", label: "Beginner", desc: "Foundations: Bitcoin, blockchain, wallets, exchanges." },
  { key: "intermediate", label: "Intermediate", desc: "Going deeper: DeFi, staking, smart contracts, NFTs, L1/L2." },
  { key: "security", label: "Security", desc: "Stay safe: scams, phishing, seed phrase protection." },
];

export default function Learn() {
  const [params, setParams] = useSearchParams();
  const initialLevel = params.get("level") || "beginner";
  const [level, setLevel] = useState(initialLevel);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Learning Center",
    description: "Structured crypto learning paths for absolute beginners. Beginner, intermediate, and security tracks.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.get("/lessons", { params: { level } }).then((r) => {
      if (!mounted) return;
      setLessons(r.data || []);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [level]);

  const onSelect = (k) => {
    setLevel(k);
    setParams({ level: k });
  };

  const active = LEVELS.find((l) => l.key === level);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="max-w-3xl">
        <div className="label-eyebrow">Learning Center</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Structured paths. <span className="brand-grad-text">Zero jargon.</span>
        </h1>
        <p className="mt-5 text-zinc-400 leading-relaxed">
          Pick a track and learn at your own pace. Every lesson is plain-English and ends with a safety reminder.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2" data-testid="level-tabs">
        {LEVELS.map((l) => (
          <button
            key={l.key}
            onClick={() => onSelect(l.key)}
            data-testid={`level-tab-${l.key}`}
            className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
              level === l.key
                ? "border-[#FFBF00]/50 bg-[#FFBF00]/10 text-[#FFBF00]"
                : "border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {active && (
        <p className="mt-6 text-sm text-zinc-500">{active.desc}</p>
      )}

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading && Array.from({ length: 6 }).map((_, i) => (
          <div key={`skeleton-${i}`} className="card-base p-6 h-44 animate-pulse" />
        ))}
        {!loading && lessons.map((l, idx) => (
          <Link
            key={l.slug}
            to={`/learn/${l.slug}`}
            data-testid={`lesson-card-${l.slug}`}
            className="card-base p-6 hover-lift fade-up group"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="label-eyebrow text-[#FFBF00]/80">Lesson {l.order}</span>
              <span className="text-xs text-zinc-500 inline-flex items-center gap-1 font-mono">
                <Clock size={11} /> {l.read_time} min
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-white group-hover:text-[#FFBF00] transition-colors">
              {l.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{l.summary}</p>
            <div className="mt-5 text-sm text-[#FFBF00] inline-flex items-center gap-1">
              Read lesson <ArrowRight size={13} />
            </div>
          </Link>
        ))}
      </div>

      {!loading && lessons.length === 0 && (
        <div className="mt-12 text-center text-zinc-500">
          <BookOpen className="mx-auto mb-3 text-zinc-700" />
          No lessons available in this track yet.
        </div>
      )}
    </div>
  );
}
