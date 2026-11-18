export type Language = 'pt' | 'en';
export type Theme = 'dark' | 'light';

export type ProjectCategory =
  | 'startup'
  | 'edtech-ai'
  | 'fitness-social'
  | 'digital-platform'
  | 'saas-fintech'
  | 'corporate';

export interface ProjectTeamMember {
  name: string;
  role: {
    pt: string;
    en: string;
  };
}

export interface ProjectItem {
  id: string;
  indexLabel: string;
  title: string;
  categoryKey: ProjectCategory;
  categoryLabel: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  fullDescription: {
    pt: string;
    en: string;
  };
  positioning?: {
    pt: string;
    en: string;
  };
  highlights: {
    pt: string[];
    en: string[];
  };
  featureTags?: {
    pt: string[];
    en: string[];
  };
  technologies: string[];
  team?: ProjectTeamMember[];
  status?: {
    pt: string;
    en: string;
  };
  liveUrl: string | null;
  repoUrl: string | null;
  imageUrl?: string;
  mockupType:
    | 'emanus'
    | 'emanus-ia'
    | 'premier-fit'
    | 'famebook'
    | 'recargas-saas'
    | 'ciz-lda';
  placeholderNote: {
    pt: string;
    en: string;
  };
}

export interface SkillCategory {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  subtitle: {
    pt: string;
    en: string;
  };
  items: {
    name: string;
    iconKey: string;
  }[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  shortName: string;
  field: {
    pt: string;
    en: string;
  };
  level: {
    pt: string;
    en: string;
  };
  location: string;
  summary: {
    pt: string;
    en: string;
  };
}

export interface SocialLinkItem {
  id: 'github' | 'whatsapp' | 'instagram' | 'linkedin';
  platform: string;
  handle: string;
  url: string;
  actionLabel: {
    pt: string;
    en: string;
  };
}

export interface EntrepreneurshipPillar {
  id: string;
  index: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}
