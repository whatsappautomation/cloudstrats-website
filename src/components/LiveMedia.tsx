import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./LiveMedia.css";

type LiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
};

export function LiveImage({ src, alt, className = "", caption }: LiveImageProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -28]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [1, 1, 1] : [1.06, 1, 1.04]);

  return (
    <div ref={ref} className={`live-image ${className}`}>
      <motion.img src={src} alt={alt} style={{ y, scale }} loading="lazy" />
      {caption ? <p className="live-image__caption">{caption}</p> : null}
    </div>
  );
}

type MediaStripProps = {
  items: { src: string; alt: string; label: string }[];
};

export function MediaStrip({ items }: MediaStripProps) {
  return (
    <div className="media-strip">
      {items.map((item, i) => (
        <motion.figure
          key={item.src}
          className="media-strip__item"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: i * 0.08, duration: 0.55 }}
          whileHover={{ y: -6 }}
        >
          <img src={item.src} alt={item.alt} loading="lazy" />
          <figcaption>{item.label}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
