"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Subtle vertical parallax tied to element's scroll progress through the viewport.
 * `strength` = 0.15 means the inner element moves ±15% of its container height.
 */
export function Parallax({
  children,
  strength = 0.15,
  className,
  direction = "y",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
  direction?: "y" | "x";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const delta = `${strength * 100}%`;
  const negDelta = `${-strength * 100}%`;

  const y = useTransform(scrollYProgress, [0, 1], [delta, negDelta]);
  const x = useTransform(scrollYProgress, [0, 1], [delta, negDelta]);

  const style = reduce
    ? undefined
    : direction === "y"
    ? { y }
    : { x };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={style} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
