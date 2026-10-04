import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { Clock, ArrowRight } from "lucide-react";
import { useSEO, SITE_ORIGIN } from "../lib/seo";
import Reveal from "../components/Reveal";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);

  useSEO({
    title: "Bitcoin, DeFi & Crypto Safety Guides",
    description: "Beginner-friendly crypto guides for India — Bitcoin basics, blockchain, DeFi, wallets, NFTs, scams and taxes explained in plain English. No hype, no financial advice.",
    canonical: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : undefined,
    jsonLd: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? SITE_ORIGIN + "/" : "" },
        { "@type": "ListItem", position: 2, name: "Blog", item: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : "" },
      ],
    },
  });

  useEffect(() => {
    let mounted = true;
    Promise.all([
      api.get("/blog"),
      api.get("/blog/categories"),
    ]).then(([p, c]) => {
      if (!mounted) return;
      setPosts(p.data || []);
      setCats(["All", ...(c.data || [])]);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, []);

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div className="label-eyebrow">Blog</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight">
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
                ? "bg-[#C8F169]/10 text-[#C8F169] border-[#C8F169]/30"
                : "border-white/10 text-zinc-400 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && Array.from({ length: 6 }).map((_, i) => (
          <div key={`blog-skeleton-${i}`} className="card-base p-6 h-72 animate-pulse" />
        ))}
        {!loading && filtered.map((p, idx) => (
          <Reveal key={p.slug} delay={Math.min(idx, 8) * 60}>
          <Link
            to={`/blog/${p.slug}`}
            data-testid={`blog-card-${p.slug}`}
            className="card-base overflow-hidden hover-lift group h-full block"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-lime-400/10 to-zinc-900 overflow-hidden">
              {p.cover_image && (
                <img src={p.cover_image} alt={p.title} loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#C8F169]">{p.category}</span>
                <span className="text-xs text-zinc-500 inline-flex items-center gap-1 font-mono">
                  <Clock size={11} /> {p.read_time}m
                </span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-white group-hover:text-[#C8F169] transition-colors leading-snug">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{p.excerpt}</p>
              <div className="mt-4 text-xs text-[#C8F169] inline-flex items-center gap-1">
                Read article <ArrowRight size={12} />
              </div>
            </div>
          </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
