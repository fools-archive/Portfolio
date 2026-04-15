import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function Stats() {
  return (
    <section className="container-x section-y hairline-t">
      <Reveal variant="up">
        <Eyebrow>{site.stats.eyebrow}</Eyebrow>
      </Reveal>
      <dl className="mt-12 grid gap-10 md:grid-cols-4 md:gap-6">
        {site.stats.items.map((s, i) => (
          <Reveal key={s.label} variant="up" delay={i * 0.06}>
            <div className="flex flex-col gap-3">
              <dt className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none tracking-[-0.02em]">
                {s.value}
              </dt>
              <dd className="text-sm uppercase tracking-[0.18em] text-[color:var(--color-fg-muted)]">
                {s.label}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
