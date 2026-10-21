import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { images } from "@/constants/image";
import { cn } from "@/lib/utils";

type AboutStatsItem = {
  number: string;
  label: string;
};

export function AboutStats() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("about.stats");
  const items = t.raw("items") as AboutStatsItem[];

  return (
    <Section className="bg-ink py-6 sm:py-8 lg:py-10">
      <Container className="max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Outer Card */}
        <div className="relative overflow-hidden rounded-xl border border-line bg-card-deep p-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_16px_40px_rgba(0,0,0,0.12)] sm:p-10 lg:p-12">
          
          {/* Subtle Red Top Glow Accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

          {/* Grid Layout: Left Column (Title & Stats) | Right Column (Image) */}
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
          >
            {/* Left Column: Eyebrow, Title & Horizontal Stats Row */}
            <div className="space-y-8 lg:col-span-8">
              {/* Header Block */}
              <RevealPanel className="space-y-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-brand sm:text-sm">/</span>
                  <p className="text-xs font-bold tracking-wider text-brand sm:text-sm">
                    {t("eyebrow")}
                  </p>
                </div>
                <h2 className="text-3xl font-black tracking-tight text-heading sm:text-4xl lg:text-5xl">
                  {t("title")}
                </h2>
              </RevealPanel>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
                {items.slice(0, 4).map((item, index) => (
                  <RevealPanel
                    key={item.number}
                    delay={index * 80}
                    className={cn(
                      "relative flex flex-col justify-start",
                      index !== 0 && (isArabic ? "sm:pr-6 lg:pr-8" : "sm:pl-6 lg:pl-8")
                    )}
                  >
                    {/* Vertical Divider Line */}
                    {index !== 0 && (
                      <div
                        className={cn(
                          "hidden sm:block absolute inset-y-2 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent",
                          isArabic ? "right-0" : "left-0"
                        )}
                      />
                    )}

                    {/* Bright Red Stat Number */}
                    <h3 className="text-4xl font-black tracking-tight text-brand sm:text-4xl ">
                      {item.number}
                    </h3>

                    {/* Stat Description Label */}
                    <p className="mt-2 text-xs font-medium leading-relaxed text-body sm:text-sm">
                      {item.label}
                    </p>
                  </RevealPanel>
                ))}
              </div>
            </div>

            {/* Right Column: Dedicated Mechanic Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:col-span-4 lg:h-full lg:min-h-[320px]">
              <OptimizedImage
                src={images.about.statsBackground}
                alt={t("title")}
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="h-full w-full rounded-none border-0 bg-transparent shadow-none"
                imageClassName="h-full w-full object-cover object-center brightness-[0.75] contrast-[1.15]"
              />
              {/* Soft Gradient Overlay to blend seamlessly into the card border */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-t from-card-deep via-transparent to-transparent lg:bg-gradient-to-r",
                  isArabic
                    ? "lg:from-transparent lg:to-card-deep"
                    : "lg:from-card-deep lg:to-transparent"
                )}
              />
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}