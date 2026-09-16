"use client";

import {
  IconBrandAdobeAfterEffects,
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFramer,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandWordpress,
} from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";

const tools = [
  { icon: IconBrandFigma, label: "Figma" },
  { icon: IconBrandAdobePhotoshop, label: "Photoshop" },
  { icon: IconBrandAdobeIllustrator, label: "Illustrator" },
  { icon: IconBrandAdobeAfterEffects, label: "After Effects" },
  { icon: IconBrandFramer, label: "Framer" },
  { icon: IconBrandHtml5, label: "HTML5" },
  { icon: IconBrandCss3, label: "CSS3" },
  { icon: IconBrandJavascript, label: "JavaScript" },
  { icon: IconBrandWordpress, label: "WordPress" },
];

const track = [...tools, ...tools];

export function SkillsMarquee() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
          {t.skills.headline}
        </p>
      </Container>

      <div className="marquee-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {track.map((tool, i) => (
            <div
              key={`${tool.label}-${i}`}
              className="flex shrink-0 items-center gap-3 text-ink-faint"
            >
              <tool.icon size={26} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-lg font-medium whitespace-nowrap">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
