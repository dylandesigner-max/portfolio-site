"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// Simple Icons doesn't carry every brand (Adobe apps, LinkedIn are absent,
// likely pulled for trademark reasons), so devicon is the fallback source.
export type BrandLogoSource = "simple-icons" | "devicon";

function resolveSrc(slug: string, source: BrandLogoSource) {
  if (source === "devicon") {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`;
  }
  return `https://cdn.simpleicons.org/${slug}/000000`;
}

// "auto" follows the page theme (dark icon on light mode, light icon on dark
// mode). "onDark" ignores the page theme and always renders light, for use on
// a surface that's always dark regardless of theme (e.g. a fixed ink chip).
export type BrandLogoTone = "auto" | "onDark";

function resolveToneClass(source: BrandLogoSource, tone: BrandLogoTone) {
  if (tone === "onDark") {
    return source === "devicon" ? "brightness-0 invert" : "invert";
  }
  return source === "devicon" ? "brightness-0 dark:invert" : "dark:invert";
}

export function BrandLogo({
  slug,
  source = "simple-icons",
  tone = "auto",
  className,
}: {
  slug: string;
  source?: BrandLogoSource;
  tone?: BrandLogoTone;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolveSrc(slug, source)}
      alt=""
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn(resolveToneClass(source, tone), className)}
    />
  );
}
