"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Progress across the whole section: 0 when its top hits viewport bottom,
  // 1 when its bottom leaves viewport top.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Fade in as section enters (~0.15 → 0.3), hold while centered (0.3 → 0.7),
  // fade out as we scroll past (0.7 → 0.9).
  const rawOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.28, 0.7, 0.9],
    [0, 1, 1, 0],
  );
  const rawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rawScale = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.7, 0.9],
    [0.96, 1, 1, 0.98],
  );

  // Spring-smooth the raw scroll values so motion feels buttery.
  const spring = { stiffness: 90, damping: 22, mass: 0.4 };
  const opacity = useSpring(rawOpacity, spring);
  const y = useSpring(rawY, spring);
  const scale = useSpring(rawScale, spring);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="container-x section-y relative"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Reveal variant="up">
            <Eyebrow>{site.about.eyebrow}</Eyebrow>
          </Reveal>

          {/* Sticky wrapper keeps the image pinned while the text column scrolls */}
          <div className="mt-10 hidden md:block">
            <div className="sticky top-[calc(var(--nav-h)+2.5rem)]">
              <motion.div
                style={{ opacity, y, scale }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl will-change-transform"
              >
                <Image
                  src="/portrait.png"
                  alt={`Portrait of ${site.brand.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <Reveal variant="up" delay={0.05}>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-balance">
              {site.about.headline}
            </h2>
          </Reveal>
          <div className="mt-10 flex flex-col gap-6 max-w-[60ch]">
            {site.about.body.map((p, i) => (
              <Reveal key={i} variant="up" delay={0.15 + i * 0.05}>
                <p className="text-[color:var(--color-fg-muted)] text-lg md:text-xl text-pretty">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal variant="up" delay={0.3}>
              <p className="font-display italic text-3xl md:text-4xl text-[color:var(--color-fg)]">
                {site.about.signature}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
