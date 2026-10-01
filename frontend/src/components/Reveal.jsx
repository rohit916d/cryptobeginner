import { useEffect, useRef, useState } from "react";

/**
 * Reveal — scroll-triggered entrance animation for a premium feel.
 *
 * Wraps content that fades + rises into view the first time it enters the
 * viewport (IntersectionObserver, fires once). Stagger via `delay` (ms).
 * GPU-friendly: only opacity + transform. Fully disabled under
 * prefers-reduced-motion via CSS.
 *
 * Usage: <Reveal delay={120}><Card /></Reveal>
 */
export default function Reveal({ children, className = "", delay = 0, style = {}, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
