import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { type ServiceDetailEntry, type ServiceVisualVariant } from "@/features/services/service-detail-content";
import { cn } from "@/lib/utils";

type ServiceDetailHeroProps = {
  entry: ServiceDetailEntry;
  eyebrow: string;
  heroImageSrc: string;
  locale: "ar" | "en";
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  variant: ServiceVisualVariant;
};

export function ServiceDetailHero({
  entry,
  eyebrow,
  heroImageSrc,
  locale,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  variant,
}: ServiceDetailHeroProps) {
  const isArabic = locale === "ar";
  const DirectionArrow = isArabic ? ArrowLeft : ArrowRight;
  const Crumb = isArabic ? ChevronLeft : ChevronRight;

  const titleWords = entry.hero.title.split(" ");
  const midPoint = Math.ceil(titleWords.length / 2);
  const titlePart1 = titleWords.slice(0, midPoint).join(" ");
  const titlePart2 = titleWords.slice(midPoint).join(" ");

  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-page-surface py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 end-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
      </div>

      <Container className="relative">
        <nav className="mb-8 flex items-center gap-2 text-xs font-bold text-body sm:text-sm">
          <Link href={`/${locale}/services`} className="transition-colors hover:text-brand">
            {isArabic ? "الخدمات" : "Services"}
          </Link>
          <Crumb className="h-4 w-4 text-faint" />
          <span className="text-brand">{eyebrow}</span>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <RevealPanel>
            <h1 className="text-3xl font-black leading-[1.2] tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {titlePart1} <span className="text-brand">{titlePart2}</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-8 text-body sm:text-base sm:leading-9">{entry.hero.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-13 items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong"
              >
                {primaryCtaLabel}
                <DirectionArrow className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex min-h-13 items-center gap-2 rounded-full border border-line bg-card-deep/60 px-7 py-3.5 text-sm font-bold text-heading transition-colors hover:border-brand/50"
              >
                <Phone className="h-4 w-4 text-brand" />
                {secondaryCtaLabel}
              </Link>
            </div>
          </RevealPanel>

          <RevealPanel delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-2xl">
              <OptimizedImage
                src={heroImageSrc}
                alt={entry.hero.imageAlt}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full w-full rounded-none border-0 shadow-none"
                imageClassName={cn("h-full w-full object-cover", variant === "printing" ? "object-right" : "object-center")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </RevealPanel>
        </div>
      </Container>
    </section>
  );
}
