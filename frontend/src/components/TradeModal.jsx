import { useEffect, useRef, useState } from "react";
import { Search, X, Loader2, ArrowLeft } from "lucide-react";
import { api } from "../lib/api";
import { getDeviceId } from "../lib/deviceId";
import { formatUSD } from "../lib/format";

export default function TradeModal({ initialCoin = null, onClose, onTraded, holdingQtyFor }) {
  const [coin, setCoin] = useState(initialCoin);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [side, setSide] = useState("buy");
  const [quantity, setQuantity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const debounceRef = useRef(null);

  // Load popular coins as a default pick-list when no coin chosen yet
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

  const heldQty = coin ? (holdingQtyFor?.(coin.id) || 0) : 0;
  const price = coin?.current_price ?? null;
  const qtyNum = parseFloat(quantity) || 0;
  const estimatedTotal = price ? price * qtyNum : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!coin || qtyNum <= 0) return;
    setSubmitting(true);
    setError("");
    try {
      const { data } = await api.post("/demo/trade", {
        device_id: getDeviceId(),
        coin_id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        side,
        quantity: qtyNum,
      });
      onTraded?.(data);
      onClose();
    } catch (err) {
      setError(err?.response?.data?.detail || "Trade failed — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Place a demo trade"
    >
      <div
        className="bg-[#0B0E14] border border-white/10 rounded-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden mt-10 sm:mt-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
          {coin && (
            <button type="button" onClick={() => setCoin(null)} aria-label="Change coin" className="text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft size={18} />
            </button>
          )}
          <div className="flex-1 min-w-0">
            <div className="label-eyebrow">Practice trade</div>
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
                data-testid="trade-search-input"
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
                      data-testid={`trade-pick-${c.symbol}`}
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
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
            <div className="px-5 pt-4">
              <div className="flex rounded-xl overflow-hidden border border-white/10">
                <button
                  type="button"
                  onClick={() => setSide("buy")}
                  data-testid="trade-side-buy"
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${side === "buy" ? "bg-[#C8F169] text-[#1A2100]" : "text-zinc-400 hover:text-white"}`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setSide("sell")}
                  data-testid="trade-side-sell"
                  className={`flex-1 py-2.5 text-sm font-semibold transition-colors ${side === "sell" ? "bg-rose-400 text-[#1A0000]" : "text-zinc-400 hover:text-white"}`}
                >
                  Sell
                </button>
              </div>
            </div>

            <div className="px-5 py-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Live price</span>
                <span className="font-mono text-white">{price != null ? formatUSD(price) : "—"}</span>
              </div>
              {side === "sell" && (
                <div className="flex items-center justify-between text-xs text-zinc-500">
                  <span>You hold</span>
                  <span className="font-mono text-white">{heldQty} {coin.symbol}</span>
                </div>
              )}

              <div>
                <label htmlFor="trade-qty" className="text-xs text-zinc-500 mb-1 block">
                  Quantity ({coin.symbol})
                </label>
                <input
                  id="trade-qty"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="0.00"
                  data-testid="trade-quantity-input"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 text-white font-mono text-sm outline-none focus:border-[#C8F169]/50"
                />
                {side === "sell" && heldQty > 0 && (
                  <button
                    type="button"
                    onClick={() => setQuantity(String(heldQty))}
                    className="mt-1.5 text-xs text-[#C8F169] hover:underline"
                  >
                    Sell max ({heldQty})
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/5 px-3 py-2.5">
                <span className="text-xs text-zinc-500">Estimated total</span>
                <span className="font-mono text-white font-semibold">{formatUSD(estimatedTotal)}</span>
              </div>

              {error && <p className="text-xs text-rose-400">{error}</p>}
            </div>

            <div className="px-5 pb-5 pt-2 mt-auto">
              <button
                type="submit"
                disabled={submitting || qtyNum <= 0 || !price}
                data-testid="trade-submit"
                className={`w-full flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                  side === "sell"
                    ? "bg-rose-400 text-[#1A0000] hover:bg-rose-300"
                    : "btn-primary"
                }`}
              >
                {submitting && <Loader2 size={14} className="animate-spin" />}
                {submitting ? "Placing trade..." : `${side === "buy" ? "Buy" : "Sell"} ${coin.symbol}`}
              </button>
              <p className="text-[10px] text-zinc-600 text-center mt-2">Virtual money only — this is a practice trade.</p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
