import { images } from "@/constants/image";

export type ServiceVisualVariant =
  | "fabrication"
  | "art"
  | "signage"
  | "events"
  | "printing"
  | "packaging";

export type ServiceDetailProcessItem = {
  body: string;
  title: string;
};

export type ServiceDetailFeatureItem = {
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
};

export type ServiceDetailEntry = {
  featureItems: ServiceDetailFeatureItem[];
  hero: {
    description: string;
    imageAlt: string;
    title: string;
  };
  metadata: {
    description: string;
    title: string;
  };
  process: {
    description: string;
    items: ServiceDetailProcessItem[];
    title: string;
  };
};

export type ServiceDetailMessages = {
  cta: {
    primaryLabel: string;
    secondaryLabel: string;
  };
  entries: Record<string, ServiceDetailEntry>;
  shared: {
    eyebrow: string;
    processEyebrow: string;
    processLinkLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaPath: string;
  };
};

const variantBySlug: Record<string, ServiceVisualVariant> = {
  "creative-sculptures": "fabrication",
  "graffiti-murals": "art",
  "signage-branding": "signage",
  "event-sites": "events",
  "large-format-printing": "printing",
  "fabrication-installation": "fabrication",
  "packaging-giveaways": "packaging",
};

const detailImageByPath: Record<string, string> = {
  "/images/waf/service-details/fabrication-workshop.png":
    images.serviceDetails.fabricationWorkshop,
  "/images/waf/service-details/mural-art.png": images.serviceDetails.muralArt,
  "/images/waf/service-details/signage-install.png":
    images.serviceDetails.signageInstall,
  "/images/waf/service-details/event-site.png": images.serviceDetails.eventSite,
  "/images/waf/service-details/large-format-print.png":
    images.serviceDetails.largeFormatPrint,
  "/images/waf/service-details/exhibition-booth.png":
    images.serviceDetails.exhibitionBooth,
  "/images/waf/service-details/packaging.png": images.serviceDetails.packaging,
};

export function getServiceVisualVariant(slug: string): ServiceVisualVariant {
  return variantBySlug[slug] ?? "fabrication";
}

export function resolveServiceDetailImage(src: string) {
  return detailImageByPath[src] ?? src;
}
