"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const brands = [
  {
    name: "Aeon",
    href: "https://aeon.co",
    label: "Aeon magazine",
    wordmark: (
      <span className="text-[1.15rem] font-semibold tracking-[0.03em]">
        Aeon
      </span>
    ),
  },
  {
    name: "The School of Life",
    href: "https://www.theschooloflife.com",
    label: "The School of Life",
    wordmark: (
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] leading-[1.35]">
        The School
        <br />
        of Life
      </span>
    ),
  },
  {
    name: "Big Think",
    href: "https://bigthink.com",
    label: "Big Think",
    wordmark: (
      <span className="text-[1.25rem] font-bold tracking-[-0.02em]">
        Big Think
      </span>
    ),
  },
  {
    name: "Institute of Art and Ideas",
    href: "https://iai.tv",
    label: "Institute of Art and Ideas",
    wordmark: (
      <span className="flex items-center gap-1.5">
        {/* IAI asterisk mark — six-line star */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <line x1="7" y1="0.5" x2="7" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="0.93" y1="3.5" x2="13.07" y2="10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="0.93" y1="10.5" x2="13.07" y2="3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="text-[1.15rem] font-semibold lowercase tracking-[0.05em]">
          iai
        </span>
      </span>
    ),
  },
  {
    name: "Khan Academy",
    href: "https://www.khanacademy.org",
    label: "Khan Academy",
    wordmark: (
      <span className="text-[1.1rem] font-medium tracking-[-0.01em]">
        Khan Academy
      </span>
    ),
  },
  {
    name: "Royal Institute of Philosophy",
    href: "https://www.royalinstitutephilosophy.org",
    label: "Royal Institute of Philosophy",
    wordmark: (
      <span className="text-[0.72rem] font-medium uppercase tracking-[0.1em] leading-[1.35] text-center">
        Royal Institute
        <br />
        of Philosophy
      </span>
    ),
  },
];

export default function CompanyOfThinkers() {
  const t = useTranslations("universities");

  return (
    <section className="border-t border-[var(--line)] px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-10 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            {t("label")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-14 lg:gap-x-16">
            {brands.map((brand, i) => (
              <motion.a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={brand.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-center text-foreground opacity-[0.62] transition-[opacity,color] duration-200 ease-out hover:opacity-100 hover:text-accent"
              >
                {brand.wordmark}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
