"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";

export function AboutHero() {
  const locale = useLocale();
  const t = useTranslations("about.hero");
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const titleWords = t("title").split(" ");
  const mainTitle = titleWords.slice(0, -1).join(" ");
  const highlightedWord = titleWords[titleWords.length - 1];

  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-page-surface py-14 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 end-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" />
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <RevealPanel>
          <p className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">
            <span className="h-px w-10 bg-brand" />
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {mainTitle} <span className="text-brand">{highlightedWord}</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-8 text-body sm:text-base sm:leading-9">{t("description")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-13 items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong"
            >
              {t("primaryCta")}
              <DirectionArrow className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-13 items-center rounded-full border border-line bg-card-deep/60 px-7 py-3.5 text-sm font-bold text-heading transition-colors hover:border-brand/50"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </RevealPanel>

        <RevealPanel delay={120}>
          <div className="relative pb-10 sm:pb-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-line shadow-2xl">
              <OptimizedImage
                src={images.about.hero}
                alt={t("imageAlt")}
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-full w-full rounded-none border-0 shadow-none"
                imageClassName="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-0 end-4 h-28 w-40 overflow-hidden rounded-2xl border-4 border-page-surface shadow-xl sm:end-8 sm:h-36 sm:w-52">
              <OptimizedImage
                src={images.about.teamOnSite}
                alt=""
                sizes="208px"
                className="h-full w-full rounded-none border-0 shadow-none"
                imageClassName="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </RevealPanel>
      </Container>
    </section>
  );
}
