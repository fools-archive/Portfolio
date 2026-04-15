import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="container-x section-y relative">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-4">
          <Reveal variant="up">
            <Eyebrow>{site.about.eyebrow}</Eyebrow>
          </Reveal>
          <Parallax strength={40} className="mt-10 hidden md:block">
            <div className="aspect-[3/4] rounded-2xl bg-[color:var(--color-surface-2)] ring-1 ring-[color:var(--color-border)]" />
          </Parallax>
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
