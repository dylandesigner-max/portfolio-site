"use client";

import { Quotes } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { testimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialCard({ item }: { item: Testimonial }) {
  const { locale } = useLocale();
  return (
    <div className="mb-5 flex flex-col gap-4 rounded-card border border-line bg-bg-raised p-6">
      <Quotes size={22} weight="fill" className="text-accent" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-ink-soft">
        {locale === "pt" ? item.quote.pt : item.quote.en}
      </p>
      <div>
        <p className="text-sm font-medium text-ink">{item.name}</p>
        <p className="text-xs text-ink-faint">{locale === "pt" ? item.role.pt : item.role.en}</p>
      </div>
    </div>
  );
}

function Column({
  items,
  duration,
  reverse = false,
  className,
}: {
  items: Testimonial[];
  duration: number;
  reverse?: boolean;
  className?: string;
}) {
  const track = [...items, ...items];
  return (
    <div className={cn("h-full overflow-hidden", className)}>
      <div
        className={cn("animate-marquee-vertical", reverse && "[animation-direction:reverse]")}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((item, i) => (
          <TestimonialCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const { t } = useLocale();

  const colA = testimonials.slice(0, 2);
  const colB = testimonials.slice(2, 4);
  const colC = testimonials.slice(4, 6);

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
            {t.testimonials.headline}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink-soft">{t.testimonials.subtext}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="marquee-fade-vertical mt-12 grid h-[520px] grid-cols-1 gap-5 md:mt-16 md:h-[640px] md:grid-cols-3">
            <Column items={testimonials} duration={40} className="md:hidden" />
            <Column items={colA} duration={30} className="hidden md:block" />
            <Column items={colB} duration={36} reverse className="hidden md:block" />
            <Column items={colC} duration={24} className="hidden md:block" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
