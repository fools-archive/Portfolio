/**
 * All human-editable site content lives here.
 * Swap these values with your real info — nothing else needs to change.
 */

export type NavLink = { label: string; href: string };

export type Service = {
  id: string;
  title: string;
  description: string;
  iconKey: "spark" | "brain" | "code" | "bot";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  tech: string[];
  href?: string;
  year: string;
  tag: string;
};

export type Stat = { value: string; label: string };

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type FAQItem = { q: string; a: string };

export type SocialLink = { label: string; href: string };

export const site = {
  meta: {
    title: "Harsh Sharma — AI-focused Full Stack Developer",
    description:
      "Full stack developer focused on LLMs, agentic systems, and the unsexy plumbing in between.",
    url: "https://example.com",
  },

  brand: {
    mark: "HS.",
    name: "Harsh Sharma",
  },

  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],

  hero: {
    eyebrow: "AI-focused Full Stack Developer",
    headlinePrefix: "Building ",
    headlineAccent: "AI-native",
    headlineSuffix: " products that actually ship.",
    sub: "Full stack developer focused on LLMs, agentic systems, and the unsexy plumbing in between. Available for freelance & long-term work.",
    primaryCta: { label: "See Work", href: "#work" },
    secondaryCta: { label: "Book a Call", href: "#contact" },
    scrollLabel: "Scroll",
  },

  marquee: [
    "Next.js",
    "TypeScript",
    "Python",
    "OpenAI",
    "Anthropic",
    "Vercel",
    "Supabase",
    "PostgreSQL",
    "Pinecone",
    "LangChain",
    "tRPC",
    "Tailwind",
  ],

  about: {
    eyebrow: "About",
    headline: "I build thoughtful software with a heavy AI lean.",
    body: [
      "I'm a full stack engineer who spends most days wiring LLMs to real product surfaces — chat, copilots, retrieval, and the quiet automations that make teams 10x faster. I care about the details most people skip: prompt evaluation, cost per request, graceful failure, and UX that respects the user's time.",
      "Previously I shipped internal tools at fast-growing startups and consulted on AI integrations for teams from 3 to 300. Based in India, working worldwide.",
    ],
    signature: "— HS",
  },

  process: {
    eyebrow: "Process",
    headline: "Three steps. No surprises.",
    steps: [
      {
        number: "01",
        title: "Discovery & Scoping",
        description:
          "We start with a 60-minute deep-dive. I map your goal to a shippable slice, flag risks early, and send back a tight proposal with milestones and a fixed price.",
      },
      {
        number: "02",
        title: "Build & Iterate",
        description:
          "I work in weekly sprints with live Linear, daily Looms, and a staging URL from day one. You always know what I'm doing and what's next.",
      },
      {
        number: "03",
        title: "Ship & Maintain",
        description:
          "I don't disappear after launch. You get a handoff doc, a monitoring dashboard, and an optional retainer for ongoing work or on-call.",
      },
    ] satisfies ProcessStep[],
  },

  services: {
    eyebrow: "Services",
    headline: "What I can help with.",
    items: [
      {
        id: "ai-product",
        title: "AI Product Engineering",
        description:
          "End-to-end AI features — from first prompt to production. Evals, cost controls, graceful fallbacks, the works.",
        iconKey: "spark",
      },
      {
        id: "llm-rag",
        title: "LLM Integration & RAG",
        description:
          "Bring your own data to an LLM. Vector stores, hybrid retrieval, chunking strategy, and answer citations that don't hallucinate.",
        iconKey: "brain",
      },
      {
        id: "fullstack",
        title: "Full Stack Web Apps",
        description:
          "Typed end-to-end — Next.js, tRPC, Postgres, Vercel. Fast, boring, production-ready. Exactly what you want.",
        iconKey: "code",
      },
      {
        id: "agents",
        title: "Agentic Systems & Automation",
        description:
          "Tool-using agents that do real work — scheduled jobs, background workers, function calling, and human-in-the-loop where it matters.",
        iconKey: "bot",
      },
    ] satisfies Service[],
  },

  work: {
    eyebrow: "Featured Work",
    headline: "A few things I've shipped.",
    seeAll: "All Projects →",
    projects: [
      {
        id: "p1",
        title: "Lumen",
        blurb:
          "Internal knowledge copilot for a 120-person ops team. RAG over 14k Notion pages with cited answers.",
        tech: ["Next.js", "Pinecone", "OpenAI", "tRPC"],
        year: "2025",
        tag: "AI / Internal Tools",
      },
      {
        id: "p2",
        title: "Marlow",
        blurb:
          "Customer-facing AI agent that handles 38% of support tickets end-to-end. Self-healing with human escalation.",
        tech: ["Anthropic", "Postgres", "Temporal", "Next.js"],
        year: "2025",
        tag: "Agentic / CX",
      },
      {
        id: "p3",
        title: "Fieldnote",
        blurb:
          "Voice-to-structured-data mobile app for field researchers. Offline-first, Whisper + custom extraction.",
        tech: ["React Native", "Whisper", "SQLite", "Supabase"],
        year: "2024",
        tag: "Mobile / AI",
      },
      {
        id: "p4",
        title: "Plotweave",
        blurb:
          "Writing workspace with LLM-powered outlining, continuity checks, and citation-safe drafting.",
        tech: ["Next.js", "OpenAI", "PlanetScale", "Clerk"],
        year: "2024",
        tag: "Creative / SaaS",
      },
    ] satisfies Project[],
  },

  stats: {
    eyebrow: "By the numbers",
    items: [
      { value: "4+", label: "Years shipping" },
      { value: "25+", label: "Projects delivered" },
      { value: "5", label: "Production AI apps" },
      { value: "100%", label: "On-time delivery" },
    ] satisfies Stat[],
  },

  testimonials: {
    eyebrow: "Kind words",
    headline: "What people say.",
    items: [
      {
        quote:
          "Shipped our entire AI copilot in six weeks — and the code is cleaner than anything our in-house team has written. Rare combination.",
        name: "Placeholder Name",
        role: "CTO, Placeholder Co.",
      },
      {
        quote:
          "Treats prompts like code and evals like tests. That alone made our rollout boring in the best way.",
        name: "Placeholder Name",
        role: "Head of Product, Placeholder Labs",
      },
      {
        quote:
          "Communicated better than any contractor we've hired. Weekly Looms, clear trade-offs, always ahead of blockers.",
        name: "Placeholder Name",
        role: "Founder, Placeholder Inc.",
      },
    ] satisfies Testimonial[],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Common questions.",
    items: [
      {
        q: "What kinds of projects do you take on?",
        a: "AI-heavy product work above all — copilots, RAG, agentic systems, evaluation pipelines. I also do straightforward full-stack builds (Next.js + Postgres) when the work is interesting and the team is good.",
      },
      {
        q: "What's your stack?",
        a: "Next.js, TypeScript, tRPC, Postgres/Supabase, Vercel on the web side. Python for ML-adjacent work. OpenAI, Anthropic, and self-hosted OSS models depending on the use case.",
      },
      {
        q: "How do you price?",
        a: "Fixed-price per milestone after a paid scoping call. Weekly retainers for ongoing work. No hourly. You know the number before I start.",
      },
      {
        q: "How long does a typical project take?",
        a: "Small AI feature: 2–3 weeks. Full copilot or internal tool: 6–10 weeks. Multi-surface agent: 8–16 weeks. I'll give you a concrete timeline after the scoping call.",
      },
      {
        q: "Do you handle evals and post-launch monitoring?",
        a: "Yes. Every project ships with a baseline eval set, prompt regression checks, and a simple dashboard for cost and quality. Retainer clients get monthly eval reviews.",
      },
      {
        q: "Can I hire you long-term?",
        a: "Yes — retainers (1–3 days/week) or fractional engineering for a fixed term. I'm not looking for full-time employment right now.",
      },
    ] satisfies FAQItem[],
  },

  cta: {
    eyebrow: "Let's build",
    headlinePrefix: "Got an idea worth ",
    headlineAccent: "shipping",
    headlineSuffix: "?",
    sub: "Tell me about it. First reply within 24 hours.",
    email: "hello@example.com",
    button: "Start a conversation",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/" },
    { label: "X", href: "https://x.com/" },
    { label: "Email", href: "mailto:hello@example.com" },
  ] satisfies SocialLink[],

  footer: {
    tagline: "Built from scratch — inspired by Portfolite.",
    credit: "© 2026 Harsh Sharma. All rights reserved.",
  },
};

export type Site = typeof site;
