import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { type SiteLocale } from "@/config/site";
import { ServicesShowcaseCta } from "@/features/services/components";
import { WorksGallery, WorksHero } from "@/features/works/components";
import { isValidLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSeoMessages } from "@/lib/seo-messages";
import { buildWebPageSchema } from "@/lib/seo";

type WorksPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: WorksPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "works" });
  const seo = await getSeoMessages(locale);

  return buildPageMetadata({
    locale,
    path: "/works",
    title: t("metadata.title"),
    description: t("metadata.description"),
    classification: seo.classification,
    openGraphAlt: seo.ogImageAlt,
    keywords: [...seo.keywords.default, ...seo.keywords.routes.works],
  });
}

export default async function WorksPage({ params }: WorksPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as SiteLocale;
  const t = await getTranslations({ locale: typedLocale, namespace: "works" });
  const home = await getTranslations({ locale: typedLocale, namespace: "home.works" });
  const count = (home.raw("items") as unknown[]).length;

  return (
    <div className="text-heading">
      <JsonLd
        data={buildWebPageSchema({
          locale: typedLocale,
          path: "/works",
          title: t("metadata.title"),
          description: t("metadata.description"),
        })}
      />
      <WorksHero
        count={count}
        hero={{
          description: t("hero.description"),
          eyebrow: t("hero.eyebrow"),
          imageAlt: t("hero.imageAlt"),
          primaryCta: t("hero.primaryCta"),
          projectsLabel: t("hero.projectsLabel"),
          secondaryCta: t("hero.secondaryCta"),
          title: t("hero.title"),
        }}
        locale={typedLocale}
      />
      <WorksGallery />
      <ServicesShowcaseCta />
    </div>
  );
}
