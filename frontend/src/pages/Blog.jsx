import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { Clock, ArrowRight } from "lucide-react";
import { useSEO } from "../lib/seo";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Crypto Blog",
    description: "Beginner-friendly crypto articles on Bitcoin, blockchain, DeFi, scams, wallets and more.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  useEffect(() => {
    Promise.all([
      api.get("/blog"),
      api.get("/blog/categories"),
    ]).then(([p, c]) => {
      setPosts(p.data || []);
      setCats(["All", ...(c.data || [])]);
      setLoading(false);
    });
  }, []);

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="label-eyebrow">Blog</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        Fresh ideas, <span className="brand-grad-text">plain English.</span>
      </h1>
      <p className="mt-4 text-zinc-400 max-w-2xl">
        Articles for absolute beginners. No hype, no predictions, just clarity.
      </p>

      <div className="mt-8 flex flex-wrap gap-2" data-testid="blog-categories">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            data-testid={`cat-${c}`}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              active === c
                ? "bg-[#FFBF00]/10 text-[#FFBF00] border-[#FFBF00]/30"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="card-base p-6 h-72 animate-pulse" />
        ))}
        {!loading && filtered.map((p, idx) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            data-testid={`blog-card-${p.slug}`}
            className="card-base overflow-hidden hover-lift fade-up group"
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-amber-500/10 to-zinc-900 overflow-hidden">
              {p.cover_image && (
                <img src={p.cover_image} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#FFBF00]">{p.category}</span>
                <span className="text-xs text-zinc-500 inline-flex items-center gap-1 font-mono">
                  <Clock size={11} /> {p.read_time}m
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-white group-hover:text-[#FFBF00] transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{p.excerpt}</p>
              <div className="mt-4 text-xs text-[#FFBF00] inline-flex items-center gap-1">
                Read article <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
