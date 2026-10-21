import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";
import { type ServiceItem } from "@/features/services/services-page-messages";
import { cn } from "@/lib/utils";

type ServicesShowcaseRowProps = {
  ctaLabel: string;
  index: number;
  isArabic: boolean;
  item: ServiceItem;
  locale: "ar" | "en";
};

const serviceImageMap: Record<string, string> = {
  "creative-sculptures": images.services.sculptureInstall,
  "graffiti-murals": images.services.muralArt,
  "signage-branding": images.services.signageInstall,
  "event-sites": images.services.eventSite,
  "large-format-printing": images.services.largeFormatPrint,
  "fabrication-installation": images.services.exhibitionBooth,
  "packaging-giveaways": images.services.packaging,
};

export function ServicesShowcaseRow({
  ctaLabel,
  index,
  isArabic,
  item,
  locale,
}: ServicesShowcaseRowProps) {
  const imageSrc =
    serviceImageMap[item.slug] ?? images.services.exhibitionBooth;

  return (
    <RevealPanel
      delay={index * 90}
      direction={index % 2 === 0 ? "right" : "left"}
    >
      <Link
        href={`/${locale}/services/${item.slug}`}
        className="group block"
      >
        <div
          dir="ltr"
          className="services-panel grid grid-cols-[82px_minmax(0,1fr)] gap-px md:grid-cols-[88px_minmax(0,1fr)] lg:grid-cols-[96px_minmax(0,1fr)_320px] xl:grid-cols-[104px_minmax(0,1fr)_360px]"
        >
          {/* Image */}
          <div className="relative col-span-2 min-h-[220px] overflow-hidden bg-ink md:order-3 md:col-span-2 md:min-h-[260px] lg:col-span-1 lg:min-h-[160px]">
            <OptimizedImage
              src={imageSrc}
              alt={item.title}
              sizes="(min-width: 1280px) 360px, (min-width: 1024px) 32vw, (min-width: 768px) 100vw, 100vw"
              className="h-full min-h-[220px] rounded-none border-0 bg-ink shadow-none md:min-h-[260px] lg:min-h-[160px]"
              imageClassName="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.06] group-hover:brightness-110"
            />
          </div>

          {/* Number */}
          <div
            className="services-scan-sheen flex items-start justify-center bg-page-deep px-5 py-6 sm:py-7 lg:py-8"
          >
            <span className="text-[2.5rem] font-bold leading-none tracking-tight text-brand transition duration-300 group-hover:scale-105 sm:text-5xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={cn(
              "relative flex min-h-[160px] flex-col justify-center bg-panel-solid px-5 py-6 sm:px-6 md:px-7 lg:px-8",
              isArabic ? "text-right" : "text-left",
            )}
          >
            {/* Hover accent */}
            <div className="pointer-events-none absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-brand/24 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            <h3 className="max-w-[18ch] text-2xl font-semibold leading-tight text-heading sm:text-[1.7rem]">
              {item.title}
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-body sm:text-[0.95rem]">
              {item.body}
            </p>

            {/* CTA */}
            <div
              className={cn(
                "mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand transition duration-300 group-hover:text-brand-strong",
                isArabic
                  ? "self-start group-hover:-translate-x-1"
                  : "self-start group-hover:translate-x-1",
              )}
            >
              <span>{ctaLabel}</span>

              <ArrowLeft
                className={cn(
                  "size-4",
                  isArabic ? "rotate-180" : undefined,
                )}
              />
            </div>
          </div>
        </div>
      </Link>
    </RevealPanel>
  );
}
