"use client";

import { useState } from "react";
import { useMessages, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { waLink } from "@/lib/whatsapp";

type HomeMessages = {
  home: { faq: { items: { question: string; answer: string }[] } };
};

export function FaqSection() {
  const t = useTranslations("home.faq");
  const messages = useMessages() as HomeMessages;
  const items = messages.home.faq.items;
  const [open, setOpen] = useState(0);

  return (
    <Section className="bg-page-deep py-16 sm:py-24">
      <Container className="max-w-3xl">
        <RevealPanel className="text-center">
          <h2 className="text-3xl font-black tracking-[-0.02em] text-heading sm:text-4xl">
            {t("title")}
          </h2>
        </RevealPanel>

        <div className="mt-10 space-y-3 ">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <RevealPanel key={item.question} delay={index * 40}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-brand/50 bg-page-surface shadow-[0_8px_30px_rgba(34,197,94,0.08)]"
                      : "border-line bg-page-surface hover:border-brand/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-heading sm:text-base">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen ? "bg-brand text-white" : "bg-brand/10 text-brand"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-body">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealPanel>
            );
          })}
        </div>

        <RevealPanel delay={300} className="mt-8 text-center">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-md bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
          >
            {t("cta")}
          </a>
        </RevealPanel>
      </Container>
    </Section>
  );
}
