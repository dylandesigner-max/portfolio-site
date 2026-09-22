"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/projects-data";

export default function ProjectsPage() {
  const { t, locale } = useLocale();

  return (
    <div className="pt-24 md:pt-28">
      <Container className="py-12 md:py-16">
        <h1 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-6xl">
          {t.projectsPage.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
          {t.projectsPage.intro}
        </p>
      </Container>

      <Container className="pb-24 md:pb-32">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => {
            const card = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-line bg-bg-raised">
                  <Image
                    src={project.image}
                    alt={locale === "pt" ? project.imageAlt.pt : project.imageAlt.en}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-medium text-ink">{project.title}</h2>
                    <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-soft">
                      {locale === "pt" ? project.tagline.pt : project.tagline.en}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink-soft">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.content ? (
                    <span className="mt-1 flex shrink-0 items-center gap-1 text-sm font-semibold text-ink">
                      {t.projectsPage.viewCase}
                      <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="mt-1 shrink-0 rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-faint">
                      {t.projectsPage.comingSoon}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex gap-6 border-t border-line pt-4 text-xs text-ink-faint">
                  <span>{t.projectsPage.role}: {locale === "pt" ? project.role.pt : project.role.en}</span>
                  <span>{t.projectsPage.year}: {project.year}</span>
                </div>
              </>
            );

            return (
              <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                {project.content ? (
                  <Link href={`/projects/${project.slug}`} data-cursor-hover className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-card">
                    {card}
                  </Link>
                ) : (
                  <div className="group">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
