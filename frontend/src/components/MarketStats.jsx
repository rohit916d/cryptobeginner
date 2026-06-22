import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { formatUSD, formatNumber, formatPct } from "../lib/format";
import { Globe, Bitcoin, Users, Coins } from "lucide-react";

function buildItems(stats) {
  return [
    {
      key: "market-cap",
      label: "Global Market Cap",
      value: stats ? formatUSD(stats.total_market_cap_usd) : "—",
      sub: stats?.market_cap_change_percentage_24h_usd != null
        ? `${formatPct(stats.market_cap_change_percentage_24h_usd)} 24h` : null,
      subColor: stats && stats.market_cap_change_percentage_24h_usd >= 0 ? "text-emerald-400" : "text-rose-400",
      icon: Globe,
      testId: "stat-market-cap",
    },
    {
      key: "btc-dominance",
      label: "BTC Dominance",
      value: stats?.btc_dominance != null ? `${stats.btc_dominance.toFixed(2)}%` : "—",
      sub: stats?.eth_dominance != null ? `ETH ${stats.eth_dominance.toFixed(2)}%` : null,
      subColor: "text-zinc-500",
      icon: Bitcoin,
      testId: "stat-btc-dominance",
    },
    {
      key: "active-coins",
      label: "Active Cryptocurrencies",
      value: stats ? formatNumber(stats.active_cryptocurrencies) : "—",
      sub: stats?.markets != null ? `${formatNumber(stats.markets)} markets` : null,
      subColor: "text-zinc-500",
      icon: Coins,
      testId: "stat-active-coins",
    },
    {
      key: "volume",
      label: "24h Volume",
      value: stats ? formatUSD(stats.total_volume_usd) : "—",
      sub: "Live · across all markets",
      subColor: "text-zinc-500",
      icon: Users,
      testId: "stat-volume",
    },
  ];
}

export default function MarketStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const { data } = await api.get("/market/global");
        if (mounted) {
          setStats(data.data);
          setError(null);
        }
      } catch (err) {
        if (mounted) setError("Unable to load market stats");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    const id = setInterval(load, 60000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  const items = buildItems(stats);

  return (
    <div data-testid="market-stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {items.map((it, idx) => (
        <div
          key={it.key}
          data-testid={it.testId}
          className="card-base p-5 md:p-6 hover-lift relative overflow-hidden fade-up"
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
            style={{ background: "radial-gradient(closest-side, #FFBF00, transparent)" }} />
          <div className="flex items-start justify-between">
            <div className="label-eyebrow">{it.label}</div>
            <it.icon size={16} className="text-[#FFBF00]" />
          </div>
          <div className="mt-4 font-mono text-2xl md:text-3xl font-bold text-white tracking-tight">
            {loading && !it.value ? <span className="text-zinc-700">····</span> : it.value}
          </div>
          {it.sub && <div className={`mt-1 text-xs font-mono ${it.subColor}`}>{it.sub}</div>}
        </div>
      ))}
      {error && <div className="sr-only" role="status">{error}</div>}
    </div>
  );
}
