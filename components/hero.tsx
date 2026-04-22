"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {t("eyebrow")}
          </p>
          <h1 className="mt-6 text-[3.35rem] font-semibold tracking-[-0.065em] text-foreground sm:text-[4.5rem] lg:text-[5.7rem]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {t("subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(23,23,23,0.14)]"
            >
              {t("primary")}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-semibold text-foreground"
            >
              {t("secondary")}
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
          className="rounded-[2rem] border border-line bg-surface-strong p-6 shadow-[0_24px_80px_rgba(28,28,26,0.08)]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {t("panelLabel")}
          </p>
          <div className="space-y-6">
            <div className="rounded-[1.5rem] border border-line bg-white/80 p-4">
              <p className="text-sm font-semibold text-foreground">{t("panelTopicTitle")}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{t("panelTopicBody")}</p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-white/80 p-4">
              <p className="text-sm font-semibold text-foreground">{t("panelPracticeTitle")}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{t("panelPracticeBody")}</p>
            </div>
            <div className="rounded-[1.5rem] border border-line bg-accent-soft p-4">
              <p className="font-serif text-xl text-foreground">{t("panelReflection")}</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
