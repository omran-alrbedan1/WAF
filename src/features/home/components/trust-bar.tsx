"use client";

import { useMessages, useTranslations } from "next-intl";
import { MapPin, Layers, Receipt, Wrench, type LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";

const icons: Record<string, LucideIcon> = {
  wrench: Wrench,
  pin: MapPin,
  layers: Layers,
  receipt: Receipt,
};

type HomeMessages = {
  home: { trustBar: { items: { icon: string; label: string }[] } };
};

export function TrustBar() {
  useTranslations("home.trustBar");
  const messages = useMessages() as HomeMessages;
  const items = messages.home.trustBar.items;

  return (
    <div className="border-b border-line bg-page-surface">
      <Container className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon] ?? Layers;
          return (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-bold leading-6 text-body-strong">
                {item.label}
              </span>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
