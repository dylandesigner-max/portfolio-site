import type { BrandLogoSource } from "@/components/ui/brand-logo";

export type Tool = {
  slug: string;
  label: string;
  source?: BrandLogoSource;
};

export const tools: Tool[] = [
  { slug: "figma", label: "Figma" },
  { slug: "photoshop", label: "Photoshop", source: "devicon" },
  { slug: "illustrator", label: "Illustrator", source: "devicon" },
  { slug: "aftereffects", label: "After Effects", source: "devicon" },
  { slug: "framer", label: "Framer" },
  { slug: "html5", label: "HTML5" },
  { slug: "css", label: "CSS3" },
  { slug: "javascript", label: "JavaScript" },
  { slug: "wordpress", label: "WordPress" },
  { slug: "vscode", label: "VS Code", source: "devicon" },
  { slug: "claude", label: "Claude Code" },
];
