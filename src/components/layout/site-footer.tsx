import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, Clock3, Home, Mail, MapPin, Phone } from "lucide-react";

import { images } from "@/constants/image";
import { Container } from "@/components/layout/container";

export function SiteFooter() {
  const locale = useLocale();
  const t = useTranslations("common");
  const contactItems = t.raw("footer.contact.items") as Array<{
    href?: string;
    kind: "phone" | "email" | "location" | "hours" | "instagram";
    label: string;
    value: string;
  }>;

  const quickLinks = [
    { label: t("navigation.home"), href: `/${locale}` },
    { label: t("navigation.services"), href: `/${locale}/services` },
    { label: t("navigation.about"), href: `/${locale}/about` },
    { label: t("navigation.contact"), href: `/${locale}/contact` },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-brand/20 bg-page-deep text-heading">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 -left-32 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex items-center justify-center">
          <div className="h-px flex-1 bg-gradient-to-l from-brand/70 to-transparent" />
          <div className="mx-6 flex h-12 w-20"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-brand/70 to-transparent" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.8fr] lg:gap-14">
          <div className="text-right">
            <Link
              href={`/${locale}`}
              aria-label={t("brand.homeLabel")}
              className="group inline-block"
            >
              <Image
                src={images.brand.logoLight}
                alt="WAF Business Services"
                width={730}
                height={306}
                priority
                className="h-auto w-[240px] object-contain dark:hidden sm:w-[220px] lg:w-[300px]"
              />
              <Image
                src={images.brand.logoDark}
                alt=""
                aria-hidden="true"
                width={730}
                height={306}
                priority
                className="hidden h-auto w-[240px] object-contain dark:block sm:w-[220px] lg:w-[300px]"
              />
            </Link>

            <p className="mt-7 max-w-md text-base leading-8 text-body">
              {t("footer.description")}
            </p>

            <div className="mt-7 flex items-center justify-start gap-3">
              <span className="text-sm font-black tracking-[0.25em] text-brand">
                {"///"}
              </span>
              <div className="h-px w-32 bg-brand/60" />
            </div>

            <div className="mt-7 flex justify-start gap-3">
              <a
                href={t("footer.social.instagramHref")}
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.social.instagramLabel")}
                className="group flex h-11 w-11 items-center justify-center border border-line bg-chip text-body transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <Link
                href={`/${locale}`}
                aria-label={t("brand.homeLabel")}
                className="group flex h-11 w-11 items-center justify-center border border-line bg-chip text-body transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
              >
                <Home className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <FooterHeading>{t("footer.contactTitle")}</FooterHeading>

            <div className="mt-8 space-y-0">
              {contactItems.map((item) => (
                <ContactItem
                  key={`${item.kind}-${item.label}`}
                  icon={getContactIcon(item.kind)}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </div>
          </div>

          <div>
            <FooterHeading>{t("footer.quickLinksTitle")}</FooterHeading>

            <nav className="mt-8">
              <ul className="divide-y divide-line">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center justify-between py-3 text-base text-body transition-colors duration-300 hover:text-heading"
                    >
                      <span>{link.label}</span>
                      <ChevronLeft className="h-4 w-4 text-brand opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
            <p className="text-faint">{t("footer.copyright")}</p>

            <div className="flex flex-col cursor-pointer items-center gap-3 text-center sm:flex-row sm:gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
                {t("footer.poweredBy")}
              </span>
              <Link
                href={"https://futxtech.com/en/home"}
                className="text-sm font-bold text-body-strong transition-colors hover:text-heading"
              >
                {t("footer.poweredByAlt")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function getContactIcon(kind: "phone" | "email" | "location" | "hours" | "instagram") {
  switch (kind) {
    case "phone":
      return <Phone className="h-5 w-5" />;
    case "email":
      return <Mail className="h-5 w-5" />;
    case "location":
      return <MapPin className="h-5 w-5" />;
    case "hours":
      return <Clock3 className="h-5 w-5" />;
    case "instagram":
      return <InstagramIcon className="h-5 w-5" />;
  }
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" />
    </svg>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto">
      <h2 className="text-xl font-bold text-heading">{children}</h2>
      <div className="mt-4 flex items-center gap-2 ltr:justify-end rtl:justify-start">
        <span className="text-xs font-black tracking-[0.2em] text-brand">
          {"///"}
        </span>
        <div className="h-[2px] w-12 bg-brand" />
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4 border-b border-line py-2">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/[0.06] text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-faint">{label}</p>
        <p className="mt-1 break-words whitespace-pre-line text-sm leading-6 text-body-strong transition-colors group-hover:text-heading">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}
