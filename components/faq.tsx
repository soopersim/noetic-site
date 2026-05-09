"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is Noetic?",
    a: "Noetic is an AI-moderated platform for critical thinking and debate. You share a belief or argument, the AI breaks it apart, you debate it with a peer — and over time you build measurably stronger reasoning skills.",
  },
  {
    q: "Who is it for?",
    a: "Primarily students and young thinkers aged 14–25 who want to think more clearly and argue more effectively. Educators use it to structure in-class debate and track student reasoning growth.",
  },
  {
    q: "Is Noetic free?",
    a: "We'll offer a free tier with core features. A paid plan will unlock unlimited debates, detailed feedback history, and educator tools. Early waitlist members get extended free access at launch.",
  },
  {
    q: "Do I need debate experience?",
    a: "None at all. Noetic is built for people who've never debated formally. The AI moderator guides the structure and the feedback is always constructive, not competitive.",
  },
  {
    q: "How is Noetic different from social media?",
    a: "Social media optimises for reaction and outrage. Noetic optimises for understanding. There are no likes, no follower counts, no viral loops — just structured dialogue and honest feedback.",
  },
  {
    q: "How does the AI moderation work?",
    a: "The AI doesn't take sides. It listens, identifies logical gaps or unsupported claims, asks clarifying questions, and ensures both speakers stay on topic. Think of it as a referee with a philosophy degree.",
  },
  {
    q: "What happens to my data?",
    a: "Your arguments and debates are used only to generate your feedback. We never sell your data, and you can delete your account and all associated data at any time.",
  },
  {
    q: "When does Noetic launch?",
    a: "We're in closed development with a small group of students right now. Join the waitlist to be among the first to access the platform when we open wider.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

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
            Questions
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
            Frequently asked.
          </h2>
        </motion.div>

        <dl className="divide-y divide-[var(--line)]">
          {faqs.map((faq, i) => {
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
