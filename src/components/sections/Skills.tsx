"use client";

import { motion } from "framer-motion";
import {
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiPostman,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { Database } from "lucide-react";
import type { IconType } from "react-icons";
import type { ComponentType } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site, type SkillIconKey, type Skill } from "@/content/site";

type IconComponent = IconType | ComponentType<{ size?: number; className?: string }>;

const iconMap: Record<SkillIconKey, IconComponent> = {
  cpp: SiCplusplus,
  java: SiOpenjdk,
  python: SiPython,
  javascript: SiJavascript,
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  sql: Database,
  git: SiGit,
  github: SiGithub,
  vscode: VscCode,
  linux: SiLinux,
  docker: SiDocker,
  postman: SiPostman,
  vercel: SiVercel,
  figma: SiFigma,
};

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = iconMap[skill.iconKey];
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center gap-2.5 rounded-xl border border-[color:var(--color-border)] bg-transparent px-4 py-5 transition-colors duration-300 hover:border-[color:var(--color-border-strong)] hover:bg-[color:var(--color-surface)]"
    >
      <Icon
        size={28}
        className="text-[color:var(--color-fg)] transition-colors duration-300 group-hover:text-[color:var(--color-accent)]"
      />
      <span className="text-center text-sm text-[color:var(--color-fg)]">
        {skill.name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.skills.eyebrow}
        headline={site.skills.headline}
      />

      <div className="mt-16 flex flex-col gap-10 md:gap-14">
        {site.skills.categories.map((cat, ci) => (
          <Reveal key={cat.name} variant="up" delay={ci * 0.05}>
            <div className="grid gap-6 md:grid-cols-[200px_1fr] md:items-start md:gap-12">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-fg-muted)] md:pt-6">
                {cat.name}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cat.items.map((s) => (
                  <li key={s.name}>
                    <SkillItem skill={s} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
