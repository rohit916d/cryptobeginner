import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, ShieldCheck } from "lucide-react";
import { api } from "../../lib/api";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const SUGGESTIONS = [
  "What is Bitcoin, simply explained?",
  "How do crypto wallets work?",
  "How do I stay safe from crypto scams?",
];

const GREETING = {
  from: "bot",
  text: "Hi, I'm the Crypto Beginner assistant. Ask me anything about how crypto works — Bitcoin basics, wallets, safety, and more.",
};

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="chat-bubble-bot typing-dots" aria-label="Assistant is typing">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading, open]);

  async function sendMessage(text) {
    const userMsg = (text ?? input).trim();
    if (!userMsg || loading) return;

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/chat", { message: userMsg });
      setMessages((prev) => [...prev, { from: "bot", text: res.data.reply }]);
    } catch (err) {
      const status = err?.response?.status;
      const detail = err?.response?.data?.detail;
      const fallback =
        status === 429
          ? detail || "You're asking a bit fast — please wait a minute and try again."
          : "Sorry, I'm having trouble responding right now — please try again in a moment.";
      setMessages((prev) => [...prev, { from: "bot", text: fallback }]);
    }

    setLoading(false);
  }

  const showSuggestions = messages.length <= 1 && !loading;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="chat-launcher"
          aria-label="Open Crypto Assistant"
          title="Open Crypto Assistant"
          data-testid="chat-open"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="Crypto Assistant"
          data-testid="chat-panel"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#101623]">
            <div>
              <div className="label-eyebrow !text-[0.6rem]">Crypto Assistant</div>
              <div className="text-sm font-semibold text-white mt-0.5">
                Beginner crypto tutor
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close Crypto Assistant"
              title="Close Crypto Assistant"
              className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-80 overflow-y-auto px-3 py-3 space-y-2.5">
            {messages.map((m, i) => (
              <ChatMessage key={i} from={m.from} text={m.text} />
            ))}
            {loading && <TypingIndicator />}

            {showSuggestions && (
              <div className="pt-1 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="chat-chip"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Composer */}
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={() => sendMessage()}
            loading={loading}
          />

          {/* Disclaimer */}
          <div className="px-4 py-2 bg-[#0B0E14] border-t border-white/5 flex items-center gap-1.5">
            <ShieldCheck size={11} className="text-[#C8F169]/70 shrink-0" />
            <p className="text-[10px] text-zinc-600 leading-tight">
              Educational content only — not financial advice.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
