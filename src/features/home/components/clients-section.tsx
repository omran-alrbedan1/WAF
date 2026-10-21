"use client";

import { useTranslations } from "next-intl";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";
import { RevealPanel } from "@/components/ui/reveal-panel";

const clientLogos = [
  { name: "Bin Laden Group", src: "/images/waf/clients/binladen.png" },
  { name: "NEOM", src: "/images/waf/clients/neom.png" },
  { name: "ROSHN", src: "/images/waf/clients/roshn.png" },
  { name: "NEMCO", src: "/images/waf/clients/nemco.png" },
  { name: "Brazilian Club", src: "/images/waf/clients/brazilian-club.png" },
  { name: "BRILLO", src: "/images/waf/clients/brillo.png" },
  { name: "King's", src: "/images/waf/clients/kings.png" },
  { name: "Leica", src: "/images/waf/clients/leica.png" },
  { name: "Daret Alqahwa", src: "/images/waf/clients/daret-alqahwa.png" },
  { name: "Aman", src: "/images/waf/clients/aman.png" },
  { name: "Kaffa Boom", src: "/images/waf/clients/kaffa.png" },
  { name: "Lilly", src: "/images/waf/clients/lilly.png" },
  { name: "Over Dose", src: "/images/waf/clients/overdose.png" },
  { name: "SAS", src: "/images/waf/clients/sas.png" },
  { name: "Nissan", src: "/images/waf/clients/nissan.png" },
  { name: "Do Chocolate", src: "/images/waf/clients/do-chocolate.png" },
  { name: "Hajj Security", src: "/images/waf/clients/hajj.png" },
  { name: "WAF client", src: "/images/waf/clients/logo6.png" },
  { name: "WAF client", src: "/images/waf/clients/logo7.png" },
  { name: "WAF client", src: "/images/waf/clients/logo8.png" },
  { name: "WAF client", src: "/images/waf/clients/logo9.png" },
  { name: "WAF client", src: "/images/waf/clients/logo10.png" },
  { name: "WAF client", src: "/images/waf/clients/logo11.png" },
  { name: "WAF client", src: "/images/waf/clients/logo13.png" },
  { name: "WAF client", src: "/images/waf/clients/logo15.png" },
  { name: "WAF client", src: "/images/waf/clients/logo16.png" },
  { name: "WAF client", src: "/images/waf/clients/logo17.png" },
  { name: "WAF client", src: "/images/waf/clients/logo19.png" },
  { name: "WAF client", src: "/images/waf/clients/logo20.png" },
  { name: "WAF client", src: "/images/waf/clients/logo21.png" },
  { name: "WAF client", src: "/images/waf/clients/logo22.png" },
  { name: "WAF client", src: "/images/waf/clients/logo23.png" },
  { name: "WAF client", src: "/images/waf/clients/logo24.png" },
  { name: "WAF client", src: "/images/waf/clients/logo25.png" },
  { name: "WAF client", src: "/images/waf/clients/logo26.png" },
  { name: "WAF client", src: "/images/waf/clients/logo27.png" },
  { name: "WAF client", src: "/images/waf/clients/logo33.png" },
  { name: "WAF client", src: "/images/waf/clients/logo44.png" },
];

export function ClientsSection() {
  const t = useTranslations("home.clients");
  const marquee = [...clientLogos, ...clientLogos];

  return (
    <Section className="relative overflow-hidden border-y border-line bg-[#0b1620] py-12 sm:py-16">
      <Container>
        <RevealPanel className="mb-10 flex flex-col items-end text-end">
          <h2 className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
            {t("eyebrow")}
          </h2>
          <span className="mt-3 block h-0.5 w-14 rounded-full bg-brand" />
          <p className="mt-4 text-sm font-medium text-white/80 sm:text-base">
            {t("title")}
          </p>
        </RevealPanel>
      </Container>

      <div
        dir="ltr"
        className="group relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="flex w-max animate-[clients-marquee_60s_linear_infinite] items-center gap-16 pe-16 group-hover:[animation-play-state:paused]">
          {marquee.map((client, index) => (
            <Image
              key={`${client.src}-${index}`}
              src={client.src}
              alt={client.name}
              width={160}
              height={80}
              unoptimized
              className="h-16 w-auto max-w-40 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 sm:h-20"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
