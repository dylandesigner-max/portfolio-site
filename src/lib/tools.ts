import type { BrandLogoSource } from "@/components/ui/brand-logo";

export type Tool = {
  slug: string;
  label: string;
  source?: BrandLogoSource;
  description: { pt: string; en: string };
};

export const tools: Tool[] = [
  {
    slug: "figma",
    label: "Figma",
    description: {
      pt: "Prototipagem de interfaces e colaboração em tempo real com o time.",
      en: "Interface prototyping and real-time collaboration with the team.",
    },
  },
  {
    slug: "photoshop",
    label: "Photoshop",
    source: "devicon",
    description: {
      pt: "Tratamento de imagens e composições para apresentações visuais.",
      en: "Image editing and compositing for visual presentations.",
    },
  },
  {
    slug: "illustrator",
    label: "Illustrator",
    source: "devicon",
    description: {
      pt: "Criação de ícones, ilustrações e elementos vetoriais de marca.",
      en: "Icons, illustrations and vector brand assets.",
    },
  },
  {
    slug: "aftereffects",
    label: "After Effects",
    source: "devicon",
    description: {
      pt: "Microinterações e protótipos animados para mostrar a fluidez do uso.",
      en: "Micro-interactions and animated prototypes to show how it feels to use.",
    },
  },
  {
    slug: "framer",
    label: "Framer",
    description: {
      pt: "Protótipos de alta fidelidade com interações reais antes do handoff.",
      en: "High-fidelity prototypes with real interactions before handoff.",
    },
  },
  {
    slug: "html5",
    label: "HTML5",
    description: {
      pt: "Estrutura semântica para protótipos navegáveis direto no navegador.",
      en: "Semantic structure for prototypes you can click through in the browser.",
    },
  },
  {
    slug: "css",
    label: "CSS3",
    description: {
      pt: "Estilização e responsividade fiéis ao que será implementado.",
      en: "Styling and responsiveness faithful to the final implementation.",
    },
  },
  {
    slug: "javascript",
    label: "JavaScript",
    description: {
      pt: "Interações sob medida em protótipos e ajustes finos de comportamento.",
      en: "Custom interactions in prototypes and fine-tuned behavior.",
    },
  },
  {
    slug: "wordpress",
    label: "WordPress",
    description: {
      pt: "Publicação rápida de sites institucionais e landing pages.",
      en: "Fast publishing of institutional sites and landing pages.",
    },
  },
  {
    slug: "vscode",
    label: "VS Code",
    source: "devicon",
    description: {
      pt: "Onde transformo protótipos em código de produção.",
      en: "Where I turn prototypes into production code.",
    },
  },
  {
    slug: "claude",
    label: "Claude Code",
    description: {
      pt: "Parceiro de desenvolvimento assistido por IA no dia a dia.",
      en: "My day-to-day AI-assisted development partner.",
    },
  },
];
