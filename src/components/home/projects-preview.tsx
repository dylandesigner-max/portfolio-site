"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/projects-data";

export function ProjectsPreview() {
  const { t, locale } = useLocale();
  const featured = projects.slice(0, 2);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
              {t.projectsSection.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {t.projectsSection.headline}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-brand"
          >
            {t.projectsSection.viewAll}
            <IconArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, i) => {
            const card = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-bg-raised">
                  <Image
                    src={project.image}
                    alt={
                      locale === "pt" ? project.imageAlt.pt : project.imageAlt.en
                    }
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm text-ink-soft">
                      {locale === "pt" ? project.tagline.pt : project.tagline.en}
                    </p>
                  </div>
                  {project.caseHref ? (
                    <span className="mt-1 flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
                      {t.projectsSection.viewCase}
                      <IconArrowUpRight
                        size={15}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                  ) : (
                    <span className="mt-1 shrink-0 rounded-pill border border-line px-3 py-1 text-xs font-medium text-ink-faint">
                      {t.projectsSection.comingSoon}
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <Reveal
                key={project.slug}
                delay={i * 0.08}
                className={i === 0 ? "md:col-span-2" : "md:col-span-1"}
              >
                {project.caseHref ? (
                  <a
                    href={project.caseHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-md"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="group">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
