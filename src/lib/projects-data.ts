export type LocalizedText = { pt: string; en: string };

export type GalleryItem = {
  src: string;
  caption: LocalizedText;
};

export type ProjectContent = {
  overview: LocalizedText[];
  gallery: GalleryItem[];
  pdfHref?: string;
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
      overview: [
        {
          pt: "Account Managers de agências e times de marketing vivem entre abas: CRM, planilhas de contrato, analytics e ferramentas de tarefas para entender a saúde real de cada cliente.",
          en: "Account Managers at agencies and marketing teams live between tabs: CRM, contract spreadsheets, analytics and task tools just to understand the real health of each client.",
        },
        {
          pt: "O ContasCo centraliza a gestão de clientes e projetos em um único painel, dando visão 360º de cada conta (saúde, métricas, histórico e contratos) sem sair de uma única tela. Conduzi sozinho todo o processo em duas semanas: pesquisa, definição, ideação, prototipação, UI, design system e teste de usabilidade.",
          en: "ContasCo centralizes client and project management in a single dashboard, giving a 360° view of each account (health, metrics, history and contracts) without leaving one screen. I ran the entire process solo over two weeks: research, definition, ideation, prototyping, UI, design system and usability testing.",
        },
      ],
      gallery: [
        {
          src: "/projects/contasco/detalhes-cliente.png",
          caption: {
            pt: "Detalhes do Cliente: saúde, métricas, histórico e contratos em um único painel.",
            en: "Client Details: health, metrics, history and contracts in a single dashboard.",
          },
        },
        {
          src: "/projects/contasco/prototipacao.png",
          caption: {
            pt: "Do papel ao wireframe navegável, até a alta fidelidade no Figma.",
            en: "From paper to a clickable wireframe, all the way to high fidelity in Figma.",
          },
        },
        {
          src: "/projects/contasco/design-system.png",
          caption: {
            pt: "Design system para crescer com consistência: cor, tipografia, grid e ícones.",
            en: "A design system built to scale with consistency: color, typography, grid and icons.",
          },
        },
      ],
      pdfHref: "/projects/contasco/ContasCo-Case-UXUI-Dylan.pdf",
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
      overview: [
        {
          pt: "Taskfy é um app mobile de gestão de tarefas pensado para times pequenos que precisam organizar o dia a dia sem a complexidade de ferramentas corporativas.",
          en: "Taskfy is a mobile task-management app designed for small teams that need to organize their day without the overhead of enterprise tools.",
        },
        {
          pt: "O processo passou por pesquisa, mapeamento de persona e fluxo, exploração de identidade visual e prototipação de alta fidelidade, finalizando com teste de usuário.",
          en: "The process covered research, persona and flow mapping, visual identity exploration and high-fidelity prototyping, wrapping up with user testing.",
        },
      ],
      gallery: [
        { src: "/projects/taskfy/problema.png", caption: { pt: "Definição do problema.", en: "Problem definition." } },
        { src: "/projects/taskfy/persona.png", caption: { pt: "Persona e contexto de uso.", en: "Persona and usage context." } },
        { src: "/projects/taskfy/processo.png", caption: { pt: "Processo de design.", en: "Design process." } },
        { src: "/projects/taskfy/cores.png", caption: { pt: "Paleta de cores.", en: "Color palette." } },
        { src: "/projects/taskfy/tipografia.png", caption: { pt: "Sistema tipográfico.", en: "Typography system." } },
        { src: "/projects/taskfy/etapas.png", caption: { pt: "Etapas do fluxo.", en: "Flow steps." } },
        { src: "/projects/taskfy/telas-1.png", caption: { pt: "Telas de alta fidelidade.", en: "High-fidelity screens." } },
        { src: "/projects/taskfy/telas-2.png", caption: { pt: "Mais telas do fluxo principal.", en: "More screens from the core flow." } },
        { src: "/projects/taskfy/mockup-1.png", caption: { pt: "Mockup de apresentação.", en: "Presentation mockup." } },
        { src: "/projects/taskfy/mockup-2.png", caption: { pt: "Mockup de apresentação.", en: "Presentation mockup." } },
        { src: "/projects/taskfy/user-flow.png", caption: { pt: "User flow completo.", en: "Full user flow." } },
        { src: "/projects/taskfy/user-test.png", caption: { pt: "Teste de usabilidade.", en: "Usability testing." } },
        { src: "/projects/taskfy/aprendizado.png", caption: { pt: "Aprendizados.", en: "Learnings." } },
      ],
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
      overview: [
        {
          pt: "Moon Base é a landing page e a identidade visual de uma comunidade de web design. O desafio foi criar uma primeira impressão de alto impacto, com hierarquia clara entre proposta de valor, prova social e chamadas para ação.",
          en: "Moon Base is the landing page and visual identity for a web design community. The challenge was to craft a high-impact first impression, with clear hierarchy between the value proposition, social proof and calls to action.",
        },
      ],
      gallery: [
        { src: "/projects/moon-base/moon-base-01.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-02.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-03.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-04.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-05.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-06.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-07.png", caption: { pt: "", en: "" } },
        { src: "/projects/moon-base/moon-base-08.png", caption: { pt: "", en: "" } },
      ],
    },
  },
  {
    slug: "bsc-cleaning",
    year: "2024",
    role: { pt: "UX/UI Designer", en: "UX/UI Designer" },
    title: "BSC Cleaning Services",
    tagline: {
      pt: "Site institucional para empresa de serviços de limpeza.",
      en: "Institutional website for a cleaning services company.",
    },
    tags: ["Web Design", "Branding"],
    image: "https://picsum.photos/seed/bsc-cleaning-services/1200/900",
    imageAlt: { pt: "Mockup do site BSC Cleaning Services", en: "BSC Cleaning Services website mockup" },
    size: "md",
  },
];
