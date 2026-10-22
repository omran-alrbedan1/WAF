import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { type SiteLocale } from "@/config/site";
import { getExecutionMessages } from "@/features/execution/execution-page-messages";
import {
  ServicesShowcaseCta,
  ServicesShowcaseGroups,
  ServicesShowcaseHero,
} from "@/features/services/components";
import { isValidLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/page-metadata";
import { getSeoMessages } from "@/lib/seo-messages";
import { buildWebPageSchema } from "@/lib/seo";

type ExecutionPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ExecutionPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "execution" });
  const seo = await getSeoMessages(locale);

  return buildPageMetadata({
    locale,
    path: "/execution",
    title: t("metadata.title"),
    description: t("metadata.description"),
    classification: seo.classification,
    openGraphAlt: seo.ogImageAlt,
    keywords: [...seo.keywords.default, ...seo.keywords.routes.home],
  });
}

export default async function ExecutionPage({ params }: ExecutionPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const typedLocale = locale as SiteLocale;
  const messages = await getExecutionMessages(typedLocale);
  const { hero, catalog, metadata } = messages;

  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          locale: typedLocale,
          path: "/execution",
          title: metadata.title,
          description: metadata.description,
        })}
      />

      <div className="text-heading">
        <ServicesShowcaseHero
          hero={hero}
          locale={typedLocale}
          servicesCount={catalog.items.length}
        />
        <ServicesShowcaseGroups catalog={catalog} locale={typedLocale} />
        <ServicesShowcaseCta namespace="execution.cta" />
      </div>
    </>
  );
}
