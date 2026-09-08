import { Link } from "react-router-dom";
import { ShieldAlert, Wallet, ExternalLink, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { useSEO } from "../lib/seo";

export default function RealTrading() {
  useSEO({
    title: "Real Trading — Connect Your Wallet & Swap Crypto",
    description:
      "Connect your own crypto wallet and trade real crypto across 85+ blockchains. Non-custodial — your funds never touch our servers. Real money, real trades, irreversible.",
    keywords: "connect wallet, crypto swap, real trading, non-custodial, wallet connect, defi swap",
    canonical: typeof window !== "undefined" ? window.location.origin + window.location.pathname : undefined,
  });

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
      {/* HEADER */}
      <div className="mb-8">
        <div className="block-tag mb-3">
          <span className="dot" />
          REAL WALLET · REAL FUNDS
        </div>
        <h1 className="text-3xl md:text-5xl font-normal text-white leading-tight">
          Real <span className="brand-grad-text italic">Trading</span>
        </h1>
        <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
          Connect your own crypto wallet and swap tokens across 85+ blockchains, directly on-chain.
          This is <span className="text-white font-medium">not a simulation</span> — trades here use real
          money and cannot be reversed.
        </p>
      </div>

      {/* RISK BANNER */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 mb-8 flex gap-3.5">
        <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
        <div className="text-sm text-zinc-300 leading-relaxed space-y-1.5">
          <p className="font-semibold text-amber-400">Before you connect a wallet, please understand:</p>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>This uses <span className="text-white">real money</span> from your own wallet — nothing here is virtual.</li>
            <li>Blockchain trades are <span className="text-white">irreversible</span>. There is no refund, chargeback, or customer support that can undo a swap.</li>
            <li>We never hold, custody, or have access to your funds or keys — swaps happen directly between your wallet and the blockchain.</li>
            <li>Crypto prices are volatile and you can lose money. This is not financial advice.</li>
            <li>New to trading? Try{" "}
              <Link to="/demo-trading" className="text-[#C8F169] hover:underline font-medium">
                Demo Trading
              </Link>{" "}
              first — it's free, uses virtual money, and works exactly like real trading.
            </li>
          </ul>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        <div className="card-base p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#C8F169]/10 flex items-center justify-center shrink-0">
            <Lock size={16} className="text-[#C8F169]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Non-custodial</div>
            <div className="text-xs text-zinc-500">Your keys, your funds, always</div>
          </div>
        </div>
        <div className="card-base p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#C8F169]/10 flex items-center justify-center shrink-0">
            <ShieldCheck size={16} className="text-[#C8F169]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Audited infrastructure</div>
            <div className="text-xs text-zinc-500">Powered by thirdweb's Bridge</div>
          </div>
        </div>
        <div className="card-base p-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#C8F169]/10 flex items-center justify-center shrink-0">
            <Wallet size={16} className="text-[#C8F169]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Any wallet</div>
            <div className="text-xs text-zinc-500">MetaMask, Trust Wallet, Coinbase & more</div>
          </div>
        </div>
      </div>

      {/* WIDGET */}
      <div className="card-base overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div>
            <div className="label-eyebrow">Swap</div>
            <h3 className="text-lg font-bold text-white mt-1">Connect Wallet &amp; Trade</h3>
          </div>
          <a
            href="https://portal.thirdweb.com/bridge/bridge-widget/iframe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Powered by thirdweb <ExternalLink size={11} />
          </a>
        </div>
        <div className="bg-[#0B0E14] flex justify-center">
          <iframe
            src="https://thirdweb.com/bridge/widget?theme=dark&currency=INR"
            title="Connect wallet and swap crypto"
            height="720"
            width="100%"
            style={{ border: 0, maxWidth: 480 }}
            data-testid="real-trading-widget"
          />
        </div>
      </div>

      <p className="text-xs text-zinc-600 text-center mt-6 max-w-xl mx-auto leading-relaxed">
        This widget connects directly to your wallet and the blockchain. Crypto Beginner does not process,
        hold, or have access to your funds at any point, and cannot reverse a transaction once submitted.
      </p>

      <div className="text-center mt-6">
        <Link to="/demo-trading" className="btn-secondary inline-flex items-center gap-2">
          Practice with virtual money instead <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
