import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../lib/api";
import { formatUSD, formatPct } from "../lib/format";
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";
const LIVE_SYMBOLS = {
  BTC: "btcusdt",
  ETH: "ethusdt",
  BNB: "bnbusdt",
  XRP: "xrpusdt",
  SOL: "solusdt",
};

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8", "sk9", "sk10"];

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Live clock
  const [currentTime, setCurrentTime] = useState(new Date());

  const mountedRef = useRef(true);
  const load = useCallback(async () => {
    setRefreshing(true);
    try {
      const { data } = await api.get("/market/top");
      if (mountedRef.current) {
        setCoins(data.data || []);
        setLastUpdated(new Date());
      }
    } catch (err) {
      // keep previous data on failure; will retry next cycle
    } finally {
      if (mountedRef.current) {
        setLoading(false);
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
  mountedRef.current = true;
  load();

  const intervalId = setInterval(load, 60000);

  const onVisible = () => {
    if (document.visibilityState === "visible") {
      load();
    }
  };

  document.addEventListener("visibilitychange", onVisible);

  return () => {
    mountedRef.current = false;
    clearInterval(intervalId);
    document.removeEventListener("visibilitychange", onVisible);
  };
}, [load]);

// Live clock - updates every second
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

useEffect(() => {
  if (!coins.length) return;

  const ws = new WebSocket(
    "wss://stream.binance.com:9443/ws/!ticker@arr"
  );

  ws.onmessage = (event) => {
    console.log("WebSocket Data", JSON.parse(event.data));
    const data = JSON.parse(event.data);

    setCoins((prev) =>
      prev.map((coin) => {
        const symbol = LIVE_SYMBOLS[coin.symbol];

        if (!symbol) return coin;

        const ticker = data.find(
          (t) => t.s.toLowerCase() === symbol
        );

        if (!ticker) return coin;

        return {
          ...coin,
          current_price: Number(ticker.c),
        };
      })
    );

    setCurrentTime(new Date());
  };

  return () => ws.close();
}, [coins.length]);

  return (
    <div data-testid="crypto-table" className="card-base overflow-hidden">
      <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5">
        <div>
          <div className="label-eyebrow">Live Market</div>
          <h3 className="text-xl font-bold text-white mt-1">Top 10 Cryptocurrencies</h3>
        </div>
        <button
          type="button"
          onClick={load}
          disabled={refreshing}
          data-testid="market-refresh-btn"
          aria-label="Refresh market data"
          className="flex items-center gap-2 text-xs text-zinc-500 font-mono cursor-pointer hover:text-white transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          <RefreshCw size={12} className={`text-[#FFBF00] ${refreshing ? "animate-spin" : ""}`} />
          {lastUpdated
  ? `Updated ${currentTime.toLocaleTimeString()}`
  : "Loading..."}
        </button>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 border-b border-white/5">
              <th className="py-3 px-5 md:px-6">#</th>
              <th className="py-3 px-2">Coin</th>
              <th className="py-3 px-2 text-right">Price</th>
              <th className="py-3 px-2 text-right">24h</th>
              <th className="py-3 px-5 md:px-6 text-right hidden sm:table-cell">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {loading && coins.length === 0 &&
              SKELETON_KEYS.map((sk) => (
                <tr key={sk} className="border-b border-white/5">
                  <td colSpan={5} className="py-4 px-5">
                    <div className="h-5 bg-white/5 rounded animate-pulse" />
                  </td>
                </tr>
              ))}
            {coins.map((c) => {
              const up = (c.price_change_percentage_24h ?? 0) >= 0;
              return (
                <tr
                  key={c.id}
                  data-testid={`coin-row-${c.symbol}`}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-5 md:px-6 text-zinc-500 font-mono">{c.market_cap_rank}</td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.name} className="w-7 h-7 rounded-full" loading="lazy" />
                      <div>
                        <div className="font-semibold text-white">{c.name}</div>
                        <div className="text-xs text-zinc-500 font-mono uppercase">{c.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right font-mono text-white">
  {Number(c.current_price).toFixed(2)}
</td>
                  <td className={`py-4 px-2 text-right font-mono ${up ? "text-emerald-400" : "text-rose-400"}`}>
                    <span className="inline-flex items-center gap-1 justify-end">
                      {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                      {formatPct(c.price_change_percentage_24h)}
                    </span>
                  </td>
                  <td className="py-4 px-5 md:px-6 text-right font-mono text-zinc-300 hidden sm:table-cell">
                    {formatUSD(c.market_cap)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="px-5 md:px-6 py-3 text-[11px] text-zinc-600 border-t border-white/5">
        Data via CoinGecko · auto-refresh every 60s · not investment advice
      </div>
    </div>
  );
}
