"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";

export function ServicesShowcaseCta() {
  const locale = useLocale();
  const t = useTranslations("services.cta");
  const isArabic = locale === "ar";

  return (
    <section className="pt-10 sm:pt-12">
      <Container>
        {/* Outer container with thin red border & dark subtle gradient background */}
        <div className="relative overflow-hidden rounded-md border border-brand/60 bg-gradient-to-r from-black via-zinc-950 to-black p-4 sm:p-6 lg:p-8 shadow-[0_0_25px_rgba(34,197,94,0.15)]">
          <div className="grid items-center gap-5 md:gap-6 lg:grid-cols-12 lg:gap-8">
            <RevealPanel className="relative min-h-[200px] w-full sm:min-h-[240px] lg:col-span-4 lg:min-h-[220px]">
              <OptimizedImage
                src={images.services.servicesCta}
                alt={t("imageAlt")}
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full min-h-[200px] w-full rounded-none border-0 bg-transparent shadow-none sm:min-h-[240px] lg:min-h-[220px]"
                imageClassName="h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.05]"
              />
            </RevealPanel>

            <RevealPanel
              className="services-scan-sheen flex flex-col justify-center text-center lg:col-span-5 lg:px-6 lg:text-end ltr:lg:text-start"
              delay={100}
            >
              <h2 className="text-2xl font-black leading-tight tracking-tight text-heading sm:text-3xl lg:text-3xl">
                {t("title")}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {t("description")}
              </p>
            </RevealPanel>

            <RevealPanel
              className="services-scan-sheen flex flex-col justify-center gap-3 sm:flex-row lg:col-span-3 lg:flex-col"
              delay={180}
              direction={isArabic ? "left" : "right"}
            >
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex w-full items-center justify-between rounded-sm bg-brand text-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider shadow-[0_18px_44px_rgba(34,197,94,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[0_24px_54px_rgba(34,197,94,0.3)] sm:flex-1 lg:flex-none"
              >
                <span>{t("primaryLabel")}</span>
                <Calendar className="size-4 transition duration-300 group-hover:scale-110" />
              </Link>

              <Link
                href={`/${locale}/contact`}
                className="group inline-flex w-full items-center justify-between rounded-sm border border-line bg-ink/60 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-body-strong transition-all duration-300 hover:-translate-y-0.5 hover:border-line hover:bg-muted hover:text-heading sm:flex-1 lg:flex-none"
              >
                <span>{t("secondaryLabel")}</span>
                <Phone className="size-4 text-body transition duration-300 group-hover:scale-110 group-hover:text-heading" />
              </Link>
            </RevealPanel>
          </div>
        </div>
      </Container>
    </section>
  );
}
