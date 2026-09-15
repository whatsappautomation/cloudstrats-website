import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./BrandLogo.css";

type Props = {
  variant?: "hero" | "nav" | "navOnDark" | "footer";
  className?: string;
};

export function BrandLogo({ variant = "hero", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${srx}deg) rotateY(${sry}deg)`;

  const src =
    variant === "nav"
      ? "/assets/logo-nav.png"
      : variant === "navOnDark" || variant === "footer"
        ? "/assets/logo-white.png"
        : "/assets/logo-hero.png";

  const interactive = variant === "hero";

  return (
    <motion.div
      ref={ref}
      className={`brand-logo brand-logo--${variant} ${className}`}
      style={interactive ? { transform, transformStyle: "preserve-3d" } : undefined}
      onMouseMove={
        interactive
          ? (e) => {
              const el = ref.current;
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const px = (e.clientX - rect.left) / rect.width;
              const py = (e.clientY - rect.top) / rect.height;
              ry.set((px - 0.5) * 16);
              rx.set((0.5 - py) * 12);
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? () => {
              rx.set(0);
              ry.set(0);
            }
          : undefined
      }
    >
      <img src={src} alt="CloudSTRATS" draggable={false} />
      {interactive && <div className="brand-logo__glow" aria-hidden />}
    </motion.div>
  );
}
