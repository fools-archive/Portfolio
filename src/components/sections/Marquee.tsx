import { site } from "@/content/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <section
      aria-label="Tech stack"
      className="hairline-t hairline-b relative overflow-hidden py-8 md:py-10"
    >
      <div
        className="flex w-max gap-12 whitespace-nowrap pl-12"
        style={{ animation: "marquee-x 40s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-3xl md:text-5xl text-[color:var(--color-fg)]"
          >
            {item}
            <span
              aria-hidden
              className="mx-6 inline-block h-2 w-2 translate-y-[-0.5em] rounded-full bg-[color:var(--color-accent)]"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
