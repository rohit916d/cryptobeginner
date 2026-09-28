import { api } from "../lib/api";
import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";

/**
 * Newsletter signup card. Posts to /api/newsletter; renders a compact
 * inline variant for article footers via the `compact` prop.
 */
export default function NewsletterSignup({ compact = false }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      await api.post("/newsletter", { email: value });
      setStatus("done");
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
            One short crypto lesson in your inbox every week. No spam, no hype — unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`card-base ${compact ? "p-6" : "p-7"}`}>
      <div className="flex items-center gap-2 text-[#C8F169] mb-2">
        <Mail size={16} />
        <span className="text-xs font-bold uppercase tracking-[0.15em]">Free weekly lesson</span>
      </div>
      <h3 className={`${compact ? "text-lg" : "text-xl"} font-bold text-white`}>
        Learn crypto in 5 minutes a week
      </h3>
      <p className="text-sm text-zinc-400 mt-1.5">
        Join the newsletter — one beginner-friendly lesson every week. No spam, ever.
      </p>
      <form onSubmit={submit} className="mt-4 flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "sending"}
          className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#C8F169]/40 text-sm"
        />
        <button type="submit" disabled={status === "sending"} className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap">
          {status === "sending" && <Loader2 size={14} className="animate-spin" />}
          Subscribe
        </button>
      </form>
      {status === "error" && <p className="text-sm text-rose-400 mt-2">{message}</p>}
      <p className="text-[11px] text-zinc-600 mt-3">We never share your email. Unsubscribe anytime.</p>
    </div>
  );
}
