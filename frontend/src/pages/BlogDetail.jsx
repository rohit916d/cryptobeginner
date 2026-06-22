import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useSEO } from "../lib/seo";

// Reuse rendering logic
function renderMarkdown(md) {
  if (!md) return "";
  let html = md.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  html = html
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/(?:^- .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("");
    return `<ul>${items}</ul>`;
  });
  html = html.replace(/(?:^\d+\. .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^\d+\. /, "")}</li>`).join("");
    return `<ol>${items}</ol>`;
  });
  html = html.split(/\n{2,}/).map((blk) => {
    if (/^<(h\d|ul|ol|blockquote|table)/.test(blk.trim())) return blk;
    return `<p>${blk.replace(/\n/g, " ")}</p>`;
  }).join("\n");
  return html;
}

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setPost(null);
    setNotFound(false);
    api.get(`/blog/${slug}`).then((r) => setPost(r.data)).catch(() => setNotFound(true));
  }, [slug]);

  useSEO({
    title: post?.title,
    description: post?.excerpt,
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
    image: post?.cover_image,
    type: "article",
    jsonLd: post ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.cover_image,
      author: { "@type": "Organization", name: post.author || "CryptoBeginnersHub" },
      datePublished: post.created_at,
    } : null,
  });

  if (notFound) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold text-white">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block btn-secondary">Back to Blog</Link>
      </div>
    );
  }
  if (!post) {
    return <div className="max-w-3xl mx-auto px-4 py-20"><div className="h-8 bg-white/5 rounded animate-pulse" /></div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20" data-testid="blog-article">
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-[#FFBF00] mb-8">
        <ArrowLeft size={14} /> Back to Blog
      </Link>
      <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFBF00]">{post.category}</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">{post.title}</h1>
      <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500 font-mono">
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.read_time} min</span>
        <span className="inline-flex items-center gap-1"><User size={12} /> {post.author}</span>
      </div>

      {post.cover_image && (
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/5">
          <img src={post.cover_image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
        </div>
      )}

      <div className="prose-amber mt-10" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

      <div className="mt-12 border-t border-white/5 pt-6 text-xs text-zinc-500">
        Educational content only — not financial advice. Always do your own research.
      </div>
    </article>
  );
}
