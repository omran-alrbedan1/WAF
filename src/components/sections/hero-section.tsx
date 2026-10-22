"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MapPin, MessageCircle, Pause, Play } from "lucide-react";

import { images } from "@/constants/image";
import { clipRevealUp, softSpring, staggerContainer } from "@/components/ui/motion-presets";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { waLink } from "@/lib/whatsapp";

const heroBackgrounds = [
  images.home.hero,
  images.home.heroAlt1,
  images.home.heroAlt2,
  images.home.heroAlt3,
];

export function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("home.hero");
  const reduceMotion = useReducedMotion();
  const isArabic = locale === "ar";
  const DirectionArrow = isArabic ? ArrowLeft : ArrowRight;
  const [activeBackground, setActiveBackground] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (reduceMotion || !isPlaying) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % heroBackgrounds.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPlaying, reduceMotion]);

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-page-deep">
      <AnimatePresence initial={false}>
        <motion.div
          key={activeBackground}
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 1.25, ease: "easeOut" }}
        >
          <OptimizedImage
            src={heroBackgrounds[activeBackground]}
            alt=""
            priority={activeBackground === 0}
            sizes="100vw"
            className="h-full w-full rounded-none border-0 shadow-none"
            imageClassName="h-full w-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className={`absolute inset-0 ${
          isArabic
            ? "bg-gradient-to-l from-black/80 via-black/45 to-black/10"
            : "bg-gradient-to-r from-black/80 via-black/45 to-black/10"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.7)_0.7px,transparent_0.7px)] [background-size:5px_5px]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className={`relative z-10 w-full max-w-3xl ${isArabic ? "text-right" : "text-left"}`}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.08)}
            className="max-w-2xl"
          >
            <motion.p
              variants={clipRevealUp(0.02)}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold tracking-[0.12em] text-white/90 backdrop-blur-md sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_16px_rgba(34,197,94,0.8)]" />
              {t("eyebrow")}
            </motion.p>

            <motion.h1
              variants={clipRevealUp(0.1)}
              className="mt-7 text-4xl font-black leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-7xl"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              variants={clipRevealUp(0.2)}
              className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
            >
              {t("description")}
            </motion.p>

            <motion.div
              variants={clipRevealUp(0.28)}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3"
            >
              {(["highlightOne", "highlightTwo", "highlightThree"] as const).map((key) => (
                <div key={key} className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-black">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t(key)}
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={clipRevealUp(0.36)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <motion.a
                whileHover={reduceMotion ? undefined : { y: -3 }}
                transition={softSpring}
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong sm:px-8"
              >
                <MessageCircle className="h-4 w-4" />
                {t("primaryCta")}
                <DirectionArrow className="h-4 w-4" />
              </motion.a>
              <motion.div whileHover={reduceMotion ? undefined : { y: -3 }} transition={softSpring}>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex min-h-14 items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-white/10 sm:px-8"
                >
                  {t("secondaryCta")}
                  <DirectionArrow className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              variants={clipRevealUp(0.42)}
              className="mt-5 max-w-lg text-xs leading-6 text-white/65 sm:text-sm"
            >
              {t("microcopy")}
            </motion.p>

            <motion.div
              variants={clipRevealUp(0.48)}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2.5 backdrop-blur-md"
            >
              <span className="text-xs font-semibold text-white/75">{t("partnerBadge")}</span>
              <span className="h-4 w-px bg-white/25" />
              <Image
                src={images.brand.futurexLogoDark}
                alt="FutureX Digital Solutions"
                width={158}
                height={51}
                unoptimized
                className="h-5 w-auto"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 end-6 hidden items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-3 text-xs font-medium text-white/85 backdrop-blur-md sm:flex">
          <MapPin className="h-4 w-4 text-brand" />
          {t("visualLabel")}
        </div>
        <div className="absolute bottom-6 start-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/25 p-2 backdrop-blur-md">
          {heroBackgrounds.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={t("slideLabel", { number: index + 1 })}
              aria-pressed={activeBackground === index}
              onClick={() => setActiveBackground(index)}
              className={`h-2 rounded-full transition-all ${
                activeBackground === index ? "w-7 bg-brand" : "w-2 bg-white/55 hover:bg-white"
              }`}
            />
          ))}
          {!reduceMotion && (
            <button
              type="button"
              aria-label={isPlaying ? t("pauseSlideshow") : t("playSlideshow")}
              onClick={() => setIsPlaying((playing) => !playing)}
              className="ms-1 flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
