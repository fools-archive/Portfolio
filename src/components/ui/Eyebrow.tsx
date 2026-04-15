import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-fg-muted)]",
        align === "center" && "mx-auto",
        className,
      )}
    >
      <span className="h-px w-8 bg-[color:var(--color-border-strong)]" aria-hidden />
      <span>{children}</span>
    </div>
  );
}
