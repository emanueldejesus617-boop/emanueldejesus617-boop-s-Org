import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { PERSONAL_INFO, TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface AboutProps {
  language: Language;
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <section
      id="sobre"
      className="border-b border-slate-200/80 dark:border-[#1e293b] bg-slate-50/60 dark:bg-[#0c1222]/50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-5">
              <div className="mb-3.5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#64748b]">
                <span>{t.about.portraitTitle}</span>
                <span>{PERSONAL_INFO.monogram}</span>
              </div>

              <div className="relative flex-1 overflow-hidden rounded-xl border border-slate-200/80 dark:border-[#1e293b] bg-slate-100 dark:bg-[#070b14] aspect-[4/5]">
                {!imgError ? (
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt={`${PERSONAL_INFO.fullName} — ${t.about.portraitNote}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full scale-[1.32] object-cover object-[50%_14%]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 dark:border-[#26334d] bg-white dark:bg-[#0c1222]">
                      <User className="h-7 w-7 text-[#0284c7] dark:text-[#38bdf8]" strokeWidth={1.6} />
                    </div>
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.fullName}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-4 border-t border-slate-200 dark:border-[#1e293b] pt-4">
                <p className="text-xs font-medium text-slate-500 dark:text-[#64748b]">
                  {t.about.pillarsLabel}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800 dark:text-[#dfe2f0]">
                  {t.about.pillars.join(' · ')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Editorial Biography */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
              {t.about.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
              {t.about.title}
            </h2>

            <p className="mt-6 text-lg font-medium leading-[1.65] text-slate-900 dark:text-[#dfe2f0]">
              {t.about.lead}
            </p>

            <div className="mt-5 space-y-4 text-base leading-[1.7] text-slate-600 dark:text-[#94a3b8]">
              {t.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
