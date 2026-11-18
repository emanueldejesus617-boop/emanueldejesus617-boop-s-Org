import React from 'react';
import { MonogramLogo } from './MonogramLogo';
import { SocialLinks } from './SocialLinks';
import { PERSONAL_INFO, TRANSLATIONS } from '../data/portfolioData';
import type { Language } from '../types/portfolio';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language];

  const navLinks = [
    { href: '#sobre', label: t.nav.about },
    { href: '#projetos', label: t.nav.projects },
    { href: '#competencias', label: t.nav.skills },
    { href: '#formacao', label: t.nav.education },
    { href: '#contacto', label: t.nav.contact },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-[#070b14] py-12 md:py-16 no-print">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-200 dark:border-[#1e293b] pb-10 md:grid-cols-12">
          {/* Identity */}
          <div className="md:col-span-5">
            <a href="#topo" className="inline-flex items-center gap-3">
              <MonogramLogo size="sm" />
              <span className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                {PERSONAL_INFO.fullName}
              </span>
            </a>
            <p className="mt-2.5 text-sm font-medium text-slate-700 dark:text-[#bdc8d1]">
              {PERSONAL_INFO.title}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-[#64748b]">
              {PERSONAL_INFO.location}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-[#94a3b8]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-wide text-slate-500 dark:text-[#64748b]">
              {t.footer.navigation}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-[#94a3b8] transition-colors hover:text-slate-950 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4">
            <h3 className="font-display text-xs font-semibold tracking-wide text-slate-500 dark:text-[#64748b]">
              {t.footer.socials}
            </h3>
            <div className="mt-4">
              <SocialLinks language={language} variant="compact" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-slate-500 dark:text-[#64748b] sm:flex-row sm:items-center">
          <p>{t.footer.copyright}</p>
          <p className="font-mono">{PERSONAL_INFO.location}</p>
        </div>
      </div>
    </footer>
  );
};
