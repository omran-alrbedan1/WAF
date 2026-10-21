"use client";

import { useLocale, useMessages, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, MapPin, MapPinned } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { images } from "@/constants/image";
import { saudiGovernorates } from "@/constants/saudi-governorates";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";

type CityCopy = { badge: string; title: string; body: string };

type HomeMessages = {
  home: {
    cities: {
      jeddah: CityCopy;
      riyadh: CityCopy;
      others: string[];
      mapNames: Record<string, string>;
      mapCredit: string;
    };
  };
};

const serviceCities = [
  { key: "jeddah", label: { dx: -24, dy: 8, anchor: "end" as const } },
  { key: "makkah", label: { dx: 0, dy: 62, anchor: "middle" as const } },
  { key: "taif", label: { dx: 26, dy: 8, anchor: "start" as const } },
  { key: "madinah", label: { dx: 24, dy: 8, anchor: "start" as const } },
  { key: "yanbu", label: { dx: -24, dy: 8, anchor: "end" as const } },
  { key: "riyadh", label: { dx: 24, dy: 8, anchor: "start" as const } },
  { key: "jazan", label: { dx: 24, dy: 8, anchor: "start" as const } },
  { key: "abha", label: { dx: -24, dy: 14, anchor: "end" as const } },
  { key: "khamisMushait", label: { dx: 24, dy: -8, anchor: "start" as const } },
  { key: "tabuk", label: { dx: 24, dy: 8, anchor: "start" as const } },
];

export function CitiesSection() {
  const locale = useLocale();
  const t = useTranslations("home.cities");
  const messages = useMessages() as HomeMessages;
  const { jeddah, mapNames, mapCredit } = messages.home.cities;
  const isArabic = locale === "ar";
  const DirectionArrow = isArabic ? ArrowLeft : ArrowRight;

  const active = { key: "jeddah", copy: jeddah, image: images.home.heroShowcase, mapQuery: "WAF+Jeddah+Al+Hamra" };

  return (
    <Section className="relative isolate overflow-hidden border-y border-line bg-page-surface py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 end-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <Container className="relative">
        <RevealPanel className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">
              <span className="h-px w-10 bg-brand" />
              {jeddah.badge}
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.16] tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {t("title")}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8">
            {t("intro")}
          </p>
        </RevealPanel>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-12">
          <RevealPanel className="lg:col-span-7">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-card-deep p-4 shadow-2xl sm:p-6">
              <div className="home-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
              <span className="relative flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-bold text-brand">
                <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
                {isArabic ? "مناطق الخدمة" : "Service areas"}
              </span>

              <svg
                viewBox={saudiGovernorates.viewBox}
                role="img"
                aria-label={t("title")}
                className="relative mx-auto mt-4 h-auto w-full max-w-xl"
              >
                {saudiGovernorates.items.map((item) => {
                  const isServed = item.city !== null;
                  const isActiveArea = item.city === active.key;

                  return (
                    <path
                      key={item.name}
                      d={item.d}
                      className={
                        isActiveArea
                          ? "fill-brand/70 stroke-brand"
                          : isServed
                            ? "fill-brand/35 stroke-brand"
                            : "fill-page-section stroke-line"
                      }
                      strokeWidth={isServed ? 1.5 : 0.8}
                      strokeLinejoin="round"
                    />
                  );
                })}

                {serviceCities.map((city) => {
                  const { x, y } = saudiGovernorates.points[city.key as keyof typeof saudiGovernorates.points];
                  const isActive = city.key === active.key;

                  return (
                    <g key={city.key}>
                      <circle cx={x} cy={y} r={isActive ? 30 : 22} className="fill-brand/15" />
                      <circle cx={x} cy={y} r={isActive ? 14 : 10} className="fill-brand stroke-card-deep" strokeWidth={3} />
                      <text
                        x={x + city.label.dx}
                        y={y + city.label.dy}
                        textAnchor={city.label.anchor}
                        direction="ltr"
                        style={{ unicodeBidi: "isolate" }}
                        className={isActive ? "fill-heading text-[34px] sm:text-[28px]" : "fill-heading text-[30px] sm:text-[24px]"}
                        stroke="var(--card-deep)"
                        strokeWidth={4}
                        paintOrder="stroke"
                        fontWeight={isActive ? 900 : 700}
                      >
                        {mapNames[city.key]}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <p className="relative mt-4 text-[11px] text-faint">{mapCredit}</p>
            </div>
          </RevealPanel>

          <RevealPanel delay={100} className="flex flex-col gap-5 lg:col-span-5">
            <div className="group relative flex flex-1 flex-col justify-end overflow-hidden rounded-[1.75rem] border border-white/10 bg-card-deep shadow-2xl">
              <div className="relative h-44 overflow-hidden sm:h-52">
                <OptimizedImage
                  src={active.image}
                  alt=""
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full rounded-none border-0 shadow-none"
                  imageClassName="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-deep via-transparent to-black/30" />
                <span className="absolute start-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/30 text-brand backdrop-blur-md">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-black leading-snug text-heading sm:text-2xl">{active.copy.title}</h3>
                <p className="mt-3 text-sm leading-7 text-body">{active.copy.body}</p>
                <a
                  href={`https://maps.google.com/?q=${active.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-brand-contrast transition-colors hover:bg-brand-strong"
                >
                  <MapPinned className="h-4 w-4" />
                  {t("mapsCta")}
                  <DirectionArrow className="h-4 w-4" />
                </a>
              </div>
            </div>
          </RevealPanel>
        </div>
      </Container>
    </Section>
  );
}
