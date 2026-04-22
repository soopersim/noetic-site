"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const logos = [
  { src: "/logos/university-of-westminster-logo.png", alt: "University of Westminster" },
  { src: "/logos/university-of-toronto-logo.png", alt: "University of Toronto" },
  { src: "/logos/amazingtalker-logo.jpg", alt: "AmazingTalker" },
  { src: "/logos/sparcus-technologies-logo.png", alt: "Sparcus Technologies" },
  { src: "/logos/university-of-westminster-logo.png", alt: "University of Westminster repeat" },
  { src: "/logos/university-of-toronto-logo.png", alt: "University of Toronto repeat" },
  { src: "/logos/amazingtalker-logo.jpg", alt: "AmazingTalker repeat" },
  { src: "/logos/sparcus-technologies-logo.png", alt: "Sparcus Technologies repeat" },
];

export default function AssociationsSlider() {
  const t = useTranslations("associations");

  return (
    <section className="border-y border-black/5 py-8">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {t("label")}
          </p>
          <p className="max-w-2xl text-sm leading-6 text-muted">{t("body")}</p>
        </div>

        <motion.div
          className="mt-8 flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex min-w-[260px] items-center justify-center rounded-[1.5rem] border border-line bg-white/75 px-10 py-6 opacity-90 grayscale"
            >
              <Image src={logo.src} alt={logo.alt} width={190} height={60} className="h-12 w-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
