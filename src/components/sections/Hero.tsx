"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="container-x relative flex min-h-[100svh] flex-col justify-between pb-16 pt-[calc(var(--nav-h)+2rem)] md:pt-[calc(var(--nav-h)+3rem)]"
    >
      <motion.div style={{ y, opacity }} className="flex flex-col gap-10">
        <Reveal variant="fade" delay={0.05}>
          <p className="font-display italic text-2xl md:text-3xl text-[color:var(--color-accent)]">
            Hi, I&apos;m {site.brand.name}.
          </p>
        </Reveal>
        <Reveal variant="fade" delay={0.1}>
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>
        </Reveal>

        <h1 className="font-display text-[clamp(3rem,9vw,9.5rem)] leading-[0.92] tracking-[-0.02em] text-balance">
          <SplitText
            text={site.hero.headlinePrefix}
            as="span"
            stagger={0.035}
            delay={0.1}
          />
          <span className="italic text-[color:var(--color-accent)]">
            <SplitText
              text={site.hero.headlineAccent}
              as="span"
              stagger={0.035}
              delay={0.35}
            />
          </span>
          <SplitText
            text={site.hero.headlineSuffix}
            as="span"
            stagger={0.035}
            delay={0.55}
          />
        </h1>

        <Reveal variant="up" delay={0.85} className="max-w-xl">
          <p className="text-[color:var(--color-fg-muted)] text-lg md:text-xl text-pretty">
            {site.hero.sub}
          </p>
        </Reveal>

        <Reveal variant="up" delay={1.05} className="flex flex-wrap items-center gap-4">
          <Button href={site.hero.primaryCta.href} variant="primary" size="lg" withArrow>
            {site.hero.primaryCta.label}
          </Button>
          <Button href={site.hero.secondaryCta.href} variant="secondary" size="lg">
            {site.hero.secondaryCta.label}
          </Button>
        </Reveal>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[color:var(--color-fg-muted)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <ArrowDown size={14} />
        </motion.span>
        {site.hero.scrollLabel}
      </motion.div>
    </section>
  );
}
