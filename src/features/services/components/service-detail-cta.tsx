import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { type ServiceDetailEntry, type ServiceVisualVariant } from "@/features/services/service-detail-content";
import { cn } from "@/lib/utils";

type ServiceDetailCtaProps = {
  entry: ServiceDetailEntry;
  eyebrow: string;
  imageSrc: string;
  locale: "ar" | "en";
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  variant: ServiceVisualVariant;
};

export function ServiceDetailCta({
  entry,
  eyebrow,
  imageSrc,
  locale,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant,
}: ServiceDetailCtaProps) {
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-page-deep py-14 sm:py-20">
      <Container>
        <RevealPanel>
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand/40 bg-black px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-20">
            <OptimizedImage
              src={imageSrc}
              alt=""
              sizes="100vw"
              className="absolute inset-0 -z-10 h-full w-full rounded-none border-0 shadow-none"
              imageClassName={cn("h-full w-full object-cover opacity-30", variant === "printing" ? "object-right" : "object-center")}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />

            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">{eyebrow}</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-white sm:text-4xl">{entry.metadata.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">{entry.metadata.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong sm:w-auto"
              >
                {primaryLabel}
                <DirectionArrow className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/60 sm:w-auto"
              >
                <Phone className="h-4 w-4 text-brand" />
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </RevealPanel>
      </Container>
    </section>
  );
}
