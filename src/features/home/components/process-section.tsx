"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useLocale, useMessages, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { clipRevealUp, softSpring, staggerContainer } from "@/components/ui/motion-presets";
import { waLink } from "@/lib/whatsapp";

type HomeMessages = {
  home: {
    process: { steps: { title: string; body: string }[] };
  };
};

export function ProcessSection() {
  const locale = useLocale();
  const t = useTranslations("home.process");
  const messages = useMessages() as HomeMessages;
  const reduceMotion = useReducedMotion();
  const steps = messages.home.process.steps;
  const stepDelay = 0.9;
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : index * stepDelay,
        duration: reduceMotion ? 0.01 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };
  const horizontalProgressVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: reduceMotion ? 0.01 : stepDelay * Math.max(steps.length - 1, 1),
        ease: "linear",
      },
    },
  };
  const verticalProgressVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: (index: number) => ({
      scaleY: 1,
      transition: {
        delay: reduceMotion ? 0 : index * stepDelay,
        duration: reduceMotion ? 0.01 : stepDelay,
        ease: "linear",
      },
    }),
  };

  return (
    <Section className="relative isolate overflow-hidden border-y border-line bg-page-section py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 start-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      </div>

      <Container className="relative">
        <motion.div
          className="grid gap-5 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
        >
          <div>
            <motion.p
              variants={clipRevealUp(0.02)}
              className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm"
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
          </div>
          <motion.p
            variants={clipRevealUp(0.16)}
            className="max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8"
          >
            {t("intro")}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-10 sm:mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{ hidden: {}, visible: {} }}
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-[10%] top-6 hidden h-px bg-line lg:block"
          />
          <motion.span
            aria-hidden="true"
            custom={steps.length}
            variants={horizontalProgressVariants}
            className="absolute inset-x-[10%] top-6 hidden h-px bg-brand lg:block"
            style={{ transformOrigin: locale === "ar" ? "right center" : "left center" }}
          />

          <ol className="relative grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-5">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                custom={index}
                variants={stepVariants}
                className="group relative grid grid-cols-[3rem_1fr] gap-x-4 pb-8 last:pb-0 lg:flex lg:min-h-[18rem] lg:flex-col lg:pb-0"
              >
                {index < steps.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    custom={index}
                    variants={verticalProgressVariants}
                    className="absolute start-6 top-12 bottom-[-1.5rem] w-px origin-top bg-brand/60 lg:hidden"
                  />
                )}
                <span className="relative z-10 flex  h-12 w-12 group-hover:text-white items-center justify-center rounded-full border border-brand/45 bg-page-surface text-sm font-black text-brand shadow-[0_0_24px_rgba(34,197,94,0.12)] transition-colors group-hover:bg-brand group-hover:text-brand-contrast lg:mx-auto">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="pb-1 lg:pt-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-brand">
                    {t("stepLabel", { number: String(index + 1).padStart(2, "0") })}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-6 text-heading transition-colors group-hover:text-brand sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-body">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col items-center gap-3 text-center sm:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={clipRevealUp(0.08)}
        >
          <motion.a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { y: -3 }}
            transition={softSpring}
            className="inline-flex min-h-13 items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_12px_32px_rgba(34,197,94,0.2)] transition-colors hover:bg-brand-strong sm:px-8"
          >
            {t("cta")}
          </motion.a>
          <p className="text-xs text-faint">{t("ctaNote")}</p>
        </motion.div>
      </Container>
    </Section>
  );
}
