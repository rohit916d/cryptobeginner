import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { useSEO } from "../lib/seo";
import { Mail, FileText, LogOut, Lock, Loader2, PenSquare, Trash2, ExternalLink, CheckCircle2 } from "lucide-react";

const TOKEN_KEY = "cb_admin_token";

function LoginForm({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/admin/login", { password });
      localStorage.setItem(TOKEN_KEY, res.data.token);
      onSuccess(res.data.token);
    } catch (err) {
      setError(
        err?.response?.status === 401
          ? "Incorrect password."
          : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-32">
      <div className="card-base p-7">
        <div className="flex items-center gap-2 text-[#C8F169] mb-4">
          <Lock size={18} />
          <span className="label-eyebrow">Admin</span>
        </div>
        <h1 className="text-xl font-bold text-white mb-5">Sign in</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#C8F169]/40"
          />
          {error && <p className="text-sm text-rose-400">{error}</p>}
          <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
            {loading && <Loader2 size={16} className="animate-spin" />}
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

function SubmissionsTab({ token }) {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/admin/contact-submissions", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setItems(res.data.data))
      .catch(() => setError("Couldn't load submissions."));
  }, [token]);

  if (error) return <p className="text-sm text-rose-400">{error}</p>;
  if (!items) return <p className="text-sm text-zinc-500">Loading…</p>;
  if (items.length === 0) return <p className="text-sm text-zinc-500">No messages yet.</p>;

  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className="card-base p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div className="font-semibold text-white">{it.name}</div>
            <div className="text-xs text-zinc-500 font-mono">
              {new Date(it.created_at).toLocaleString()}
            </div>
          </div>
          <a href={`mailto:${it.email}`} className="text-sm text-[#C8F169] hover:underline">
            {it.email}
          </a>
          {it.subject && <div className="text-sm text-zinc-300 mt-2 font-medium">{it.subject}</div>}
          <p className="text-sm text-zinc-400 mt-2 whitespace-pre-wrap leading-relaxed">{it.message}</p>
        </div>
      ))}
    </div>
  );
}

function ContentTab({ token }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/admin/content", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setData(res.data))
      .catch(() => setError("Couldn't load content."));
  }, [token]);

  if (error) return <p className="text-sm text-rose-400">{error}</p>;
  if (!data) return <p className="text-sm text-zinc-500">Loading…</p>;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-3">AI blog posts ({data.blog_posts.length})</h3>
        <div className="space-y-2">
          {data.blog_posts.map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              target="_blank"
              rel="noreferrer"
              className="card-base p-4 flex items-center justify-between gap-3 hover:border-[#C8F169]/20"
            >
              <div>
                <div className="text-white text-sm font-medium">{p.title}</div>
                <div className="text-xs text-zinc-500 mt-1">{p.category} · {new Date(p.created_at).toLocaleDateString()}</div>
              </div>
            </a>
          ))}
          {data.blog_posts.length === 0 && <p className="text-sm text-zinc-500">None yet.</p>}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-zinc-300 mb-3">AI lessons ({data.lessons.length})</h3>
        <div className="space-y-2">
          {data.lessons.map((l) => (
            <a
              key={l.slug}
              href={`/learn/${l.slug}`}
              target="_blank"
              rel="noreferrer"
              className="card-base p-4 flex items-center justify-between gap-3 hover:border-[#C8F169]/20"
            >
              <div>
                <div className="text-white text-sm font-medium">{l.title}</div>
                <div className="text-xs text-zinc-500 mt-1">{l.level} · order {l.order}</div>
              </div>
            </a>
          ))}
          {data.lessons.length === 0 && <p className="text-sm text-zinc-500">None yet.</p>}
        </div>
      </div>
    </div>
  );
}

const BLOG_CATEGORIES = ["Bitcoin", "Blockchain", "DeFi", "Wallets", "Security", "NFTs", "Regulation", "Trading Basics"];

function WritePostTab({ token, onPublished }) {
  const empty = { title: "", category: "Bitcoin", excerpt: "", content: "", cover_image: "", read_time: 5 };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | saving | done | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("saving");
    setError("");
    try {
      await api.post(
        "/admin/blog",
        { ...form, read_time: Number(form.read_time) || 5 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setStatus("done");
      setForm(empty);
      onPublished && onPublished();
    } catch (err) {
      setStatus("error");
      setError(err?.response?.data?.detail || "Couldn't publish. Try again.");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 max-w-2xl">
      {status === "done" && (
        <div className="flex items-center gap-2 text-sm text-[#C8F169] bg-[#C8F169]/5 border border-[#C8F169]/20 rounded-xl px-4 py-3">
          <CheckCircle2 size={16} /> Published! It's live on /blog now.
        </div>
      )}
      {error && <p className="text-sm text-rose-400">{error}</p>}

      <div>
        <label className="label-eyebrow block mb-1.5">Title</label>
        <input
          required
          value={form.title}
          onChange={set("title")}
          placeholder="e.g. What is a Hardware Wallet?"
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="label-eyebrow block mb-1.5">Category</label>
          <select
            value={form.category}
            onChange={set("category")}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40"
          >
            {BLOG_CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[#12172a]">{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-eyebrow block mb-1.5">Read time (min)</label>
          <input
            type="number"
            min={1}
            max={60}
            value={form.read_time}
            onChange={set("read_time")}
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40"
          />
        </div>
      </div>

      <div>
        <label className="label-eyebrow block mb-1.5">Excerpt (shown in the blog list, 1-2 sentences)</label>
        <textarea
          required
          rows={2}
          value={form.excerpt}
          onChange={set("excerpt")}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40 resize-none"
        />
      </div>

      <div>
        <label className="label-eyebrow block mb-1.5">Cover image URL (optional — a relevant stock photo is used if left blank)</label>
        <input
          value={form.cover_image}
          onChange={set("cover_image")}
          placeholder="https://..."
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40"
        />
      </div>

      <div>
        <label className="label-eyebrow block mb-1.5">Content (Markdown — use ## for headers)</label>
        <textarea
          required
          rows={14}
          value={form.content}
          onChange={set("content")}
          placeholder={"## Why it matters\n\nWrite your article here..."}
          className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-2.5 text-white outline-none focus:border-[#C8F169]/40 font-mono text-sm resize-y"
        />
      </div>

      <button type="submit" disabled={status === "saving"} className="btn-primary inline-flex items-center gap-2 disabled:opacity-60">
        {status === "saving" && <Loader2 size={16} className="animate-spin" />}
        Publish post
      </button>
    </form>
  );
}

function ManageBlogTab({ token }) {
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState(null);

  const load = () => {
    api
      .get("/admin/blog", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setItems(res.data.data))
      .catch(() => setError("Couldn't load posts."));
  };

  useEffect(load, [token]);

  const handleDelete = async (slug) => {
    if (!window.confirm("Delete this post? This can't be undone.")) return;
    setDeletingSlug(slug);
    try {
      await api.delete(`/admin/blog/${slug}`, { headers: { Authorization: `Bearer ${token}` } });
      setItems((prev) => prev.filter((p) => p.slug !== slug));
    } catch {
      setError("Couldn't delete that post.");
    } finally {
      setDeletingSlug(null);
    }
  };

  if (error) return <p className="text-sm text-rose-400">{error}</p>;
  if (!items) return <p className="text-sm text-zinc-500">Loading…</p>;
  if (items.length === 0) return <p className="text-sm text-zinc-500">No posts yet.</p>;

  return (
    <div className="space-y-2">
      {items.map((p) => (
        <div key={p.slug} className="card-base p-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-white text-sm font-medium truncate">{p.title}</div>
            <div className="text-xs text-zinc-500 mt-1">
              {p.author} · {p.category} · {new Date(p.created_at).toLocaleDateString()}
              {p.ai_generated && <span className="ml-2 text-[#9B87F5]">AI</span>}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white p-1.5">
              <ExternalLink size={15} />
            </a>
            <button
              onClick={() => handleDelete(p.slug)}
              disabled={deletingSlug === p.slug}
              className="text-zinc-500 hover:text-rose-400 p-1.5 disabled:opacity-50"
            >
              {deletingSlug === p.slug ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Admin() {
  useSEO({ title: "Admin", robots: "noindex,nofollow" });

  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [tab, setTab] = useState("messages");

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  if (!token) return <LoginForm onSuccess={setToken} />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Admin</h1>
        <button onClick={handleLogout} className="btn-secondary text-sm flex items-center gap-2">
          <LogOut size={14} /> Sign out
        </button>
      </div>

      <div className="flex gap-2 mb-6 border-b border-white/5 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setTab("messages")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors shrink-0 ${
            tab === "messages" ? "border-[#C8F169] text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Mail size={15} /> Messages
        </button>
        <button
          onClick={() => setTab("write")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors shrink-0 ${
            tab === "write" ? "border-[#C8F169] text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <PenSquare size={15} /> Write Post
        </button>
        <button
          onClick={() => setTab("manage")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors shrink-0 ${
            tab === "manage" ? "border-[#C8F169] text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <FileText size={15} /> Manage Posts
        </button>
        <button
          onClick={() => setTab("content")}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors shrink-0 ${
            tab === "content" ? "border-[#C8F169] text-white" : "border-transparent text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <FileText size={15} /> AI Content
        </button>
      </div>

      {tab === "messages" && <SubmissionsTab token={token} />}
      {tab === "write" && <WritePostTab token={token} onPublished={() => setTab("manage")} />}
      {tab === "manage" && <ManageBlogTab token={token} />}
      {tab === "content" && <ContentTab token={token} />}
    </div>
  );
}
