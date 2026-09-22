export type LocalizedText = { pt: string; en: string };

export type GalleryImage = {
  src: string;
  alt?: LocalizedText;
};

// A standardized, CMS-shaped case study template. Every project below reads
// as data a future admin panel would produce: each section carries its own
// `enabled` switch (a project doesn't need every section), a freeform body
// text for context, and an image gallery. Sections with `enabled: false` (or
// no `content` at all) simply don't render.
export type ProjectSection = {
  enabled: boolean;
  body?: LocalizedText;
  images: GalleryImage[];
};

// Media items for the video/gif gallery — same enable-switch/body/gallery
// shape as ProjectSection, but for motion content instead of stills.
export type MediaItem = {
  src: string;
  type: "video" | "gif";
  alt?: LocalizedText;
};

export type MediaSection = {
  enabled: boolean;
  body?: LocalizedText;
  items: MediaItem[];
};

// A closing full-bleed image, styled and animated exactly like the cover,
// shown right before the related-projects block. Optional per project.
export type BackCover = {
  enabled: boolean;
  src: string;
  alt: LocalizedText;
};

export type ProjectContent = {
  cover: { src: string; alt: LocalizedText };
  backCover: BackCover;
  projectUrl?: string;
  pdfHref?: string;
  about: { enabled: boolean; body: LocalizedText };
  foundations: ProjectSection;
  product: ProjectSection;
  research: ProjectSection;
  designSystem: ProjectSection;
  videos: MediaSection;
};

export type Project = {
  slug: string;
  year: string;
  role: LocalizedText;
  title: string;
  tagline: LocalizedText;
  tags: string[];
  image: string;
  imageAlt: LocalizedText;
  size: "lg" | "md";
  content?: ProjectContent;
};

export const projects: Project[] = [
  {
    slug: "contasco",
    year: "2026",
    role: { pt: "UX/UI Designer, ponta a ponta", en: "UX/UI Designer, end to end" },
    title: "ContasCo",
    tagline: {
      pt: "Plataforma SaaS que centraliza a gestão de clientes para Account Managers.",
      en: "SaaS platform that centralizes client management for Account Managers.",
    },
    tags: ["SaaS", "B2B", "Design System"],
    image: "/projects/contasco/detalhes-cliente.png",
    imageAlt: {
      pt: "Tela de Detalhes do Cliente do ContasCo",
      en: "ContasCo client details screen",
    },
    size: "lg",
    content: {
      cover: {
        src: "/projects/contasco/detalhes-cliente.png",
        alt: { pt: "Tela de Detalhes do Cliente do ContasCo", en: "ContasCo client details screen" },
      },
      backCover: { enabled: false, src: "", alt: { pt: "", en: "" } },
      pdfHref: "/projects/contasco/ContasCo-Case-UXUI-Dylan.pdf",
      about: {
        enabled: true,
        body: {
          pt: "Account Managers de agências e times de marketing vivem entre abas: CRM, planilhas de contrato, analytics e ferramentas de tarefas para entender a saúde real de cada cliente.\n\nO ContasCo centraliza a gestão de clientes e projetos em um único painel, dando visão 360º de cada conta (saúde, métricas, histórico e contratos) sem sair de uma única tela. Conduzi sozinho todo o processo em duas semanas: pesquisa, definição, ideação, prototipação, UI, design system e teste de usabilidade.",
          en: "Account Managers at agencies and marketing teams live between tabs: CRM, contract spreadsheets, analytics and task tools just to understand the real health of each client.\n\nContasCo centralizes client and project management in a single dashboard, giving a 360° view of each account (health, metrics, history and contracts) without leaving one screen. I ran the entire process solo over two weeks: research, definition, ideation, prototyping, UI, design system and usability testing.",
        },
      },
      foundations: { enabled: false, images: [] },
      product: {
        enabled: true,
        body: {
          pt: "A tela de Detalhes do Cliente reúne saúde da conta, métricas, histórico de interações e contratos em um único painel, do rabisco em papel ao protótipo de alta fidelidade em Figma.",
          en: "The Client Details screen brings together account health, metrics, interaction history and contracts in a single panel, from paper sketch to a high-fidelity Figma prototype.",
        },
        images: [
          { src: "/projects/contasco/detalhes-cliente.png", alt: { pt: "Tela de Detalhes do Cliente", en: "Client Details screen" } },
          { src: "/projects/contasco/prototipacao.png", alt: { pt: "Progressão da prototipação", en: "Prototyping progression" } },
        ],
      },
      research: { enabled: false, images: [] },
      designSystem: {
        enabled: true,
        body: {
          pt: "Um design system pensado para crescer com consistência: cor, tipografia, grid e ícones documentados para escalar com o produto.",
          en: "A design system built to scale with consistency: color, typography, grid and icons, all documented to grow with the product.",
        },
        images: [
          { src: "/projects/contasco/design-system.png", alt: { pt: "Design system do ContasCo", en: "ContasCo design system" } },
        ],
      },
      videos: { enabled: false, items: [] },
    },
  },
  {
    slug: "taskfy",
    year: "2025",
    role: { pt: "UX/UI Designer", en: "UX/UI Designer" },
    title: "Taskfy",
    tagline: {
      pt: "App mobile de gestão de tarefas para times pequenos.",
      en: "Mobile task management app for small teams.",
    },
    tags: ["Mobile", "App Design"],
    image: "/projects/taskfy/capa.png",
    imageAlt: { pt: "Mockup de capa do aplicativo Taskfy", en: "Taskfy app cover mockup" },
    size: "md",
    content: {
      cover: {
        src: "/projects/taskfy/capa.png",
        alt: { pt: "Capa do projeto Taskfy", en: "Taskfy project cover" },
      },
      backCover: { enabled: false, src: "", alt: { pt: "", en: "" } },
      about: {
        enabled: true,
        body: {
          pt: "Taskfy é um app mobile de gestão de tarefas pensado para times pequenos que precisam organizar o dia a dia sem a complexidade de ferramentas corporativas.\n\nO processo passou por pesquisa, mapeamento de persona e fluxo, exploração de identidade visual e prototipação de alta fidelidade, finalizando com teste de usuário.",
          en: "Taskfy is a mobile task-management app designed for small teams that need to organize their day without the overhead of enterprise tools.\n\nThe process covered research, persona and flow mapping, visual identity exploration and high-fidelity prototyping, wrapping up with user testing.",
        },
      },
      foundations: {
        enabled: true,
        body: {
          pt: "Paleta de cores e sistema tipográfico construídos para transmitir organização e leveza no dia a dia de times pequenos.",
          en: "Color palette and typography system built to feel organized and light for small teams' everyday use.",
        },
        images: [
          { src: "/projects/taskfy/cores.png", alt: { pt: "Paleta de cores", en: "Color palette" } },
          { src: "/projects/taskfy/tipografia.png", alt: { pt: "Sistema tipográfico", en: "Typography system" } },
        ],
      },
      product: {
        enabled: true,
        body: {
          pt: "Da wireframe à interface final: telas de alta fidelidade e mockups de apresentação do fluxo principal do app.",
          en: "From wireframe to final interface: high-fidelity screens and presentation mockups of the app's core flow.",
        },
        images: [
          { src: "/projects/taskfy/telas-1.png", alt: { pt: "Telas de alta fidelidade", en: "High-fidelity screens" } },
          { src: "/projects/taskfy/telas-2.png", alt: { pt: "Mais telas do fluxo principal", en: "More screens from the core flow" } },
          { src: "/projects/taskfy/mockup-1.png", alt: { pt: "Mockup de apresentação", en: "Presentation mockup" } },
          { src: "/projects/taskfy/mockup-2.png", alt: { pt: "Mockup de apresentação", en: "Presentation mockup" } },
        ],
      },
      research: {
        enabled: true,
        body: {
          pt: "Discovery a partir do problema real de organização em times pequenos: persona, processo, etapas do fluxo e validação com teste de usuário.",
          en: "Discovery grounded in the real organization problem for small teams: persona, process, flow steps and validation through user testing.",
        },
        images: [
          { src: "/projects/taskfy/problema.png", alt: { pt: "Definição do problema", en: "Problem definition" } },
          { src: "/projects/taskfy/persona.png", alt: { pt: "Persona e contexto de uso", en: "Persona and usage context" } },
          { src: "/projects/taskfy/processo.png", alt: { pt: "Processo de design", en: "Design process" } },
          { src: "/projects/taskfy/etapas.png", alt: { pt: "Etapas do fluxo", en: "Flow steps" } },
          { src: "/projects/taskfy/user-flow.png", alt: { pt: "User flow completo", en: "Full user flow" } },
          { src: "/projects/taskfy/user-test.png", alt: { pt: "Teste de usabilidade", en: "Usability testing" } },
          { src: "/projects/taskfy/aprendizado.png", alt: { pt: "Aprendizados", en: "Learnings" } },
        ],
      },
      designSystem: { enabled: false, images: [] },
      videos: { enabled: false, items: [] },
    },
  },
  {
    slug: "moon-base",
    year: "2025",
    role: { pt: "UX/UI Designer", en: "UX/UI Designer" },
    title: "Moon Base",
    tagline: {
      pt: "Landing page e identidade visual para produto digital.",
      en: "Landing page and visual identity for a digital product.",
    },
    tags: ["Web Design", "Landing Page"],
    image: "/projects/moon-base/moon-base-01.png",
    imageAlt: { pt: "Mockup da landing page do projeto Moon Base", en: "Moon Base landing page mockup" },
    size: "md",
    content: {
      cover: {
        src: "/projects/moon-base/moon-base-01.png",
        alt: { pt: "Capa do projeto Moon Base", en: "Moon Base project cover" },
      },
      backCover: { enabled: false, src: "", alt: { pt: "", en: "" } },
      about: {
        enabled: true,
        body: {
          pt: "Moon Base é a landing page e a identidade visual de uma comunidade de web design. O desafio foi criar uma primeira impressão de alto impacto, com hierarquia clara entre proposta de valor, prova social e chamadas para ação.",
          en: "Moon Base is the landing page and visual identity for a web design community. The challenge was to craft a high-impact first impression, with clear hierarchy between the value proposition, social proof and calls to action.",
        },
      },
      foundations: { enabled: false, images: [] },
      product: {
        enabled: true,
        images: [
          { src: "/projects/moon-base/moon-base-01.png" },
          { src: "/projects/moon-base/moon-base-02.png" },
          { src: "/projects/moon-base/moon-base-03.png" },
          { src: "/projects/moon-base/moon-base-04.png" },
          { src: "/projects/moon-base/moon-base-05.png" },
          { src: "/projects/moon-base/moon-base-06.png" },
          { src: "/projects/moon-base/moon-base-07.png" },
          { src: "/projects/moon-base/moon-base-08.png" },
        ],
      },
      research: { enabled: false, images: [] },
      designSystem: { enabled: false, images: [] },
      videos: { enabled: false, items: [] },
    },
  },
  {
    slug: "auge",
    year: "2026",
    role: { pt: "Product Designer", en: "Product Designer" },
    title: "Auge",
    tagline: {
      pt: "Plataforma de infoprodutos com área de membros white label, checkout de alta conversão e experiência de streaming.",
      en: "Infoproduct platform with a white-label member area, high-conversion checkout and a streaming-like experience.",
    },
    tags: ["SaaS", "EdTech", "Design System"],
    image: "/projects/auge/capa.png",
    imageAlt: { pt: "Capa do projeto Auge", en: "Auge project cover" },
    size: "lg",
    content: {
      cover: {
        src: "/projects/auge/capa.png",
        alt: { pt: "Capa do projeto Auge", en: "Auge project cover" },
      },
      backCover: {
        enabled: true,
        src: "/projects/auge/contra-capa.png",
        alt: { pt: "Contracapa do projeto Auge", en: "Auge project back cover" },
      },
      projectUrl: "https://augeoficial.com.br/institutional/index.html",
      about: {
        enabled: true,
        body: {
          pt: "Auge é uma plataforma de infoprodutos: produtores criam, editam e vendem seus produtos com fluxos ágeis e facilitados, enquanto alunos acessam e consomem seus cursos com uma experiência de streaming. A plataforma reúne área de membros white label, checkout de alta conversão, criador automático de landing pages, afiliados, co-produtores e muito mais.\n\nAtuo no time de Product Design conduzindo discoveries semanais: dinâmicas de pesquisa, co-criação e ideação com o time, comunicação de decisões de design para stakeholders e construção de protótipos navegáveis.",
          en: "Auge is an infoproduct platform: creators build, edit and sell their products through fast, streamlined flows, while students access and consume their courses through a streaming-like experience. The platform brings together a white-label member area, a high-conversion checkout, an automatic landing page builder, affiliates, co-producers and more.\n\nI work on the Product Design team running weekly discoveries: research dynamics, co-creation and ideation with the team, communicating design decisions to stakeholders, and building navigable prototypes.",
        },
      },
      foundations: {
        enabled: true,
        body: {
          pt: "Paleta em tons de dourado sobre fundo escuro, a base da identidade Auge, com cores de apoio, tags de status e uma escala de cinzas dedicada à hierarquia de texto e elementos de interface.",
          en: "A palette in gold tones over a dark base, the core of the Auge identity, with supporting accent colors, status tags, and a dedicated grayscale for text hierarchy and UI elements.",
        },
        images: [
          { src: "/projects/auge/foundations-01.png", alt: { pt: "Paleta de cores da UI", en: "UI color palette" } },
          { src: "/projects/auge/foundations-02.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/auge/foundations-03.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/auge/foundations-04.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/auge/foundations-05.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/auge/foundations-06.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
        ],
      },
      product: {
        enabled: true,
        body: {
          pt: "Do login ao acompanhamento da jornada: página de vendas do infoproduto, player de aula com ferramentas de IA, painel de compras, gamificação por sequência e ranking, além da experiência mobile completa para alunos e produtores.",
          en: "From login to journey tracking: the infoproduct sales page, a lesson player with AI tools, a purchases dashboard, streak and ranking gamification, plus the full mobile experience for students and producers.",
        },
        images: [
          { src: "/projects/auge/produto-01.png", alt: { pt: "Tela de login", en: "Login screen" } },
          { src: "/projects/auge/produto-02.png", alt: { pt: "Painel inicial, minhas compras", en: "Home dashboard, my purchases" } },
          { src: "/projects/auge/produto-03.png", alt: { pt: "Player de aula com IA", en: "Lesson player with AI tools" } },
          { src: "/projects/auge/produto-04.png", alt: { pt: "Página de vendas do infoproduto", en: "Infoproduct sales page" } },
          { src: "/projects/auge/produto-05.png", alt: { pt: "Gamificação, minha jornada", en: "Gamification, my journey" } },
          { src: "/projects/auge/produto-06.png", alt: { pt: "Área de membros, mobile", en: "Member area, mobile" } },
          { src: "/projects/auge/produto-07.png", alt: { pt: "Produtos do produtor, mobile", en: "Producer's products, mobile" } },
          { src: "/projects/auge/produto-08.png", alt: { pt: "Dashboard financeiro, mobile", en: "Financial dashboard, mobile" } },
          { src: "/projects/auge/produto-09.png", alt: { pt: "Mockup de apresentação, minhas compras", en: "Presentation mockup, my purchases" } },
        ],
      },
      research: {
        enabled: true,
        body: {
          pt: "Discoveries semanais conduzidas com o time: desk research de concorrentes do mercado de infoprodutos e mapas de empatia para entender comportamento, dores e necessidades de produtores e alunos. As imagens abaixo estão em baixa resolução de propósito, para preservar informações sensíveis do produto.",
          en: "Weekly discoveries run with the team: competitive desk research on the infoproduct market and empathy maps to understand producer and student behavior, pains and needs. The images below are intentionally low-resolution to protect sensitive product findings.",
        },
        images: [
          { src: "/projects/auge/pesquisa-01.jpg", alt: { pt: "Desk research de concorrentes", en: "Competitive desk research" } },
          { src: "/projects/auge/pesquisa-02.jpg", alt: { pt: "Mapas de empatia", en: "Empathy maps" } },
        ],
      },
      designSystem: {
        enabled: true,
        body: {
          pt: "Sistema de componentes documentado por página: botões (ação, IA, switch, busca, seletores), barras de progresso em múltiplos formatos e os demais elementos que sustentam tanto o painel do produtor quanto a área de membros.",
          en: "A component system documented page by page: buttons (action, AI, switch, search, selectors), progress bars in multiple formats, and the remaining elements that power both the producer dashboard and the member area.",
        },
        images: [
          { src: "/projects/auge/design-system-01.png", alt: { pt: "Capa do design system", en: "Design system cover" } },
          { src: "/projects/auge/design-system-02.png", alt: { pt: "Botões", en: "Buttons" } },
          { src: "/projects/auge/design-system-03.png", alt: { pt: "Barras de progresso", en: "Progress bars" } },
        ],
      },
      videos: {
        enabled: true,
        body: {
          pt: "Reveal da marca em vídeo e a animação de carregamento usada na plataforma: dois pequenos momentos de motion que reforçam a identidade Auge em uso.",
          en: "The brand's video reveal and the platform's loading animation: two small motion moments that reinforce the Auge identity in use.",
        },
        items: [
          { src: "/projects/auge/logo-reveal.mp4", type: "video", alt: { pt: "Reveal da marca Auge", en: "Auge brand reveal" } },
          { src: "/projects/auge/loading.gif", type: "gif", alt: { pt: "Animação de carregamento", en: "Loading animation" } },
        ],
      },
    },
  },
  {
    slug: "gestao-a-vista",
    year: "2026",
    role: { pt: "Product Designer, ponta a ponta", en: "Product Designer, end to end" },
    title: "Gestão à Vista",
    tagline: {
      pt: "Sistema omnichannel de CRM e Business Intelligence para o mercado de multipropriedade.",
      en: "Omnichannel CRM and Business Intelligence system for the timeshare market.",
    },
    tags: ["SaaS", "B2B", "Design System"],
    image: "/projects/gestao-a-vista/capa.png",
    imageAlt: { pt: "Capa do projeto Gestão à Vista", en: "Gestão à Vista project cover" },
    size: "lg",
    content: {
      cover: {
        src: "/projects/gestao-a-vista/capa.png",
        alt: { pt: "Capa do projeto Gestão à Vista", en: "Gestão à Vista project cover" },
      },
      backCover: { enabled: false, src: "", alt: { pt: "", en: "" } },
      about: {
        enabled: true,
        body: {
          pt: "Gestão à Vista é um sistema omnichannel construído para o nicho de multipropriedade, operando ao mesmo tempo como CRM, base de dados e Business Intelligence para a operação inteira do negócio.\n\nProjetei sozinho, do zero, tanto o design system quanto cada tela da interface: mais de 70 componentes autorais sustentando módulos de atendimento, conversas, tarefas, contatos, relatórios e insights, com suporte nativo a tema claro e escuro em toda a plataforma.",
          en: "Gestão à Vista is an omnichannel system built for the timeshare industry, operating at once as a CRM, database and Business Intelligence layer for the entire business operation.\n\nI designed the whole thing solo, from scratch: both the design system and every interface screen, with 70+ original components powering modules for support, conversations, tasks, contacts, reports and insights, with native light and dark theme support across the whole platform.",
        },
      },
      foundations: {
        enabled: true,
        body: {
          pt: "Paleta semântica com estados de hover e feedback, tipografia em Plus Jakarta Sans e Manrope, e grid responsivo documentado para widescreen, desktop e mobile — a base que sustenta os mais de 70 componentes do design system.",
          en: "A semantic color palette with hover and feedback states, typography in Plus Jakarta Sans and Manrope, and a responsive grid documented for widescreen, desktop and mobile — the foundation behind the design system's 70+ components.",
        },
        images: [
          { src: "/projects/gestao-a-vista/foundations-01.png", alt: { pt: "Paleta de cores da UI", en: "UI color palette" } },
          { src: "/projects/gestao-a-vista/foundations-02.png", alt: { pt: "Sistema tipográfico", en: "Typography system" } },
          { src: "/projects/gestao-a-vista/foundations-03.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/gestao-a-vista/foundations-04.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/gestao-a-vista/foundations-05.png", alt: { pt: "Grid responsivo (breakpoints)", en: "Responsive grid (breakpoints)" } },
          { src: "/projects/gestao-a-vista/foundations-06.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/gestao-a-vista/foundations-07.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/gestao-a-vista/foundations-08.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
        ],
      },
      product: {
        enabled: true,
        body: {
          pt: "Da tela de login aos módulos de operação: painel inicial, CRM, conversas, tarefas e relatórios, todos desenhados em par com o tema claro e escuro nativo da plataforma, para que a operação funcione em qualquer condição de uso.",
          en: "From the login screen to the operational modules: home dashboard, CRM, conversations, tasks and reports, all designed alongside the platform's native light and dark theme, so the operation works in any usage condition.",
        },
        images: [
          { src: "/projects/gestao-a-vista/produto-01.png", alt: { pt: "Painel inicial, tema claro", en: "Home dashboard, light theme" } },
          { src: "/projects/gestao-a-vista/produto-01-dark.png", alt: { pt: "Painel inicial, tema escuro", en: "Home dashboard, dark theme" } },
          { src: "/projects/gestao-a-vista/produto-02.png", alt: { pt: "Tela de login, tema claro", en: "Login screen, light theme" } },
          { src: "/projects/gestao-a-vista/produto-02-dark.png", alt: { pt: "Tela de login, tema escuro", en: "Login screen, dark theme" } },
          { src: "/projects/gestao-a-vista/produto-03.png", alt: { pt: "Tela de erro, tema claro", en: "Error screen, light theme" } },
          { src: "/projects/gestao-a-vista/produto-03-dark.png", alt: { pt: "Tela de erro, tema escuro", en: "Error screen, dark theme" } },
          { src: "/projects/gestao-a-vista/produto-04.png", alt: { pt: "Módulo da operação, tema claro", en: "Operation module, light theme" } },
          { src: "/projects/gestao-a-vista/produto-04-dark.png", alt: { pt: "Módulo da operação, tema escuro", en: "Operation module, dark theme" } },
        ],
      },
      research: { enabled: false, images: [] },
      designSystem: {
        enabled: true,
        body: {
          pt: "Mais de 70 componentes autorais documentados por estado (default, hover, ativo, desabilitado, erro): botões primários e secundários, seletores, filtros, busca, checkboxes e switches, formando um sistema consistente o suficiente para sustentar toda a operação do produto.",
          en: "70+ original components documented by state (default, hover, active, disabled, error): primary and secondary buttons, selectors, filters, search, checkboxes and switches, forming a system consistent enough to carry the entire product operation.",
        },
        images: [
          { src: "/projects/gestao-a-vista/design-system-01.png", alt: { pt: "Botões e seletores", en: "Buttons and selectors" } },
          { src: "/projects/gestao-a-vista/design-system-02.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/gestao-a-vista/design-system-03.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/gestao-a-vista/design-system-04.png", alt: { pt: "Checkboxes e switches", en: "Checkboxes and switches" } },
        ],
      },
      videos: { enabled: false, items: [] },
    },
  },
  {
    slug: "ellysium",
    year: "2026",
    role: { pt: "Product Designer, ponta a ponta", en: "Product Designer, end to end" },
    title: "Ellysium",
    tagline: {
      pt: "Design system e identidade de marca para o ecossistema Revon.",
      en: "Design system and brand identity for the Revon ecosystem.",
    },
    tags: ["Design System", "Branding", "UI Design"],
    image: "/projects/ellysium/capa.png",
    imageAlt: { pt: "Capa do projeto Ellysium, design system da Revon", en: "Ellysium project cover, Revon's design system" },
    size: "lg",
    content: {
      cover: {
        src: "/projects/ellysium/capa.png",
        alt: { pt: "Capa do design system Ellysium", en: "Ellysium design system cover" },
      },
      backCover: { enabled: false, src: "", alt: { pt: "", en: "" } },
      projectUrl: "https://ellysium.dylan-dsgner.workers.dev/pt-BR/",
      about: {
        enabled: true,
        body: {
          pt: "Ellysium é o design system criado para a Revon, marca que precisava de uma linguagem visual única, escalável e pronta para times de produto trabalharem sem fricção entre design e código.\n\nO projeto nasceu da necessidade de padronizar decisões visuais que antes viviam soltas: cores sem nome, tipografia sem hierarquia clara, componentes reconstruídos do zero a cada tela. Conduzi sozinho a construção de toda a fundação visual, do token à interface, com suporte nativo a tema claro e escuro desde a primeira decisão de cor.",
          en: "Ellysium is the design system built for Revon, a brand that needed a single, scalable visual language ready for product teams to work with no friction between design and code.\n\nThe project came from the need to standardize visual decisions that used to live scattered: unnamed colors, typography with no clear hierarchy, components rebuilt from scratch on every screen. I led the entire visual foundation solo, from token to interface, with native light and dark theme support built in from the very first color decision.",
        },
      },
      foundations: {
        enabled: true,
        body: {
          pt: "A base do Ellysium é construída em tokens semânticos, nunca em valores soltos. Cada cor tem um par claro/escuro nativo através de data-theme, a tipografia combina Funnel Sans para títulos e Inter para corpo em 17 estilos responsivos, e um grid de 8 pontos garante espaçamento consistente em qualquer densidade de tela.",
          en: "Ellysium's foundation is built on semantic tokens, never raw values. Every color has a native light/dark pair through a data-theme attribute, typography pairs Funnel Sans for headings with Inter for body copy across 17 responsive styles, and an 8-point grid keeps spacing consistent at any screen density.",
        },
        images: [
          { src: "/projects/ellysium/foundations-01.png", alt: { pt: "Cores semânticas do Ellysium", en: "Ellysium semantic colors" } },
          { src: "/projects/ellysium/foundations-02.png", alt: { pt: "Sistema tipográfico", en: "Typography system" } },
          { src: "/projects/ellysium/foundations-03.png", alt: { pt: "Grid de 8 pontos", en: "8-point grid system" } },
          { src: "/projects/ellysium/foundations-04.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/ellysium/foundations-05.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
          { src: "/projects/ellysium/foundations-06.png", alt: { pt: "Fundações visuais", en: "Visual foundations" } },
        ],
      },
      product: {
        enabled: true,
        body: {
          pt: "Um design system só é forte se sustenta a marca em qualquer superfície. Da identidade aplicada na fachada ao símbolo em fundo escuro e em produtos físicos, o Ellysium garante que a marca Revon mantenha peso, cor e proporção consistentes em qualquer contexto, digital ou físico.",
          en: "A design system only holds up if it sustains the brand on every surface. From the identity applied to signage to the symbol on dark backgrounds and physical products, Ellysium keeps the Revon mark consistent in weight, color and proportion across any context, digital or physical.",
        },
        images: [
          { src: "/projects/ellysium/branding-01.png" },
          { src: "/projects/ellysium/branding-02.png" },
          { src: "/projects/ellysium/branding-03.png" },
          { src: "/projects/ellysium/branding-04.png" },
          { src: "/projects/ellysium/branding-05.png" },
          { src: "/projects/ellysium/branding-06.png" },
          { src: "/projects/ellysium/branding-07.png" },
          { src: "/projects/ellysium/branding-08.png" },
        ],
      },
      research: { enabled: false, images: [] },
      designSystem: {
        enabled: true,
        body: {
          pt: "A biblioteca de componentes reúne mais de 70 ícones, botões primários e secundários com estados completos (hover, pressed, disabled), campos de busca, filtros e listas — tudo documentado para consumo direto no código via variáveis CSS.",
          en: "The component library brings together 70+ icons, primary and secondary buttons with full state coverage (hover, pressed, disabled), search fields, filters and lists, all documented for direct consumption in code through CSS variables.",
        },
        images: [
          { src: "/projects/ellysium/design-system-01.png", alt: { pt: "Tokens de tipografia", en: "Typography tokens" } },
          { src: "/projects/ellysium/design-system-02.png", alt: { pt: "Sistema de layout em grid", en: "UI layout grid system" } },
          { src: "/projects/ellysium/design-system-03.png", alt: { pt: "Biblioteca de componentes de ação", en: "Action component library" } },
          { src: "/projects/ellysium/design-system-04.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/ellysium/design-system-05.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/ellysium/design-system-06.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/ellysium/design-system-07.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
          { src: "/projects/ellysium/design-system-08.png", alt: { pt: "Componentes do design system", en: "Design system components" } },
        ],
      },
      videos: { enabled: false, items: [] },
    },
  },
];
