import React from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import type { Language, SocialLinkItem } from '../types/portfolio';

interface SocialLinksProps {
  language: Language;
  variant?: 'cards' | 'compact';
}

const getSocialIcon = (id: SocialLinkItem['id'], className = 'h-5 w-5') => {
  switch (id) {
    case 'github':
      return <Github className={className} />;
    case 'whatsapp':
      return <MessageCircle className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'linkedin':
      return <Linkedin className={className} />;
  }
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  language,
  variant = 'cards',
}) => {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.platform}: ${item.handle}`}
            className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#0c1222] px-3 py-2 text-xs font-medium text-slate-700 dark:text-[#94a3b8] transition-colors hover:border-[#0284c7] dark:hover:border-[#38bdf8] hover:text-slate-950 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
          >
            {getSocialIcon(item.id, 'h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]')}
            <span>{item.platform}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SOCIAL_LINKS.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/70 p-5 transition-colors duration-200 hover:border-[#0284c7] dark:hover:border-[#38bdf8]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
        >
          <div className="flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-[#26334d] bg-slate-50 dark:bg-[#0c1222] text-[#0284c7] dark:text-[#38bdf8]">
              {getSocialIcon(item.id)}
            </div>
            <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-[#64748b] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8]" />
          </div>

          <div className="mt-4">
            <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
              {item.platform}
            </h3>
            <p className="mt-0.5 truncate text-sm text-slate-600 dark:text-[#94a3b8]">
              {item.handle}
            </p>
            <p className="mt-2 text-xs font-semibold text-[#0284c7] dark:text-[#38bdf8]">
              {item.actionLabel[language]}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
