"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { RevealPanel } from "@/components/ui/reveal-panel";

export function ServicesShowcaseCta() {
  const locale = useLocale();
  const t = useTranslations("services.cta");
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-page-deep pb-16 sm:pb-20">
      <Container>
        <RevealPanel>
          <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand/40 bg-card-deep px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="home-grid-pattern absolute inset-0 opacity-30" />
              <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[110px]" />
            </div>
            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">{t("eyebrow")}</p>
            <h2 className="mx-auto max-w-2xl text-3xl font-black leading-tight text-heading sm:text-4xl">{t("title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-body sm:text-base">{t("description")}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong sm:w-auto"
              >
                {t("primaryLabel")}
                <DirectionArrow className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-13 w-full items-center justify-center gap-3 rounded-full border border-line bg-page-surface/60 px-8 py-3.5 text-sm font-bold text-heading transition-colors hover:border-brand/50 sm:w-auto"
              >
                <Phone className="h-4 w-4 text-brand" />
                {t("secondaryLabel")}
              </Link>
            </div>
          </div>
        </RevealPanel>
      </Container>
    </section>
  );
}
