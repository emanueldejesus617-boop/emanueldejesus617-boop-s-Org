import React from 'react';
import { motion } from 'motion/react';
import {
  Atom,
  BarChart3,
  Code2,
  Cpu,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Github,
  Layers,
  Layout,
  Palette,
  PenTool,
  Rocket,
  Server,
  Sparkles,
  SquareCode,
  Terminal,
  Triangle,
  Webhook,
} from 'lucide-react';
import { SKILL_CATEGORIES, TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface SkillsProps {
  language: Language;
}

const renderSkillIcon = (iconKey: string) => {
  const iconClass = 'h-4 w-4 text-[#0284c7] dark:text-[#38bdf8] shrink-0';
  switch (iconKey) {
    case 'code':
      return <Code2 className={iconClass} />;
    case 'file-code':
      return <FileCode2 className={iconClass} />;
    case 'terminal':
      return <Terminal className={iconClass} />;
    case 'cpu':
      return <Cpu className={iconClass} />;
    case 'layout':
      return <Layout className={iconClass} />;
    case 'palette':
      return <Palette className={iconClass} />;
    case 'atom':
      return <Atom className={iconClass} />;
    case 'layers':
      return <Layers className={iconClass} />;
    case 'server':
      return <Server className={iconClass} />;
    case 'webhook':
      return <Webhook className={iconClass} />;
    case 'git-branch':
      return <GitBranch className={iconClass} />;
    case 'github':
      return <Github className={iconClass} />;
    case 'code-square':
      return <SquareCode className={iconClass} />;
    case 'flame':
      return <Flame className={iconClass} />;
    case 'triangle':
      return <Triangle className={iconClass} />;
    case 'sparkles':
      return <Sparkles className={iconClass} />;
    case 'pen-tool':
      return <PenTool className={iconClass} />;
    case 'database':
      return <Database className={iconClass} />;
    case 'bar-chart':
      return <BarChart3 className={iconClass} />;
    case 'rocket':
      return <Rocket className={iconClass} />;
    default:
      return <Code2 className={iconClass} />;
  }
};

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="competencias"
      className="border-b border-slate-200/80 dark:border-[#1e293b] bg-slate-50/60 dark:bg-[#0c1222]/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
            {t.skills.kicker}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
            {t.skills.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94a3b8]">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-6 transition-colors hover:border-[#0284c7]/45 dark:hover:border-[#38bdf8]/40"
            >
              <div className="border-b border-slate-200/80 dark:border-[#1e293b] pb-4">
                <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                  {category.title[language]}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-[#94a3b8]">
                  {category.subtitle[language]}
                </p>
              </div>

              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-lg border border-slate-200/80 dark:border-[#1e293b] bg-slate-50/70 dark:bg-[#0c1222]/80 px-3.5 py-2.5 text-sm font-medium text-slate-800 dark:text-[#dfe2f0]"
                  >
                    {renderSkillIcon(item.iconKey)}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
