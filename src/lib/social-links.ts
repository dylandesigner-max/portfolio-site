import type { BrandLogoSource } from "@/components/ui/brand-logo";

export type SocialLink = {
  platform: string;
  handle: string;
  href: string;
  slug: string;
  source?: BrandLogoSource;
};

// Placeholder handles: swap the hrefs for Dylan's real profiles.
export const socialLinks: SocialLink[] = [
  { platform: "Behance", handle: "@dylanxavier", href: "https://www.behance.net/dylanxavier", slug: "behance" },
  { platform: "LinkedIn", handle: "/in/dylanxavier", href: "https://www.linkedin.com/in/dylanxavier", slug: "linkedin", source: "devicon" },
  { platform: "GitHub", handle: "@dylanxavier", href: "https://github.com/dylanxavier", slug: "github" },
];
