import { useState } from "react";
import { api } from "../lib/api";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { useSEO } from "../lib/seo";

export default function Contact() {
  useSEO({
    title: "Contact Us",
    description: "Get in touch with the CryptoBeginnersHub team — feedback, content suggestions, partnerships.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState(null);

  const handle = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err?.response?.data?.detail || "Something went wrong");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="label-eyebrow">Contact</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="brand-grad-text">talk.</span>
          </h1>
          <p className="mt-5 text-zinc-400 leading-relaxed">
            Feedback, content ideas, partnerships, or a typo we missed — we read everything.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-zinc-300">
            <Mail size={16} className="text-[#FFBF00]" />
            hello@cryptobeginnershub.com
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            We never reply with investment advice and we will never ask for your seed phrase.
          </p>
        </div>

        <form onSubmit={submit} data-testid="contact-form" className="card-base p-6 md:p-7 space-y-4">
          {status === "sent" ? (
            <div data-testid="contact-success" className="text-center py-10">
              <CheckCircle2 className="mx-auto text-[#FFBF00]" size={36} />
              <h3 className="mt-4 text-lg font-bold text-white">Message received!</h3>
              <p className="mt-2 text-sm text-zinc-400">Thanks — we'll get back to you soon.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 btn-secondary text-sm"
              >Send another</button>
            </div>
          ) : (
            <>
              <div>
                <label className="label-eyebrow block mb-1.5">Name</label>
                <input
                  data-testid="contact-name"
                  required value={form.name} onChange={handle("name")}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#FFBF00]/40"
                />
              </div>
              <div>
                <label className="label-eyebrow block mb-1.5">Email</label>
                <input
                  data-testid="contact-email"
                  type="email" required value={form.email} onChange={handle("email")}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#FFBF00]/40"
                />
              </div>
              <div>
                <label className="label-eyebrow block mb-1.5">Subject</label>
                <input
                  data-testid="contact-subject"
                  value={form.subject} onChange={handle("subject")}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#FFBF00]/40"
                />
              </div>
              <div>
                <label className="label-eyebrow block mb-1.5">Message</label>
                <textarea
                  data-testid="contact-message"
                  required rows={5} value={form.message} onChange={handle("message")}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#FFBF00]/40 resize-none"
                />
              </div>
              {error && <p className="text-xs text-rose-400">{error}</p>}
              <button
                data-testid="contact-submit"
                disabled={status === "sending"}
                className="btn-primary inline-flex items-center gap-2 w-full justify-center disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : (<>Send message <Send size={14} /></>)}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
