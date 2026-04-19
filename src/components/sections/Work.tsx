"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, type Project } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.work.eyebrow}
        headline={site.work.headline}
      />

      <ul className="mt-16 flex flex-col">
        {site.work.projects.map((p, i) => (
          <Reveal key={p.id} variant="up" delay={i * 0.04} as="li">
            <a
              href={(p as Project).href ?? "#"}
              target={(p as Project).href ? "_blank" : undefined}
              rel={(p as Project).href ? "noopener noreferrer" : undefined}
              className="focus-ring group relative block border-t border-[color:var(--color-border)] last:border-b"
              data-cursor="view"
            >
              <div className="grid grid-cols-12 items-baseline gap-4 py-8 md:py-12">
                <span className="text-readable col-span-1 text-xs uppercase tracking-[0.24em] text-[color:var(--color-fg-muted)] md:text-sm">
                  0{i + 1}
                </span>
                <div className="col-span-11 flex flex-col gap-3 md:col-span-6">
                  <h3 className="font-display text-4xl leading-[0.95] tracking-[-0.01em] transition-colors duration-500 group-hover:text-[color:var(--color-accent)] md:text-6xl">
                    {p.title}
                  </h3>
                  <p className="text-readable max-w-[52ch] text-[color:var(--color-fg-muted)] text-pretty">
                    {p.blurb}
                  </p>
                </div>
                <div className="col-span-8 hidden flex-wrap gap-2 md:col-span-4 md:flex">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-readable rounded-full border border-[color:var(--color-border-strong)] px-3 py-1 text-xs text-[color:var(--color-fg-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-readable col-span-4 flex items-center justify-end gap-3 text-sm text-[color:var(--color-fg-muted)] md:col-span-1">
                  <span>{p.year}</span>
                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[color:var(--color-accent)]"
                  />
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>

      <div className="mt-12 flex justify-end">
        <a
          href="#"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
        >
          {site.work.seeAll}
        </a>
      </div>
    </section>
  );
}
