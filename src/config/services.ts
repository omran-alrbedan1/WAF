import { images } from "@/constants/image";

export const serviceCatalog = [
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
