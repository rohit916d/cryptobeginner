import { User } from "lucide-react";

/**
 * Author bio box shown under articles/lessons. Strengthens E-E-A-T signals:
 * a named editorial entity with a clear review process, instead of an
 * anonymous byline.
 */
export default function AuthorBio({ date }) {
  const name = "Rohit Prajapati";
  return (
    <div className="card-base p-6 mt-12">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-[#C8F169]/10 border border-[#C8F169]/20 flex items-center justify-center shrink-0">
          <User size={20} className="text-[#C8F169]" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-bold">Written by</div>
          <div className="text-white font-semibold mt-0.5">{name}</div>
          <div className="text-xs text-zinc-500 mt-0.5">Founder &amp; Editor, Crypto Beginner</div>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Rohit founded Crypto Beginner to explain crypto in plain language for Indian
            beginners. Every guide is researched and fact-checked by our editorial team under
            his direction before publishing. We never give financial advice, and we update
            articles when the facts change. See our Editorial Policy for how we work.
            {date ? <> This article was published on <span className="text-zinc-300">{date}</span>.</> : null}
          </p>
        </div>
      </div>
    </div>
  );
}
