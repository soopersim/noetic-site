"use client";

import { motion } from "framer-motion";

export default function SocialDebateRooms() {
  const avatars = [
    { name: "Alex", color: "bg-[#C9B99B]" },
    { name: "Jordan", color: "bg-[#7A6858]" },
    { name: "Sam", color: "bg-[#E8E0D4]" },
    { name: "Casey", color: "bg-[#AFAFAA]" },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C9C2B8]">Social learning</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#F7F4EF]">Deep chats, guided.</h2>
          <p className="mt-4 text-lg text-[#C9C2B8] max-w-2xl mx-auto">
            Bring friends. Debate ideas. Leave sharper.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left side: Avatars and moderator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 flex items-end justify-center gap-2"
          >
            {/* Avatars */}
            {avatars.map((avatar, i) => (
              <motion.div
                key={avatar.name}
                className="flex flex-col items-center"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                <div className={`w-12 h-12 rounded-full ${avatar.color} flex items-center justify-center text-sm font-bold text-white mb-2`}>
                  {avatar.name[0]}
                </div>
                <div className="w-1 h-10 bg-gradient-to-b from-[rgba(247,244,239,0.32)] to-[rgba(247,244,239,0.05)] rounded-full flex-shrink-0" />
              </motion.div>
            ))}

            {/* AI Moderator in center */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9B99B] to-[#7A6858] flex items-center justify-center text-sm font-bold text-[#181414] shadow-[0_0_20px_rgba(201,185,155,0.18)]">
                AI
              </div>
            </motion.div>
          </motion.div>

          {/* Right side: Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-[#F7F4EF]">Debate with friends</h3>
              <p className="text-[#C9C2B8]">
                Invite peers to discuss real topics that matter. The AI moderates, guides, and gives everyone smarter feedback.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Real voices", desc: "Everyone speaks their own thoughts" },
                { label: "Smart moderation", desc: "AI keeps debates on track" },
                { label: "Growth together", desc: "See how your friends challenge you" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="w-1 h-10 bg-gradient-to-b from-[#C9B99B] to-[rgba(247,244,239,0.32)] rounded-full flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#F7F4EF]">{item.label}</p>
                    <p className="text-xs text-[#C9C2B8]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 border-t border-[rgba(247,244,239,0.12)]"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[rgba(201,185,155,0.18)] border border-[rgba(201,185,155,0.35)] text-xs font-semibold text-[#C9B99B]">
                Coming soon
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
