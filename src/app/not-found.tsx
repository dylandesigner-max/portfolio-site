"use client";

import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { locale } = useLocale();

  return (
    <div className="flex min-h-[70dvh] items-center pt-24">
      <Container className="text-center">
        <p className="font-mono text-sm font-semibold text-ink-faint">404</p>
        <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
          {locale === "pt" ? "Essa página não existe." : "This page doesn't exist."}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          {locale === "pt"
            ? "O link pode estar quebrado ou o conteúdo ainda não foi publicado."
            : "The link may be broken, or the content hasn't been published yet."}
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            {locale === "pt" ? "Voltar para a home" : "Back to home"}
          </Button>
        </div>
      </Container>
    </div>
  );
}
