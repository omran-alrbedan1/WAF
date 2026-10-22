"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { siteConfig, type SiteLocale } from "@/config/site";

export function LanguageSwitcher() {
  const locale = useLocale() as SiteLocale;
  const t = useTranslations("common.languageSwitcher");
  const pathname = usePathname();

  const targetLocale =
    siteConfig.locales.find((entry) => entry !== locale) ??
    siteConfig.defaultLocale;
  const localizedPathname = pathname.startsWith(`/${locale}`)
    ? `/${targetLocale}${pathname.slice(locale.length + 1)}`
    : `/${targetLocale}`;

  return (
    <Link
      href={localizedPathname || `/${targetLocale}`}
      hrefLang={targetLocale}
      aria-label={t("label")}
      className="flex h-11 shrink-0 items-center gap-2 rounded-md border border-line bg-chip px-3 text-xs uppercase tracking-[0.16em] text-body transition-colors duration-300 hover:border-brand hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
    >
      <Languages className="h-4 w-4" aria-hidden />
      <span>{t(targetLocale)}</span>
    </Link>
  );
}
