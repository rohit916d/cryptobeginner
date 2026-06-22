import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { useSEO } from "../lib/seo";

export default function NotFound() {
  useSEO({
    title: "Page not found",
    description: "The page you're looking for doesn't exist. Head back to Crypto Beginner.",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-24 md:py-32 text-center" data-testid="page-404">
      <div className="font-mono text-[10rem] leading-none brand-grad-text tracking-tighter">404</div>
      <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">Lost on the blockchain</h1>
      <p className="mt-4 text-zinc-400 max-w-md mx-auto leading-relaxed">
        We couldn't find that page. It may have been moved, renamed, or it never existed in the first place.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" data-testid="404-home" className="btn-primary inline-flex items-center gap-2">
          <Home size={14} /> Back to Dashboard
        </Link>
        <Link to="/learn" data-testid="404-learn" className="btn-secondary inline-flex items-center gap-2">
          Start Learning <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
