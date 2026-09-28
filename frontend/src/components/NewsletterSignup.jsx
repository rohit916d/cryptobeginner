import { api } from "../lib/api";
import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

/**
 * Newsletter signup card. Posts to /api/newsletter; renders a compact
 * inline variant for article footers via the `compact` prop.
 * Includes a working unsubscribe flow via /api/newsletter/unsubscribe.
 */
export default function NewsletterSignup({ compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error | unsub_idle | unsub_sending | unsub_done
  const [message, setMessage] = useState("");
  const [mode, setMode] = useState("subscribe"); // subscribe | unsubscribe

  const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const submit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!validEmail(value)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    const isUnsub = mode === "unsubscribe";
    setStatus(isUnsub ? "unsub_sending" : "sending");
    setMessage("");
    try {
      await api.post(isUnsub ? "/newsletter/unsubscribe" : "/newsletter", { email: value });
      setStatus(isUnsub ? "unsub_done" : "done");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "done") {
    return (
      <div className="card-base p-6 flex items-start gap-3">
        <CheckCircle2 size={20} className="text-[#C8F169] shrink-0 mt-0.5" />
        <div>
          <div className="text-white font-semibold">You're on the list!</div>
          <p className="text-sm text-zinc-400 mt-1">
            We'll send beginner-friendly crypto lessons to your inbox. No spam, no hype — unsubscribe anytime.
          </p>
          <button
            onClick={() => { setMode("unsubscribe"); setStatus("unsub_idle"); setMessage(""); }}
            className="text-[11px] text-zinc-500 underline underline-offset-2 mt-2 hover:text-zinc-300"
          >
            Unsubscribe
          </button>
        </div>
      </div>
    );
  }

  if (status === "unsub_done") {
    return (
      <div className="card-base p-6 flex items-start gap-3">
        <CheckCircle2 size={20} className="text-[#C8F169] shrink-0 mt-0.5" />
        <div>
          <div className="text-white font-semibold">Unsubscribed</div>
          <p className="text-sm text-zinc-400 mt-1">
            Your email has been removed from the newsletter list.
          </p>
        </div>
      </div>
    );
  }

  const isUnsub = mode === "unsubscribe";

  return (
    <div className={`card-base ${compact ? "p-6" : "p-7"}`}>
      <div className="flex items-center gap-2 text-[#C8F169] mb-2">
        <Mail size={16} />
        <span className="text-xs font-bold uppercase tracking-[0.15em]">
          {isUnsub ? "Unsubscribe" : "Free newsletter"}
        </span>
      </div>
      <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold text-white`}>
        {isUnsub ? "Leave the newsletter" : "Learn crypto, one email at a time"}
      </h3>
      <p className="text-sm text-zinc-400 mt-1.5">
        {isUnsub
          ? "Enter your email below and we'll remove you from the list immediately."
          : "Join the newsletter — beginner-friendly crypto lessons in your inbox. No spam, ever."}
      </p>
      <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "sending" || status === "unsub_sending"}
          className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C8F169]/40 text-sm"
        />
        <button type="submit" disabled={status === "sending" || status === "unsub_sending"} className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap">
          {(status === "sending" || status === "unsub_sending") && <Loader2 size={14} className="animate-spin" />}
          {isUnsub ? "Unsubscribe" : "Subscribe"}
        </button>
      </form>
      {status === "error" && <p className="text-sm text-rose-400 mt-2">{message}</p>}
      <p className="text-[11px] text-zinc-600 mt-3">
        We never share your email.{" "}
        {isUnsub ? (
          <button onClick={() => { setMode("subscribe"); setStatus("idle"); setMessage(""); }} className="underline underline-offset-2 hover:text-zinc-400">
            Back to subscribe
          </button>
        ) : (
          <button onClick={() => { setMode("unsubscribe"); setStatus("unsub_idle"); setMessage(""); }} className="underline underline-offset-2 hover:text-zinc-400">
            Unsubscribe
          </button>
        )}
      </p>
    </div>
  );
}
