import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';
import { TRANSLATIONS } from '../data/portfolioData';
import type { Language, ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  language: Language;
  onSelect: (project: ProjectItem) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  language,
  onSelect,
  index,
}) => {
  const [imgError, setImgError] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0284c7]/60 dark:hover:border-[#38bdf8]/45"
    >
      {/* Top Linear Edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/35 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      />

      <div>
        {/* Visual Mockup / Image Container */}
        <div className="mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl">
          {project.imageUrl && !imgError ? (
            <div className="h-full w-full overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-slate-100 dark:bg-[#0c1222]">
              <img
                src={project.imageUrl}
                alt={`${project.title} — ${project.categoryLabel[language]}`}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="h-full w-full object-cover object-top"
              />
            </div>
          ) : (
            <ProjectMockup type={project.mockupType} language={language} />
          )}
        </div>

        {/* Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#0284c7] dark:text-[#38bdf8]">
          <span className="font-mono tabular-nums">{project.indexLabel}</span>
          <span aria-hidden="true" className="text-slate-300 dark:text-[#3e484f]">
            ·
          </span>
          <span>{project.categoryLabel[language]}</span>
          {project.status && (
            <>
              <span aria-hidden="true" className="text-slate-300 dark:text-[#3e484f]">
                ·
              </span>
              <span className="text-slate-700 dark:text-[#dfe2f0]">
                {project.status[language]}
              </span>
            </>
          )}
        </div>

        <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2.5 text-sm leading-[1.65] text-slate-600 dark:text-[#94a3b8]">
          {project.shortDescription[language]}
        </p>

        {/* Founders credit if present (Emanus IA) */}
        {project.team && project.team.length > 0 && (
          <p className="mt-3 text-xs text-slate-500 dark:text-[#64748b]">
            <span className="font-semibold text-slate-700 dark:text-[#bdc8d1]">
              {t.projects.teamLabel}:
            </span>{' '}
            {project.team
              .map((member) => `${member.name} (${member.role[language]})`)
              .join(' · ')}
          </p>
        )}
      </div>

      <div className="mt-6 border-t border-slate-200/80 dark:border-[#1e293b] pt-4">
        {/* Clean unboxed technology or feature labels (never inventing technologies) */}
        {project.technologies.length > 0 ? (
          <p className="font-mono text-xs text-slate-500 dark:text-[#94a3b8]">
            {project.technologies.join(' · ')}
          </p>
        ) : (
          project.featureTags &&
          project.featureTags[language].length > 0 && (
            <p className="font-mono text-xs text-slate-500 dark:text-[#94a3b8]">
              {project.featureTags[language].join(' · ')}
            </p>
          )
        )}

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.liveUrl ? (
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-[#0284c7] to-[#1d4ed8] dark:from-[#38bdf8] dark:to-[#2563eb] px-4 py-2 text-xs font-semibold text-white dark:text-[#041322] shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <span>{t.projects.accessProject}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={() => onSelect(project)}
                className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#0c1222] px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-[#dfe2f0] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:text-slate-950 dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <span>{t.projects.viewDetails}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-slate-900 dark:bg-[#0c1222] border border-slate-900 dark:border-[#26334d] px-4 py-2 text-xs font-semibold text-white dark:text-[#dfe2f0] transition-colors hover:bg-[#0284c7] hover:border-[#0284c7] dark:hover:border-[#38bdf8] dark:hover:text-[#38bdf8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
            >
              <span>{t.projects.viewProject}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-slate-200 dark:border-[#1e293b] px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-[#94a3b8] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:text-slate-950 dark:hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{t.projects.sourceCode}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
