import { useSEO } from "../lib/seo";
import { ShieldCheck, BookOpen, HeartHandshake } from "lucide-react";

export default function About() {
  useSEO({
    title: "About Us",
    description: "CryptoBeginnersHub is a free education platform helping beginners learn crypto safely — without hype or financial advice.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
      <div className="label-eyebrow">About</div>
      <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        We make crypto <span className="brand-grad-text">approachable.</span>
      </h1>
      <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
        CryptoBeginnersHub is a free, ad-free education platform built for people who know nothing about crypto — and would like to change that, safely. We don't sell tokens. We don't run trading signals. We just teach.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {[
          { icon: BookOpen, title: "Education First", body: "Every lesson is written for beginners. Plain English, real-world examples, zero jargon." },
          { icon: ShieldCheck, title: "Safety Always", body: "We highlight scams, phishing patterns, and self-custody best practices alongside every topic." },
          { icon: HeartHandshake, title: "No Financial Advice", body: "We never recommend buying or selling anything. Our content is purely educational." },
        ].map((v) => (
          <div key={v.title} className="card-base p-6">
            <v.icon size={20} className="text-[#FFBF00]" />
            <h3 className="mt-3 text-lg font-bold text-white">{v.title}</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 card-base p-7">
        <h3 className="text-xl font-bold text-white">Our mission</h3>
        <p className="mt-3 text-zinc-400 leading-relaxed">
          Millions of beginners enter crypto each year and lose money to scams, hacks, and confusion. We exist to lower that loss — one clear lesson at a time. If we can help even one reader avoid a phishing site or back up their seed phrase properly, we've done our job.
        </p>
      </div>
    </div>
  );
}
