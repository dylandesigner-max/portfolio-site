export type Project = {
  slug: string;
  year: string;
  role: { pt: string; en: string };
  title: string;
  tagline: { pt: string; en: string };
  tags: string[];
  image: string;
  imageAlt: { pt: string; en: string };
  caseHref: string | null;
  size: "lg" | "md";
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
    caseHref: "/projects/contasco/ContasCo-Case-UXUI-Dylan.pdf",
    size: "lg",
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
    image: "https://picsum.photos/seed/taskfy-mobile-app/1200/900",
    imageAlt: {
      pt: "Mockup do aplicativo Taskfy",
      en: "Taskfy app mockup",
    },
    caseHref: null,
    size: "md",
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
    imageAlt: {
      pt: "Mockup do site BSC Cleaning Services",
      en: "BSC Cleaning Services website mockup",
    },
    caseHref: null,
    size: "md",
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
    image: "https://picsum.photos/seed/moon-base-web-design/1200/900",
    imageAlt: {
      pt: "Mockup do projeto Moon Base",
      en: "Moon Base project mockup",
    },
    caseHref: null,
    size: "md",
  },
];
