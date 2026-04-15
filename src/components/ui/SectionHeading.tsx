import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import { SplitText } from "@/components/motion/SplitText";

export function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  className,
  tag = "h2",
}: {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow align={align}>{eyebrow}</Eyebrow>}
      <SplitText
        as={tag}
        text={headline}
        className={cn(
          "font-display text-balance leading-[1.02] text-[color:var(--color-fg)]",
          tag === "h1" && "text-[clamp(3rem,8vw,7.5rem)]",
          tag === "h2" && "text-[clamp(2.25rem,5.5vw,5rem)]",
          tag === "h3" && "text-[clamp(1.75rem,4vw,3rem)]",
        )}
      />
      {subheadline && (
        <p className="max-w-[56ch] text-pretty text-[color:var(--color-fg-muted)] text-base md:text-lg">
          {subheadline}
        </p>
      )}
    </div>
  );
}
