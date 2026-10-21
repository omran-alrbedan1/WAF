"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Gauge, ShieldCheck, Target, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { images } from "@/constants/image";
import {
  clipRevealUp,
  softSpring,
  staggerContainer,
} from "@/components/ui/motion-presets";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";

const pointIcons = [Target, ShieldCheck, Users, Gauge];

export function ServicesOverviewSection() {
  const locale = useLocale();
  const t = useTranslations("home.performance");
  const reduceMotion = useReducedMotion();
  const points = t.raw("points") as Array<{ title: string; description: string }>;
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <Section className="relative isolate overflow-hidden bg-page-section py-16 text-heading sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 start-[42%] h-[30rem] w-[30rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <Container className="relative max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="order-1 lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer(0.1)}
          >
            <motion.p
              variants={clipRevealUp(0.02)}
              className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm"
            >
              <span className="h-px w-10 bg-brand" />
              {t("eyebrow")}
            </motion.p>

            <motion.h2
              variants={clipRevealUp(0.08)}
              className="max-w-3xl text-3xl font-black leading-[1.18] tracking-tight text-heading sm:text-4xl lg:text-5xl"
            >
              {t("heading.title")}
            </motion.h2>

            <motion.p
              variants={clipRevealUp(0.16)}
              className="mt-5 max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8"
            >
              {t("heading.description")}
            </motion.p>

            <motion.div
              className="mt-8 grid gap-3 sm:grid-cols-2"
              variants={staggerContainer(0.08, 0.12)}
            >
              {points.map((point, index) => {
                const Icon = pointIcons[index % pointIcons.length];

                return (
                  <motion.article
                    key={point.title}
                    variants={clipRevealUp(index * 0.025)}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    transition={softSpring}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-card-deep/80 p-5 transition-colors hover:border-brand/50 sm:p-6"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <span className="font-mono text-xs tracking-[0.18em] text-faint">
                        0{index + 1}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 group-hover:text-white text-brand transition-colors group-hover:bg-brand group-hover:text-brand-contrast">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-heading sm:text-lg">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-body">{point.description}</p>
                    <span className="absolute inset-x-5 bottom-0 h-px origin-right scale-x-0 bg-brand/80 transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              variants={clipRevealUp(0.34)}
              whileHover={reduceMotion ? undefined : { x: locale === "ar" ? -3 : 3 }}
              transition={softSpring}
              className="mt-7"
            >
              <Link
                href={`/${locale}/about`}
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-brand/50 bg-brand/10 px-6 py-3 text-sm font-bold text-heading transition-colors hover:border-brand hover:bg-brand hover:text-brand-contrast"
              >
                {t("primaryCta")}
                <DirectionArrow className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <RevealPanel
            delay={120}
            direction={locale === "ar" ? "left" : "right"}
            className="order-2 lg:col-span-5"
          >
            <div className="group relative min-h-[27rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-card-deep shadow-2xl sm:min-h-[34rem] lg:min-h-[39rem]">
              <motion.div
                className="absolute inset-0"
                whileHover={reduceMotion ? undefined : { scale: 1.035 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <OptimizedImage
                  src={images.home.projectDetail}
                  alt={t("imageAlt")}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-full w-full rounded-none border-0 shadow-none"
                  imageClassName="h-full w-full object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/20" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-7 sm:top-7">
                <span className="rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  {t("eyebrow")}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-white/70">WAF / 01</span>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                <p className="max-w-[15rem] text-xl font-bold leading-snug text-white sm:text-2xl">
                  {t("imageCaption")}
                </p>
                <div className="shrink-0 rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-2xl font-black leading-none">07</p>
                  <p className="mt-2 text-[10px] font-medium text-white/70">{t("serviceCountLabel")}</p>
                </div>
              </div>
            </div>
          </RevealPanel>
        </div>
      </Container>
    </Section>
  );
}
