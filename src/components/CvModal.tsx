import React, { useEffect } from 'react';
import { AlertCircle, MessageCircle, Printer, X } from 'lucide-react';
import {
  EDUCATION_TIMELINE,
  PERSONAL_INFO,
  PROJECTS,
  SKILL_CATEGORIES,
  TRANSLATIONS,
} from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface CvModalProps {
  open: boolean;
  language: Language;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ open, language, onClose }) => {
  const t = TRANSLATIONS[language];

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 dark:border-[#26334d] bg-white dark:bg-[#0c1222] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 no-print">
          <h3
            id="cv-modal-title"
            className="font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            {t.cvModal.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.cvModal.close}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-[#1e293b] text-slate-600 dark:text-[#94a3b8] hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:text-slate-950 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Honest placeholder notice */}
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-950/35 p-4 text-xs leading-relaxed text-amber-950 dark:text-amber-100 no-print">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <p>{t.cvModal.statusNotice}</p>
        </div>

        {/* Verified Profile Summary Sheet */}
        <div className="mt-6 rounded-xl border border-slate-200 dark:border-[#1e293b] bg-slate-50/60 dark:bg-[#131c31]/50 p-5 sm:p-6">
          <p className="font-mono text-xs font-medium text-[#0284c7] dark:text-[#38bdf8]">
            {t.cvModal.summaryHeading}
          </p>
          <h4 className="mt-2 font-display text-2xl font-bold text-slate-950 dark:text-white">
            {PERSONAL_INFO.fullName}
          </h4>
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-[#94a3b8]">
            {PERSONAL_INFO.title} · {PERSONAL_INFO.location}
          </p>

          <div className="mt-5 space-y-4 border-t border-slate-200 dark:border-[#1e293b] pt-4 text-sm">
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {language === 'pt' ? 'Formação Académica' : 'Education'}
              </p>
              <p className="mt-1 text-slate-600 dark:text-[#94a3b8]">
                {EDUCATION_TIMELINE[0].institution} — {EDUCATION_TIMELINE[0].field[language]} (
                {EDUCATION_TIMELINE[0].level[language]})
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {language === 'pt' ? 'Projetos e Iniciativas' : 'Projects & Ventures'}
              </p>
              <ul className="mt-1 space-y-1 text-slate-600 dark:text-[#94a3b8]">
                {PROJECTS.map((proj) => (
                  <li key={proj.id}>
                    <span className="font-medium text-slate-800 dark:text-[#dfe2f0]">
                      {proj.title}
                    </span>{' '}
                    — {proj.categoryLabel[language]}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-white">
                {language === 'pt' ? 'Competências Técnicas' : 'Technical Skills'}
              </p>
              <div className="mt-1 space-y-1 text-slate-600 dark:text-[#94a3b8]">
                {SKILL_CATEGORIES.map((cat) => (
                  <p key={cat.id}>
                    <span className="font-medium text-slate-800 dark:text-[#dfe2f0]">
                      {cat.title[language]}:
                    </span>{' '}
                    {cat.items.map((i) => i.name).join(', ')}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-4 py-2 text-xs font-semibold text-white dark:text-[#041322]"
            >
              <Printer className="h-4 w-4" />
              <span>{t.cvModal.printAction}</span>
            </button>

            <a
              href="https://wa.me/244940843801"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-200 dark:border-[#1e293b] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0] hover:border-[#0284c7] dark:hover:border-[#38bdf8]"
            >
              <MessageCircle className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>{t.cvModal.contactAction}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[42px] items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold text-slate-600 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-white"
          >
            {t.cvModal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
