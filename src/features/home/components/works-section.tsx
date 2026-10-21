"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useMessages, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";
import { waLink } from "@/lib/whatsapp";

type WorkItem = {
  title: string;
  service: string;
  category: string;
  image: string;
};

type HomeMessages = {
  home: {
    works: { filters: string[]; items: WorkItem[] };
  };
};

const imageMap: Record<string, string> = {
  signage: images.services.signageInstall,
  packaging: images.services.packaging,
  printing: images.services.largeFormatPrint,
  booth: images.services.exhibitionBooth,
  events: images.services.eventSite,
  interior: images.services.fabricationWorkshop,
  gifts: images.services.packaging,
};

export function WorksSection() {
  const t = useTranslations("home.works");
  const locale = useLocale();
  const messages = useMessages() as HomeMessages;
  const { filters, items } = messages.home.works;
  const [active, setActive] = useState(0);
  const shown = active === 0 ? items : items.filter((i) => i.category === filters[active]);

  return (
    <Section className="bg-page-deep py-16 sm:py-24" id="works">
      <Container>
        <RevealPanel className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-[-0.02em] text-heading sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm leading-7 text-body sm:text-base">{t("intro")}</p>
        </RevealPanel>

        <RevealPanel delay={150} className="mt-8">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:justify-center">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActive(index)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-colors ${
                  active === index
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-page-surface text-body hover:border-brand/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </RevealPanel>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item, index) => (
            <RevealPanel key={item.title} delay={index * 60}>
              <article className="overflow-hidden rounded-xl border border-line bg-page-surface">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={imageMap[item.image] ?? images.services.exhibitionBooth}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm text-body">
                    <span className="font-bold text-brand">{t("serviceLabel")}: </span>
                    {item.service}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                    {item.category}
                  </span>
                </div>
              </article>
            </RevealPanel>
          ))}
        </div>

        <RevealPanel delay={200} className="mt-10 flex flex-col items-center gap-3">
          <Link
            href={`/${locale}/services`}
            className="inline-flex min-h-12 items-center rounded-md border border-line px-8 py-3 text-sm font-bold text-heading transition-colors hover:border-brand"
          >
            {t("viewAll")}
          </Link>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-brand hover:underline"
          >
            {t("similarCta")}
          </a>
        </RevealPanel>
      </Container>
    </Section>
  );
}
