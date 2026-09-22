"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "accent" | "inverted-outline";
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  iconNode?: React.ReactNode;
  target?: string;
  rel?: string;
  external?: boolean;
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  icon = true,
  iconNode,
  target,
  rel,
  external = false,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const innerClassName = cn(
    "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold",
    variant === "primary" && "bg-ink text-bg",
    variant === "outline" && "border border-line text-ink",
    variant === "accent" && "bg-accent text-accent-ink",
    variant === "inverted-outline" &&
      "border border-[color-mix(in_srgb,var(--bg)_25%,transparent)] text-bg",
    className,
  );

  const fillClassName = cn(
    "absolute inset-0 origin-left scale-x-0 transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100",
    variant === "primary" && "bg-accent",
    variant === "outline" && "bg-ink",
    variant === "accent" && "bg-ink",
    variant === "inverted-outline" && "bg-bg",
  );

  const labelClassName = cn(
    "relative z-10 flex items-center gap-1.5 transition-colors duration-300",
    variant === "primary" && "group-hover:text-accent-ink",
    variant === "outline" && "group-hover:text-bg",
    variant === "accent" && "group-hover:text-bg",
    variant === "inverted-outline" && "group-hover:text-ink",
  );

  const content = (
    <>
      <span className={fillClassName} aria-hidden="true" />
      <span className={labelClassName}>
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            {iconNode ?? <ArrowUpRight size={16} weight="bold" aria-hidden="true" />}
          </span>
        )}
      </span>
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
      data-cursor-hover
    >
      {href && external ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className={cn(innerClassName, "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
        >
          {content}
        </a>
      ) : href ? (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={cn(innerClassName, "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn(innerClassName, "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent")}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
}
