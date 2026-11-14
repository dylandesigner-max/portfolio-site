// The case-study schema. Lives in its own file (rather than inside
// projects-data.ts) because the admin panel regenerates projects-data.ts
// whenever a project is created or deleted — keeping the types here means
// that regeneration can never drop or rewind them.
//
// Mirrored by hand in portfolio-admin/shared/types.ts.

export type LocalizedText = { pt: string; en: string };

export type GalleryImage = {
  src: string;
  alt?: LocalizedText;
};

// A standardized, CMS-shaped case study template. Each section carries its
// own `enabled` switch (a project doesn't need every section), a freeform
// body text for context, and an image gallery. Sections with
// `enabled: false` (or no `content` at all) simply don't render.
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

// "Ficha do projeto" — the at-a-glance facts card shown beside the about
// text. Role and year come from the project itself; everything here is
// optional and only rendered when filled.
export type ProjectFacts = {
  enabled: boolean;
  duration?: LocalizedText;
  platform?: LocalizedText;
  team?: LocalizedText;
  /** Tool names, e.g. "Figma", "Miro". Known names get their brand logo. */
  tools: string[];
};

export type TitledItem = {
  title: LocalizedText;
  body: LocalizedText;
};

// "O desafio" — a framing headline plus the key pain points as cards.
export type ChallengeSection = {
  enabled: boolean;
  headline?: LocalizedText;
  body?: LocalizedText;
  items: TitledItem[];
};

export type ResultMetric = {
  /** Displayed as-is, e.g. "62%", "4 → 1", "+45 pts". */
  value: string;
  label: LocalizedText;
};

// "Principais resultados" — big-number metrics plus qualitative highlights.
export type ResultsSection = {
  enabled: boolean;
  body?: LocalizedText;
  metrics: ResultMetric[];
  highlights: TitledItem[];
};

export type Persona = {
  name: string;
  role: LocalizedText;
  /** Short context line, e.g. "28 anos · 3 anos na empresa". */
  meta?: LocalizedText;
  avatar?: string;
  bio: LocalizedText;
  /** One item per line. */
  frustrations: LocalizedText;
  /** One item per line. */
  goals: LocalizedText;
  quote?: LocalizedText;
};

export type PersonasSection = {
  enabled: boolean;
  body?: LocalizedText;
  items: Persona[];
};

export type ProjectContent = {
  cover: { src: string; alt: LocalizedText };
  backCover: BackCover;
  /** Hex brand color for this project's page only (e.g. "#FFD970"). Empty
   * means the site's default accent. */
  accentColor?: string;
  projectUrl?: string;
  /** App Store (iOS) listing — shows a store button in the hero when set. */
  appStoreUrl?: string;
  /** Google Play listing — shows a store button in the hero when set. */
  playStoreUrl?: string;
  pdfHref?: string;
  about: { enabled: boolean; body: LocalizedText };
  // The four blocks below are newer than the rest of the schema, so older
  // project files may not have them yet — treat a missing one as disabled.
  facts?: ProjectFacts;
  challenge?: ChallengeSection;
  results?: ResultsSection;
  personas?: PersonasSection;
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
