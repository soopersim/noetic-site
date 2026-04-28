"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const topicOptions = [
  "Is pretty privilege real?",
  "Would you choose love or money?",
  "Is marriage outdated?",
  "Is fame worth losing privacy?",
  "Would you rather be respected or liked?",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AppPreview() {
  const [selectedTopic, setSelectedTopic] = useState(topicOptions[0]);
  const [activeStep, setActiveStep] = useState(2); // Noetic pushback is highlighted

  return (
    <section id="demo" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C9C2B8]">Product demo</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.025em] text-[#F7F4EF]">
            Where ideas get challenged.
          </h2>
          <p className="mt-6 text-lg text-[#C9C2B8] max-w-2xl mx-auto">
            Talk it out. Get pushed. Come back sharper.
          </p>
        </motion.div>

        {/* Interactive Demo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 auto-rows-max"
        >
          {/* Panel 1: Pick a topic */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 rounded-2xl border border-[rgba(247,244,239,0.18)] bg-gradient-to-br from-[rgba(247,244,239,0.12)] to-[rgba(247,244,239,0.05)] p-6 backdrop-blur hover:border-[rgba(247,244,239,0.28)] transition-colors"
            onHoverStart={() => setActiveStep(0)}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9B99B] mb-4">
              Step 1
            </p>
            <h3 className="text-lg font-semibold text-[#F7F4EF] mb-6">Pick.</h3>

            <div className="space-y-3">
              {topicOptions.slice(0, 3).map((topic) => (
                <motion.button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  whileHover={{ scale: 1.02 }}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                    selectedTopic === topic
                      ? "border-[rgba(232,224,212,0.5)] bg-[rgba(232,224,212,0.15)]"
                      : "border-[rgba(247,244,239,0.12)] bg-[rgba(247,244,239,0.05)] hover:border-[rgba(247,244,239,0.24)]"
                  }`}
                >
                  <p className="text-sm text-[#F7F4EF]">{topic}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Panel 2: Speak your take */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 rounded-2xl border border-[rgba(247,244,239,0.18)] bg-gradient-to-br from-[rgba(247,244,239,0.12)] to-[rgba(247,244,239,0.05)] p-6 backdrop-blur hover:border-[rgba(247,244,239,0.28)] transition-colors"
            onHoverStart={() => setActiveStep(1)}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9B99B] mb-4">
              Step 2
            </p>
            <h3 className="text-lg font-semibold text-[#F7F4EF] mb-6">Speak.</h3>

            <div className="space-y-3">
              <p className="text-sm text-[#C9C2B8]">"{selectedTopic.split("?")[0]}..."</p>
              {/* Voice waveform animation */}
              <div className="flex items-center justify-center gap-1 h-12 bg-[rgba(18,15,15,0.65)] rounded-xl p-4">
                {[0.3, 0.6, 0.8, 0.5, 0.9, 0.4, 0.7, 0.6].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#C9B99B] to-[#E8E0D4] rounded-full"
                    style={{ height: `${16 * h}px` }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.06,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Panel 3: Noetic pushes back — HERO PANEL */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:row-span-2 rounded-2xl border-2 border-[rgba(232,224,212,0.35)] bg-gradient-to-br from-[rgba(232,224,212,0.18)] via-[rgba(232,224,212,0.08)] to-[rgba(247,244,239,0.04)] p-8 backdrop-blur shadow-[0_0_32px_rgba(232,224,212,0.12)] hover:shadow-[0_0_48px_rgba(232,224,212,0.18)] transition-all"
            onHoverStart={() => setActiveStep(2)}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E8E0D4] mb-4">
              Step 3
            </p>
            <h3 className="text-lg font-semibold text-[#F7F4EF] mb-8">Noetic pushes back.</h3>

            {/* AI Response Bubble */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="relative">
                <motion.div
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(232,224,212,0.2)] to-transparent blur-xl"
                />
                <div className="relative rounded-xl border border-[rgba(232,224,212,0.4)] bg-[rgba(232,224,212,0.12)] p-4">
                  <p className="text-xs text-[#C9B99B] font-semibold mb-2">AI MODERATOR</p>
                  <p className="text-sm text-[#F7F4EF] leading-relaxed">
                    "Are you using evidence—or assumptions?"
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#8F8780] italic pt-2">
                The moment that changes your perspective.
              </p>
            </motion.div>
          </motion.div>

          {/* Panel 4: Bring friends */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 rounded-2xl border border-[rgba(247,244,239,0.18)] bg-gradient-to-br from-[rgba(247,244,239,0.12)] to-[rgba(247,244,239,0.05)] p-6 backdrop-blur hover:border-[rgba(247,244,239,0.28)] transition-colors"
            onHoverStart={() => setActiveStep(3)}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9B99B] mb-4">
              Step 4
            </p>
            <h3 className="text-lg font-semibold text-[#F7F4EF] mb-6">Friends.</h3>

            {/* Avatar group */}
            <div className="flex items-end justify-center gap-4 h-20">
              {/* Friend avatars */}
              {["#C9B99B", "#7A6858", "#E8E0D4"].map((color, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[#181414]"
                    style={{ backgroundColor: color }}
                  >
                    +
                  </div>
                </motion.div>
              ))}

              {/* AI Moderator center */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9B99B] to-[#7A6858] flex items-center justify-center font-bold text-[#181414] shadow-[0_0_16px_rgba(201,185,155,0.25)]">
                  AI
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Panel 5: Get feedback */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 rounded-2xl border border-[rgba(247,244,239,0.18)] bg-gradient-to-br from-[rgba(247,244,239,0.12)] to-[rgba(247,244,239,0.05)] p-6 backdrop-blur hover:border-[rgba(247,244,239,0.28)] transition-colors"
            onHoverStart={() => setActiveStep(4)}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9B99B] mb-4">
              Step 5
            </p>
            <h3 className="text-lg font-semibold text-[#F7F4EF] mb-6">Feedback.</h3>

            {/* Animated metrics */}
            <div className="space-y-3">
              {[
                { label: "Clarity", value: 82 },
                { label: "Logic", value: 75 },
                { label: "Confidence", value: 88 },
              ].map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs text-[#C9C2B8]">{metric.label}</p>
                    <p className="text-xs font-semibold text-[#E8E0D4]">{metric.value}%</p>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(247,244,239,0.12)] overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#C9B99B] to-[#E8E0D4] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Panel 6: Try again sharper */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 rounded-2xl border border-[rgba(247,244,239,0.18)] bg-gradient-to-br from-[rgba(247,244,239,0.12)] to-[rgba(247,244,239,0.05)] p-6 backdrop-blur hover:border-[rgba(247,244,239,0.28)] transition-colors flex flex-col justify-between"
            onHoverStart={() => setActiveStep(5)}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#C9B99B] mb-4">
                Step 6
              </p>
              <h3 className="text-lg font-semibold text-[#F7F4EF]">Again.</h3>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(232,224,212,0.15)] flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E8E0D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs text-[#8F8780]">Round 2 starts now.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Flow indicator line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-[rgba(232,224,212,0.2)] to-transparent"
        />
      </div>
    </section>
  );
}
