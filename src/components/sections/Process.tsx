import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.process.eyebrow}
        headline={site.process.headline}
      />
      <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
        {site.process.steps.map((step, i) => (
          <Reveal key={step.number} variant="up" delay={i * 0.08}>
            <article className="group relative flex h-full flex-col gap-5 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 transition-colors duration-500 hover:bg-[color:var(--color-surface-2)]">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-5xl text-[color:var(--color-accent)]">
                  {step.number}
                </span>
                <span className="h-px w-12 bg-[color:var(--color-border-strong)]" aria-hidden />
              </div>
              <h3 className="font-display text-3xl leading-tight">{step.title}</h3>
              <p className="text-[color:var(--color-fg-muted)] text-pretty">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
