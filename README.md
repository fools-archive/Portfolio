# Portfolio — Harsh Kumar

A dark, motion-heavy personal portfolio built with **Next.js 16**, **Tailwind v4**, **Framer Motion**, and a custom **three.js** shader background.

Live URL: _coming soon_

---

## Stack

| Layer        | Tech                                                      |
| ------------ | --------------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)                        |
| Language     | TypeScript 5                                              |
| Styling      | Tailwind CSS v4 (`@theme` tokens in `globals.css`)        |
| Motion       | Framer Motion 11, Lenis (smooth scroll)                   |
| 3D / Shader  | three.js, @react-three/fiber, @react-three/drei           |
| Icons        | lucide-react                                              |
| Fonts        | Inter (sans), Instrument Serif (display) via `next/font`  |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server (Turbopack)
npm run dev

# 3. Open
http://localhost:3000
```

### Scripts

| Command         | What it does                        |
| --------------- | ----------------------------------- |
| `npm run dev`   | Starts Next.js dev server           |
| `npm run build` | Production build                    |
| `npm run start` | Serves the production build         |
| `npm run lint`  | Runs ESLint                         |

---

## Project structure

```
src/
├── app/
│   ├── globals.css         # Design tokens (colors, radii, easing) + utilities
│   ├── layout.tsx          # Root layout: fonts, Nav, Footer, Cursor, 3D scene
│   └── page.tsx            # Home — composes all sections
├── components/
│   ├── layout/             # Nav, Footer
│   ├── motion/             # Reveal, SplitText, Parallax, SmoothScroll,
│   │                       # Cursor, BackgroundScene (GLSL smoke shader)
│   ├── sections/           # Hero, Marquee, About, Process, Services,
│   │                       # Work, Stats, Testimonials, FAQ, CTA
│   └── ui/                 # Button, Eyebrow, SectionHeading, Accordion
├── content/
│   └── site.ts             # All human-editable copy lives here
└── lib/
    └── cn.ts               # className merger
```

---

## Editing content

All copy — headlines, services, projects, FAQ, testimonials, socials, etc. — lives in a single typed file:

```ts
// src/content/site.ts
export const site = {
  meta: { ... },
  hero: { ... },
  services: { items: [ ... ] },
  work:     { projects: [ ... ] },
  // ...
};
```

Swap the placeholder values with your own. Types enforce the shape — TypeScript will flag a missing field.

---

## Theming

Design tokens are defined once in `src/app/globals.css` under `@theme`:

```css
--color-bg:       #0A0908;
--color-fg:       #F2EDE4;
--color-accent:   #B8C08A;
--font-sans:      var(--font-inter), ...;
--font-serif:     var(--font-instrument-serif), ...;
--radius-lg:      1.25rem;
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
```

Tailwind v4 picks these up automatically, so `bg-[color:var(--color-accent)]` and friends work out of the box.

---

## The 3D background

`src/components/motion/BackgroundScene.tsx` renders a fullscreen fragment shader in an `<r3f.Canvas>`:

- **Domain-warped FBM noise** (3 layers of fractal Brownian motion) produces flowing, silk-like wisps.
- **Time uniform** drifts the field continuously.
- **Scroll uniform** rotates and translates the noise field, so the wisps respond to page scroll.
- **Orthographic camera + unit quad** — no geometry, no lights, no depth buffer. Cheap and smooth.

To tweak the look, edit the `fragmentShader` constant — most dials live in the `main()` function (warp strength, smoothstep thresholds, tint mix).

---

## Accessibility

- Semantic landmarks: `<nav>`, `<main>`, `<footer>`, `<section>` with headings.
- Skip-to-content link at the top of `<body>`.
- `prefers-reduced-motion` is respected — Reveal/SplitText skip their animations and global CSS disables transitions.
- Custom cursor only activates on hover-capable, fine-pointer devices.
- Focus states use an accent-colored outline, not `outline: none`.

---

## Versioning

This project uses plain git tags for milestone snapshots:

| Tag    | Description                                   |
| ------ | --------------------------------------------- |
| `v1.0` | Initial scaffold (light cream theme)          |
| `v1.1` | Dark theme + wireframe 3D scroll background   |
| `v1.2` | Replaced geometry with silk/smoke shader      |

Roll back with:

```bash
git checkout v1.0     # read-only snapshot
# or
git reset --hard v1.0 # destructive revert (careful)
```

---

## Deployment

The app is a standard Next.js 16 App Router project and deploys cleanly to Vercel:

```bash
# From the project root, after `npx vercel login`
npx vercel
```

No environment variables are required — content is fully static.

---

## License

MIT © Harsh Kumar
