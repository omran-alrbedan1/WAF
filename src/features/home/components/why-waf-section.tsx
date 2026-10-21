"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Gauge,
  Layers,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { clipRevealUp, softSpring, staggerContainer } from "@/components/ui/motion-presets";
import { waLink } from "@/lib/whatsapp";

const pointIcons = [Layers, Target, Gauge, Users, ShieldCheck, MessageCircle];

export function WhyWafSection() {
  const locale = useLocale();
  const t = useTranslations("home.whyWaf");
  const reduceMotion = useReducedMotion();
  const points = t.raw("points") as Array<{
    body: string;
    cta?: string;
    title: string;
  }>;
  const DirectionArrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <Section className="relative isolate overflow-hidden bg-page-deep py-16 text-heading sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-48 end-[-8rem] h-[36rem] w-[36rem] rounded-full bg-brand/10 blur-[140px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      </div>

      <Container className="relative max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
          <motion.div
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
              className="max-w-3xl text-3xl font-black leading-[1.16] tracking-tight text-heading sm:text-4xl lg:text-5xl"
            >
              {t("title")}
            </motion.h2>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={clipRevealUp(0.16)}
            className="max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8"
          >
            {t("intro")}
          </motion.p>
        </div>

        <motion.div
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={staggerContainer(0.09)}
        >
          {points.map((point, index) => {
            const Icon = pointIcons[index % pointIcons.length];
            const isFeatured = index === 0;
            const isContact = Boolean(point.cta);

            return (
              <motion.article
                key={point.title}
                variants={clipRevealUp(index * 0.025)}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                transition={softSpring}
                className={`group relative flex min-h-[15rem] flex-col overflow-hidden rounded-[1.5rem] border p-6 transition-colors sm:p-7 ${
                  isFeatured
                    ? "border-brand bg-brand text-brand-contrast lg:col-span-2"
                    : isContact
                      ? "border-brand/40 bg-brand/10"
                      : "border-line bg-card-deep/90 hover:border-brand/50"
                }`}
              >
                {isFeatured && (
                  <span className="pointer-events-none absolute -top-8 end-4 font-mono text-[9rem] font-black leading-none text-black/10">
                    01
                  </span>
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-mono text-xs tracking-[0.18em] ${
                      isFeatured ? "text-brand-contrast/65" : "text-faint"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      isFeatured
                        ? "border-brand-contrast/20 bg-brand-contrast/10"
                        : "border-brand/25 bg-brand/10 text-brand"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="relative mt-auto pt-10">
                  <h3
                    className={`text-lg font-bold sm:text-xl ${
                      isFeatured ? "text-brand-contrast" : "text-heading"
                    }`}
                  >
                    {point.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-xl text-sm leading-6 ${
                      isFeatured ? "text-brand-contrast/80" : "text-body"
                    }`}
                  >
                    {point.body}
                  </p>
                  {point.cta && (
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-bold text-brand-contrast transition-colors hover:bg-brand-strong"
                    >
                      {point.cta}
                      <DirectionArrow className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
