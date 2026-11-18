import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { MonogramLogo } from './MonogramLogo';
import { TRANSLATIONS } from '../data/portfolioData';
import type { Language, Theme } from '../types/portfolio';

interface NavbarProps {
  language: Language;
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  theme,
  onToggleTheme,
  onToggleLanguage,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navLinks = [
    { href: '#sobre', label: t.nav.about },
    { href: '#projetos', label: t.nav.projects },
    { href: '#competencias', label: t.nav.skills },
    { href: '#formacao', label: t.nav.education },
    { href: '#contacto', label: t.nav.contact },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 no-print ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070b14]/88 backdrop-blur-xl border-b border-slate-200/80 dark:border-[#1e293b]'
          : 'bg-white/70 dark:bg-[#070b14]/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 py-3.5 md:px-8 lg:px-12">
        {/* Zone 1: Single Brand Wordmark */}
        <a
          href="#topo"
          className="flex items-center gap-3 font-display text-base font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded-lg"
        >
          <MonogramLogo size="sm" />
          <span>Emanuel De Jesus</span>
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-[#94a3b8]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-slate-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#0284c7] dark:after:bg-[#38bdf8] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action (Desktop) / Menu Button (Mobile) */}
        <div className="flex items-center shrink-0">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-4 py-2 text-sm font-semibold text-white dark:text-[#041322] shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#0c1222] text-slate-900 dark:text-[#dfe2f0] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#0c1222] px-5 py-5">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-slate-700 dark:text-[#dfe2f0] hover:bg-slate-100 dark:hover:bg-[#131c31] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-[#1e293b] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-slate-50 dark:bg-[#131c31] px-3 text-sm font-medium text-slate-800 dark:text-[#dfe2f0]"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-4 w-4 text-[#38bdf8]" />
                  <span>{t.utility.lightMode}</span>
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-[#0284c7]" />
                  <span>{t.utility.darkMode}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onToggleLanguage}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-slate-50 dark:bg-[#131c31] px-3 text-sm font-medium text-slate-800 dark:text-[#dfe2f0]"
            >
              <Globe className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
              <span>{language === 'pt' ? 'English' : 'Português'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
