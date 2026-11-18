import React, { useState, useEffect } from 'react';
import { X, Check, Code2, ExternalLink } from 'lucide-react';
import { PROJECTS, TRANSLATIONS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectMockup } from './ProjectMockup';
import type { Language, ProjectCategory, ProjectItem } from '../types/portfolio';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalImgError, setModalImgError] = useState(false);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    setModalImgError(false);
  }, [selectedProject]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.categoryKey === activeFilter);

  const filterTabs: { key: 'all' | ProjectCategory; label: string }[] = [
    { key: 'all', label: t.projects.filters.all },
    { key: 'startup', label: t.projects.filters.startup },
    { key: 'edtech-ai', label: t.projects.filters['edtech-ai'] },
    { key: 'fitness-social', label: t.projects.filters['fitness-social'] },
    { key: 'digital-platform', label: t.projects.filters['digital-platform'] },
    { key: 'saas-fintech', label: t.projects.filters['saas-fintech'] },
    { key: 'corporate', label: t.projects.filters.corporate },
  ];

  return (
    <section
      id="projetos"
      className="border-b border-slate-200/80 dark:border-[#1e293b] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Section Header + Segmented Filter Tabs */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold tracking-tight text-[#0284c7] dark:text-[#38bdf8]">
              {t.projects.kicker}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.025em] text-slate-950 dark:text-white sm:text-4xl [text-wrap:balance]">
              {t.projects.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-[#94a3b8]">
              {t.projects.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={language === 'pt' ? 'Filtrar projetos' : 'Filter projects'}
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-slate-200 dark:border-[#1e293b] bg-slate-100/80 dark:bg-[#0c1222] p-1 self-start md:self-auto"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`min-h-[36px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] ${
                  activeFilter === tab.key
                    ? 'bg-white dark:bg-[#131c31] text-slate-950 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
              onSelect={setSelectedProject}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Unobstructed Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 dark:border-[#26334d] bg-white dark:bg-[#0c1222] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#0284c7] dark:text-[#38bdf8]">
                  <span className="font-mono">{selectedProject.indexLabel}</span> ·{' '}
                  {selectedProject.categoryLabel[language]}
                  {selectedProject.status && (
                    <span className="text-slate-700 dark:text-[#dfe2f0]">
                      {' '}
                      · {selectedProject.status[language]}
                    </span>
                  )}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={t.projects.closeModal}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-[#1e293b] text-slate-600 dark:text-[#94a3b8] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:text-slate-950 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Interactive UI Mockup / Image Showcase */}
            <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl">
              {selectedProject.imageUrl && !modalImgError ? (
                <div className="h-full w-full overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-slate-100 dark:bg-[#0c1222]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={`${selectedProject.title} — ${selectedProject.categoryLabel[language]}`}
                    referrerPolicy="no-referrer"
                    onError={() => setModalImgError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <ProjectMockup
                  type={selectedProject.mockupType}
                  language={language}
                  interactive
                />
              )}
            </div>

            <p className="mt-2 text-xs font-mono text-slate-500 dark:text-[#64748b]">
              {selectedProject.placeholderNote[language]}
            </p>

            <p className="mt-5 text-base leading-[1.7] text-slate-700 dark:text-[#bdc8d1]">
              {selectedProject.fullDescription[language]}
            </p>

            {selectedProject.positioning && (
              <div className="mt-4 rounded-xl border border-slate-200/80 dark:border-[#1e293b] bg-slate-50/80 dark:bg-[#131c31]/50 px-4 py-3">
                <p className="text-xs font-semibold text-[#0284c7] dark:text-[#38bdf8]">
                  {t.projects.positioningLabel}
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-[#dfe2f0]">
                  {selectedProject.positioning[language]}
                </p>
              </div>
            )}

            {/* Highlights */}
            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                {t.projects.highlightsLabel}
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {selectedProject.highlights[language].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-[#94a3b8]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0284c7] dark:text-[#38bdf8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team if applicable */}
            {selectedProject.team && selectedProject.team.length > 0 && (
              <div className="mt-6 border-t border-slate-200 dark:border-[#1e293b] pt-5">
                <h4 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                  {t.projects.teamLabel}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-[#94a3b8]">
                  {selectedProject.team
                    .map((member) => `${member.name} — ${member.role[language]}`)
                    .join(' · ')}
                </p>
              </div>
            )}

            {/* Stack (only if confirmed) & Honest URL / Repo status */}
            <div className="mt-6 border-t border-slate-200 dark:border-[#1e293b] pt-5">
              {selectedProject.technologies.length > 0 && (
                <div className="mb-5">
                  <h4 className="font-display text-sm font-semibold text-slate-950 dark:text-white">
                    {t.projects.techLabel}
                  </h4>
                  <p className="mt-1.5 font-mono text-xs text-slate-600 dark:text-[#94a3b8]">
                    {selectedProject.technologies.join(' · ')}
                  </p>
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-4 py-2 text-xs font-semibold text-white dark:text-[#041322]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>{t.projects.viewProject}</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500 dark:text-[#64748b]">
                      {t.projects.livePending}
                    </span>
                  )}

                  {selectedProject.repoUrl ? (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-200 dark:border-[#1e293b] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0]"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      <span>{t.projects.sourceCode}</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500 dark:text-[#64748b]">
                      · {t.projects.repoPending}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-slate-200 dark:border-[#1e293b] px-4 py-2 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0] hover:border-[#0284c7] dark:hover:border-[#38bdf8]"
                >
                  {t.projects.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
