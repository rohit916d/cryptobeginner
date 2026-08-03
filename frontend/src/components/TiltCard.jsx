import { useRef } from "react";

/**
 * Wraps children in a card that tilts in 3D toward the cursor — a subtle,
 * premium micro-interaction. Respects prefers-reduced-motion.
 */
export default function TiltCard({ children, className = "", maxTilt = 8, style = {}, as: Component = "div", ...rest }) {
  const ref = useRef(null);
  const raf = useRef(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    if (raf.current) cancelAnimationFrame(raf.current);

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -maxTilt;
    const rotateY = ((x / rect.width) - 0.5) * maxTilt;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    raf.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      ref.current.style.setProperty("--glare-x", `${px}%`);
      ref.current.style.setProperty("--glare-y", `${py}%`);
    });
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-card ${className}`}
      style={{ transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)", ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
}
