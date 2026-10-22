"use client";

import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SiteLogo } from "@/components/layout/site-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  const locale = useLocale();
  const t = useTranslations("common");

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-xl">
      <Container className="flex flex-row-reverse items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <DesktopNav />
        <SiteLogo
          href={`/${locale}`}
          homeLabel={t("brand.homeLabel")}
          name={t("brand.name")}
          className="shrink-0"
        />
        <MobileMenu />
      </Container>
    </header>
  );
}
