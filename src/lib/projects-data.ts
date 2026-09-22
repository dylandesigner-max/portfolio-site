import contasco from "@/content/projects/contasco.json";
import taskfy from "@/content/projects/taskfy.json";
import moonBase from "@/content/projects/moon-base.json";
import auge from "@/content/projects/auge.json";
import pronto from "@/content/projects/pronto.json";
import gestaoAVista from "@/content/projects/gestao-a-vista.json";
import ellysium from "@/content/projects/ellysium.json";

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

// Each project's actual data lives in its own file under
// src/content/projects/<slug>.json — this is the only place that needs a
// new line when a project is added or removed. The CMS admin panel writes
// directly to those JSON files (and to this import list, for brand-new
// projects) via the GitHub API; every commit there rebuilds and redeploys
// this site automatically.
export const projects: Project[] = [
  contasco,
  taskfy,
  moonBase,
  auge,
  pronto,
  gestaoAVista,
  ellysium,
] as Project[];
