import React, { useState } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Building2,
  Calendar,
  CheckSquare,
  CreditCard,
  Dumbbell,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react';
import type { Language, ProjectItem } from '../types/portfolio';

interface ProjectMockupProps {
  type: ProjectItem['mockupType'];
  language: Language;
  interactive?: boolean;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  type,
  language,
  interactive = false,
}) => {
  const [emanusIaTab, setEmanusIaTab] = useState<'assistant' | 'simulations' | 'study'>('assistant');
  const [premierDay, setPremierDay] = useState<'seg' | 'qua' | 'sex'>('seg');
  const [famebookTab, setFamebookTab] = useState<'profiles' | 'categories' | 'achievements'>('profiles');
  const [recargasTab, setRecargasTab] = useState<'sales' | 'platforms' | 'reports'>('sales');
  const [cizTab, setCizTab] = useState<'services' | 'energy' | 'corporate'>('services');

  if (type === 'emanus') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#0c1222] dark:to-[#070b14] p-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
              EMANUS
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
            {language === 'pt' ? 'Estúdio de Produto' : 'Product Studio'}
          </span>
        </div>

        <div className="my-3 grid grid-cols-3 gap-2.5">
          <div className="col-span-2 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
            <p className="text-[11px] font-medium text-[#0284c7] dark:text-[#38bdf8]">
              {language === 'pt' ? 'Arquitetura Digital' : 'Digital Architecture'}
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-slate-900 dark:text-white">
              {language === 'pt' ? 'Da ideia ao produto real' : 'From idea to real product'}
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-slate-200 dark:bg-[#26334d]" />
              <div className="h-1.5 w-4/5 rounded bg-slate-200 dark:bg-[#26334d]" />
              <div className="h-1.5 w-2/3 rounded bg-[#0284c7]/30 dark:bg-[#38bdf8]/35" />
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
            <span className="font-mono text-[10px] text-slate-500 dark:text-[#64748b]">
              CORE
            </span>
            <div className="space-y-1 text-[11px] font-medium text-slate-700 dark:text-[#bdc8d1]">
              <div>Web</div>
              <div>APIs</div>
              <div>Cloud</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
          <span>Luanda, Angola</span>
          <span className="font-mono">UI Mockup</span>
        </div>
      </div>
    );
  }

  if (type === 'emanus-ia') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-sky-50/40 dark:from-[#0c1222] dark:to-[#091224] p-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
              EMANUS IA
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
            {language === 'pt' ? 'Ensino Secundário' : 'Secondary School'}
          </span>
        </div>

        {/* Interactive or static preview tabs */}
        <div className="mt-3 flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-[#171c25] p-1">
          {[
            { id: 'assistant' as const, label: language === 'pt' ? 'Tutor IA' : 'AI Tutor' },
            { id: 'simulations' as const, label: language === 'pt' ? 'Simulações' : 'Simulations' },
            { id: 'study' as const, label: language === 'pt' ? 'Plano' : 'Planner' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && setEmanusIaTab(tab.id)}
              className={`flex-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap ${
                emanusIaTab === tab.id
                  ? 'bg-white dark:bg-[#131c31] text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#94a3b8]'
              } ${interactive ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : 'cursor-default'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="my-3 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
          {emanusIaTab === 'assistant' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <BookOpen className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Assistência Académica Personalizada'
                    : 'Personalized Academic Assistance'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Explicação passo a passo de conteúdos, resumos guiados e preparação para testes.'
                  : 'Step-by-step concept explanations, guided lessons, and exam readiness.'}
              </p>
            </div>
          )}

          {emanusIaTab === 'simulations' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <CheckSquare className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt' ? 'Simulações e Testes Práticos' : 'Practice Simulations & Tests'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Questões cronometradas com revisão imediata para consolidar o estudo.'
                  : 'Timed practice questions with structured review for steady progress.'}
              </p>
            </div>
          )}

          {emanusIaTab === 'study' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Calendar className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt' ? 'Organização de Estudos' : 'Study Organization'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Sessões semanais organizadas por disciplina e objetivos de revisão.'
                  : 'Weekly study blocks structured by subject and revision milestones.'}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
          <span>Emanuel · Daniel · Guido</span>
          <span className="font-mono">UI Mockup</span>
        </div>
      </div>
    );
  }

  if (type === 'famebook') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-indigo-50/40 dark:from-[#0c1222] dark:to-[#0d1528] p-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
          <div className="flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
              FAMEBOOK
            </span>
          </div>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
            <Search className="h-3 w-3" />
            <span>{language === 'pt' ? 'Personalidades' : 'Personalities'}</span>
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-[#171c25] p-1">
          {[
            { id: 'profiles' as const, label: language === 'pt' ? 'Perfis' : 'Profiles' },
            { id: 'categories' as const, label: language === 'pt' ? 'Categorias' : 'Categories' },
            { id: 'achievements' as const, label: language === 'pt' ? 'Conquistas' : 'Milestones' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && setFamebookTab(tab.id)}
              className={`flex-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap ${
                famebookTab === tab.id
                  ? 'bg-white dark:bg-[#131c31] text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#94a3b8]'
              } ${interactive ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : 'cursor-default'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="my-3 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
          {famebookTab === 'profiles' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Sparkles className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Perfis Biográficos e Trajetórias'
                    : 'Biographical Profiles & Journeys'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Histórias, percursos profissionais, curiosidades e legado organizados num único lugar.'
                  : 'Stories, career milestones, curiosities, and contributions gathered in one place.'}
              </p>
            </div>
          )}

          {famebookTab === 'categories' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Layers className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Descoberta por Áreas de Atuação'
                    : 'Discovery by Discipline'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Tecnologia · Cultura · Ciência · Empreendedorismo · Desporto'
                  : 'Technology · Culture · Science · Entrepreneurship · Sports'}
              </p>
            </div>
          )}

          {famebookTab === 'achievements' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Award className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Conquistas e Contribuições'
                    : 'Achievements & Contributions'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Marcos relevantes e impacto público estruturados por ordem cronológica.'
                  : 'Notable milestones and public impact organized chronologically.'}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
          <span>{language === 'pt' ? 'Pesquisa & Descoberta' : 'Search & Discovery'}</span>
          <span className="font-mono">UI Mockup</span>
        </div>
      </div>
    );
  }

  if (type === 'recargas-saas') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-cyan-50/40 dark:from-[#0c1222] dark:to-[#071422] p-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
          <div className="flex items-center gap-2">
            <Wallet className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
              RECARGAS SAAS
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
            {language === 'pt' ? 'Gestão Comercial' : 'Commercial SaaS'}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-[#171c25] p-1">
          {[
            { id: 'sales' as const, label: language === 'pt' ? 'Operações' : 'Operations' },
            { id: 'platforms' as const, label: language === 'pt' ? 'Plataformas' : 'Platforms' },
            { id: 'reports' as const, label: language === 'pt' ? 'Relatórios' : 'Reports' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && setRecargasTab(tab.id)}
              className={`flex-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap ${
                recargasTab === tab.id
                  ? 'bg-white dark:bg-[#131c31] text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#94a3b8]'
              } ${interactive ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : 'cursor-default'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="my-3 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
          {recargasTab === 'sales' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <TrendingUp className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Vendas, Comissões e Despesas'
                    : 'Sales, Commissions & Expenses'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Registo centralizado de operações comerciais, margens de lucro e histórico completo.'
                  : 'Centralized logging of sales, profit margins, expenses, and operation history.'}
              </p>
            </div>
          )}

          {recargasTab === 'platforms' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <CreditCard className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Plataformas de Distribuição e Saldos'
                    : 'Distribution Platforms & Balances'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Acompanhamento de saldos disponíveis por plataforma e controlo operacional.'
                  : 'Multi-platform balance visibility and unified operational control.'}
              </p>
            </div>
          )}

          {recargasTab === 'reports' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <BarChart3 className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Relatórios Diários, Semanais e Mensais'
                    : 'Daily, Weekly & Monthly Reports'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Indicadores de desempenho financeiro para apoiar decisões de pequenos negócios.'
                  : 'Financial performance indicators supporting small business decisions.'}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
          <span>{language === 'pt' ? 'Saldos · Lucros · Relatórios' : 'Balances · Profit · Reports'}</span>
          <span className="font-mono">UI Mockup</span>
        </div>
      </div>
    );
  }

  if (type === 'ciz-lda') {
    return (
      <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-slate-100/90 dark:from-[#0c1222] dark:to-[#08101e] p-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
            <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
              CIZ LDA
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
            {language === 'pt' ? 'Institucional' : 'Corporate'}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-[#171c25] p-1">
          {[
            { id: 'services' as const, label: language === 'pt' ? 'Serviços' : 'Services' },
            { id: 'energy' as const, label: language === 'pt' ? 'Petrolífero' : 'Oil & Gas' },
            { id: 'corporate' as const, label: language === 'pt' ? 'Empresa' : 'Company' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              disabled={!interactive}
              onClick={() => interactive && setCizTab(tab.id)}
              className={`flex-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors whitespace-nowrap ${
                cizTab === tab.id
                  ? 'bg-white dark:bg-[#131c31] text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-[#94a3b8]'
              } ${interactive ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : 'cursor-default'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="my-3 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
          {cizTab === 'services' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Layers className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Soluções Integradas Empresariais'
                    : 'Integrated Enterprise Solutions'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Apresentação estratégica de serviços, áreas de atuação e diferenciais corporativos.'
                  : 'Strategic presentation of services, operating areas, and corporate strengths.'}
              </p>
            </div>
          )}

          {cizTab === 'energy' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Setor Petrolífero & Operações'
                    : 'Oil & Gas Sector & Operations'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Comunicação focada em rigor técnico, credibilidade e confiança para parceiros.'
                  : 'Communication built around technical rigor, credibility, and partner trust.'}
              </p>
            </div>
          )}

          {cizTab === 'corporate' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white">
                <Building2 className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
                <span>
                  {language === 'pt'
                    ? 'Presença Digital & Contacto Direto'
                    : 'Digital Presence & Direct Contact'}
                </span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
                {language === 'pt'
                  ? 'Navegação intuitiva para aproximar potenciais clientes e parceiros institucionais.'
                  : 'Intuitive navigation connecting prospective clients and institutional partners.'}
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
          <span>{language === 'pt' ? 'Petrolífero & Empresarial' : 'Oil & Gas & Enterprise'}</span>
          <span className="font-mono">UI Mockup</span>
        </div>
      </div>
    );
  }

  // Premier Fit mockup
  const workouts = {
    seg: {
      pt: 'Treino Superior · Organização e Horário',
      en: 'Upper Body · Schedule & Routine',
      focus: language === 'pt' ? 'Peito, Ombros e Core' : 'Chest, Shoulders & Core',
    },
    qua: {
      pt: 'Treino Inferior · Evolução Semanal',
      en: 'Lower Body · Weekly Progress',
      focus: language === 'pt' ? 'Pernas e Mobilidade' : 'Legs & Mobility',
    },
    sex: {
      pt: 'Resistência · Partilha com Amigos',
      en: 'Conditioning · Social Sharing',
      focus: language === 'pt' ? 'Cardio e Circuito Funcional' : 'Cardio & Functional Circuit',
    },
  };

  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#1e293b] bg-gradient-to-br from-slate-50 to-blue-50/40 dark:from-[#0c1222] dark:to-[#091426] p-4">
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-[#1e293b] pb-2.5">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-[#0284c7] dark:text-[#38bdf8]" />
          <span className="font-display text-xs font-bold tracking-tight text-slate-900 dark:text-white">
            PREMIER FIT
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 dark:text-[#64748b]">
          {language === 'pt' ? 'Treino & Social' : 'Fitness & Social'}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1 rounded-lg bg-slate-200/70 dark:bg-[#171c25] p-1">
        {(['seg', 'qua', 'sex'] as const).map((day) => (
          <button
            key={day}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && setPremierDay(day)}
            className={`flex-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
              premierDay === day
                ? 'bg-white dark:bg-[#131c31] text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-[#94a3b8]'
            } ${interactive ? 'cursor-pointer hover:text-slate-900 dark:hover:text-white' : 'cursor-default'}`}
          >
            {day === 'seg' ? (language === 'pt' ? 'Seg' : 'Mon') : day === 'qua' ? (language === 'pt' ? 'Qua' : 'Wed') : language === 'pt' ? 'Sex' : 'Fri'}
          </button>
        ))}
      </div>

      <div className="my-3 rounded-lg border border-slate-200 dark:border-[#1e293b] bg-white dark:bg-[#131c31]/80 p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-900 dark:text-white">
            {workouts[premierDay][language]}
          </span>
          <Users className="h-3.5 w-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
        </div>
        <p className="mt-1 text-[11px] text-slate-600 dark:text-[#94a3b8]">
          {workouts[premierDay].focus}
        </p>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-[#64748b]">
        <span>{language === 'pt' ? 'Progresso e Rotinas' : 'Progress & Routines'}</span>
        <span className="font-mono">UI Mockup</span>
      </div>
    </div>
  );
};
