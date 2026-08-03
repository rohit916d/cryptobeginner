import { useEffect, useRef, useState } from "react";

/**
 * Displays `value` (e.g. "21M", "1.27T", "24/7") and, when it first scrolls
 * into view, animates the numeric portion counting up from 0. Non-numeric
 * strings (like "24/7") just fade in — no broken counting.
 */
export default function AnimatedCounter({ value, duration = 1200, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);
  const started = useRef(false);

  const match = typeof value === "string" ? value.match(/^([^\d]*)([\d.,]+)(.*)$/) : null;

  useEffect(() => {
    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!match || prefersReduced || !ref.current) {
      setDisplay(value);
      return;
    }

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = target * eased;
              setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, match, duration]);

  return (
    <span ref={ref} className={className}>
      {display ?? (match ? `${match[1]}0${match[3]}` : value)}
    </span>
  );
}
