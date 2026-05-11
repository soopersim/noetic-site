"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [
  // Personalised AI Feedback
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 text-muted opacity-60">
      <circle cx="16" cy="11" r="6"/>
      <path d="M 8,28 Q 8,21 16,21 Q 24,21 24,28"/>
      <path d="M 22,7 Q 26,9 26,13 Q 26,17 22,19"/>
      <path d="M 23,9.5 Q 25,11 25,13 Q 25,15.5 23,17"/>
    </svg>
  ),
  // Brain Rot
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 text-muted opacity-60">
      <circle cx="16" cy="16" r="12"/>
      <circle cx="16" cy="16" r="7"/>
      <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" opacity="0.5"/>
      <line x1="16" y1="4" x2="16" y2="9"/>
      <line x1="16" y1="23" x2="16" y2="28"/>
      <line x1="4" y1="16" x2="9" y2="16"/>
      <line x1="23" y1="16" x2="28" y2="16"/>
    </svg>
  ),
  // Belief
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 text-muted opacity-60">
      <path d="M 6,8 L 26,8 L 26,24 L 6,24 Z"/>
      <path d="M 6,8 L 16,17 L 26,8"/>
      <line x1="6" y1="24" x2="13" y2="16"/>
      <line x1="26" y1="24" x2="19" y2="16"/>
    </svg>
  ),
  // Debate
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" className="h-8 w-8 text-muted opacity-60">
      <path d="M 4,8 L 18,8 L 18,18 L 10,18 L 6,22 L 6,18 L 4,18 Z"/>
      <path d="M 14,12 L 28,12 L 28,22 L 26,22 L 26,26 L 22,22 L 14,22 Z"/>
    </svg>
  ),
];

const cardKeys = ["feedback", "brainrot", "belief", "debate"] as const;

export default function WhyNoetic() {
  const t = useTranslations("whyNoetic");

  return (
    <section className="border-t border-[var(--line)] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
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

        <div className="grid gap-px border border-[var(--line)] sm:grid-cols-2">
          {cardKeys.map((key, i) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.07 }}
              className="bg-background p-8 hover:bg-[var(--surface)] transition-colors"
            >
              <div className="mb-5">{icons[i]}</div>
              <h3 className="text-base font-bold text-foreground">{t(`cards.${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(`cards.${key}.body`)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
