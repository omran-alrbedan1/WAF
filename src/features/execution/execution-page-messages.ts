import { type SiteLocale } from "@/config/site";
import { type ServicesMessages } from "@/features/services/services-page-messages";

export async function getExecutionMessages(locale: SiteLocale) {
  return locale === "ar"
    ? ((await import("@/messages/ar/execution.json"))
        .default as ServicesMessages)
    : ((await import("@/messages/en/execution.json"))
        .default as ServicesMessages);
}
