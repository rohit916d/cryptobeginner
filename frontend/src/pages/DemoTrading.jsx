import { useCallback, useEffect, useState } from "react";
import { Wallet, TrendingUp, TrendingDown, RotateCcw, Plus, ArrowUpRight, ArrowDownRight, Loader2 } from "lucide-react";
import { useSEO } from "../lib/seo";
import { api } from "../lib/api";
import { getDeviceId } from "../lib/deviceId";
import { formatUSD, formatPct } from "../lib/format";
import TradeModal from "../components/TradeModal";

export default function DemoTrading() {
  useSEO({
    title: "Demo Trading — Practice Crypto Trading With Virtual Money",
    description:
      "Practice buying and selling crypto with a free virtual $10,000 account. Real live prices, zero real-money risk — a safe way to learn how trading works.",
    keywords: "demo trading, paper trading, practice crypto trading, virtual portfolio, crypto simulator",
    canonical: typeof window !== "undefined" ? window.location.origin + window.location.pathname : undefined,
  });

  const [account, setAccount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tradeOpen, setTradeOpen] = useState(false);
  const [tradeCoin, setTradeCoin] = useState(null);
  const [confirmingReset, setConfirmingReset] = useState(false);
  const [resetting, setResetting] = useState(false);

  const deviceId = getDeviceId();

  const loadAll = useCallback(async () => {
    try {
      const [accRes, txRes] = await Promise.all([
        api.get(`/demo/account/${deviceId}`),
        api.get(`/demo/transactions/${deviceId}`, { params: { limit: 20 } }),
      ]);
      setAccount(accRes.data);
      setTransactions(txRes.data.data || []);
    } catch (err) {
      // keep whatever we had; user can retry via a trade or refresh
    } finally {
      setLoading(false);
    }
  }, [deviceId]);

  useEffect(() => {
    loadAll();
    const id = setInterval(loadAll, 30000);
    return () => clearInterval(id);
  }, [loadAll]);

  const holdingQtyFor = (coinId) => {
    const h = account?.holdings?.find((x) => x.coin_id === coinId);
    return h ? h.quantity : 0;
  };

  const openNewTrade = (coin = null) => {
    setTradeCoin(coin);
    setTradeOpen(true);
  };

  const handleReset = async () => {
    setResetting(true);
    try {
      await api.post(`/demo/reset/${deviceId}`);
      await loadAll();
    } catch (err) {
      // no-op — user can try again
    } finally {
      setResetting(false);
      setConfirmingReset(false);
    }
  };

  const totalPnlUp = (account?.total_pnl ?? 0) >= 0;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      {/* HEADER */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <div className="block-tag mb-3">
            <span className="dot" />
            VIRTUAL MONEY · NOT REAL FUNDS
          </div>
          <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight">
            Demo <span className="brand-grad-text italic">Trading</span>
          </h1>
          <p className="mt-3 text-zinc-400 max-w-xl leading-relaxed">
            Practice buying and selling crypto at real, live prices — with a free virtual balance. No wallet, no real money, no risk.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openNewTrade(null)}
            data-testid="demo-new-trade"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Plus size={16} /> New Trade
          </button>
        </div>
      </div>

      {/* ACCOUNT SUMMARY */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
        <div className="card-base p-5">
          <div className="flex items-center justify-between">
            <div className="label-eyebrow">Cash Balance</div>
            <Wallet size={16} className="text-[#C8F169]" />
          </div>
          <div className="mt-3 font-mono text-2xl font-bold text-white">
            {loading ? <span className="text-zinc-700">····</span> : formatUSD(account?.cash_balance)}
          </div>
        </div>
        <div className="card-base p-5">
          <div className="label-eyebrow">Holdings Value</div>
          <div className="mt-3 font-mono text-2xl font-bold text-white">
            {loading ? <span className="text-zinc-700">····</span> : formatUSD(account?.holdings_value)}
          </div>
        </div>
        <div className="card-base p-5">
          <div className="label-eyebrow">Total Portfolio</div>
          <div className="mt-3 font-mono text-2xl font-bold text-white">
            {loading ? <span className="text-zinc-700">····</span> : formatUSD(account?.total_value)}
          </div>
          <div className="mt-1 text-xs text-zinc-500">Started at {formatUSD(account?.starting_balance ?? 10000)}</div>
        </div>
        <div className="card-base p-5 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="label-eyebrow">Total P&amp;L</div>
            {totalPnlUp ? <TrendingUp size={16} className="text-emerald-400" /> : <TrendingDown size={16} className="text-rose-400" />}
          </div>
          <div className={`mt-3 font-mono text-2xl font-bold ${totalPnlUp ? "text-emerald-400" : "text-rose-400"}`}>
            {loading ? <span className="text-zinc-700">····</span> : formatUSD(account?.total_pnl)}
          </div>
          {!loading && account && (
            <div className={`mt-1 text-xs font-mono ${totalPnlUp ? "text-emerald-400" : "text-rose-400"}`}>
              {formatPct(account.total_pnl_pct)} all time
            </div>
          )}
        </div>
      </div>

      {/* HOLDINGS */}
      <div className="card-base overflow-hidden mb-10">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5">
          <h3 className="text-xl font-bold text-white">Your Holdings</h3>
        </div>

        {loading ? (
          <div className="py-14 flex justify-center">
            <Loader2 size={22} className="text-[#C8F169] animate-spin" />
          </div>
        ) : !account?.holdings?.length ? (
          <div className="py-14 text-center px-6">
            <p className="text-sm text-zinc-500">You don't hold anything yet — place your first practice trade to get started.</p>
            <button
              type="button"
              onClick={() => openNewTrade(null)}
              className="btn-secondary inline-flex items-center gap-2 mt-4"
            >
              <Plus size={14} /> Place a trade
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 border-b border-white/5">
                  <th scope="col" className="py-3 px-5 md:px-6">Coin</th>
                  <th scope="col" className="py-3 px-2 text-right">Quantity</th>
                  <th scope="col" className="py-3 px-2 text-right hidden sm:table-cell">Avg. Buy Price</th>
                  <th scope="col" className="py-3 px-2 text-right">Current Value</th>
                  <th scope="col" className="py-3 px-2 text-right">P&amp;L</th>
                  <th scope="col" className="py-3 px-5 md:px-6 text-right">Trade</th>
                </tr>
              </thead>
              <tbody>
                {account.holdings.map((h) => {
                  const up = h.pnl >= 0;
                  return (
                    <tr key={h.coin_id} data-testid={`holding-row-${h.symbol}`} className="border-b border-white/5 last:border-b-0">
                      <td className="py-4 px-5 md:px-6">
                        <div className="flex items-center gap-3">
                          <img src={h.image} alt={h.name} className="w-7 h-7 rounded-full" loading="lazy" />
                          <div>
                            <div className="font-semibold text-white">{h.name}</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">{h.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right font-mono text-white">{h.quantity}</td>
                      <td className="py-4 px-2 text-right font-mono text-zinc-400 hidden sm:table-cell">{formatUSD(h.avg_price)}</td>
                      <td className="py-4 px-2 text-right font-mono text-white">{formatUSD(h.value)}</td>
                      <td className={`py-4 px-2 text-right font-mono ${up ? "text-emerald-400" : "text-rose-400"}`}>
                        <div className="inline-flex items-center gap-1 justify-end">
                          {up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                          {formatUSD(h.pnl)}
                        </div>
                        <div className="text-[11px] opacity-80">{formatPct(h.pnl_pct)}</div>
                      </td>
                      <td className="py-4 px-5 md:px-6 text-right">
                        <button
                          type="button"
                          onClick={() => openNewTrade({ id: h.coin_id, symbol: h.symbol, name: h.name, image: h.image, current_price: h.current_price })}
                          data-testid={`holding-trade-${h.symbol}`}
                          className="text-xs font-semibold text-[#C8F169] hover:underline"
                        >
                          Trade
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* TRANSACTION HISTORY */}
      <div className="card-base overflow-hidden mb-10">
        <div className="flex items-center justify-between px-5 md:px-6 py-4 border-b border-white/5">
          <h3 className="text-xl font-bold text-white">Recent Trades</h3>
        </div>
        {!loading && transactions.length === 0 ? (
          <div className="py-10 text-center px-6">
            <p className="text-sm text-zinc-500">No trades yet.</p>
          </div>
        ) : (
          <ul>
            {transactions.map((t) => {
              const isBuy = t.side === "buy";
              return (
                <li
                  key={t.id}
                  data-testid={`transaction-${t.id}`}
                  className="flex items-center gap-3 px-5 md:px-6 py-3 border-b border-white/5 last:border-b-0"
                >
                  <img src={t.image} alt={t.name} className="w-6 h-6 rounded-full shrink-0" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-white">
                      <span className={`font-semibold ${isBuy ? "text-emerald-400" : "text-rose-400"}`}>
                        {isBuy ? "Bought" : "Sold"}
                      </span>{" "}
                      {t.quantity} {t.symbol}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {new Date(t.created_at).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-sm text-white">{formatUSD(t.total)}</div>
                    <div className="text-[11px] text-zinc-500 font-mono">@ {formatUSD(t.price)}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* RESET */}
      <div className="flex items-center justify-between flex-wrap gap-3 card-base p-5">
        <div>
          <div className="text-sm font-semibold text-white">Start over</div>
          <p className="text-xs text-zinc-500 mt-0.5">Resets your virtual balance to {formatUSD(account?.starting_balance ?? 10000)} and clears all holdings & history.</p>
        </div>
        {!confirmingReset ? (
          <button
            type="button"
            onClick={() => setConfirmingReset(true)}
            data-testid="demo-reset-open"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <RotateCcw size={14} /> Reset account
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">Are you sure?</span>
            <button
              type="button"
              onClick={() => setConfirmingReset(false)}
              className="text-xs px-3 py-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={resetting}
              data-testid="demo-reset-confirm"
              className="text-xs px-3 py-2 rounded-lg bg-rose-400 text-[#1A0000] font-semibold hover:bg-rose-300 transition-colors disabled:opacity-60 inline-flex items-center gap-1.5"
            >
              {resetting && <Loader2 size={12} className="animate-spin" />}
              Yes, reset
            </button>
          </div>
        )}
      </div>

      {tradeOpen && (
        <TradeModal
          initialCoin={tradeCoin}
          holdingQtyFor={holdingQtyFor}
          onClose={() => setTradeOpen(false)}
          onTraded={() => loadAll()}
        />
      )}
    </section>
  );
}
