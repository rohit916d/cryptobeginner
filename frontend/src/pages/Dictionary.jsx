import { useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import { Search } from "lucide-react";
import { useSEO } from "../lib/seo";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Dictionary() {
  const [terms, setTerms] = useState([]);
  const [q, setQ] = useState("");
  const [activeLetter, setActiveLetter] = useState(null);

  useSEO({
    title: "Crypto A-Z Dictionary",
    description: "An A-Z searchable glossary of crypto terms — wallet, blockchain, DeFi, NFT, staking, gas, and more.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  useEffect(() => {
    let mounted = true;
    api.get("/glossary").then((r) => {
      if (mounted) setTerms(r.data || []);
    });
    return () => { mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    let list = terms;
    if (q) {
      const ql = q.toLowerCase();
      list = list.filter((t) => t.term.toLowerCase().includes(ql) || t.definition.toLowerCase().includes(ql));
    }
    if (activeLetter) {
      list = list.filter((t) => t.term[0].toUpperCase() === activeLetter);
    }
    return list;
  }, [terms, q, activeLetter]);

  const available = useMemo(() => new Set(terms.map((t) => t.term[0].toUpperCase())), [terms]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="label-eyebrow">Crypto Dictionary</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Every crypto term, <span className="brand-grad-text">decoded.</span>
      </h1>
      <p className="mt-4 text-zinc-400 max-w-2xl">
        A searchable A-Z glossary so you'll never feel lost in a crypto conversation again.
      </p>

      <div className="mt-8 card-base p-3 flex items-center gap-3">
        <Search size={18} className="text-zinc-500 ml-2" />
        <input
          data-testid="dictionary-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search terms or definitions…"
          className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-600 py-2"
        />
        {q && (
          <button onClick={() => setQ("")} className="text-xs text-zinc-500 hover:text-white px-2">Clear</button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5" data-testid="alphabet-bar">
        <button
          onClick={() => setActiveLetter(null)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono ${
            !activeLetter ? "bg-[#FFBF00]/10 text-[#FFBF00] border border-[#FFBF00]/30" : "bg-white/[0.03] text-zinc-500 border border-white/5"
          }`}
        >ALL</button>
        {LETTERS.map((L) => {
          const has = available.has(L);
          return (
            <button
              key={L}
              disabled={!has}
              onClick={() => setActiveLetter(L)}
              className={`w-8 h-8 text-xs font-mono rounded-lg ${
                activeLetter === L
                  ? "bg-[#FFBF00]/10 text-[#FFBF00] border border-[#FFBF00]/30"
                  : has
                  ? "bg-white/[0.03] text-zinc-300 border border-white/5 hover:text-white"
                  : "bg-white/[0.01] text-zinc-700 cursor-not-allowed"
              }`}
            >{L}</button>
          );
        })}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4" data-testid="glossary-list">
        {filtered.map((t) => (
          <div key={t.term} data-testid={`term-${t.term}`} className="card-base p-5 hover-lift">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 rounded-md bg-[#FFBF00]/10 border border-[#FFBF00]/20 grid place-items-center text-[#FFBF00] font-mono font-bold text-sm">
                {t.term[0].toUpperCase()}
              </span>
              <h3 className="text-base font-bold text-white">{t.term}</h3>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{t.definition}</p>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="mt-12 text-center text-zinc-500">No terms matched your search.</div>
      )}
    </div>
  );
}
