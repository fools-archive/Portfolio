"use client";

import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Intro() {
  const [visible, setVisible] = useState(true);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString().padStart(2, "0"));

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    if (prefersReduced) {
      const t = window.setTimeout(() => setVisible(false), 200);
      return () => {
        window.clearTimeout(t);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      };
    }

    const controls = animate(count, 100, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });

    const exitTimer = window.setTimeout(() => setVisible(false), 2100);

    return () => {
      controls.stop();
      window.clearTimeout(exitTimer);
    };
  }, [count]);

  const handleExit = () => {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    window.dispatchEvent(new Event("intro:done"));
  };

  return (
    <AnimatePresence onExitComplete={handleExit}>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[color:var(--color-bg)] grain"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden
        >
          <div className="relative flex flex-col items-center gap-8 px-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.32em] text-[color:var(--color-fg-muted)]"
            >
              Portfolio
            </motion.p>

            <div className="relative overflow-hidden pb-[0.12em]">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className="font-display leading-[1] tracking-[-0.02em] text-[clamp(3.5rem,14vw,10rem)] pr-[0.35em]"
              >
                {site.brand.name.split(" ")[0]}{" "}
                <span className="italic text-[color:var(--color-accent)]">
                  {site.brand.name.split(" ").slice(1).join(" ")}
                </span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex w-full max-w-[min(560px,80vw)] items-center gap-4"
            >
              <div className="relative h-px flex-1 overflow-hidden bg-[color:var(--color-border)]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  style={{ transformOrigin: "left" }}
                  className="absolute inset-0 bg-[color:var(--color-fg)]"
                />
              </div>
              <div className="flex items-baseline gap-[2px] font-display text-sm tabular-nums text-[color:var(--color-fg-muted)]">
                <motion.span>{rounded}</motion.span>
                <span className="text-[color:var(--color-fg-muted)]">%</span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-10 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-fg-muted)]"
          >
            {site.brand.mark}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
