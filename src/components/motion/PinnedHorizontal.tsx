"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A sticky section whose inner row translates horizontally as the user scrolls.
 * Outer wrapper height determines scroll distance (taller = more scroll).
 * Inner row auto-computes its translate based on children count × card width.
 */
export function PinnedHorizontal({
  children,
  className,
  heightVh = 320,
  panels,
}: {
  children: ReactNode;
  className?: string;
  heightVh?: number;
  panels: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Translate from 0 to -(panels-1)/panels * 100% ish. We use a generous factor so the last card lands.
  const endPercent = `-${Math.max(0, (panels - 1) * (100 / panels) + 4)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endPercent]);

  return (
    <section
      ref={ref}
      className={cn("relative", className)}
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {reduce ? (
          <div className="flex w-full gap-8 overflow-x-auto px-[clamp(1.25rem,5vw,6rem)]">
            {children}
          </div>
        ) : (
          <motion.div
            style={{ x }}
            className="flex items-center gap-8 pl-[clamp(1.25rem,5vw,6rem)] pr-[clamp(1.25rem,5vw,6rem)] will-change-transform"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
