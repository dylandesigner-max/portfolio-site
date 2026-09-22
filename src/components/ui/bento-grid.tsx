"use client";

import { cn } from "@/lib/utils";

export function BentoGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-4", className)}>
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-card border border-line bg-bg-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)] md:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
