import { useRef } from "react";

/**
 * Wraps a button/link so it subtly "pulls" toward the cursor when hovered —
 * a premium micro-interaction seen on high-end product sites.
 */
export default function MagneticButton({ children, className = "", as: Component = "a", strength = 0.35, ...rest }) {
  const ref = useRef(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)", display: "inline-flex" }}
      {...rest}
    >
      {children}
    </Component>
  );
}
