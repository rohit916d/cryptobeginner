import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/5 mt-24 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFE08A] via-[#FFBF00] to-[#D4AF37] flex items-center justify-center">
                <span className="text-[#0A0A0B] font-black text-sm">C</span>
              </div>
              <span className="font-bold text-white">Crypto Beginner</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Beginner-friendly crypto education. Learn the basics safely, without hype, predictions, or financial advice.
            </p>
            <p className="mt-4 text-xs text-zinc-600">
              © {new Date().getFullYear()} Crypto Beginner · cryptobeginner.in · Educational content only — not financial advice.
            </p>
          </div>

          <div>
            <h4 className="label-eyebrow mb-3">Learn</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/learn" className="hover:text-[#FFBF00]">Learning Center</Link></li>
              <li><Link to="/dictionary" className="hover:text-[#FFBF00]">Crypto Dictionary</Link></li>
              <li><Link to="/blog" className="hover:text-[#FFBF00]">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-[#FFBF00]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#FFBF00]">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-[#FFBF00]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#FFBF00]">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#FFBF00]">Cookie Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-[#FFBF00]">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
