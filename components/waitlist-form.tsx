"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

type WaitlistFormState = {
  name: string;
  email: string;
  interest: string;
  language: string;
  consent: boolean;
};

const createInitialState = (locale: string): WaitlistFormState => ({
  name: "",
  email: "",
  interest: "",
  language: locale,
  consent: false,
});

export default function WaitlistForm() {
  const locale = useLocale();
  const t = useTranslations("waitlist");
  const [form, setForm] = useState<WaitlistFormState>(() => createInitialState(locale));
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getErrorMessage = (code?: string) => {
    switch (code) {
      case "INVALID_FORM_DATA":
        return t("errors.invalid");
      case "DUPLICATE_EMAIL":
        return t("errors.duplicate");
      case "SUPABASE_NOT_CONFIGURED":
        return t("errors.config");
      default:
        return t("errors.generic");
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          ...form, 
          language: locale,
          role: "",
          source: "landing-page",
          website: "",
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setMessage(getErrorMessage(data.error));
        return;
      }

      setMessage(t("success"));
      setForm(createInitialState(locale));
    } catch {
      setMessage(t("errors.generic"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(232, 224, 212, 0.18), transparent)",
            left: "10%",
            top: "0%",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-[#F7F4EF] leading-tight">
            Your words are power.
          </h2>
          <p className="mt-6 text-lg text-[#C9C2B8]">
            Start training them.
          </p>

          <form onSubmit={onSubmit} className="mt-10 space-y-4 max-w-md mx-auto">
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder={t("name")}
              className="w-full rounded-xl border border-[rgba(247,244,239,0.18)] bg-[rgba(247,244,239,0.08)] px-4 py-3.5 text-sm text-[#F7F4EF] placeholder:text-[#8F8780] outline-none focus:border-[rgba(247,244,239,0.4)] focus:bg-[rgba(247,244,239,0.12)] transition"
              required
            />
            
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder={t("email")}
              className="w-full rounded-xl border border-[rgba(247,244,239,0.18)] bg-[rgba(247,244,239,0.08)] px-4 py-3.5 text-sm text-[#F7F4EF] placeholder:text-[#8F8780] outline-none focus:border-[rgba(247,244,239,0.4)] focus:bg-[rgba(247,244,239,0.12)] transition"
              required
            />

            <textarea
              value={form.interest}
              onChange={(event) => setForm({ ...form, interest: event.target.value })}
              placeholder={t("interest")}
              rows={3}
              className="w-full rounded-xl border border-[rgba(247,244,239,0.18)] bg-[rgba(247,244,239,0.08)] px-4 py-3.5 text-sm text-[#F7F4EF] placeholder:text-[#8F8780] outline-none focus:border-[rgba(247,244,239,0.4)] focus:bg-[rgba(247,244,239,0.12)] transition resize-none"
            />

            <label className="flex items-start gap-3 text-sm text-[#C9C2B8]">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(event) => setForm({ ...form, consent: event.target.checked })}
                className="mt-1 h-5 w-5 rounded-xl border border-[rgba(247,244,239,0.24)] bg-[rgba(247,244,239,0.08)] accent-[#181414] focus:ring-2 focus:ring-[rgba(232,224,212,0.28)]"
                required
              />
              <span>{t("consent")}</span>
            </label>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-sm p-3 rounded-lg ${
                  message === t("success")
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-xl bg-[#F7F4EF] text-[#181414] font-semibold py-3.5 hover:bg-[#E8E0D4] disabled:opacity-50 transition"
            >
              {isSubmitting ? t("submitting") : t("button")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
