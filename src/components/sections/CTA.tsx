import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function CTA() {
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
          <p className="max-w-xl text-lg text-[color:var(--color-fg-muted)] md:text-xl">
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
          <a
            href={`mailto:${site.cta.email}`}
            className="font-display italic text-3xl text-[color:var(--color-fg-muted)] underline-offset-4 hover:text-[color:var(--color-fg)] hover:underline md:text-4xl"
          >
            {site.cta.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
