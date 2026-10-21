"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { getNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const locale = useLocale();
  const t = useTranslations("common.navigation");
  const pathname = usePathname();
  const links = getNavigation(locale);

  return (
    <nav
      aria-label={t("ariaLabel")}
      className="hidden items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-body md:flex"
    >
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex min-h-11 items-center border-b border-transparent px-3 py-2 transition hover:border-brand-strong/60 hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong",
              isActive && "border-brand text-heading"
            )}
          >
            {t(link.labelKey)}
          </Link>
        );
      })}
    </nav>
  );
}
