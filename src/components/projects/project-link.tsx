"use client";

import type { AnchorHTMLAttributes } from "react";
import { useRouteTransition } from "@/components/providers/route-transition";

// Like next/link, but plays the vertical sweep transition before navigating.
// Used specifically for links that enter a project case (per the brief: only
// entering a project gets this animation, not general site navigation).
export function ProjectLink({
  href,
  children,
  className,
  ...rest
}: { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const navigate = useRouteTransition();

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
