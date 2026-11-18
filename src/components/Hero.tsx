import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, MapPin, Moon, Sun, Globe, User } from 'lucide-react';
import { MonogramLogo } from './MonogramLogo';
import { PERSONAL_INFO, TRANSLATIONS } from '../data/portfolioData';
import type { Language, Theme } from '../types/portfolio';

interface HeroProps {
  language: Language;
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  theme,
  onToggleTheme,
  onToggleLanguage,
  onDownloadCv,
}) => {
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-slate-200/80 dark:border-[#1e293b] bg-architectural-grid"
    >
      {/* Subtle radial atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[#38bdf8]/10 dark:bg-[#38bdf8]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pt-6 pb-16 md:px-8 md:pt-8 md:pb-24 lg:px-12 lg:pb-28">
        {/* Workspace Utility Toolbar: Location + Theme Switch + Language Switch */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 dark:border-[#1e293b]/80 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-[#94a3b8]">
            <MapPin className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8] shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-[#3e484f]">
              /
            </span>
            <span className="font-mono text-xs text-slate-500 dark:text-[#64748b]">
              {PERSONAL_INFO.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white/90 dark:bg-[#0c1222]/90 px-3 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Globe className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>{language === 'pt' ? 'PT' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? t.utility.switchToLight : t.utility.switchToDark}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white/90 dark:bg-[#0c1222]/90 px-3 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-3.5 w-3.5 text-[#38bdf8]" />
                  <span>{t.utility.lightMode}</span>
                </>
              ) : (
                <>
                  <Moon className="h-3.5 w-3.5 text-[#0284c7]" />
                  <span>{t.utility.darkMode}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 12-Column Hero Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Display Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-3.5">
              <MonogramLogo size="md" />
              <div className="text-sm font-medium text-slate-600 dark:text-[#94a3b8]">
                <span className="font-display font-semibold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.fullName}
                </span>
                <span aria-hidden="true" className="mx-2 text-slate-300 dark:text-[#3e484f]">
                  ·
                </span>
                <span>{t.hero.role}</span>
              </div>
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08] [text-wrap:balance]">
              {t.hero.headline}
            </h1>

            <p className="mt-3 font-display text-lg font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8] sm:text-xl">
              {t.hero.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-[1.7] text-slate-600 dark:text-[#94a3b8] sm:text-lg">
              {t.hero.description}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projetos"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#041322] shadow-[0_6px_20px_rgba(37,99,235,0.28)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-[#dfe2f0] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:bg-slate-50 dark:hover:bg-[#17233b] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <Mail className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>{t.hero.ctaContact}</span>
              </a>

              <button
                type="button"
                onClick={onDownloadCv}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-[#94a3b8] transition-colors hover:bg-slate-100 dark:hover:bg-[#131c31] hover:text-slate-950 dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <Download className="h-4 w-4" />
                <span>{t.hero.ctaCv}</span>
              </button>
            </div>

            {/* Central positioning statement */}
            <div className="mt-10 border-t border-slate-200 dark:border-[#1e293b] pt-5">
              <p className="text-sm font-medium text-slate-700 dark:text-[#bdc8d1]">
                “{t.hero.philosophy}”
              </p>
            </div>
          </motion.div>

          {/* Right Column: Official Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#0c1222] p-5 shadow-sm">
              {/* Top linear highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent"
              />

              {/* Subtle architectural header */}
              <div className="mb-3.5 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-[#64748b]">
                <span>{t.hero.portraitBadge}</span>
                <span>EJ.</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative flex-1 overflow-hidden rounded-xl border border-slate-200/80 dark:border-[#1e293b] bg-slate-100 dark:bg-[#131c31] aspect-[3/4]">
                {!imgError ? (
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt={`${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.title}`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 dark:border-[#26334d] bg-white dark:bg-[#0c1222]">
                      <User className="h-9 w-9 text-[#0284c7] dark:text-[#38bdf8]" strokeWidth={1.5} />
                    </div>
                    <MonogramLogo size="sm" className="mb-2" />
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.fullName}
                    </p>
                  </div>
                )}
              </div>

              {/* Footer coordinates */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-200/80 dark:border-[#1e293b] pt-3.5 text-xs text-slate-600 dark:text-[#94a3b8]">
                <span className="font-medium">{PERSONAL_INFO.location}</span>
                <span className="font-mono text-slate-500 dark:text-[#64748b]">
                  8.8390° S · 13.2894° E
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
