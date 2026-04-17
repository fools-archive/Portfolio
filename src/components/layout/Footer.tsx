import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/content/site";

function SocialIcon({ label }: { label: string }) {
  const common = "h-4 w-4 shrink-0";
  switch (label) {
    case "GitHub":
      return <Github className={common} strokeWidth={1.5} aria-hidden />;
    case "LinkedIn":
      return <Linkedin className={common} strokeWidth={1.5} aria-hidden />;
    case "Email":
      return <Mail className={common} strokeWidth={1.5} aria-hidden />;
    case "X":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
        </svg>
      );
    case "LeetCode":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden>
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="container-x hairline-t relative py-14 md:py-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <a href="#top" className="focus-ring font-display text-5xl md:text-6xl w-fit" data-cursor="link">
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
                className="focus-ring w-fit text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
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
                className="focus-ring inline-flex items-center gap-2.5 text-sm text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)]"
                data-cursor="link"
              >
                <SocialIcon label={s.label} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-2 border-t border-[color:var(--color-border)] pt-6 text-xs text-[color:var(--color-fg-muted)] md:flex-row md:items-center md:justify-between">
        <span>{site.footer.credit}</span>
      </div>
    </footer>
  );
}
