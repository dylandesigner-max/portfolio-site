"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";
import { useLenis } from "@/lib/smooth-scroll";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  const links = [
    { href: "/", label: t.nav.home, num: "01" },
    { href: "/projects", label: t.nav.projects, num: "02" },
    { href: "/about", label: t.nav.about, num: "03" },
  ];

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] mix-blend-difference">
        <div className="mx-auto flex h-20 max-w-page items-center px-5 md:h-24 md:px-10">
          <Link
            href="/"
            className="pointer-events-auto flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Dylan Xavier, ir para a home"
          >
            <Image
              src="/brand/logo-dylan.svg"
              alt="Dylan Xavier"
              width={100}
              height={34}
              priority
              className="h-8 w-auto brightness-0 invert md:h-9"
            />
          </Link>
        </div>
      </div>

      <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
        <div className="mx-auto flex h-20 max-w-page items-center justify-end px-5 md:h-24 md:px-10">
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 md:flex">
              <LocaleToggle />
              <ThemeToggle />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              data-cursor-hover
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="relative block h-4 w-6" aria-hidden="true">
                <motion.span
                  className="absolute left-0 top-0 block h-[2px] w-6 rounded-full bg-current"
                  animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.span
                  className="absolute left-0 top-[7px] block h-[2px] w-6 rounded-full bg-current"
                  animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-[14px] block h-[2px] w-6 rounded-full bg-current"
                  animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg px-5 pb-8 pt-24 md:px-10 md:pb-12 md:pt-32"
          >
            <nav aria-label="Navegação principal" className="flex flex-1 flex-col justify-center">
              <ul className="flex flex-col">
                {links.map((link, i) => {
                  const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  const isLast = i === links.length - 1;
                  return (
                    <motion.li
                      key={link.href}
                      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: reduce ? 0 : 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(!isLast && "border-b border-line")}
                    >
                      <Link
                        href={link.href}
                        data-cursor-hover
                        className="group flex items-baseline justify-between gap-6 py-5 focus-visible:outline-none md:py-7"
                      >
                        <span
                          className={cn(
                            "font-display text-5xl font-medium tracking-tight transition-colors sm:text-6xl md:text-8xl",
                            active ? "text-accent" : "text-ink group-hover:text-accent",
                          )}
                        >
                          {link.label}
                        </span>
                        <span className="hidden font-mono text-sm text-ink-faint md:block">{link.num}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
              <Button href="/about#contact" variant="primary" className="w-fit">
                {t.nav.talk}
              </Button>
              <div className="flex items-center gap-3 md:hidden">
                <LocaleToggle />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
