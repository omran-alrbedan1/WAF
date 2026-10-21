import { Clock3, Headset, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { useLocale, useMessages, useTranslations } from "next-intl";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/layout/container";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { waLink } from "@/lib/whatsapp";

type ContactHubItem = {
  kind: "phone" | "location" | "hours" | "support";
  note: string;
  title: string;
  value: string;
};

const iconMap = {
  hours: Clock3,
  location: MapPin,
  phone: PhoneCall,
  support: Headset,
} as const;

export function ContactHubSection() {
  const t = useTranslations("contact.hub");
  const locale = useLocale();
  const messages = useMessages() as unknown as { contact: { hub: { items: ContactHubItem[] } } };
  const items = messages.contact.hub.items;

  return (
    <section className="relative mt-12 bg-page-deep py-14 sm:pb-20">
      <Container className="relative z-10 sm:-mt-12 lg:-mt-16">
        <RevealPanel>
          <div className="grid overflow-hidden rounded-[2rem] border border-line bg-card-deep shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#052e16] via-[#14532d] to-brand-strong p-8 text-white sm:p-10 lg:p-12">
              <span className="pointer-events-none absolute -bottom-24 -end-24 -z-10 h-72 w-72 rounded-full border border-white/10" />
              <span className="pointer-events-none absolute -bottom-12 -end-12 -z-10 h-48 w-48 rounded-full border border-white/15" />
              <span className="pointer-events-none absolute -top-20 -start-20 -z-10 h-56 w-56 rounded-full bg-white/5" />

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">{t("infoTitle")}</h2>
              <span className="mt-4 block h-1 w-12 rounded-full bg-white/80" />

              <ul className="mt-10 space-y-7">
                {items.map((item) => {
                  const Icon = iconMap[item.kind];
                  const href = item.kind === "phone" ? `tel:${item.value.replace(/\s/g, "")}` : undefined;
                  const Wrapper = href ? "a" : "div";

                  return (
                    <li key={item.title}>
                      <Wrapper {...(href ? { href } : {})} className="group flex items-center gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25 transition-colors group-hover:bg-white group-hover:text-[#14532d]">
                          <Icon className="size-5" strokeWidth={1.8} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-bold text-white/70">{item.title}</span>
                          <span className="mt-0.5 block break-words text-base font-bold leading-7 sm:text-lg">{item.value}</span>
                          {item.note ? <span className="block text-sm text-white/70">{item.note}</span> : null}
                        </span>
                      </Wrapper>
                    </li>
                  );
                })}
              </ul>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#14532d] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                {locale === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
              </a>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </RevealPanel>
      </Container>
    </section>
  );
}
