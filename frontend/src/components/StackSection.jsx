import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Wrap a full-bleed section in this to get an Apple-style "stacking cards"
 * scroll effect: the section sticks to the top of the viewport, then
 * scales down and dims slightly as the NEXT StackSection scrolls up and
 * settles on top of it.
 *
 * Intended for static/visual sections (hero banners, feature grids, step
 * lists, CTAs) — not for content with unpredictable height or interactive
 * widgets (tables, forms, search, live data), since those don't play well
 * with a fixed-height sticky+scale container.
 *
 * `index` should increase for each StackSection on the page (controls
 * z-index so later sections visually land on top of earlier ones).
 */
export default function StackSection({ children, index = 0, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.5]);
  const borderRadius = useTransform(scrollYProgress, [0.7, 1], [0, 28]);

  return (
    <div
      ref={ref}
      className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 10 + index }}
    >
      <motion.div
        style={{ scale, opacity, borderRadius }}
        className={`w-full min-h-screen flex items-center justify-center bg-[#0B0E14] ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
