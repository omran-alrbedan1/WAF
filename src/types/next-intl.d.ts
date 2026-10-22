import type about from "@/messages/en/about.json";
import type common from "@/messages/en/common.json";
import type contact from "@/messages/en/contact.json";
import type execution from "@/messages/en/execution.json";
import type forms from "@/messages/en/forms.json";
import type home from "@/messages/en/home.json";
import type serviceDetails from "@/messages/en/service-details.json";
import type services from "@/messages/en/services.json";
import type works from "@/messages/en/works.json";
import type { SiteLocale } from "@/config/site";

declare module "next-intl" {
  interface AppConfig {
    Locale: SiteLocale;
    Messages: {
      about: typeof about;
      common: typeof common;
      contact: typeof contact;
      execution: typeof execution;
      forms: typeof forms;
      home: typeof home;
      serviceDetails: typeof serviceDetails;
      services: typeof services;
      works: typeof works;
    };
  }
}
