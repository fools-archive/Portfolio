import { Sparkles, Brain, Code2, Bot } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, type Service } from "@/content/site";

const iconMap: Record<Service["iconKey"], React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  spark: Sparkles,
  brain: Brain,
  code: Code2,
  bot: Bot,
};

export function Services() {
  return (
    <section id="services" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.services.eyebrow}
        headline={site.services.headline}
      />
      <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-[color:var(--color-border-strong)] md:grid-cols-2">
        {site.services.items.map((s, i) => {
          const Icon = iconMap[s.iconKey];
          return (
            <Reveal key={s.id} variant="up" delay={i * 0.05} as="li">
              <article className="group relative flex h-full flex-col justify-between gap-10 bg-[color:var(--color-bg)] p-10 transition-colors duration-500 hover:bg-[color:var(--color-surface)] md:p-14">
                <div className="flex items-center justify-between">
                  <Icon size={36} strokeWidth={1.25} />
                  <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-fg-muted)]">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-3xl leading-tight md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="text-[color:var(--color-fg-muted)] max-w-[44ch] text-pretty">
                    {s.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
