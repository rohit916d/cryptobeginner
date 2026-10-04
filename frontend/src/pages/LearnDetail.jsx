import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { api } from "../lib/api";
import { ArrowLeft, Clock, AlertTriangle, User, CalendarDays } from "lucide-react";
import { useSEO, SITE_ORIGIN } from "../lib/seo";
import { renderMarkdown, formatDate } from "../lib/markdown";
import AdSlot, { AD_SLOTS } from "../components/AdSlot";
import AuthorBio from "../components/AuthorBio";
import NewsletterSignup from "../components/NewsletterSignup";

export default function LearnDetail() {
  const { slug } = useParams();
  const [lesson, setLesson] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLesson(null);
    setNotFound(false);
    api.get(`/lessons/${slug}`)
      .then((r) => { if (mounted) setLesson(r.data); })
      .catch(() => { if (mounted) setNotFound(true); });
    return () => { mounted = false; };
  }, [slug]);

  useSEO({
    title: notFound ? "Lesson Not Found" : lesson?.title,
    description: lesson?.summary,
    canonical: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : undefined,
    type: "article",
    robots: notFound ? "noindex,follow" : "index,follow",
    jsonLd: lesson ? [
      {
        "@type": "LearningResource",
        name: lesson.title,
        description: lesson.summary,
        learningResourceType: "Lesson",
        educationalLevel: lesson.level,
        author: { "@type": "Organization", name: "Crypto Beginner" },
        publisher: {
          "@type": "Organization",
          name: "Crypto Beginner",
          logo: { "@type": "ImageObject", url: SITE_ORIGIN + "/cryptobeginner-icon.png" },
        },
        datePublished: lesson.created_at,
        dateModified: lesson.updated_at || lesson.created_at,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? SITE_ORIGIN + "/" : "" },
          { "@type": "ListItem", position: 2, name: "Learn", item: typeof window !== "undefined" ? SITE_ORIGIN + "/learn" : "" },
          { "@type": "ListItem", position: 3, name: lesson.title, item: typeof window !== "undefined" ? SITE_ORIGIN + window.location.pathname : "" },
        ],
      },
      ...(Array.isArray(lesson.faqs) && lesson.faqs.length > 0 ? [{
        "@type": "FAQPage",
        mainEntity: lesson.faqs.map((f) => ({
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
        <h1 className="text-2xl font-bold text-white">Lesson not found</h1>
        <Link to="/learn" className="mt-4 inline-block btn-secondary">Back to Learning Center</Link>
      </div>
    );
  }
  if (!lesson) {
    return <div className="max-w-3xl mx-auto px-4 py-20"><div className="h-8 bg-white/5 rounded animate-pulse" /></div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20" data-testid="lesson-article">
      <Link to="/learn" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-[#C8F169] mb-8">
        <ArrowLeft size={14} /> Back to Learning Center
      </Link>
      <div className="label-eyebrow text-[#C8F169]/80 uppercase">{lesson.level} · Lesson {lesson.order}</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
        {lesson.title}
      </h1>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono">
        <span className="inline-flex items-center gap-1"><Clock size={12} /> {lesson.read_time} min read</span>
        {lesson.author && (
          <span className="inline-flex items-center gap-1"><User size={12} /> {lesson.author}</span>
        )}
        {lesson.created_at && (
          <span className="inline-flex items-center gap-1"><CalendarDays size={12} /> {formatDate(lesson.created_at)}</span>
        )}
      </div>

      <div className="prose-amber mt-10" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(renderMarkdown(lesson.content)) }} />

      <div className="mt-10">
        <AdSlot slot={AD_SLOTS.articleInline} />
      </div>

      {Array.isArray(lesson.faqs) && lesson.faqs.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-3">
            {lesson.faqs.map((f, i) => (
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

      <AuthorBio author={lesson.author} date={formatDate(lesson.created_at)} />

      <div className="mt-8">
        <NewsletterSignup compact />
      </div>

      <div className="mt-12 card-base p-5 border border-lime-300/20 bg-lime-300/[0.03]">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-[#C8F169] mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-400">
            <span className="font-semibold text-white">Educational only.</span> This article is not financial, investment, or legal advice. Always do your own research.
          </p>
        </div>
      </div>
    </article>
  );
}
