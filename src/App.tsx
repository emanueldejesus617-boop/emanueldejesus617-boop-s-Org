import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationTimeline } from './components/EducationTimeline';
import { Entrepreneurship } from './components/Entrepreneurship';
import { SocialLinks } from './components/SocialLinks';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { PERSONAL_INFO, TRANSLATIONS } from './data/portfolioData';
import type { Language, Theme } from './types/portfolio';

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ej-portfolio-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ej-portfolio-lang');
      if (saved === 'pt' || saved === 'en') return saved;
    }
    return 'pt';
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ej-portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('ej-portfolio-lang', language);
  }, [language]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const handleDownloadCv = async () => {
    try {
      const res = await fetch('/api/cv-status');
      if (res.ok) {
        const data = (await res.json()) as { available?: boolean; filePath?: string | null };
        if (data.available && data.filePath) {
          const link = document.createElement('a');
          link.href = data.filePath;
          link.download = 'Emanuel-De-Jesus-CV.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }
      }
    } catch {
      // Fallback to placeholder modal when CV status endpoint is unavailable
    }
    setCvModalOpen(true);
  };

  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#070b14] dark:text-[#dfe2f0] transition-colors duration-200">
      <Navbar
        language={language}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onToggleLanguage={handleToggleLanguage}
      />

      <main>
        <Hero
          language={language}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onToggleLanguage={handleToggleLanguage}
          onDownloadCv={handleDownloadCv}
        />

        <About language={language} />

        <Projects language={language} />

        <Skills language={language} />

        <EducationTimeline language={language} />

        <Entrepreneurship language={language} />

        {/* Section 07 — Contact */}
        <section
          id="contacto"
          className="border-b border-slate-200/80 dark:border-[#1e293b] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
            <div className="max-w-2xl">
              <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
                {t.contact.kicker}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
                {t.contact.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {t.contact.description}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h3 className="mb-4 font-display text-sm font-semibold tracking-tight text-slate-700 dark:text-[#bdc8d1]">
                  {t.contact.socialsTitle}
                </h3>
                <SocialLinks language={language} variant="cards" />

                <p className="mt-6 text-xs text-slate-500 dark:text-[#64748b]">
                  {PERSONAL_INFO.fullName} · {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="lg:col-span-7">
                <ContactForm language={language} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />

      <CvModal
        open={cvModalOpen}
        language={language}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
