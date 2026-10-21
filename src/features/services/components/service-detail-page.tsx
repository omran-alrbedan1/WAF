import { type ServiceSlug } from "@/config/services";
import {
  getServiceVisualVariant,
  type ServiceDetailEntry,
  type ServiceDetailMessages,
} from "@/features/services/service-detail-content";

import { ServiceDetailCta } from "./service-detail-cta";
import { ServiceDetailFeatureStories } from "./service-detail-feature-stories";
import { ServiceDetailHero } from "./service-detail-hero";
import { ServiceDetailProcess } from "./service-detail-process";

type ServiceDetailPageProps = {
  entry: ServiceDetailEntry;
  heroImageSrc: string;
  locale: "ar" | "en";
  messages: ServiceDetailMessages;
  slug: ServiceSlug;
};

export function ServiceDetailPage({ entry, heroImageSrc, locale, messages, slug }: ServiceDetailPageProps) {
  const variant = getServiceVisualVariant(slug);
  const secondaryHref = `/${locale}${messages.shared.secondaryCtaPath}`;

  return (
    <div className="text-heading">
      <ServiceDetailHero
        entry={entry}
        eyebrow={messages.shared.eyebrow}
        heroImageSrc={heroImageSrc}
        locale={locale}
        primaryCtaLabel={messages.cta.primaryLabel}
        secondaryCtaHref={secondaryHref}
        secondaryCtaLabel={messages.shared.secondaryCtaLabel}
        variant={variant}
      />
      <ServiceDetailProcess
        description={entry.process.description}
        eyebrow={messages.shared.processEyebrow}
        items={entry.process.items}
        title={entry.process.title}
      />
      <ServiceDetailFeatureStories items={entry.featureItems} variant={variant} />
      <ServiceDetailCta
        entry={entry}
        eyebrow={messages.shared.eyebrow}
        imageSrc={heroImageSrc}
        locale={locale}
        primaryLabel={messages.cta.primaryLabel}
        secondaryHref={secondaryHref}
        secondaryLabel={messages.cta.secondaryLabel}
        variant={variant}
      />
    </div>
  );
}
