"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Splits text into word + character spans for staggered reveal.
 * Keeps whitespace between words; characters animate independently.
 */
export function SplitText({
  text,
  className,
  wordClassName,
  charClassName,
  as: Tag = "span",
  delay = 0,
  stagger = 0.025,
  duration = 0.85,
  from = "bottom",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  delay?: number;
  stagger?: number;
  duration?: number;
  from?: "bottom" | "top";
}) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const y = from === "bottom" ? "110%" : "-110%";
  const child: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { y, opacity: 0 },
        show: {
          y: "0%",
          opacity: 1,
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      };

  const words = text.split(" ");
  const MotionTag = motion[Tag] as typeof motion.span;

  return (
    <MotionTag
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className={cn(
            "inline-block overflow-hidden whitespace-nowrap align-baseline pt-[0.18em] -mt-[0.18em] pb-[0.22em] -mb-[0.22em] pr-[0.08em] -mr-[0.08em]",
            wordClassName,
          )}
          aria-hidden="true"
        >
          {Array.from(word).map((ch, ci) => (
            <motion.span
              key={ci}
              variants={child}
              className={cn("inline-block will-change-transform", charClassName)}
            >
              {ch}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
