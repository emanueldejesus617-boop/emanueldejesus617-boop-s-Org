import type {
  EducationEntry,
  EntrepreneurshipPillar,
  ProjectItem,
  SkillCategory,
  SocialLinkItem,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Emanuel De Jesus',
  monogram: 'EJ.',
  title: 'Software Developer | Entrepreneur',
  location: 'Luanda, Angola',
  headlineEn: 'Building ideas into digital solutions.',
  cvFilePath: '/cv-emanuel-de-jesus.pdf',
  portraitImage: '/assets/aistudio/Emanuel_60841c7d.png',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'emanus',
    indexLabel: '01',
    title: 'Emanus',
    categoryKey: 'startup',
    categoryLabel: {
      pt: 'Startup de Tecnologia · Soluções Digitais',
      en: 'Technology Startup · Digital Solutions',
    },
    shortDescription: {
      pt: 'Startup de tecnologia focada na criação e desenvolvimento de soluções digitais práticas para transformar ideias em produtos funcionais.',
      en: 'Technology startup focused on designing and developing practical digital solutions that turn ideas into real software products.',
    },
    fullDescription: {
      pt: 'A Emanus nasce como uma iniciativa empreendedora dedicada à conceção, arquitetura e desenvolvimento de produtos digitais. O foco está em resolver desafios concretos através de software moderno, interfaces bem estruturadas e experiências úteis para utilizadores e organizações.',
      en: 'Emanus is an entrepreneurial technology initiative dedicated to conceiving, architecting, and building digital products focused on solving real challenges with modern software and clean product design.',
    },
    highlights: {
      pt: [
        'Desenvolvimento de produtos digitais orientados a problemas reais',
        'Arquitetura web moderna e escalável',
        'Design centrado na experiência do utilizador (UI/UX)',
        'Base para iniciativas tecnológicas como a Emanus IA',
      ],
      en: [
        'Digital product development focused on real-world problems',
        'Modern, scalable web software architecture',
        'User-centered UI/UX design craft',
        'Foundation for technology ventures including Emanus IA',
      ],
    },
    technologies: ['React', 'Next.js', 'Node.js', 'APIs', 'Firebase', 'Vercel'],
    liveUrl: null,
    repoUrl: null,
    imageUrl: '/assets/aistudio/image_68000424.png',
    mockupType: 'emanus',
    placeholderNote: {
      pt: 'Apresentação visual da plataforma Emanus · URL oficial a adicionar',
      en: 'Emanus platform visual presentation · Official live URL pending',
    },
  },
  {
    id: 'emanus-ia',
    indexLabel: '02',
    title: 'Emanus IA',
    categoryKey: 'edtech-ai',
    categoryLabel: {
      pt: 'Inteligência Artificial · EdTech',
      en: 'Artificial Intelligence · EdTech',
    },
    shortDescription: {
      pt: 'Plataforma educacional com inteligência artificial concebida para apoiar estudantes do ensino secundário com aulas, simulações, testes e organização de estudos.',
      en: 'AI-powered educational platform designed to support secondary school students with AI assistance, lessons, simulations, tests, and study organization.',
    },
    fullDescription: {
      pt: 'A Emanus IA procura tornar o estudo no ensino secundário mais estruturado, acessível e personalizado. A plataforma integra apoio académico assistido por inteligência artificial, conteúdos educativos organizados, simulações de exames, testes práticos e planeamento contínuo da rotina de estudos.',
      en: 'Emanus IA makes secondary school learning more structured, accessible, and personalized through AI-powered academic assistance, structured lessons, practice simulations and tests, and personal study planning.',
    },
    highlights: {
      pt: [
        'Assistência académica orientada por Inteligência Artificial',
        'Aulas educativas estruturadas por disciplina',
        'Simulações e testes interativos para preparação escolar',
        'Apoio personalizado à aprendizagem e organização de estudos',
      ],
      en: [
        'AI-powered academic assistance for students',
        'Structured educational lessons across subjects',
        'Interactive exam simulations and practice tests',
        'Personalized learning support and study organization',
      ],
    },
    technologies: ['Python', 'Next.js', 'React', 'Node.js', 'APIs', 'Inteligência Artificial'],
    team: [
      {
        name: 'Emanuel De Jesus',
        role: { pt: 'Fundador', en: 'Founder' },
      },
      {
        name: 'Daniel Taba',
        role: { pt: 'Co-fundador', en: 'Co-founder' },
      },
      {
        name: 'Guido Alfredo',
        role: { pt: 'Co-fundador', en: 'Co-founder' },
      },
    ],
    liveUrl: 'https://emanus-ia.vercel.app/',
    repoUrl: null,
    imageUrl: '/assets/aistudio/image_23ea444f.png',
    mockupType: 'emanus-ia',
    placeholderNote: {
      pt: 'Captura da interface oficial da Emanus IA · Plataforma disponível online',
      en: 'Official Emanus IA interface screenshot · Live online',
    },
  },
  {
    id: 'premier-fit',
    indexLabel: '03',
    title: 'Premier Fit',
    categoryKey: 'fitness-social',
    categoryLabel: {
      pt: 'Plataforma Digital · Fitness & Social',
      en: 'Digital Platform · Fitness & Social',
    },
    shortDescription: {
      pt: 'Plataforma digital de fitness criada para conectar entusiastas de treino, organizar rotinas, gerir horários e partilhar a evolução física com amigos.',
      en: 'Digital fitness platform built to connect fitness enthusiasts, organize workouts, manage training schedules, track progress, and share milestones with friends.',
    },
    fullDescription: {
      pt: 'O Premier Fit combina organização pessoal de treinos com uma camada social motivadora. Permite planear sessões de treino, acompanhar horários semanais, registar a evolução física ao longo do tempo e partilhar conquistas diretamente com uma rede de amigos.',
      en: 'Premier Fit combines personal workout planning with a motivating social experience—enabling users to organize routines, manage training schedules, monitor physical progress, and share results with friends.',
    },
    highlights: {
      pt: [
        'Organização estruturada de planos e rotinas de treino',
        'Gestão de horários e calendário semanal de sessões',
        'Acompanhamento contínuo do progresso físico',
        'Conexões sociais e partilha de evolução com amigos',
      ],
      en: [
        'Structured workout routine organization',
        'Weekly training schedule management',
        'Continuous fitness progress tracking',
        'Social connections and sharing progress with friends',
      ],
    },
    technologies: ['React', 'JavaScript', 'CSS3', 'Node.js', 'Firebase', 'UI/UX Design'],
    status: {
      pt: 'Em Desenvolvimento',
      en: 'In Development',
    },
    liveUrl: null,
    repoUrl: null,
    mockupType: 'premier-fit',
    placeholderNote: {
      pt: 'Maquete visual da plataforma · Projeto em desenvolvimento',
      en: 'Platform visual mockup · In development',
    },
  },
  {
    id: 'famebook',
    indexLabel: '04',
    title: 'Famebook',
    categoryKey: 'digital-platform',
    categoryLabel: {
      pt: 'Plataforma Digital · Tecnologia · Rede de Personalidades',
      en: 'Digital Platform · Technology · Personalities Network',
    },
    shortDescription: {
      pt: 'Plataforma digital desenvolvida para descobrir, conhecer e valorizar personalidades públicas, reunindo biografias, trajetórias profissionais, conquistas e curiosidades.',
      en: 'Digital platform built to discover, explore, and highlight public figures by bringing together biographies, career paths, achievements, and notable contributions.',
    },
    fullDescription: {
      pt: 'Famebook é uma plataforma digital desenvolvida para descobrir, conhecer e valorizar personalidades públicas. O projeto reúne informações biográficas, trajetórias profissionais, conquistas, contribuições e curiosidades sobre figuras de diferentes áreas, proporcionando uma experiência centralizada de descoberta e conhecimento.',
      en: 'Famebook is a digital platform designed to discover, explore, and recognize public personalities. It gathers biographical details, career journeys, achievements, contributions, and insights across diverse fields into a unified discovery experience.',
    },
    positioning: {
      pt: 'Um projeto de tecnologia e informação que procura valorizar histórias, trajetórias e personalidades.',
      en: 'A technology and information project dedicated to celebrating stories, career journeys, and influential personalities.',
    },
    highlights: {
      pt: [
        'Perfis individuais de personalidades',
        'Biografias e trajetórias profissionais',
        'Organização de personalidades por categorias',
        'Pesquisa e descoberta de figuras públicas',
        'Apresentação de conquistas e contribuições',
        'Interface moderna e intuitiva preparada para expansão',
      ],
      en: [
        'Individual personality profiles',
        'Biographies and professional career paths',
        'Categorized organization of public figures',
        'Search and discovery experience',
        'Showcase of achievements and contributions',
        'Modern, intuitive interface ready for future expansion',
      ],
    },
    featureTags: {
      pt: ['Perfis Biográficos', 'Categorias', 'Pesquisa & Descoberta', 'Conquistas'],
      en: ['Biographical Profiles', 'Categories', 'Search & Discovery', 'Achievements'],
    },
    technologies: [],
    status: {
      pt: 'Em Desenvolvimento',
      en: 'In Development',
    },
    liveUrl: null,
    repoUrl: null,
    mockupType: 'famebook',
    placeholderNote: {
      pt: 'Maquete visual da interface · Projeto em desenvolvimento',
      en: 'Interface visual mockup · In development',
    },
  },
  {
    id: 'saas-recargas',
    indexLabel: '05',
    title: 'CSA - Rápido e Seguro',
    categoryKey: 'saas-fintech',
    categoryLabel: {
      pt: 'SaaS · Gestão Comercial · Fintech',
      en: 'SaaS · Commercial Management · Fintech',
    },
    shortDescription: {
      pt: 'Solução SaaS desenvolvida para gerir e controlar vendas de recargas eletrónicas, acompanhar operações comerciais, organizar receitas, controlar despesas e analisar desempenho.',
      en: 'SaaS solution built to manage and track electronic top-up sales, monitor commercial operations, organize revenues, control expenses, and analyze business performance.',
    },
    fullDescription: {
      pt: 'Uma solução SaaS concebida para facilitar a gestão e o controlo de vendas de recargas eletrónicas. Permite acompanhar operações comerciais, gerir múltiplas plataformas de distribuição, controlar comissões, lucros e despesas operacionais, consultar saldos e gerar relatórios diários, semanais e mensais numa plataforma centralizada.',
      en: 'A centralized SaaS platform created to streamline electronic top-up sales management—enabling businesses to log sales, manage multiple distribution platforms, track commissions, profits, and operational expenses, monitor balances, and review daily, weekly, and monthly reports.',
    },
    positioning: {
      pt: 'Uma solução tecnológica orientada para a digitalização, organização e otimização da gestão de pequenos negócios.',
      en: 'A technology solution focused on digitizing, organizing, and optimizing small business operations.',
    },
    highlights: {
      pt: [
        'Registo e acompanhamento de vendas',
        'Gestão de diferentes plataformas de distribuição de recargas',
        'Controlo de comissões, lucros e despesas operacionais',
        'Acompanhamento de saldos e histórico de operações',
        'Relatórios diários, semanais e mensais',
        'Dashboard com indicadores de desempenho',
      ],
      en: [
        'Sales logging and operational tracking',
        'Multi-platform top-up distribution management',
        'Commission, profit, and operational expense control',
        'Balance monitoring and searchable operation history',
        'Daily, weekly, and monthly reporting',
        'Performance indicator dashboard',
      ],
    },
    featureTags: {
      pt: ['Registo de Vendas', 'Comissões & Lucros', 'Despesas & Saldos', 'Relatórios'],
      en: ['Sales Tracking', 'Commissions & Profit', 'Balances & Expenses', 'Reports'],
    },
    technologies: [],
    status: {
      pt: 'Privado',
      en: 'Private',
    },
    liveUrl: null,
    repoUrl: null,
    imageUrl: '/assets/aistudio/image_463020d6.png',
    mockupType: 'recargas-saas',
    placeholderNote: {
      pt: 'Captura do painel oficial CSA - Rápido e Seguro · Projeto privado',
      en: 'Official CSA - Rápido e Seguro dashboard screenshot · Private project',
    },
  },
  {
    id: 'ciz-lda',
    indexLabel: '06',
    title: 'CIZ LDA — Website Institucional',
    categoryKey: 'corporate',
    categoryLabel: {
      pt: 'Website Institucional · Setor Petrolífero & Empresarial',
      en: 'Corporate Website · Oil & Gas & Enterprise Sector',
    },
    shortDescription: {
      pt: 'Plataforma institucional moderna e profissional desenvolvida para fortalecer a presença digital da CIZ LDA e apresentar os seus serviços e soluções integradas para o setor petrolífero e empresarial.',
      en: 'Modern corporate website developed to strengthen CIZ LDA’s digital presence and present its integrated services and solutions for the oil & gas and enterprise sectors.',
    },
    fullDescription: {
      pt: 'Desenvolvimento de uma plataforma institucional moderna e profissional para a CIZ LDA, concebida para fortalecer a presença digital da empresa e apresentar os seus serviços e soluções integradas para o setor petrolífero e empresarial. O projeto destaca-se por uma identidade visual corporativa sofisticada, design elegante, navegação intuitiva e uma apresentação estratégica dos diferenciais, áreas de atuação e informações institucionais da empresa, transmitindo credibilidade, profissionalismo e confiança para clientes e parceiros.',
      en: 'Development of a modern, professional institutional platform for CIZ LDA, designed to strengthen the company’s digital presence and showcase its integrated services and solutions for the oil & gas and corporate sectors. Featuring a refined corporate visual identity, intuitive navigation, and strategic presentation of key differentiators and service areas, it fosters credibility, trust, and clear communication with clients and partners.',
    },
    positioning: {
      pt: 'Presença digital corporativa orientada para credibilidade, clareza estratégica e comunicação direta com clientes e parceiros.',
      en: 'Corporate digital presence focused on credibility, strategic clarity, and direct engagement with clients and partners.',
    },
    highlights: {
      pt: [
        'Identidade visual corporativa sofisticada e elegante',
        'Apresentação estratégica de serviços e soluções integradas',
        'Áreas de atuação dedicadas ao setor petrolífero e empresarial',
        'Navegação intuitiva e estrutura informativa institucional',
        'Comunicação clara com potenciais clientes e parceiros',
        'Design responsivo preparado para diferentes dispositivos',
      ],
      en: [
        'Refined and professional corporate visual identity',
        'Strategic presentation of services and integrated solutions',
        'Dedicated focus on oil & gas and enterprise service areas',
        'Intuitive navigation and structured institutional information',
        'Clear communication channels for clients and partners',
        'Responsive design across desktop and mobile viewports',
      ],
    },
    featureTags: {
      pt: ['Identidade Corporativa', 'Setor Petrolífero', 'Serviços Integrados', 'Institucional'],
      en: ['Corporate Identity', 'Oil & Gas Sector', 'Integrated Services', 'Institutional'],
    },
    technologies: [],
    liveUrl: 'https://cizservice.lovable.app/',
    repoUrl: null,
    imageUrl: '/assets/aistudio/ciz_e488d2cf.PNG',
    mockupType: 'ciz-lda',
    placeholderNote: {
      pt: 'Captura oficial do website institucional da CIZ LDA · Disponível online',
      en: 'Official CIZ LDA institutional website screenshot · Live online',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: {
      pt: 'Programação',
      en: 'Programming',
    },
    subtitle: {
      pt: 'Linguagens e fundamentos de desenvolvimento web e software',
      en: 'Core languages for software and web development',
    },
    items: [
      { name: 'JavaScript', iconKey: 'code' },
      { name: 'TypeScript', iconKey: 'file-code' },
      { name: 'C#', iconKey: 'terminal' },
      { name: 'Python', iconKey: 'cpu' },
      { name: 'HTML5', iconKey: 'layout' },
      { name: 'CSS3', iconKey: 'palette' },
    ],
  },
  {
    id: 'frameworks',
    title: {
      pt: 'Frameworks e Tecnologias',
      en: 'Frameworks & Technologies',
    },
    subtitle: {
      pt: 'Arquitetura de interfaces modernas, servidores e integrações',
      en: 'Modern interface architecture, backends, and integrations',
    },
    items: [
      { name: 'React', iconKey: 'atom' },
      { name: 'Next.js', iconKey: 'layers' },
      { name: 'Node.js', iconKey: 'server' },
      { name: 'APIs', iconKey: 'webhook' },
    ],
  },
  {
    id: 'tools',
    title: {
      pt: 'Ferramentas e Infraestrutura',
      en: 'Tools & Infrastructure',
    },
    subtitle: {
      pt: 'Fluxo de trabalho, controlo de versão e publicação em nuvem',
      en: 'Workflow, version control, and cloud deployment',
    },
    items: [
      { name: 'Git', iconKey: 'git-branch' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'Visual Studio Code', iconKey: 'code-square' },
      { name: 'Firebase', iconKey: 'flame' },
      { name: 'Vercel', iconKey: 'triangle' },
    ],
  },
  {
    id: 'interests',
    title: {
      pt: 'Áreas de Interesse e Produto',
      en: 'Product & Exploration Areas',
    },
    subtitle: {
      pt: 'Domínios onde aplico investigação e construção contínua',
      en: 'Domains where I apply continuous research and product building',
    },
    items: [
      { name: 'Inteligência Artificial', iconKey: 'sparkles' },
      { name: 'UI/UX Design', iconKey: 'pen-tool' },
      { name: 'Sistemas de Bases de Dados', iconKey: 'database' },
      { name: 'Análise de Dados', iconKey: 'bar-chart' },
      { name: 'Desenvolvimento de Produtos Digitais', iconKey: 'rocket' },
    ],
  },
];

export const EDUCATION_TIMELINE: EducationEntry[] = [
  {
    id: 'imtelc',
    institution: 'Instituto Médio Politécnico Privado de Línguas, Culturas e Ciências (IMTELC)',
    shortName: 'IMTELC',
    field: {
      pt: 'Informática',
      en: 'Informatics',
    },
    level: {
      pt: '12.ª Classe',
      en: '12th Grade',
    },
    location: 'Luanda, Angola',
    summary: {
      pt: 'Formação técnica média em Informática, consolidando bases em lógica de programação, sistemas computacionais, bases de dados e desenvolvimento de aplicações enquanto desenvolvo projetos tecnológicos próprios.',
      en: 'Technical secondary education in Informatics, strengthening foundations in programming logic, computer systems, databases, and application development alongside independent tech ventures.',
    },
  },
];

export const ENTREPRENEURSHIP_PILLARS: EntrepreneurshipPillar[] = [
  {
    id: 'emanus-venture',
    index: '01',
    title: {
      pt: 'Emanus Startup',
      en: 'Emanus Startup',
    },
    description: {
      pt: 'Iniciativa tecnológica focada em transformar ideias em produtos digitais reais, combinando engenharia de software e design funcional.',
      en: 'Technology venture focused on turning ideas into real digital products through software engineering and purposeful product design.',
    },
  },
  {
    id: 'edtech-vision',
    index: '02',
    title: {
      pt: 'Tecnologia Educacional (Emanus IA)',
      en: 'Educational Technology (Emanus IA)',
    },
    description: {
      pt: 'Aplicação de inteligência artificial para apoiar estudantes do ensino secundário com organização, simulações e aprendizagem personalizada.',
      en: 'Applying artificial intelligence to help secondary school students with structured study routines, simulations, and personalized learning.',
    },
  },
  {
    id: 'collaboration',
    index: '03',
    title: {
      pt: 'Colaboração e Construção de Equipas',
      en: 'Team Collaboration',
    },
    description: {
      pt: 'Trabalho conjunto com co-fundadores e pares, incluindo Daniel Taba e Guido Alfredo na Emanus IA, unindo visão técnica e execução prática.',
      en: 'Working closely with co-founders and peers, including Daniel Taba and Guido Alfredo at Emanus IA, combining technical craft and practical execution.',
    },
  },
  {
    id: 'real-impact',
    index: '04',
    title: {
      pt: 'Soluções para Problemas Reais',
      en: 'Solving Real-World Problems',
    },
    description: {
      pt: 'Compromisso com o desenvolvimento tecnológico em Angola e África, construindo ferramentas digitais relevantes e acessíveis.',
      en: 'Committed to contributing to technological growth in Angola and Africa by building relevant, accessible digital tools.',
    },
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'emanueldejesus617-boop',
    url: 'https://github.com/emanueldejesus617-boop',
    actionLabel: {
      pt: 'Ver perfil',
      en: 'View profile',
    },
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: '+244 940 843 801',
    url: 'https://wa.me/244940843801',
    actionLabel: {
      pt: 'Enviar mensagem',
      en: 'Send message',
    },
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@emanueldejesus617',
    url: 'https://www.instagram.com/emanueldejesus617/',
    actionLabel: {
      pt: 'Seguir',
      en: 'Follow',
    },
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    handle: 'Emanuel De Jesus',
    url: 'https://www.linkedin.com/in/emanuel-de-jesus-4a1143407/',
    actionLabel: {
      pt: 'Conectar',
      en: 'Connect',
    },
  },
];

export const TRANSLATIONS = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Competências',
      education: 'Formação',
      contact: 'Contacto',
      cta: 'Contactar',
    },
    utility: {
      lightMode: 'Claro',
      darkMode: 'Escuro',
      switchToLight: 'Mudar para modo claro',
      switchToDark: 'Mudar para modo escuro',
    },
    hero: {
      role: 'Desenvolvedor de Software · Empreendedor',
      headline: 'Transformando ideias em tecnologia.',
      tagline: 'Building ideas into digital solutions.',
      description:
        'Sou Emanuel De Jesus, desenvolvedor de software e empreendedor. Acredito que a tecnologia é uma ferramenta poderosa para resolver problemas reais, criar oportunidades e transformar o futuro.',
      ctaProjects: 'Explorar Projetos',
      ctaContact: 'Contactar-me',
      ctaCv: 'Descarregar CV',
      philosophy: 'Não estudo apenas tecnologia. Uso a tecnologia para construir soluções.',
      portraitBadge: 'Emanuel De Jesus · Retrato Profissional',
      portraitCaption: 'Software Developer & Entrepreneur · Luanda, Angola.',
    },
    about: {
      kicker: '01. Sobre Mim',
      title: 'Mais do que código. Uma visão.',
      lead: 'Sou um jovem desenvolvedor de software angolano apaixonado por tecnologia, inovação e empreendedorismo. Trabalho na criação de soluções digitais que procuram transformar ideias em produtos reais e úteis.',
      paragraphs: [
        'Desde cedo descobri que programar vai muito além de escrever linhas de código: trata-se de estruturar pensamento, identificar necessidades concretas e conceber produtos digitais capazes de gerar impacto positivo no quotidiano das pessoas.',
        'Com uma mentalidade empreendedora e foco contínuo em engenharia de software, inteligência artificial e experiência de utilizador, dedico-me a construir iniciativas como a Emanus, a Emanus IA e o Premier Fit.',
        'Acredito profundamente no potencial tecnológico de Angola e de África, e procuro contribuir com trabalho consistente, aprendizagem contínua e produtos criados com rigor.',
      ],
      portraitTitle: 'Emanuel De Jesus · Luanda',
      portraitNote: 'Desenvolvedor de Software e Empreendedor Tecnológico.',
      pillarsLabel: 'Foco Atual',
      pillars: [
        'Desenvolvimento de Software',
        'Empreendedorismo Tecnológico',
        'Produtos Digitais',
        'Inteligência Artificial',
      ],
    },
    projects: {
      kicker: '02. Projetos em Destaque',
      title: 'Produtos construídos com propósito.',
      subtitle:
        'Iniciativas de software e empreendedorismo digital concebidas para resolver problemas concretos na educação, produtividade e bem-estar.',
      filters: {
        all: 'Todos',
        startup: 'Startup',
        'edtech-ai': 'EdTech & IA',
        'fitness-social': 'Fitness & Social',
        'digital-platform': 'Plataforma Digital',
        'saas-fintech': 'SaaS & Fintech',
        corporate: 'Institucional',
      },
      viewProject: 'Ver Projeto',
      accessProject: 'Aceder',
      viewDetails: 'Detalhes',
      sourceCode: 'Ver código',
      teamLabel: 'Equipa',
      techLabel: 'Tecnologias',
      positioningLabel: 'Posicionamento',
      highlightsLabel: 'Principais Funcionalidades',
      livePending: 'URL público por publicar',
      repoPending: 'Repositório privado ou ainda não publicado',
      closeModal: 'Fechar',
    },
    skills: {
      kicker: '03. Competências Técnicas',
      title: 'Base técnica e áreas de atuação.',
      subtitle:
        'Ferramentas, linguagens e domínios que utilizo no dia a dia para conceber, desenvolver e publicar aplicações.',
    },
    education: {
      kicker: '04. Formação Académica',
      title: 'Percurso formativo.',
      subtitle: 'Base académica em Informática aliada à prática contínua no desenvolvimento de software.',
      fieldLabel: 'Área de Formação',
      levelLabel: 'Nível Académico',
      locationLabel: 'Localização',
    },
    entrepreneurship: {
      kicker: '05. Empreendedorismo e Visão',
      title: 'Construir soluções, não apenas protótipos.',
      subtitle:
        'A minha abordagem empreendedora nasce da vontade de unir tecnologia, trabalho em equipa e execução prática para responder a desafios reais em Angola e além-fronteiras.',
      centralQuote: '«Não estudo apenas tecnologia. Uso a tecnologia para construir soluções.»',
    },
    contact: {
      kicker: '06. Contacto',
      title: 'Tem uma ideia? Vamos construir algo significativo.',
      description:
        'Estou aberto a oportunidades na área de tecnologia, colaborações, projetos interessantes e conexões profissionais relevantes.',
      socialsTitle: 'Canais Diretos',
      formTitle: 'Enviar uma Mensagem',
      nameLabel: 'Nome completo',
      namePlaceholder: 'O seu nome',
      emailLabel: 'Endereço de e-mail',
      emailPlaceholder: 'nome@exemplo.com',
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Colaboração, projeto ou oportunidade',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre a sua ideia, projeto ou oportunidade...',
      submitButton: 'Enviar Mensagem',
      sendingButton: 'A enviar...',
      successTitle: 'Mensagem enviada com sucesso',
      successBody: 'Obrigado pelo contacto. Responderei o mais brevemente possível.',
      notConfiguredTitle: 'Envio direto de e-mail ainda não configurado no servidor',
      notConfiguredBody:
        'Este formulário validou os seus dados, mas o envio automático por e-mail requer configuração de um fornecedor externo (Resend ou Formspree). Para garantir que a sua mensagem chega de imediato, envie diretamente via WhatsApp ou copie a mensagem.',
      sendViaWhatsapp: 'Enviar via WhatsApp',
      copyMessage: 'Copiar Mensagem',
      copiedMessage: 'Copiado',
      genericError: 'Não foi possível enviar a mensagem neste momento. Tente novamente ou utilize o WhatsApp.',
      validation: {
        name: 'Introduza o seu nome completo (mínimo 2 caracteres).',
        email: 'Introduza um endereço de e-mail válido.',
        subject: 'Introduza um assunto (mínimo 3 caracteres).',
        message: 'Escreva uma mensagem com pelo menos 10 caracteres.',
      },
    },
    cvModal: {
      title: 'Currículo (CV) — Placeholder',
      statusNotice:
        'O ficheiro PDF oficial do currículo ainda não foi carregado no projeto (caminho esperado: public/cv-emanuel-de-jesus.pdf). Quando o ficheiro for adicionado, o botão fará a transferência direta.',
      summaryHeading: 'Resumo Verificado do Perfil',
      printAction: 'Imprimir / Guardar Resumo em PDF',
      contactAction: 'Solicitar CV via WhatsApp',
      close: 'Fechar',
    },
    footer: {
      tagline: 'Construído com paixão pela tecnologia e inovação.',
      navigation: 'Navegação',
      socials: 'Redes e Contacto',
      copyright: '© 2026 Emanuel De Jesus. Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      cta: 'Get in Touch',
    },
    utility: {
      lightMode: 'Light',
      darkMode: 'Dark',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
    hero: {
      role: 'Software Developer · Entrepreneur',
      headline: 'Transforming ideas into technology.',
      tagline: 'Building ideas into digital solutions.',
      description:
        'I am Emanuel De Jesus, a software developer and entrepreneur from Luanda, Angola. I believe technology is a powerful tool to solve real-world problems, create opportunities, and shape the future.',
      ctaProjects: 'Explore My Projects',
      ctaContact: 'Contact Me',
      ctaCv: 'Download My CV',
      philosophy: "I don't just study technology. I use technology to build solutions.",
      portraitBadge: 'Emanuel De Jesus · Professional Portrait',
      portraitCaption: 'Software Developer & Entrepreneur · Luanda, Angola.',
    },
    about: {
      kicker: '01. About Me',
      title: 'More than code. A vision.',
      lead: 'I am a young Angolan software developer passionate about technology, innovation, and entrepreneurship, focused on building digital solutions that turn ideas into real, useful products.',
      paragraphs: [
        'Early on, I realized software engineering goes far beyond writing syntax—it is about structuring clear thinking, identifying real human needs, and crafting digital products that create meaningful everyday impact.',
        'With an entrepreneurial mindset and a steady focus on software development, artificial intelligence, and user experience, I work on initiatives such as Emanus, Emanus IA, and Premier Fit.',
        'I deeply believe in the technological potential of Angola and Africa, and I aim to contribute through consistent engineering work, continuous learning, and purposeful products.',
      ],
      portraitTitle: 'Emanuel De Jesus · Luanda',
      portraitNote: 'Software Developer and Technology Entrepreneur.',
      pillarsLabel: 'Core Focus',
      pillars: [
        'Software Development',
        'Tech Entrepreneurship',
        'Digital Products',
        'Artificial Intelligence',
      ],
    },
    projects: {
      kicker: '02. Featured Projects',
      title: 'Products built with purpose.',
      subtitle:
        'Software initiatives and digital ventures designed to solve practical challenges in education, productivity, and fitness.',
      filters: {
        all: 'All',
        startup: 'Startup',
        'edtech-ai': 'EdTech & AI',
        'fitness-social': 'Fitness & Social',
        'digital-platform': 'Digital Platform',
        'saas-fintech': 'SaaS & Fintech',
        corporate: 'Corporate',
      },
      viewProject: 'View Project',
      accessProject: 'Visit Site',
      viewDetails: 'Details',
      sourceCode: 'View Code',
      teamLabel: 'Team',
      techLabel: 'Technologies',
      positioningLabel: 'Positioning',
      highlightsLabel: 'Key Capabilities',
      livePending: 'Live URL pending publication',
      repoPending: 'Repository private or not yet published',
      closeModal: 'Close',
    },
    skills: {
      kicker: '03. Technical Skills',
      title: 'Technical stack and areas of interest.',
      subtitle:
        'Languages, frameworks, tools, and product domains I use to design, build, and deploy digital applications.',
    },
    education: {
      kicker: '04. Education',
      title: 'Academic background.',
      subtitle: 'Formal Informatics education paired with hands-on software engineering practice.',
      fieldLabel: 'Field of Study',
      levelLabel: 'Academic Level',
      locationLabel: 'Location',
    },
    entrepreneurship: {
      kicker: '05. Entrepreneurship',
      title: 'Building solutions, not just prototypes.',
      subtitle:
        'My entrepreneurial approach brings together software engineering, team collaboration, and practical execution to address real-world challenges in Angola and beyond.',
      centralQuote: "«I don't just study technology. I use technology to build solutions.»",
    },
    contact: {
      kicker: '06. Contact',
      title: "Have an idea? Let's build something meaningful.",
      description:
        "I'm open to technology opportunities, collaborations, interesting projects and meaningful professional connections.",
      socialsTitle: 'Direct Channels',
      formTitle: 'Send a Message',
      nameLabel: 'Full name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'name@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Collaboration, project, or opportunity',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your idea, project, or opportunity...',
      submitButton: 'Send Message',
      sendingButton: 'Sending...',
      successTitle: 'Message sent successfully',
      successBody: 'Thank you for reaching out. I will respond as soon as possible.',
      notConfiguredTitle: 'Direct email delivery is not configured on this server yet',
      notConfiguredBody:
        'Your input has been validated, but automated email delivery requires configuring an email provider (Resend or Formspree). To make sure your message reaches me right away, send it directly via WhatsApp or copy your message below.',
      sendViaWhatsapp: 'Send via WhatsApp',
      copyMessage: 'Copy Message',
      copiedMessage: 'Copied',
      genericError: 'Unable to send your message right now. Please try again or reach out via WhatsApp.',
      validation: {
        name: 'Please enter your full name (at least 2 characters).',
        email: 'Please enter a valid email address.',
        subject: 'Please enter a subject (at least 3 characters).',
        message: 'Please write a message of at least 10 characters.',
      },
    },
    cvModal: {
      title: 'Curriculum Vitae (CV) — Placeholder',
      statusNotice:
        'The official PDF CV file has not been uploaded yet (expected path: public/cv-emanuel-de-jesus.pdf). Once added, clicking Download CV will download the PDF directly.',
      summaryHeading: 'Verified Profile Summary',
      printAction: 'Print / Save Summary as PDF',
      contactAction: 'Request CV on WhatsApp',
      close: 'Close',
    },
    footer: {
      tagline: 'Built with passion for technology and innovation.',
      navigation: 'Navigation',
      socials: 'Social Profiles',
      copyright: '© 2026 Emanuel De Jesus. All rights reserved.',
    },
  },
};
