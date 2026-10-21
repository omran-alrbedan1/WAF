export const siteConfig = {
  name: "WAF Business Services",
  arabicName: "واف لخدمات الأعمال",
  legalName: "WAF for Business Services",
  tagline: "من التصنيع إلى التركيب",
  companyLine: "شركة تنفيذ وتجهيز مشاريع",
  siteUrl: "https://waf-sa.com",
  foundedYear: 2018,
  contactEmail: "info@waf-sa.com",
  phone: "+966530063630",
  instagramUrl: "https://www.instagram.com/waf4adv1/",
  twitterUrl: "https://x.com/waf4adv1",
  linkedinUrl: "https://sa.linkedin.com/company/waf4adv1",
  mapsUrl: "https://maps.app.goo.gl/",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Riyadh%2C%20Saudi%20Arabia&output=embed",
  companyProfilePdf: "/WAF-Company-Profile.pdf",
  description:
    "WAF executes and fits out commercial projects, exhibitions, and events — from manufacturing to installation and handover.",
  arabicDescription:
    "شركة تنفيذ وتجهيز مشاريع. ننفّذ ونجهّز المشاريع التجارية، المعارض، والفعاليات من التصنيع إلى التركيب.",
  localeCookie: "waf-locale",
  locales: ["ar", "en"] as const,
  defaultLocale: "ar" as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];
