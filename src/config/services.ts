import { images } from "@/constants/image";

export const serviceCatalog = [
  {
    slug: "web-development",
    imageSrc: images.services.digital.webDevelopment,
    featureImageSrc: images.services.digital.webDevelopment,
    detailImageSrc: images.serviceDetails.digital.webDevelopment,
  },
  {
    slug: "mobile-development",
    imageSrc: images.services.digital.mobileDevelopment,
    featureImageSrc: images.services.digital.mobileDevelopment,
    detailImageSrc: images.serviceDetails.digital.mobileDevelopment,
  },
  {
    slug: "custom-software",
    imageSrc: images.services.digital.customSoftware,
    featureImageSrc: images.services.digital.customSoftware,
    detailImageSrc: images.serviceDetails.digital.customSoftware,
  },
  {
    slug: "ecommerce",
    imageSrc: images.services.digital.ecommerce,
    featureImageSrc: images.services.digital.ecommerce,
    detailImageSrc: images.serviceDetails.digital.ecommerce,
  },
  {
    slug: "ai-automation",
    imageSrc: images.services.digital.aiAutomation,
    featureImageSrc: images.services.digital.aiAutomation,
    detailImageSrc: images.serviceDetails.digital.aiAutomation,
  },
  {
    slug: "digital-marketing",
    imageSrc: images.services.digital.digitalMarketing,
    featureImageSrc: images.services.digital.digitalMarketing,
    detailImageSrc: images.serviceDetails.digital.digitalMarketing,
  },
  {
    slug: "seo",
    imageSrc: images.services.digital.seoOptimization,
    featureImageSrc: images.services.digital.seoOptimization,
    detailImageSrc: images.serviceDetails.digital.seoOptimization,
  },
  {
    slug: "ui-ux-design",
    imageSrc: images.services.digital.uiUxDesign,
    featureImageSrc: images.services.digital.uiUxDesign,
    detailImageSrc: images.serviceDetails.digital.uiUxDesign,
  },
  {
    slug: "branding",
    imageSrc: images.services.digital.brandingDesign,
    featureImageSrc: images.services.digital.brandingDesign,
    detailImageSrc: images.serviceDetails.digital.brandingDesign,
  },
  {
    slug: "print-signage",
    imageSrc: images.services.digital.printSignage,
    featureImageSrc: images.services.digital.printSignage,
    detailImageSrc: images.serviceDetails.digital.printSignage,
  },
  {
    slug: "creative-sculptures",
    imageSrc: images.services.fabricationWorkshop,
    featureImageSrc: images.services.sculptureInstall,
    detailImageSrc: images.serviceDetails.fabricationWorkshop,
  },
  {
    slug: "graffiti-murals",
    imageSrc: images.services.muralArt,
    featureImageSrc: images.services.muralArt,
    detailImageSrc: images.serviceDetails.muralArt,
  },
  {
    slug: "signage-branding",
    imageSrc: images.services.signageInstall,
    featureImageSrc: images.services.signageInstall,
    detailImageSrc: images.serviceDetails.signageInstall,
  },
  {
    slug: "event-sites",
    imageSrc: images.services.eventSite,
    featureImageSrc: images.services.eventSite,
    detailImageSrc: images.serviceDetails.eventSite,
  },
  {
    slug: "large-format-printing",
    imageSrc: images.services.largeFormatPrint,
    featureImageSrc: images.services.largeFormatPrint,
    detailImageSrc: images.serviceDetails.largeFormatPrint,
  },
  {
    slug: "fabrication-installation",
    imageSrc: images.services.fabricationWorkshop,
    featureImageSrc: images.services.exhibitionBooth,
    detailImageSrc: images.serviceDetails.exhibitionBooth,
  },
  {
    slug: "packaging-giveaways",
    imageSrc: images.services.packaging,
    featureImageSrc: images.services.packaging,
    detailImageSrc: images.serviceDetails.packaging,
  },
] as const;

export type ServiceSlug = (typeof serviceCatalog)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}
