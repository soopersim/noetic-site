"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ease = "easeOut" as const;

function FadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      {/* Left engraving figure */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.2 }}
        className="pointer-events-none absolute bottom-0 left-0 hidden w-[180px] select-none lg:block xl:w-[220px]"
        aria-hidden="true"
      >
        <Image
          src="/images/engraving-left.svg"
          alt=""
          width={220}
          height={528}
          className="h-auto w-full opacity-40"
          unoptimized
          priority
        />
      </motion.div>

      {/* Right engraving figure */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.3 }}
        className="pointer-events-none absolute bottom-0 right-0 hidden w-[180px] select-none lg:block xl:w-[220px]"
        aria-hidden="true"
      >
        <Image
          src="/images/engraving-right.svg"
          alt=""
          width={220}
          height={528}
          className="h-auto w-full opacity-40"
          unoptimized
          priority
        />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeUp delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            For the next generation of thinkers
          </span>
        </FadeUp>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-8 text-[3.5rem] font-bold leading-[0.93] tracking-[-0.04em] text-foreground sm:text-[5rem] lg:text-[6.5rem]"
        >
          Think clearly.
          <br />
          Argue better.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.22 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          Noetic is an AI-moderated space where students share beliefs, debate
          peers, and build the reasoning skills that last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.32 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={`/${currentLocale}#waitlist`}
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover transition"
          >
            Join Waitlist
          </a>
          <a
            href={`/${currentLocale}#how-it-works`}
            className="rounded-full border border-[var(--line-strong)] px-8 py-3.5 text-sm font-semibold text-foreground hover:border-foreground transition"
          >
            How it works
          </a>
        </motion.div>
      </div>

      {/* Thin rule at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-[var(--line)]"
        aria-hidden="true"
      />
    </section>
  );
}
