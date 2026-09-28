import { User } from "lucide-react";

/**
 * Author bio box shown under articles/lessons. Strengthens E-E-A-T signals:
 * a named editorial entity with a clear review process, instead of an
 * anonymous byline.
 */
export default function AuthorBio({ author, date }) {
  const name = author || "Crypto Beginner Editorial Team";
  return (
    <div className="card-base p-6 mt-12">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-[#C8F169]/10 border border-[#C8F169]/20 flex items-center justify-center shrink-0">
          <User size={20} className="text-[#C8F169]" />
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-zinc-500 font-bold">Written by</div>
          <div className="text-white font-semibold mt-0.5">{name}</div>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            The Crypto Beginner editorial team researches and fact-checks every guide before
            publishing. We explain crypto in plain language, never give financial advice, and
            update articles when the facts change.
            {date ? <> This article was published on <span className="text-zinc-300">{date}</span>.</> : null}
          </p>
        </div>
      </div>
    </div>
  );
}
