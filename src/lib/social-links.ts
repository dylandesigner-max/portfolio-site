import type { BrandLogoSource } from "@/components/ui/brand-logo";

export type SocialLink = {
  platform: string;
  handle: string;
  href: string;
  slug: string;
  source?: BrandLogoSource;
};

export const socialLinks: SocialLink[] = [
  { platform: "Behance", handle: "@designerdylan", href: "https://www.behance.net/designerdylan", slug: "behance" },
  { platform: "LinkedIn", handle: "/in/dylanfx", href: "https://www.linkedin.com/in/dylanfx/", slug: "linkedin", source: "devicon" },
  { platform: "GitHub", handle: "@dylandesigner-max", href: "https://github.com/dylandesigner-max", slug: "github" },
];
