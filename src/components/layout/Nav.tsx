"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-md"
            : "backdrop-blur-0",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-500",
            scrolled
              ? "opacity-100 bg-[color:var(--color-bg)]/75 border-b border-[color:var(--color-border)]"
              : "opacity-0",
          )}
          aria-hidden
        />
        <div className="container-x relative flex h-[var(--nav-h)] items-center justify-between">
          <a
            href="#top"
            className="font-display text-2xl tracking-tight text-[color:var(--color-fg)] md:text-3xl"
            data-cursor="link"
          >
            {site.brand.mark}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--color-fg)] hover:text-[color:var(--color-accent)] transition-colors duration-300 tracking-tight"
                data-cursor="link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="md" withArrow>
              Book a Call
            </Button>
          </div>

          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border-strong)]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" },
          closed: { opacity: 0, pointerEvents: "none" },
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div
          className="absolute inset-0 bg-[color:var(--color-bg)]"
          onClick={() => setMobileOpen(false)}
        />
        <motion.nav
          variants={{
            open: { y: 0 },
            closed: { y: -20 },
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex h-full flex-col items-start justify-center gap-1 px-8 pt-20"
        >
          {site.nav.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: mobileOpen ? 0.1 + i * 0.05 : 0, duration: 0.5 }}
              className="font-display text-5xl leading-tight text-[color:var(--color-fg)]"
            >
              {item.label}
            </motion.a>
          ))}
          <div className="mt-8">
            <Button href="#contact" variant="primary" size="lg" withArrow>
              Book a Call
            </Button>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
