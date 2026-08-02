import { useEffect, useRef } from "react";
import { X } from "lucide-react";

// Map coin symbol -> TradingView trading pair for live chart
function getTradingViewSymbol(symbol) {
  const sym = (symbol || "").toUpperCase();
  const stableToUSD = { USDT: "COINBASE:USDTUSD", USDC: "COINBASE:USDCUSD" };
  if (stableToUSD[sym]) return stableToUSD[sym];
  return `BINANCE:${sym}USDT`;
}

export default function CoinChartModal({ coin, onClose }) {
  const containerRef = useRef(null);

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

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${coin.name} live chart`}
    >
      <div
        className="bg-[#0B0E14] border border-white/10 rounded-2xl w-full max-w-4xl h-[75vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
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

        <div className="flex-1 min-h-0">
          <div className="tradingview-widget-container h-full" ref={containerRef}>
            <div className="tradingview-widget-container__widget h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
