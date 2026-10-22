"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Handshake } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { clipRevealUp, softSpring, staggerContainer } from "@/components/ui/motion-presets";
import { images } from "@/constants/image";

type PartnerSide = {
  role: string;
  description: string;
};

export function PartnershipSection() {
  const t = useTranslations("home.partnership");
  const reduceMotion = useReducedMotion();
  const points = t.raw("points") as string[];

  return (
    <Section className="relative isolate overflow-hidden bg-page py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 start-[-8rem] h-[32rem] w-[32rem] rounded-full bg-brand/8 blur-[140px]" />
        <div className="absolute -bottom-40 end-[-8rem] h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-[140px]" />
      </div>

      <Container className="relative max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
        >
          <motion.p
            variants={clipRevealUp(0.02)}
            className="mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm"
          >
            <span className="h-px w-10 bg-brand" />
            {t("eyebrow")}
            <span className="h-px w-10 bg-brand" />
          </motion.p>
          <motion.h2
            variants={clipRevealUp(0.08)}
            className="text-3xl font-black leading-[1.16] tracking-tight text-heading sm:text-4xl lg:text-5xl"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={clipRevealUp(0.14)}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8"
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid items-stretch gap-4 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer(0.12)}
        >
          <motion.div
            variants={clipRevealUp(0.05)}
            className="rounded-[2rem] border border-line bg-card-deep p-7 shadow-lg sm:p-9"
          >
            <div className="flex h-20 items-center justify-start">
              <Image
                src={images.brand.logoLight}
                alt={t("wafAlt")}
                width={180}
                height={72}
                unoptimized
                className="h-14 w-auto dark:hidden sm:h-16"
              />
              <Image
                src={images.brand.logoDark}
                alt=""
                aria-hidden="true"
                width={180}
                height={72}
                unoptimized
                className="hidden h-14 w-auto dark:block sm:h-16"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand rtl:tracking-normal">
              {(t.raw("waf") as PartnerSide).role}
            </p>
            <p className="mt-3 text-sm leading-7 text-body sm:text-base sm:leading-8">
              {(t.raw("waf") as PartnerSide).description}
            </p>
          </motion.div>

          <motion.div
            variants={clipRevealUp(0.1)}
            className="flex items-center justify-center py-2 lg:py-0"
          >
            <div className="flex items-center gap-3">
              <span className="hidden h-px w-10 bg-line sm:block lg:w-6" />
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand shadow-[0_10px_30px_rgba(34,197,94,0.18)]">
                <Handshake className="h-6 w-6" />
              </span>
              <span className="hidden h-px w-10 bg-line sm:block lg:w-6" />
            </div>
          </motion.div>

          <motion.div
            variants={clipRevealUp(0.15)}
            className="rounded-[2rem] border border-line bg-card-deep p-7 shadow-lg sm:p-9"
          >
            <div className="flex h-20 items-center justify-start">
              <Image
                src={images.brand.futurexLogo}
                alt={t("futurexAlt")}
                width={1024}
                height={640}
                unoptimized
                className="-mx-7 -my-8 h-24 w-auto max-w-none shrink-0 dark:hidden"
              />
              <Image
                src={images.brand.futurexLogoDark}
                alt=""
                aria-hidden="true"
                width={158}
                height={51}
                unoptimized
                className="hidden h-10 w-auto dark:block sm:h-11"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-brand rtl:tracking-normal">
              {(t.raw("futurex") as PartnerSide).role}
            </p>
            <p className="mt-3 text-sm leading-7 text-body sm:text-base sm:leading-8">
              {(t.raw("futurex") as PartnerSide).description}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-6 lg:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
        >
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {points.map((point) => (
              <motion.li
                key={point}
                variants={clipRevealUp(0.04)}
                className="rounded-full border border-line bg-card px-4 py-2 text-xs font-bold text-body-strong sm:text-sm"
              >
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.div variants={clipRevealUp(0.12)} whileHover={reduceMotion ? undefined : { y: -3 }} transition={softSpring}>
            <a
              href={t("ctaUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-sm font-bold text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-contrast"
            >
              {t("ctaLabel")}
              <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
