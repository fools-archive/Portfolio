"use client";

import { ArrowUpRight, Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function CTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.cta.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="container-x section-y hairline-t">
      <div className="flex flex-col items-start gap-10 md:gap-14">
        <Reveal variant="up">
          <Eyebrow>{site.cta.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal variant="up" delay={0.1}>
          <h2 className="font-display text-[clamp(3rem,10vw,10rem)] leading-[0.92] tracking-[-0.02em] text-balance">
            {site.cta.headlinePrefix}
            <span className="italic text-[color:var(--color-accent)]">
              {site.cta.headlineAccent}
            </span>
            {site.cta.headlineSuffix}
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.2}>
          <p className="text-readable max-w-xl text-lg text-[color:var(--color-fg-muted)] md:text-xl">
            {site.cta.sub}
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.3}>
          <a
            href={`mailto:${site.cta.email}`}
            data-cursor="link"
            className="group inline-flex items-center gap-4 rounded-full bg-[color:var(--color-fg)] px-8 py-5 text-[color:var(--color-bg)] transition-colors duration-500 hover:bg-[color:var(--color-accent)]"
          >
            <span className="font-medium">{site.cta.button}</span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
        <Reveal variant="fade" delay={0.4}>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href={`mailto:${site.cta.email}`}
              className="font-display italic text-3xl text-[color:var(--color-fg-muted)] underline-offset-4 hover:text-[color:var(--color-fg)] hover:underline md:text-4xl"
            >
              {site.cta.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              data-cursor="link"
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full border border-[color:var(--color-border-strong)] px-4 text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)] transition-colors duration-300 hover:border-[color:var(--color-fg)] hover:text-[color:var(--color-fg)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 text-[color:var(--color-accent)]"
                  >
                    <Check size={14} /> Copied
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2"
                  >
                    <Copy size={14} /> Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
