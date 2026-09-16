"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { clsx } from "clsx";
import { useLocale } from "@/lib/i18n/context";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

export function Navbar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const reduce = useReducedMotion();
  const isHome = pathname === "/";
  const [overDarkHero, setOverDarkHero] = useState(isHome);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isHome) return;
    setOverDarkHero(latest < window.innerHeight * 0.75);
  });

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setOverDarkHero(
      isHome &&
        typeof window !== "undefined" &&
        window.scrollY < window.innerHeight * 0.75,
    );
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
  ];

  const transparent = overDarkHero && !open;

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line/70 bg-bg/80 backdrop-blur-md",
        )}
      >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
          aria-label="Dylan Xavier, ir para a home"
        >
          <Image
            src="/brand/logo-dylan.svg"
            alt="Dylan Xavier"
            width={62}
            height={21}
            priority
            className={clsx(
              "h-5 w-auto transition-[filter] duration-300",
              transparent ? "invert" : "dark:invert",
            )}
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8"
        >
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm",
                  transparent
                    ? active
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    : active
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LocaleToggle transparent={transparent} />
          <ThemeToggle transparent={transparent} />
          <Link
            href="/about#contact"
            className={clsx(
              "inline-flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              transparent ? "bg-white text-ink" : "bg-ink text-bg",
            )}
          >
            {t.hero.ctaSecondary}
            <IconArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle transparent={transparent} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            className={clsx(
              "flex h-9 w-9 items-center justify-center rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              transparent ? "border-white/30 text-white" : "border-line text-ink",
            )}
          >
            {open ? (
              <IconX size={18} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <IconMenu2 size={18} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-bg md:hidden"
          >
            <nav
              aria-label="Navegação mobile"
              className="flex h-full flex-col justify-between px-6 pb-10 pt-8"
            >
              <ul className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: reduce ? 0 : i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block border-b border-line py-4 text-3xl font-semibold tracking-tight text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <LocaleToggle />
                <Link
                  href="/about#contact"
                  className="inline-flex items-center gap-1 rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-bg"
                >
                  {t.hero.ctaSecondary}
                  <IconArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
