"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { useLenis } from "@/lib/smooth-scroll";

const EMAIL = "dylan.dsgner@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511977555253";

export function Footer() {
  const { t } = useLocale();
  const lenis = useLenis();
  const year = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(0, { duration: 1.4 });
  };

  return (
    <footer className="border-t border-line">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/logo-dylan.svg"
              alt="Dylan Xavier"
              width={100}
              height={34}
              className="h-8 w-auto dark:invert md:h-9"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Product & UX/UI Designer, Curitiba.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              {t.nav.menu}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-ink-soft hover:text-ink">{t.nav.home}</Link></li>
              <li><Link href="/projects" className="text-sm text-ink-soft hover:text-ink">{t.nav.projects}</Link></li>
              <li><Link href="/about" className="text-sm text-ink-soft hover:text-ink">{t.nav.about}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              {t.nav.contact}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
                  <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
                  <WhatsappLogo size={16} weight="bold" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-8 md:flex-row md:items-center">
          <p className="text-xs text-ink-faint">
            &copy; {year} Dylan Xavier. {t.footer.rights}
          </p>
          <a
            href="#top"
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-ink"
          >
            {t.footer.backToTop}
            <ArrowUp size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
