import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../lib/api";
import { formatUSD, formatPct } from "../lib/format";
import { ArrowUpRight, ArrowDownRight, RefreshCw, Search, ChevronDown, Loader2 } from "lucide-react";
import Sparkline from "./Sparkline";
import CoinChartModal from "./CoinChartModal";
import MarketSearchModal from "./MarketSearchModal";
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
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const MAX_COINS = 50;
  const PAGE_STEP = 10;
  
  // Live clock
  const [currentTime, setCurrentTime] = useState(new Date());

  const mountedRef = useRef(true);
  const visibleCountRef = useRef(visibleCount);
  useEffect(() => { visibleCountRef.current = visibleCount; }, [visibleCount]);

  const load = useCallback(async (count) => {
    const n = count ?? visibleCountRef.current;
    setRefreshing(true);
    try {
      const { data } = await api.get("/market/top", { params: { page: 1, per_page: n } });
      if (mountedRef.current) {
        const list = data.data || [];
        setCoins(list);
        setLastUpdated(new Date());
        setHasMore(list.length >= n && n < MAX_COINS);
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

  const handleShowMore = async () => {
    const nextCount = Math.min(visibleCount + PAGE_STEP, MAX_COINS);
    setLoadingMore(true);
    try {
      const { data } = await api.get("/market/top", { params: { page: 1, per_page: nextCount } });
      const list = data.data || [];
      if (mountedRef.current) {
        setCoins(list);
        setVisibleCount(nextCount);
        setHasMore(list.length >= nextCount && nextCount < MAX_COINS);
      }
    } catch (err) {
      // ignore; user can retry
    } finally {
      if (mountedRef.current) setLoadingMore(false);
    }
  };

  useEffect(() => {

  mountedRef.current = true;
  load();

  const intervalId = setInterval(() => load(), 60000);

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
  "wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker/xrpusdt@ticker/solusdt@ticker"
);

 ws.onmessage = (event) => {
  const message = JSON.parse(event.data);

  if (!message.data) return;

  const ticker = message.data;

  setCoins((prev) =>
    prev.map((coin) => {
      const symbol = LIVE_SYMBOLS[coin.symbol];

      if (!symbol) return coin;

      if (symbol !== ticker.s.toLowerCase()) return coin;

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
      <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5 gap-3">
        <div className="min-w-0">
          <div className="label-eyebrow">Live Market</div>
          <h3 className="text-xl font-bold text-white mt-1">Top {visibleCount} Cryptocurrencies</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            data-testid="market-search-open"
            aria-label="Search any cryptocurrency"
            title="Search any cryptocurrency"
            className="flex items-center gap-2 text-xs text-zinc-400 font-medium border border-white/10 rounded-lg px-3 py-2 hover:text-white hover:border-white/25 hover:bg-white/[0.03] transition-colors"
          >
            <Search size={14} />
            <span className="hidden sm:inline">Search</span>
          </button>
        <button
          type="button"
          onClick={() => load()}
          disabled={refreshing}
          data-testid="market-refresh-btn"
          aria-label="Refresh market data"
          className="flex items-center gap-2 text-xs text-zinc-500 font-mono cursor-pointer hover:text-white transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          <RefreshCw size={12} className={`text-[#C8F169] ${refreshing ? "animate-spin" : ""}`} />
          <span className="hidden md:inline">
            {lastUpdated ? `Updated ${currentTime.toLocaleTimeString()}` : "Loading..."}
          </span>
        </button>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-sm">
  <caption className="sr-only">
    Live cryptocurrency market prices including price, 24 hour change and market capitalization.
  </caption>
          <thead>
            <tr className="text-left text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 border-b border-white/5">
              <th scope="col" className="py-3 px-5 md:px-6">#</th>

<th scope="col" className="py-3 px-2">
  Coin
</th>

<th scope="col" className="py-3 px-2 text-right">
  Price
</th>

<th scope="col" className="py-3 px-2 text-right">
  24h
</th>

<th scope="col" className="py-3 px-2 text-center hidden md:table-cell">
  7D Chart
</th>

<th
  scope="col"
  className="py-3 px-5 md:px-6 text-right hidden sm:table-cell"
>
  Market Cap
</th>
            </tr>
          </thead>
          <tbody>
            {loading && coins.length === 0 &&
              SKELETON_KEYS.map((sk) => (
                <tr key={sk} className="border-b border-white/5">
                  <td colSpan={6} className="py-4 px-5">
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
                  onClick={() => setSelectedCoin(c)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCoin(c);
                    }
                  }}
                  aria-label={`View live chart for ${c.name}`}
                  className="border-b border-white/5 hover:bg-gradient-to-r hover:from-[#C8F169]/[0.04] hover:to-transparent transition-all cursor-pointer relative hover:shadow-[inset_2px_0_0_0_#C8F169]"
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
                  <td className="py-4 px-2 hidden md:table-cell">
                    <div className="flex justify-center">
                      <Sparkline data={c.sparkline_7d} />
                    </div>
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

      {hasMore && (
        <div className="flex justify-center py-4 border-t border-white/5">
          <button
            type="button"
            onClick={handleShowMore}
            disabled={loadingMore}
            data-testid="market-show-more"
            className="flex items-center gap-2 text-sm font-medium text-[#C8F169] hover:text-white transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            {loadingMore ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <ChevronDown size={14} />
            )}
            {loadingMore ? "Loading more..." : "Show more"}
          </button>
        </div>
      )}

      <div className="px-5 md:px-6 py-3 text-[11px] text-zinc-600 border-t border-white/5">
        Data via CoinGecko · auto-refresh every 60s · not investment advice · tap a row for live chart
      </div>

      {selectedCoin && (
        <CoinChartModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />
      )}

      {searchOpen && (
        <MarketSearchModal
          onClose={() => setSearchOpen(false)}
          onSelectCoin={(coin) => {
            setSearchOpen(false);
            setSelectedCoin(coin);
          }}
        />
      )}
    </div>
  );
}
