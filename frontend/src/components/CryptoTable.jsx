import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { formatUSD, formatPct } from "../lib/format";
import { ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";

export default function CryptoTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  const load = async () => {
    try {
      const { data } = await api.get("/market/top");
      setCoins(data.data || []);
      setLastUpdated(new Date());
    } catch (e) {
      // keep prior
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const id = setInterval(load, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-testid="crypto-table" className="card-base overflow-hidden">
      <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5">
        <div>
          <div className="label-eyebrow">Live Market</div>
          <h3 className="text-xl font-bold text-white mt-1">Top 10 Cryptocurrencies</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
          <RefreshCw size={12} className="text-[#FFBF00]" />
          {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : "Loading…"}
        </div>
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
              Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td colSpan={5} className="py-4 px-5">
                    <div className="h-5 bg-white/5 rounded animate-pulse" />
                  </td>
                </tr>
              ))}
            {coins.map((c, idx) => {
              const up = (c.price_change_percentage_24h ?? 0) >= 0;
              return (
                <tr
                  key={c.id}
                  data-testid={`coin-row-${c.symbol}`}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-5 md:px-6 text-zinc-500 font-mono">{c.market_cap_rank || idx + 1}</td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-3">
                      <img src={c.image} alt={c.name} className="w-7 h-7 rounded-full" loading="lazy" />
                      <div>
                        <div className="font-semibold text-white">{c.name}</div>
                        <div className="text-xs text-zinc-500 font-mono uppercase">{c.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2 text-right font-mono text-white">{formatUSD(c.current_price)}</td>
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
