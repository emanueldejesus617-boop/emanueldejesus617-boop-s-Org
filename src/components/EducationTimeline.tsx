import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION_TIMELINE, TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface EducationTimelineProps {
  language: Language;
}

export const EducationTimeline: React.FC<EducationTimelineProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  return (
    <section
      id="formacao"
      className="border-b border-slate-200/80 dark:border-[#1e293b] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
              {t.education.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
              {t.education.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94a3b8]">
              {t.education.subtitle}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-7 sm:pl-9">
              {/* Vertical timeline line */}
              <div
                aria-hidden="true"
                className="absolute top-2 bottom-2 left-2.5 w-px bg-slate-200 dark:bg-[#1e293b] sm:left-3"
              />

              <div className="space-y-8">
                {EDUCATION_TIMELINE.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-6"
                  >
                    {/* Timeline Node */}
                    <div
                      aria-hidden="true"
                      className="absolute top-7 -left-[26px] flex h-5 w-5 items-center justify-center rounded-full border border-[#0284c7] dark:border-[#38bdf8] bg-white dark:bg-[#070b14] sm:-left-[32px]"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#0284c7] dark:bg-[#38bdf8]" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-[#94a3b8]">
                      <span className="inline-flex items-center gap-1.5 font-mono font-medium text-[#0284c7] dark:text-[#38bdf8]">
                        <GraduationCap className="h-4 w-4" />
                        <span>{entry.shortName}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{entry.location}</span>
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                      {entry.institution}
                    </h3>

                    <div className="mt-4 grid grid-cols-1 gap-3 border-y border-slate-200/80 dark:border-[#1e293b] py-3.5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-[#64748b]">
                          {t.education.fieldLabel}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-[#dfe2f0]">
                          {entry.field[language]}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-500 dark:text-[#64748b]">
                          {t.education.levelLabel}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-[#dfe2f0]">
                          {entry.level[language]}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-[1.65] text-slate-600 dark:text-[#94a3b8]">
                      {entry.summary[language]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
