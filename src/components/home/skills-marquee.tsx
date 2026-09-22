"use client";

import { BrandLogo } from "@/components/ui/brand-logo";
import { tools } from "@/lib/tools";

const track = [...tools, ...tools];

export function SkillsMarquee() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="marquee-fade overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {track.map((tool, i) => (
            <div key={`${tool.slug}-${i}`} className="flex shrink-0 items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
              <BrandLogo slug={tool.slug} source={tool.source} className="h-6 w-6" />
              <span className="text-lg font-medium text-ink-soft whitespace-nowrap">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
