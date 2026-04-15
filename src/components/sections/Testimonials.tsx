import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Testimonials() {
  return (
    <section className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.testimonials.eyebrow}
        headline={site.testimonials.headline}
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {site.testimonials.items.map((t, i) => (
          <Reveal key={i} variant="up" delay={i * 0.08}>
            <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 md:p-10">
              <blockquote className="font-display text-2xl leading-[1.15] tracking-[-0.01em] text-pretty md:text-3xl">
                <span aria-hidden className="text-[color:var(--color-accent)]">“</span>
                {t.quote}
                <span aria-hidden className="text-[color:var(--color-accent)]">”</span>
              </blockquote>
              <figcaption className="flex flex-col gap-1 border-t border-[color:var(--color-border)] pt-5">
                <span className="font-medium">{t.name}</span>
                <span className="text-sm text-[color:var(--color-fg-muted)]">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
