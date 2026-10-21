import "server-only";

import type { SiteLocale } from "@/config/site";

const dictionaries = {
  en: async () => ({
    about: (await import("@/messages/en/about.json")).default,
    common: (await import("@/messages/en/common.json")).default,
    contact: (await import("@/messages/en/contact.json")).default,
    forms: (await import("@/messages/en/forms.json")).default,
    home: (await import("@/messages/en/home.json")).default,
    serviceDetails: (await import("@/messages/en/service-details.json")).default,
    services: (await import("@/messages/en/services.json")).default,
  }),
  ar: async () => ({
    about: (await import("@/messages/ar/about.json")).default,
    common: (await import("@/messages/ar/common.json")).default,
    contact: (await import("@/messages/ar/contact.json")).default,
    forms: (await import("@/messages/ar/forms.json")).default,
    home: (await import("@/messages/ar/home.json")).default,
    serviceDetails: (await import("@/messages/ar/service-details.json")).default,
    services: (await import("@/messages/ar/services.json")).default,
  }),
} as const;

export async function getMessages(locale: SiteLocale) {
  return dictionaries[locale]();
}
