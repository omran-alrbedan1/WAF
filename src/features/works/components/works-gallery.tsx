"use client";

import { useState } from "react";
import { useMessages, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";
import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type WorkItem = { title: string; service: string; category: string; image: string };

type WorksMessages = {
  home: { works: { filters: string[]; items: WorkItem[] } };
};

const imageMap: Record<string, string> = {
  web: images.services.digital.webDevelopment,
  app: images.services.digital.mobileDevelopment,
  software: images.services.digital.customSoftware,
  store: images.services.digital.ecommerce,
  marketing: images.services.digital.digitalMarketing,
  seo: images.services.digital.seoOptimization,
  ux: images.services.digital.uiUxDesign,
  brand: images.services.digital.brandingDesign,
  signage: images.services.signageInstall,
  packaging: images.services.packaging,
  printing: images.services.largeFormatPrint,
  booth: images.services.exhibitionBooth,
  events: images.services.eventSite,
  interior: images.services.fabricationWorkshop,
  gifts: images.services.packaging,
};

const featuredSpans = ["lg:col-span-2 lg:row-span-2", "lg:col-span-2", "", "", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function WorksGallery() {
  const t = useTranslations("home.works");
  const messages = useMessages() as unknown as WorksMessages;
  const { filters, items } = messages.home.works;
  const [active, setActive] = useState(0);

  const shown = active === 0 ? items : items.filter((item) => item.category === filters[active]);
  const isBento = active === 0 && items.length === featuredSpans.length;

  return (
    <section className="bg-page-deep py-14 sm:py-20">
      <Container>
        <RevealPanel>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2 text-sm font-bold transition-colors",
                  active === index
                    ? "border-brand bg-brand text-brand-contrast"
                    : "border-line bg-card-deep/60 text-heading hover:border-brand/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </RevealPanel>

        <div
          className={cn(
            "mt-8 grid grid-flow-dense gap-4 sm:grid-cols-2",
            isBento ? "lg:auto-rows-[280px] lg:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {shown.map((item, index) => {
            const span = isBento ? featuredSpans[index] : "";
            const isLarge = span.includes("row-span-2");

            return (
              <RevealPanel key={`${item.title}-${index}`} delay={index * 60} className={cn("flex", span)}>
                <article
                  className={cn(
                    "group relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden rounded-[1.75rem] border border-line bg-card-deep shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-2xl",
                    isLarge && "min-h-[380px]",
                    !isBento && "lg:min-h-[340px]",
                  )}
                >
                  <OptimizedImage
                    src={imageMap[item.image] ?? images.services.exhibitionBooth}
                    alt={item.title}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="absolute inset-0 h-full w-full rounded-none border-0 shadow-none"
                    imageClassName="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

                  <span className="absolute start-5 top-5 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    {item.category}
                  </span>
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("similarCta")}
                    className="absolute end-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-contrast opacity-0 transition-opacity duration-300 focus-visible:opacity-100 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-5 w-5 rtl:-scale-x-100" />
                  </a>

                  <div className="relative p-5 sm:p-6">
                    <h3 className={cn("font-black leading-snug text-white", isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl")}>
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/80">
                      <span className="font-bold text-brand">{t("serviceLabel")}: </span>
                      {item.service}
                    </p>
                  </div>
                </article>
              </RevealPanel>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
