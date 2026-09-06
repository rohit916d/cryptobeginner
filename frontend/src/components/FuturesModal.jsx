import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, ArrowLeft } from "lucide-react";
import { api } from "../lib/api";
import { formatUSD } from "../lib/format";
import FuturesTradePanel from "./FuturesTradePanel";

export default function FuturesModal({ initialCoin = null, cashBalance, onClose, onOpened }) {
  const [coin, setCoin] = useState(initialCoin);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (coin) return;
    api
      .get("/market/top", { params: { page: 1, per_page: 10 } })
      .then(({ data }) => setResults(data.data || []))
      .catch(() => setResults([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (coin) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const q = query.trim();
    if (!q) return;
    setSearching(true);
    debounceRef.current = setTimeout(() => {
      api
        .get("/market/search", { params: { q } })
        .then(({ data }) => setResults(data.data || []))
        .catch(() => setResults([]))
        .finally(() => setSearching(false));
    }, 350);
    return () => clearTimeout(debounceRef.current);
  }, [query, coin]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Open a demo leveraged position"
    >
      <div
        className="bg-[#0B0E14] border border-white/10 rounded-2xl w-full max-w-md max-h-[88vh] flex flex-col overflow-hidden mt-10 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
          {coin && (
            <button type="button" onClick={() => setCoin(null)} aria-label="Change coin" className="text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft size={18} />
            </button>
          )}
          <div className="flex-1 min-w-0">
            <div className="label-eyebrow">Futures · Leverage</div>
            <h3 className="text-white font-bold text-sm mt-0.5 truncate">
              {coin ? `${coin.name} (${coin.symbol})` : "Pick a coin"}
            </h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="text-zinc-500 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {!coin ? (
          <>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <Search size={16} className="text-zinc-500 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a coin to trade..."
                data-testid="futures-search-input"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-zinc-600"
              />
              {searching && <Loader2 size={14} className="animate-spin text-[#C8F169]" />}
            </div>
            <div className="overflow-y-auto flex-1">
              {results.length === 0 && !searching && (
                <p className="text-sm text-zinc-500 text-center py-10">No coins found.</p>
              )}
              <ul>
                {results.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => setCoin(c)}
                      data-testid={`futures-pick-${c.symbol}`}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-white/[0.03] transition-colors text-left border-b border-white/5 last:border-b-0"
                    >
                      <img src={c.image} alt={c.name} className="w-7 h-7 rounded-full shrink-0" loading="lazy" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-white text-sm truncate">{c.name}</div>
                        <div className="text-xs text-zinc-500 font-mono uppercase">{c.symbol}</div>
                      </div>
                      <div className="font-mono text-sm text-white shrink-0">{formatUSD(c.current_price)}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="px-5 py-4 overflow-y-auto flex-1">
            <FuturesTradePanel
              coin={coin}
              cashBalance={cashBalance}
              onOpened={(data) => {
                onOpened?.(data);
                onClose();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
