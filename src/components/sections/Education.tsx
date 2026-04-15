import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";

function Card({
  item,
  align,
}: {
  item: (typeof site.education.items)[number];
  align: "left" | "right";
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-left transition-colors duration-500 hover:bg-[color:var(--color-surface-2)] md:p-8",
        align === "right" && "md:text-right",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[color:var(--color-accent)]",
          align === "right" && "md:justify-end",
        )}
      >
        <span>{item.year}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl leading-tight text-[color:var(--color-fg)] md:text-[1.75rem]">
        {item.degree}
      </h3>
      <p className="mt-3 text-sm text-[color:var(--color-fg-muted)] md:text-base">
        {item.institution}
      </p>
    </article>
  );
}

export function Education() {
  return (
    <section id="education" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.education.eyebrow}
        headline={site.education.headline}
      />

      <div className="relative mt-16">
        {/* vertical spine */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-6 w-px bg-[color:var(--color-border-strong)] md:left-1/2 md:-translate-x-1/2"
        />

        <ol className="flex flex-col gap-10 md:gap-16">
          {site.education.items.map((item, i) => {
            const onRight = i % 2 === 0;
            return (
              <li key={i} className="relative md:grid md:grid-cols-2 md:gap-16">
                {/* node on the spine */}
                <span
                  aria-hidden
                  className="absolute left-6 top-6 z-[1] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)] ring-4 ring-[color:var(--color-bg)] md:left-1/2 md:top-10"
                />

                {/* card column */}
                {onRight ? (
                  <>
                    <div className="hidden md:block" aria-hidden />
                    <div className="pl-14 md:pl-0">
                      <Reveal variant="right" delay={i * 0.06}>
                        <Card item={item} align="left" />
                      </Reveal>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pl-14 md:pl-0">
                      <Reveal variant="left" delay={i * 0.06}>
                        <Card item={item} align="right" />
                      </Reveal>
                    </div>
                    <div className="hidden md:block" aria-hidden />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
