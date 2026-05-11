"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { n: "01", title: t("steps.one.title"), body: t("steps.one.body") },
    { n: "02", title: t("steps.two.title"), body: t("steps.two.body") },
    { n: "03", title: t("steps.three.title"), body: t("steps.three.body") },
    { n: "04", title: t("steps.four.title"), body: t("steps.four.body") },
  ];

  return (
    <section id="how-it-works" className="border-t border-[var(--line)] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left: engraving */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[280px]">
              <Image
                src="/images/engraving-column.svg"
                alt="Classical column with a seated figure"
                width={280}
                height={373}
                className="h-auto w-full opacity-65"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Right: steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                {t("label")}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
                {t("title")}
              </h2>
            </motion.div>

            <ol className="space-y-10">
              {steps.map((step, i) => (
                <motion.li
                  key={step.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className="flex gap-6"
                >
                  <span className="mt-0.5 shrink-0 font-serif text-2xl italic text-muted opacity-50">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
