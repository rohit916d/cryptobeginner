import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { api } from "../lib/api";
import { formatPct } from "../lib/format";

export default function MarketSearchModal({ onClose, onSelectCoin }) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errored, setErrored] = useState(false);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);
  const requestIdRef = useRef(0);

  // Load category chips once
  useEffect(() => {
    api
      .get("/market/categories")
      .then(({ data }) => setCategories(data.data || []))
      .catch(() => setCategories([]));
  }, []);

  // Autofocus the search input, and close on Escape
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const runFetch = (fn) => {
    const myRequestId = ++requestIdRef.current;
    setLoading(true);
    setErrored(false);
    fn()
      .then(({ data }) => {
        if (requestIdRef.current !== myRequestId) return;
        setResults(data.data || []);
      })
      .catch(() => {
        if (requestIdRef.current !== myRequestId) return;
        setErrored(true);
        setResults([]);
      })
      .finally(() => {
        if (requestIdRef.current !== myRequestId) return;
        setLoading(false);
      });
  };

  // Debounced text search — takes priority over category browsing
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const q = query.trim();
    if (!q) {
      if (activeCategory) {
        runFetch(() => api.get(`/market/category/${activeCategory}`, { params: { per_page: 20 } }));
      } else {
        setResults([]);
        setLoading(false);
      }
      return;
    }

    debounceRef.current = setTimeout(() => {
      runFetch(() => api.get("/market/search", { params: { q } }));
    }, 350);

    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleCategoryClick = (catId) => {
    if (query.trim()) setQuery("");
    if (activeCategory === catId) {
      setActiveCategory(null);
      setResults([]);
      return;
    }
    setActiveCategory(catId);
    runFetch(() => api.get(`/market/category/${catId}`, { params: { per_page: 20 } }));
  };

  const showEmptyPrompt = !query.trim() && !activeCategory;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search cryptocurrencies"
    >
      <div
        className="bg-[#0B0E14] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden mt-10 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
          <Search size={18} className="text-zinc-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any crypto — Bitcoin, Dogecoin, Solana..."
            data-testid="market-search-input"
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-zinc-600"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            data-testid="market-search-close"
            className="text-zinc-500 hover:text-white transition-colors p-1 shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        {/* Category chips */}
        {categories.length > 0 && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-5 py-3 border-b border-white/5">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => handleCategoryClick(c.id)}
                data-testid={`market-category-${c.id}`}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeCategory === c.id
                    ? "bg-[#C8F169]/10 border-[#C8F169]/40 text-[#C8F169]"
                    : "border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="overflow-y-auto flex-1 min-h-[240px]">
          {showEmptyPrompt && (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center px-6">
              <Search size={28} className="text-zinc-700 mb-3" />
              <p className="text-sm text-zinc-500">Type a coin name, or pick a category above.</p>
            </div>
          )}

          {loading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={22} className="text-[#C8F169] animate-spin" />
            </div>
          )}

          {!loading && errored && (
            <div className="flex flex-col items-center justify-center py-16 text-center px-6">
              <p className="text-sm text-rose-400">Couldn't load results — try again in a moment.</p>
            </div>
          )}

          {!loading && !errored && !showEmptyPrompt && results.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center px-6">
              <p className="text-sm text-zinc-500">No coins found. Try a different name or symbol.</p>
            </div>
          )}

          {!loading && !errored && results.length > 0 && (
            <ul>
              {results.map((c) => {
                const up = (c.price_change_percentage_24h ?? 0) >= 0;
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => onSelectCoin(c)}
                      data-testid={`market-search-result-${c.symbol}`}
                      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-white/[0.03] transition-colors text-left border-b border-white/5 last:border-b-0"
                    >
                      <img src={c.image} alt={c.name} className="w-7 h-7 rounded-full shrink-0" loading="lazy" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-white text-sm truncate">{c.name}</div>
                        <div className="text-xs text-zinc-500 font-mono uppercase">{c.symbol}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-mono text-sm text-white">
                          {c.current_price != null ? `$${Number(c.current_price).toLocaleString(undefined, { maximumFractionDigits: c.current_price < 1 ? 6 : 2 })}` : "—"}
                        </div>
                        {c.price_change_percentage_24h != null && (
                          <div className={`text-xs font-mono inline-flex items-center gap-0.5 ${up ? "text-emerald-400" : "text-rose-400"}`}>
                            {up ? <ArrowUpRight size={11} /> : <ArrowDownRight size={11} />}
                            {formatPct(c.price_change_percentage_24h)}
                          </div>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="px-5 py-2.5 text-[11px] text-zinc-600 border-t border-white/5">
          Data via CoinGecko · not investment advice · tap a coin for its live chart
        </div>
      </div>
    </div>
  );
}
