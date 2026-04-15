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

export type FAQItem = { q: string; a: string };

export type SocialLink = { label: string; href: string };

export const site = {
  meta: {
    title: "Harsh Kumar — AI-focused Full Stack Developer",
    description:
      "Building AI-driven systems that solve real problems. Full stack developer based in India focused on intelligent, production-ready applications.",
    url: "https://example.com",
  },

  brand: {
    mark: "HK.",
    name: "Harsh Kumar",
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
    headlineSuffix: " products that actually solve real-world problems.",
    sub: "Building AI-driven systems that solve real problems. Based in India, working on projects that combine real-time systems, AI models, and clean user experiences.",
    primaryCta: { label: "See Work", href: "#work" },
    secondaryCta: { label: "Get in Touch", href: "#contact" },
    scrollLabel: "Scroll",
  },

  marquee: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Framer Motion",
    "Socket.IO",
    "Python",
    "OpenAI",
    "REST APIs",
    "Git",
    "Vercel",
  ],

  about: {
    eyebrow: "About",
    headline: "I build intelligent systems, not just applications.",
    body: [
      "I'm an AI-focused full stack developer building systems that go beyond simple CRUD apps. I focus on integrating intelligence into software — creating tools that can think, adapt, and automate real workflows.",
      "My work sits at the intersection of backend systems, frontend experience, and AI integration. I enjoy turning complex ideas into usable, production-ready applications.",
      "Currently, I'm focused on building projects that combine real-time systems, AI models, and clean user experiences.",
    ],
    signature: "— HK",
  },

  process: {
    eyebrow: "Process",
    headline: "Three steps. No surprises.",
    steps: [
      {
        number: "01",
        title: "Discovery & Scoping",
        description:
          "We start with a deep-dive call. I map your goal to a shippable slice, flag risks early, and send back a tight proposal with milestones.",
      },
      {
        number: "02",
        title: "Build & Iterate",
        description:
          "I work in weekly sprints with a live task board and a staging URL from day one. You always know what I'm doing and what's next.",
      },
      {
        number: "03",
        title: "Ship & Maintain",
        description:
          "I don't disappear after launch. You get a handoff doc, a monitoring setup, and an optional retainer for ongoing work.",
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
          "Typed end-to-end — Next.js, Node, MongoDB, Vercel. Fast, boring, production-ready. Exactly what you want.",
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
        id: "ai-interviewer",
        title: "AI Interviewer",
        blurb:
          "AI-driven interview system that dynamically generates and adapts questions based on candidate resume and responses.",
        tech: ["Next.js", "Node.js", "OpenAI API"],
        year: "2026",
        tag: "AI / Full Stack",
      },
      {
        id: "malware-detection",
        title: "Malware Detection using ML",
        blurb:
          "Machine learning model that analyzes files and predicts malicious behavior to enhance system security.",
        tech: ["Python", "Scikit-learn", "Pandas"],
        year: "2025",
        tag: "AI / Cybersecurity",
      },
      {
        id: "nids",
        title: "Network Intrusion Detection System",
        blurb:
          "System for monitoring network traffic and identifying suspicious activities or potential cyber attacks in real time.",
        tech: ["Python", "Networking", "Machine Learning"],
        year: "2025",
        tag: "Cybersecurity / Systems",
      },
      {
        id: "dsa-visualizer",
        title: "DSA Visualizer",
        blurb:
          "Interactive tool that visually demonstrates data structures and algorithms to improve conceptual understanding.",
        tech: ["React", "JavaScript"],
        year: "2024",
        tag: "Frontend / Education",
      },
    ] satisfies Project[],
  },

  stats: {
    eyebrow: "By the numbers",
    items: [
      { value: "5+", label: "Projects Built" },
      { value: "1+", label: "Year Building Systems" },
      { value: "3+", label: "Domains Explored" },
      { value: "100%", label: "Self-driven Learning" },
    ] satisfies Stat[],
  },

  faq: {
    eyebrow: "FAQ",
    headline: "Common questions.",
    items: [
      {
        q: "What do you specialize in?",
        a: "I specialize in building AI-integrated full stack applications.",
      },
      {
        q: "What kind of projects do you build?",
        a: "Projects that solve real-world problems using intelligent systems and automation.",
      },
      {
        q: "Are you open to collaboration?",
        a: "Yes, I'm open to working on interesting and impactful ideas.",
      },
      {
        q: "What technologies do you use?",
        a: "Modern web stack combined with AI tools and APIs — Next.js, Node.js, Python, OpenAI, MongoDB, and more.",
      },
    ] satisfies FAQItem[],
  },

  cta: {
    eyebrow: "Let's build",
    headlinePrefix: "Got an idea worth ",
    headlineAccent: "building",
    headlineSuffix: "?",
    sub: "Tell me about it. First reply within 24 hours.",
    email: "kumar.harsh.13102004@gmail.com",
    button: "Let's Build Something",
  },

  socials: [
    { label: "GitHub", href: "https://github.com/fools-archive" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-kumar-9a203b316",
    },
    { label: "Email", href: "mailto:kumar.harsh.13102004@gmail.com" },
  ] satisfies SocialLink[],

  footer: {
    tagline: "Building intelligent systems, not just applications.",
    credit: "© 2026 Harsh Kumar. All rights reserved.",
  },
};

export type Site = typeof site;
