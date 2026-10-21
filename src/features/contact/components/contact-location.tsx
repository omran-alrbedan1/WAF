"use client";

import { ExternalLink, MapPin, Navigation } from "lucide-react";
import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface ContactLocationProps {
  className?: string;
}

export function ContactLocation({ className }: ContactLocationProps) {
  const t = useTranslations("contact.location");

  return (
    <section className={cn("relative isolate overflow-hidden border-t border-line bg-page-surface py-14 sm:py-20", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-40 end-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[130px]" />
        <div className="home-grid-pattern absolute inset-0 opacity-15 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <Container>
        <RevealPanel className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">
            <span className="h-px w-10 bg-brand" />
            <Navigation className="h-4 w-4" />
            <span className="h-px w-10 bg-brand" />
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-tight text-heading sm:text-4xl lg:text-5xl">{t("title")}</h2>
        </RevealPanel>

        <RevealPanel delay={120} className="mt-10 lg:mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-card-deep shadow-2xl">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
              <iframe
                src={siteConfig.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                title={t("title")}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>

            <div className="relative p-4 sm:p-6 lg:absolute lg:bottom-8 lg:start-8 lg:max-w-sm lg:p-0">
              <div className="rounded-[1.5rem] border border-line bg-card-deep/95 p-6 shadow-xl backdrop-blur-md lg:p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-contrast shadow-[0_10px_28px_rgba(34,197,94,0.35)]">
                  <MapPin className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-black text-heading">{t("title")}</h3>
                <p className="mt-2 text-base leading-7 text-body">{t("address")}</p>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-contrast shadow-[0_14px_36px_rgba(34,197,94,0.28)] transition-colors hover:bg-brand-strong sm:w-auto"
                >
                  {t("buttonLabel")}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </RevealPanel>
      </Container>
    </section>
  );
}
