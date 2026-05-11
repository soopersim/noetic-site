"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");
  const [open, setOpen] = useState<number | null>(null);

  const items = t.raw("items") as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="border-t border-[var(--line)] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            {t("label")}
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
            {t("title")}
          </h2>
        </motion.div>

        <dl className="divide-y divide-[var(--line)]">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-muted">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted">
                        {faq.a}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
