import { useEffect, useRef, useState } from "react";
import { X, Loader2, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { api } from "../lib/api";
import { getDeviceId } from "../lib/deviceId";
import { formatUSD } from "../lib/format";

// Map coin symbol -> TradingView trading pair for live chart
function getTradingViewSymbol(symbol) {
  const sym = (symbol || "").toUpperCase();
  const stableToUSD = { USDT: "COINBASE:USDTUSD", USDC: "COINBASE:USDCUSD" };
  if (stableToUSD[sym]) return stableToUSD[sym];
  return `BINANCE:${sym}USDT`;
}

export default function CoinChartModal({ coin, onClose }) {
  const containerRef = useRef(null);

  const [side, setSide] = useState("buy");
  const [quantity, setQuantity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [heldQty, setHeldQty] = useState(0);
  const [cashBalance, setCashBalance] = useState(null);

  const deviceId = getDeviceId();

  useEffect(() => {
    if (!coin || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: getTradingViewSymbol(coin.symbol),
      interval: "60",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      backgroundColor: "rgba(10, 10, 11, 1)",
      gridColor: "rgba(255, 255, 255, 0.06)",
      hide_top_toolbar: false,
      hide_legend: false,
      allow_symbol_change: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(script);
  }, [coin]);

  const refreshAccount = () => {
    if (!coin) return;
    api
      .get(`/demo/account/${deviceId}`)
      .then(({ data }) => {
        setCashBalance(data.cash_balance);
        const h = (data.holdings || []).find((x) => x.coin_id === coin.id);
        setHeldQty(h ? h.quantity : 0);
      })
      .catch(() => {});
  };

  useEffect(() => {
    refreshAccount();
    setSide("buy");
    setQuantity("");
    setError("");
    setSuccessMsg("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin?.id]);

  useEffect(() => {
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

  if (!coin) return null;

  const price = coin.current_price ?? null;
  const qtyNum = parseFloat(quantity) || 0;
  const estimatedTotal = price ? price * qtyNum : 0;

  const setQtyFromFraction = (fraction) => {
    if (!price) return;
    if (side === "buy") {
      if (cashBalance == null) return;
      const qty = (cashBalance * fraction) / price;
      setQuantity(qty > 0 ? qty.toFixed(6) : "");
    } else {
      const qty = heldQty * fraction;
      setQuantity(qty > 0 ? qty.toFixed(6) : "");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!coin || qtyNum <= 0) return;
    setSubmitting(true);
    setError("");
    setSuccessMsg("");
    try {
      const { data } = await api.post("/demo/trade", {
        device_id: deviceId,
        coin_id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        side,
        quantity: qtyNum,
      });
      setSuccessMsg(
        `${side === "buy" ? "Bought" : "Sold"} ${data.transaction.quantity} ${coin.symbol} for ${formatUSD(data.transaction.total)}`
      );
      setQuantity("");
      setCashBalance(data.cash_balance);
      refreshAccount();
    } catch (err) {
      setError(err?.response?.data?.detail || "Trade failed — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${coin.name} live chart and demo trading`}
    >
      <div
        className="bg-[#0B0E14] border border-white/10 rounded-2xl w-full max-w-5xl h-[88vh] md:h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 shrink-0">
          <div className="flex items-center gap-3">
            <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
            <div>
              <div className="font-semibold text-white text-sm">{coin.name}</div>
              <div className="text-xs text-zinc-500 font-mono uppercase">{coin.symbol} · Live Chart</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chart"
            className="text-zinc-500 hover:text-white transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 min-h-0 flex flex-col md:flex-row">
          {/* CHART */}
          <div className="flex-1 min-h-[38vh] md:min-h-0">
            <div className="tradingview-widget-container h-full" ref={containerRef}>
              <div className="tradingview-widget-container__widget h-full" />
            </div>
          </div>

          {/* DEMO TRADE PANEL */}
          <div className="w-full md:w-[300px] shrink-0 border-t md:border-t-0 md:border-l border-white/5 flex flex-col overflow-y-auto">
            <div className="px-4 pt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Demo Trade</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#C8F169]/10 text-[#C8F169] font-mono">Virtual $</span>
              </div>
              <div className="flex rounded-xl overflow-hidden border border-white/10">
                <button
                  type="button"
                  onClick={() => { setSide("buy"); setQuantity(""); setError(""); }}
                  data-testid="chart-trade-side-buy"
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${side === "buy" ? "bg-[#C8F169] text-[#1A2100]" : "text-zinc-400 hover:text-white"}`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => { setSide("sell"); setQuantity(""); setError(""); }}
                  data-testid="chart-trade-side-sell"
                  className={`flex-1 py-2 text-sm font-semibold transition-colors ${side === "sell" ? "bg-rose-400 text-[#1A0000]" : "text-zinc-400 hover:text-white"}`}
                >
                  Sell
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-4 py-3 flex flex-col gap-2.5 flex-1">
              <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>Live price</span>
                <span className="font-mono text-white">{price != null ? formatUSD(price) : "—"}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-zinc-500">
                <span>Cash balance</span>
                <span className="font-mono text-white">{cashBalance != null ? formatUSD(cashBalance) : "—"}</span>
              </div>
              {side === "sell" && (
                <div className="flex items-center justify-between text-[11px] text-zinc-500">
                  <span>You hold</span>
                  <span className="font-mono text-white">{heldQty} {coin.symbol}</span>
                </div>
              )}

              <div>
                <label htmlFor="chart-trade-qty" className="text-[11px] text-zinc-500 mb-1 block">
                  Quantity ({coin.symbol})
                </label>
                <input
                  id="chart-trade-qty"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="0.00"
                  data-testid="chart-trade-quantity-input"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#C8F169]/50"
                />
                <div className="flex gap-1.5 mt-1.5">
                  {[0.25, 0.5, 1].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setQtyFromFraction(f)}
                      className="flex-1 text-[10px] py-1 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
                    >
                      {f === 1 ? "Max" : `${f * 100}%`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/5 px-3 py-2">
                <span className="text-[11px] text-zinc-500">Estimated total</span>
                <span className="font-mono text-white font-semibold text-sm">{formatUSD(estimatedTotal)}</span>
              </div>

              {error && <p className="text-[11px] text-rose-400">{error}</p>}
              {successMsg && <p className="text-[11px] text-emerald-400">{successMsg}</p>}

              <button
                type="submit"
                disabled={submitting || qtyNum <= 0 || !price}
                data-testid="chart-trade-submit"
                className={`w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-auto ${
                  side === "sell" ? "bg-rose-400 text-[#1A0000] hover:bg-rose-300" : "btn-primary"
                }`}
              >
                {submitting ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : side === "buy" ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
                {submitting ? "Placing trade..." : `${side === "buy" ? "Buy" : "Sell"} ${coin.symbol}`}
              </button>
              <p className="text-[10px] text-zinc-600 text-center">Virtual money only — this is a practice trade.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
