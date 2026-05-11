"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function IllustrationBlock() {
  const t = useTranslations("illustration");

  return (
    <section id="mission" className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Wide engraving */}
          <div className="relative overflow-hidden rounded-sm border border-[var(--line)]">
            <Image
              src="/images/engraving-wide.svg"
              alt="Classical figures engaged in philosophical dialogue"
              width={1200}
              height={480}
              className="h-auto w-full opacity-70"
              unoptimized
            />
          </div>

          {/* Caption */}
          <p className="mx-auto mt-6 max-w-lg text-center font-serif text-lg italic leading-relaxed text-muted">
            &ldquo;{t("caption")}&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
