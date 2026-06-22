import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { ArrowLeft, Clock, AlertTriangle } from "lucide-react";
import { useSEO } from "../lib/seo";

function renderMarkdown(md) {
  if (!md) return "";
  let html = md
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Tables
  html = html.replace(/((?:^\|.*\|\s*\n)+)/gm, (block) => {
    const lines = block.trim().split("\n");
    if (lines.length < 2) return block;
    const head = lines[0].split("|").slice(1, -1).map((s) => `<th>${s.trim()}</th>`).join("");
    const rows = lines.slice(2).map((r) => {
      const cells = r.split("|").slice(1, -1).map((c) => `<td>${c.trim()}</td>`).join("");
      return `<tr>${cells}</tr>`;
    }).join("");
    return `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
  });

  html = html
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/(?:^- .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("");
    return `<ul>${items}</ul>`;
  });
  html = html.replace(/(?:^\d+\. .+\n?)+/gm, (m) => {
    const items = m.trim().split("\n").map((l) => `<li>${l.replace(/^\d+\. /, "")}</li>`).join("");
    return `<ol>${items}</ol>`;
  });

  // Paragraphs
  html = html.split(/\n{2,}/).map((blk) => {
    if (/^<(h\d|ul|ol|blockquote|table)/.test(blk.trim())) return blk;
    return `<p>${blk.replace(/\n/g, " ")}</p>`;
  }).join("\n");

  return html;
}

export default function LearnDetail() {
  const { slug } = useParams();
  const [lesson, setLesson] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLesson(null);
    setNotFound(false);
    api.get(`/lessons/${slug}`)
      .then((r) => setLesson(r.data))
      .catch(() => setNotFound(true));
  }, [slug]);

  useSEO({
    title: lesson?.title,
    description: lesson?.summary,
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
    type: "article",
    jsonLd: lesson ? {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: lesson.title,
      description: lesson.summary,
      learningResourceType: "Lesson",
      educationalLevel: lesson.level,
    } : null,
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
      <Link to="/learn" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-[#FFBF00] mb-8">
        <ArrowLeft size={14} /> Back to Learning Center
      </Link>
      <div className="label-eyebrow text-[#FFBF00]/80 uppercase">{lesson.level} · Lesson {lesson.order}</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
        {lesson.title}
      </h1>
      <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 font-mono">
        <Clock size={12} /> {lesson.read_time} min read
      </div>

      <div className="prose-amber mt-10" dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.content) }} />

      <div className="mt-12 card-base p-5 border border-amber-400/20 bg-amber-400/[0.03]">
        <div className="flex items-start gap-3">
          <AlertTriangle size={18} className="text-[#FFBF00] mt-0.5 shrink-0" />
          <p className="text-sm text-zinc-400">
            <span className="font-semibold text-white">Educational only.</span> This article is not financial, investment, or legal advice. Always do your own research.
          </p>
        </div>
      </div>
    </article>
  );
}
