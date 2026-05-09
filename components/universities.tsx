"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const universities = [
  { name: "Harvard University", abbr: "Harvard" },
  { name: "University of Oxford", abbr: "Oxford" },
  { name: "Stanford University", abbr: "Stanford" },
  { name: "Massachusetts Institute of Technology", abbr: "MIT" },
  { name: "University of Cambridge", abbr: "Cambridge" },
];

export default function Universities() {
  return (
    <section className="border-t border-[var(--line)] px-6 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
            Aspirational — we&apos;re building Noetic with these students in mind
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {universities.map((uni, i) => (
              <motion.div
                key={uni.abbr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center"
              >
                <span
                  className="text-base font-bold tracking-[-0.02em] text-muted opacity-40"
                  aria-label={uni.name}
                >
                  {uni.abbr}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
