import type { SiteLocale } from "@/config/site";

export function getNavigation(locale: SiteLocale) {
  return [
    { href: `/${locale}`, labelKey: "home" },
    { href: `/${locale}/services`, labelKey: "services" },
    { href: `/${locale}#works`, labelKey: "works" },
    { href: `/${locale}/about`, labelKey: "about" },
    { href: `/${locale}/contact`, labelKey: "contact" },
  ] as const;
}
