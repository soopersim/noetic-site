"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Static particle positions - deterministic, no hydration mismatch
const particlePositions = [
  { left: "12%", top: "25%" },
  { left: "28%", top: "68%" },
  { left: "45%", top: "42%" },
  { left: "62%", top: "15%" },
  { left: "78%", top: "82%" },
  { left: "85%", top: "35%" },
  { left: "22%", top: "55%" },
  { left: "55%", top: "72%" },
  { left: "38%", top: "88%" },
  { left: "72%", top: "58%" },
  { left: "15%", top: "45%" },
  { left: "92%", top: "22%" },
];

// Static animation values for particles
const particleAnimations = [
  { x: [-80, 120], y: [-60, 80], duration: 10 },
  { x: [-120, 80], y: [-100, 60], duration: 12 },
  { x: [-60, 140], y: [-80, 100], duration: 8 },
  { x: [-100, 100], y: [-40, 120], duration: 14 },
  { x: [-140, 60], y: [-120, 40], duration: 9 },
  { x: [-80, 100], y: [-60, 140], duration: 11 },
  { x: [-100, 80], y: [-80, 80], duration: 13 },
  { x: [-60, 120], y: [-100, 60], duration: 7 },
  { x: [-120, 60], y: [-40, 100], duration: 15 },
  { x: [-80, 140], y: [-100, 80], duration: 10 },
  { x: [-100, 100], y: [-60, 120], duration: 12 },
  { x: [-140, 80], y: [-80, 100], duration: 8 },
];

const AnimatedBackground = () => {
  const nodes = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated particles - using static positions */}
      {particlePositions.map((pos, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#E8E0D4]/60"
          animate={{
            x: particleAnimations[i].x,
            y: particleAnimations[i].y,
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particleAnimations[i].duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: pos.left,
            top: pos.top,
            boxShadow: "0 0 14px rgba(232, 224, 212, 0.45)",
          }}
        />
      ))}

      {/* Orbiting nodes */}
      {nodes.map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute h-2 w-2 rounded-full bg-[#E8E0D4]/80"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + i * 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: "50%",
            top: "50%",
            marginLeft: "-4px",
            marginTop: "-4px",
          }}
        >
          <motion.div
            className="absolute h-2 w-2 rounded-full bg-[#E8E0D4]/40"
            style={{
              left: `${60 + i * 20}px`,
              top: "0px",
              boxShadow: "0 0 10px rgba(232, 224, 212, 0.35)",
            }}
          />
        </motion.div>
      ))}

      {/* Glow orbs */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.75, 0.4],
          }}
          transition={{
            duration: 6 + i * 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(232, 224, 212, 0.28), transparent)",
            left: `${20 + i * 30}%`,
            top: `${20 + i * 25}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 sm:px-8 lg:px-12">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] text-[#F7F4EF] leading-[0.92]">
            Think deeper. Speak sharper.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#C9C2B8] leading-relaxed max-w-2xl mx-auto">
            Challenge your ideas with sharper, more thoughtful conversation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`/${currentLocale}#waitlist`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#F7F4EF] text-[#181414] font-semibold text-sm hover:bg-[#E8E0D4] transition shadow-[0_0_32px_rgba(232,224,212,0.18)]"
            >
              Join waitlist
            </motion.a>
            <motion.a
              href={`/${currentLocale}#demo`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-[rgba(247,244,239,0.24)] bg-[rgba(247,244,239,0.08)] hover:bg-[rgba(247,244,239,0.12)] text-[#F7F4EF] font-semibold text-sm transition"
            >
              See the flow
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
