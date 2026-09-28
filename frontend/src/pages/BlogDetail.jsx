import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { api } from "../lib/api";
import { ArrowLeft, Clock, User, CalendarDays } from "lucide-react";
import { useSEO, SITE_ORIGIN } from "../lib/seo";
import { renderMarkdown, formatDate } from "../lib/markdown";
import AdSlot, { AD_SLOTS } from "../components/AdSlot";
import AuthorBio from "../components/AuthorBio";
import NewsletterSignup from "../components/NewsletterSignup";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let mounted = true;
    setPost(null);
    setNotFound(false);
    api.get(`/blog/${slug}`)
      .then((r) => {
        if (!mounted) return;
        // API 301-redirects deleted duplicate slugs to the canonical post;
        // keep the URL bar on the canonical slug too.
        if (r.data?.slug && r.data.slug !== slug) {
          navigate(`/blog/${r.data.slug}`, { replace: true });
          return;
        }
        setPost(r.data);
      })
      .catch(() => { if (mounted) setNotFound(true); });
    return () => { mounted = false; };
  }, [slug]);

  useSEO({
    title: notFound ? "Article Not Found" : post?.title,
    description: post?.excerpt,
    canonical: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : undefined,
    image: post?.cover_image,
    type: "article",
    robots: notFound ? "noindex,follow" : "index,follow",
    jsonLd: post ? [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.cover_image,
        author: { "@type": "Organization", name: post.author || "Crypto Beginner" },
        datePublished: post.created_at,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? SITE_ORIGIN + "/" : "" },
          { "@type": "ListItem", position: 2, name: "Blog", item: typeof window !== "undefined" ? SITE_ORIGIN + "/blog" : "" },
          { "@type": "ListItem", position: 3, name: post.title, item: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : "" },
        ],
      },
      ...(Array.isArray(post.faqs) && post.faqs.length > 0 ? [{
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }] : []),
    ] : null,
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
      <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-[#C8F169] mb-8">
        <ArrowLeft size={14} /> Back to Blog
      </Link>
      <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8F169]">{post.category}</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">{post.title}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-500 font-mono">
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {post.read_time} min</span>
        <span className="inline-flex items-center gap-1"><User size={12} /> {post.author}</span>
        {post.created_at && (
          <span className="inline-flex items-center gap-1"><CalendarDays size={12} /> {formatDate(post.created_at)}</span>
        )}
      </div>

      {post.cover_image && (
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/5">
          <img src={post.cover_image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
        </div>
      )}

      <div className="prose-amber mt-10" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(renderMarkdown(post.content)) }} />

      <div className="mt-10">
        <AdSlot slot={AD_SLOTS.articleInline} />
      </div>

      {Array.isArray(post.faqs) && post.faqs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {post.faqs.map((f, i) => (
              <details key={i} className="card-base p-4 group">
                <summary className="cursor-pointer text-white font-medium list-none flex items-center justify-between gap-3">
                  {f.question}
                  <span className="text-[#C8F169] shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      <AuthorBio author={post.author} date={formatDate(post.created_at)} />

      <div className="mt-8">
        <NewsletterSignup compact />
      </div>

      <div className="mt-12 border-t border-white/5 pt-6 text-xs text-zinc-500">
        Educational content only — not financial advice. Always do your own research.
      </div>
    </article>
  );
}
