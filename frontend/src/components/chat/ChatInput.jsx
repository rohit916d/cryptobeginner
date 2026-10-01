import { Send } from "lucide-react";

/**
 * ChatInput — message composer for the Crypto Assistant panel.
 */
export default function ChatInput({ value, onChange, onSend, loading }) {
  const canSend = value.trim().length > 0 && !loading;

  return (
    <div className="flex items-center gap-2 border-t border-white/10 px-3 py-2.5 bg-[#0E1320]">
      <input
        aria-label="Type your crypto question"
        type="text"
        autoComplete="off"
        maxLength={500}
        className="flex-1 bg-transparent px-1 py-2 text-sm text-white placeholder:text-zinc-600 outline-none"
        placeholder="Ask about Bitcoin, wallets, safety…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && canSend && onSend()}
      />
      <button
        onClick={onSend}
        disabled={!canSend}
        aria-label="Send message"
        title="Send message"
        className="w-9 h-9 shrink-0 rounded-full bg-[#C8F169] text-[#1A2100] flex items-center justify-center transition-all duration-200 hover:bg-[#D9FF8A] hover:-translate-y-px disabled:opacity-30 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
      >
        <Send size={15} />
      </button>
    </div>
  );
}
