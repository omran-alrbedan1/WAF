"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";
import { type ServiceItem, type ServicesMessages } from "@/features/services/services-page-messages";
import { cn } from "@/lib/utils";

type ServicesShowcaseGroupsProps = {
  catalog: ServicesMessages["catalog"];
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

const bentoSpans = ["lg:col-span-2 lg:row-span-2", "lg:col-span-2", "", "", "lg:col-span-2", "", ""];

export function ServicesShowcaseGroups({ catalog, locale }: ServicesShowcaseGroupsProps) {
  const isArabic = locale === "ar";
  const DirectionArrow = isArabic ? ArrowLeft : ArrowRight;
  const [filter, setFilter] = useState<string | null>(null);

  const itemsBySlug = new Map(catalog.items.map((item) => [item.slug, item]));
  const group = catalog.groups.find((g) => g.label === filter);
  const items = (group ? group.itemSlugs.map((slug) => itemsBySlug.get(slug)) : catalog.items).filter(
    (item): item is ServiceItem => Boolean(item),
  );
  const isBento = !group && items.length === bentoSpans.length;
  const tabs = [{ label: null, name: isArabic ? "الكل" : "All" }, ...catalog.groups.map((g) => ({ label: g.label, name: g.label }))];

  return (
    <section className="bg-page-deep py-14 sm:py-20">
      <Container>
        <RevealPanel className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-xl text-2xl font-black leading-snug text-heading sm:text-3xl lg:text-4xl">{catalog.title}</h2>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                type="button"
                onClick={() => setFilter(tab.label)}
                aria-pressed={filter === tab.label}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2 text-sm font-bold transition-colors",
                  filter === tab.label
                    ? "border-brand bg-brand text-brand-contrast"
                    : "border-line bg-card-deep/60 text-heading hover:border-brand/50",
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </RevealPanel>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-body sm:text-base">{group ? group.heading : catalog.description}</p>

        <div
          className={cn(
            "mt-8 grid grid-flow-dense gap-4 sm:grid-cols-2 lg:mt-10",
            isBento ? "lg:auto-rows-[290px] lg:grid-cols-4" : items.length >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {items.map((item, index) => {
            const span = isBento ? bentoSpans[index] : "";
            const isLarge = span.includes("row-span-2");
            const number = catalog.items.findIndex((i) => i.slug === item.slug) + 1;

            return (
              <Link
                key={item.slug}
                href={`/${locale}/services/${item.slug}`}
                className={cn(
                  "group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-line bg-card-deep shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-2xl",
                  !isBento && "lg:min-h-[340px]",
                  isLarge && "min-h-[380px]",
                  span,
                )}
              >
                <OptimizedImage
                  src={serviceImageMap[item.slug] ?? images.services.exhibitionBooth}
                  alt=""
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full rounded-none border-0 shadow-none"
                  imageClassName="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

                <span className="absolute end-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-black/30 font-mono text-sm font-bold text-brand backdrop-blur-md">
                  {String(number).padStart(2, "0")}
                </span>

                <div className="relative p-5 sm:p-6">
                  <h3 className={cn("font-black leading-snug text-white", isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl")}>
                    {item.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-7 text-white/80", isLarge ? "line-clamp-4" : "line-clamp-2")}>{item.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand transition-all group-hover:gap-3">
                    {catalog.cta}
                    <DirectionArrow className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
