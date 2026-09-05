import { Link } from "react-router-dom";
import { X as XIcon, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative mt-24 bg-[#0B0E14]">
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C8F169] to-[#9B87F5] flex items-center justify-center shadow-[0_0_18px_rgba(200,241,105,0.25)]">
                <span className="text-[#0B0E14] font-black text-sm">C</span>
              </div>
              <span className="font-bold text-white">Crypto Beginner</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Beginner-friendly crypto education. Learn the basics safely, without hype, predictions, or financial advice.
            </p>
            <a
              href="https://twitter.com/Cryptobegin_ner"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-social-x"
              className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-[#C8F169] transition-colors group"
            >
              <span className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-[#C8F169]/40 transition-colors">
                <XIcon size={14} />
              </span>
              @Cryptobegin_ner
            </a>
            <p className="mt-6 text-xs text-zinc-600">
              © {new Date().getFullYear()} Crypto Beginner · cryptobeginner.in · Educational content only — not financial advice.
            </p>
          </div>

          <div>
            <h4 className="label-eyebrow mb-3">Learn</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/learn" className="hover:text-[#C8F169] transition-colors inline-flex items-center gap-1 group">Learning Center <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/dictionary" className="hover:text-[#C8F169] transition-colors">Crypto Dictionary</Link></li>
              <li><Link to="/blog" className="hover:text-[#C8F169] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-3">Company</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-[#C8F169] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#C8F169] transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-[#C8F169] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#C8F169] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#C8F169] transition-colors">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#C8F169] transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
