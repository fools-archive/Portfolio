import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="container-x hairline-t relative py-14 md:py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <a href="#top" className="font-display text-5xl md:text-6xl">
            {site.brand.mark}
          </a>
          <p className="max-w-xs text-sm text-[color:var(--color-fg-muted)]">
            {site.footer.tagline}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Sitemap
            </div>
            {site.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
                data-cursor="link"
              >
                {n.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--color-fg-muted)]">
              Elsewhere
            </div>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
                data-cursor="link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-2 border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-fg-muted)] md:flex-row md:items-center md:justify-between">
        <span>{site.footer.credit}</span>
        <span>Inspired by portfolite.framer.website</span>
      </div>
    </footer>
  );
}
