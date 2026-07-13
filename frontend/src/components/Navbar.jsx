import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Dashboard" },
  { to: "/learn", label: "Learn" },
  { to: "/dictionary", label: "Dictionary" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" data-testid="brand-logo" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FFE08A] via-[#FFBF00] to-[#D4AF37] flex items-center justify-center shadow-[0_0_18px_rgba(255,191,0,0.35)]">
            <span className="text-[#0A0A0B] font-black text-sm">C</span>
          </div>
          <span className="font-bold text-white tracking-tight">Crypto Beginner</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? "text-[#FFBF00]" : "text-zinc-400 hover:text-white"
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/learn" data-testid="nav-cta-start" className="btn-primary text-sm">
            Start Learning
          </Link>
        </div>

        <button
  type="button"
  data-testid="mobile-menu-toggle"
  onClick={() => setOpen(!open)}
  className="md:hidden text-white p-2"
  aria-label={open ? "Close navigation menu" : "Open navigation menu"}
  title={open ? "Close navigation menu" : "Open navigation menu"}
>
          {open ? (
  <X size={22} aria-hidden="true" />
) : (
  <Menu size={22} aria-hidden="true" />
)}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0A0A0B]/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium rounded-lg ${
                    isActive ? "bg-[#FFBF00]/10 text-[#FFBF00]" : "text-zinc-300"
                  }`
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/learn" className="btn-primary text-sm text-center mt-2">Start Learning</Link>
          </div>
        </div>
      )}
    </header>
  );
}
