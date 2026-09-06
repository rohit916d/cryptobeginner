import { useMemo, useState } from "react";
import { Loader2, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { api } from "../lib/api";
import { getDeviceId } from "../lib/deviceId";
import { formatUSD } from "../lib/format";

const LEVERAGE_PRESETS = [2, 5, 10, 20, 50];

export default function FuturesTradePanel({ coin, cashBalance, onOpened, compact = false }) {
  const [side, setSide] = useState("long");
  const [leverage, setLeverage] = useState(10);
  const [margin, setMargin] = useState("");
  const [takeProfit, setTakeProfit] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const price = coin?.current_price ?? null;
  const marginNum = parseFloat(margin) || 0;
  const size = marginNum * leverage;
  const qty = price ? size / price : 0;

  const liquidationPrice = useMemo(() => {
    if (!price) return null;
    return side === "long" ? price * (1 - 1 / leverage) : price * (1 + 1 / leverage);
  }, [price, side, leverage]);

  const tpNum = parseFloat(takeProfit) || null;
  const slNum = parseFloat(stopLoss) || null;

  const tpError =
    tpNum && price
      ? side === "long"
        ? tpNum <= price && "TP must be above entry"
        : tpNum >= price && "TP must be below entry"
      : null;

  const slError =
    slNum && price
      ? side === "long"
        ? slNum >= price && "SL must be below entry"
        : slNum <= price && "SL must be above entry"
      : null;

  const setMarginFromFraction = (fraction) => {
    if (cashBalance == null) return;
    const m = cashBalance * fraction;
    setMargin(m > 0 ? m.toFixed(2) : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!coin || marginNum <= 0 || tpError || slError) return;
    setSubmitting(true);
    setError("");
    setSuccessMsg("");
    try {
      const { data } = await api.post("/demo/futures/open", {
        device_id: getDeviceId(),
        coin_id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        side,
        leverage,
        margin: marginNum,
        take_profit: tpNum || undefined,
        stop_loss: slNum || undefined,
      });
      setSuccessMsg(
        `${side === "long" ? "Long" : "Short"} opened — ${leverage}x, ${formatUSD(marginNum)} margin`
      );
      setMargin("");
      setTakeProfit("");
      setStopLoss("");
      onOpened?.(data);
    } catch (err) {
      setError(err?.response?.data?.detail || "Couldn't open position — please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${compact ? "gap-2.5" : "gap-3"}`}>
      <div className="flex rounded-xl overflow-hidden border border-white/10">
        <button
          type="button"
          onClick={() => setSide("long")}
          data-testid="futures-side-long"
          className={`flex-1 py-2 text-sm font-semibold transition-colors inline-flex items-center justify-center gap-1.5 ${
            side === "long" ? "bg-emerald-400 text-[#00230F]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <TrendingUp size={14} /> Long
        </button>
        <button
          type="button"
          onClick={() => setSide("short")}
          data-testid="futures-side-short"
          className={`flex-1 py-2 text-sm font-semibold transition-colors inline-flex items-center justify-center gap-1.5 ${
            side === "short" ? "bg-rose-400 text-[#1A0000]" : "text-zinc-400 hover:text-white"
          }`}
        >
          <TrendingDown size={14} /> Short
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="text-[11px] text-zinc-500">Leverage</label>
          <span className="font-mono text-sm text-[#C8F169] font-bold">{leverage}x</span>
        </div>
        <div className="flex gap-1.5">
          {LEVERAGE_PRESETS.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLeverage(l)}
              data-testid={`futures-leverage-${l}`}
              className={`flex-1 text-xs py-1.5 rounded-md border font-mono transition-colors ${
                leverage === l
                  ? "border-[#C8F169]/50 bg-[#C8F169]/10 text-[#C8F169]"
                  : "border-white/10 text-zinc-400 hover:text-white hover:border-white/25"
              }`}
            >
              {l}x
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-zinc-500">
        <span>Entry price</span>
        <span className="font-mono text-white">{price != null ? formatUSD(price) : "—"}</span>
      </div>
      <div className="flex items-center justify-between text-[11px] text-zinc-500">
        <span>Available balance</span>
        <span className="font-mono text-white">{cashBalance != null ? formatUSD(cashBalance) : "—"}</span>
      </div>

      <div>
        <label htmlFor="futures-margin" className="text-[11px] text-zinc-500 mb-1 block">
          Margin (USD)
        </label>
        <input
          id="futures-margin"
          type="number"
          inputMode="decimal"
          min="0"
          step="any"
          value={margin}
          onChange={(e) => setMargin(e.target.value)}
          placeholder="0.00"
          data-testid="futures-margin-input"
          className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-white font-mono text-sm outline-none focus:border-[#C8F169]/50"
        />
        <div className="flex gap-1.5 mt-1.5">
          {[0.1, 0.25, 0.5, 1].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setMarginFromFraction(f)}
              className="flex-1 text-[10px] py-1 rounded-md border border-white/10 text-zinc-400 hover:text-white hover:border-white/25 transition-colors"
            >
              {f === 1 ? "Max" : `${f * 100}%`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="futures-tp" className="text-[11px] text-zinc-500 mb-1 block">
            Take Profit
          </label>
          <input
            id="futures-tp"
            type="number"
            inputMode="decimal"
            step="any"
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
            placeholder="Optional"
            data-testid="futures-tp-input"
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-2.5 py-2 text-white font-mono text-xs outline-none focus:border-emerald-400/50"
          />
          {tpError && <p className="text-[10px] text-rose-400 mt-1">{tpError}</p>}
        </div>
        <div>
          <label htmlFor="futures-sl" className="text-[11px] text-zinc-500 mb-1 block">
            Stop Loss
          </label>
          <input
            id="futures-sl"
            type="number"
            inputMode="decimal"
            step="any"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
            placeholder="Optional"
            data-testid="futures-sl-input"
            className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-2.5 py-2 text-white font-mono text-xs outline-none focus:border-rose-400/50"
          />
          {slError && <p className="text-[10px] text-rose-400 mt-1">{slError}</p>}
        </div>
      </div>

      <div className="rounded-xl bg-white/[0.02] border border-white/5 px-3 py-2.5 space-y-1.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-zinc-500">Position size</span>
          <span className="font-mono text-white">{formatUSD(size)} ({qty ? qty.toFixed(6) : "0"} {coin?.symbol})</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-zinc-500 inline-flex items-center gap-1">
            <AlertTriangle size={11} className="text-amber-400" /> Liquidation price
          </span>
          <span className="font-mono text-amber-400">{liquidationPrice != null ? formatUSD(liquidationPrice) : "—"}</span>
        </div>
      </div>

      {error && <p className="text-[11px] text-rose-400">{error}</p>}
      {successMsg && <p className="text-[11px] text-emerald-400">{successMsg}</p>}

      <button
        type="submit"
        disabled={submitting || marginNum <= 0 || !price || !!tpError || !!slError}
        data-testid="futures-submit"
        className={`w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
          side === "long" ? "bg-emerald-400 text-[#00230F] hover:bg-emerald-300" : "bg-rose-400 text-[#1A0000] hover:bg-rose-300"
        }`}
      >
        {submitting && <Loader2 size={14} className="animate-spin" />}
        {submitting ? "Opening position..." : `Open ${leverage}x ${side === "long" ? "Long" : "Short"}`}
      </button>
      <p className="text-[10px] text-zinc-600 text-center leading-relaxed">
        Virtual money only. Leverage magnifies gains <span className="italic">and</span> losses — you can lose your entire margin.
      </p>
    </form>
  );
}
