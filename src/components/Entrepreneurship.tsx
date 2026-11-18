import React from 'react';
import { motion } from 'motion/react';
import { ENTREPRENEURSHIP_PILLARS, TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface EntrepreneurshipProps {
  language: Language;
}

export const Entrepreneurship: React.FC<EntrepreneurshipProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="empreendedorismo"
      className="border-b border-slate-200/80 dark:border-[#1e293b] bg-slate-50/60 dark:bg-[#0c1222]/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
              {t.entrepreneurship.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
              {t.entrepreneurship.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94a3b8]">
              {t.entrepreneurship.subtitle}
            </p>
          </div>

          <p className="max-w-md font-display text-base font-semibold tracking-tight text-slate-800 dark:text-[#dfe2f0]">
            {t.entrepreneurship.centralQuote}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ENTREPRENEURSHIP_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-6 transition-colors hover:border-[#0284c7]/45 dark:hover:border-[#38bdf8]/40"
            >
              <span className="font-mono text-xs font-medium text-[#0284c7] dark:text-[#38bdf8] tabular-nums">
                {pillar.index}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {pillar.title[language]}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.65] text-slate-600 dark:text-[#94a3b8]">
                {pillar.description[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
