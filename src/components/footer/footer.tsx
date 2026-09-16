"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUp, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";

const EMAIL = "dylan.dsgner@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511977555253";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-dylan.svg"
              alt="Dylan Xavier"
              width={62}
              height={21}
              className="h-5 w-auto dark:invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              {t.about.headline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              {t.nav.menu}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-ink-soft hover:text-ink">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
              {t.nav.contact}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
                >
                  <IconMail size={16} strokeWidth={1.75} aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink"
                >
                  <IconBrandWhatsapp
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-faint">
            © {year} Dylan Xavier. {t.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-ink"
          >
            {t.footer.backToTop}
            <IconArrowUp size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
