"use client";

import { motion } from "framer-motion";

const metrics = [
  { label: "Clarity", description: "Easy to follow" },
  { label: "Logic", description: "Reasons connect" },
  { label: "Structure", description: "Well organized" },
  { label: "Rebuttal", description: "Strong pushback" },
  { label: "Voice", description: "Sounds confident" },
  { label: "Confidence", description: "Assured delivery" },
];

export default function FeedbackRubric() {
  return (
    <section id="rubric" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Feedback System</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">Get sharper feedback</h2>
          <p className="mt-4 text-lg text-gray-300">
            Real-time scores that help you improve every aspect of your speaking.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 transition group"
            >
              <p className="text-sm font-semibold text-white uppercase tracking-wide">{metric.label}</p>
              <p className="mt-2 text-sm text-gray-400">{metric.description}</p>

              {/* Animated progress bar */}
              <div className="mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${60 + Math.random() * 30}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.08 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
