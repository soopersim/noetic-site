"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type WaitlistFormState = {
  name: string;
  email: string;
  role: string;
  interest: string;
  language: string;
  source: string;
  consent: boolean;
  website: string;
};

const createInitialState = (locale: string): WaitlistFormState => ({
  name: "",
  email: "",
  role: "",
  interest: "",
  language: locale,
  source: "landing-page",
  consent: false,
  website: "",
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
        body: JSON.stringify({ ...form, language: locale }),
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
    <section id="waitlist" className="mx-auto max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
      <div className="rounded-[2.25rem] border border-line bg-surface-strong p-8 shadow-[0_28px_90px_rgba(28,28,26,0.08)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {t("label")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground">
          {t("title")}
        </h2>
        <p className="mt-3 text-base leading-7 text-muted">{t("body")}</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder={t("name")}
            className="rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
            required
          />
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder={t("email")}
            className="rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
            required
          />
          <input
            type="text"
            value={form.role}
            onChange={(event) => setForm({ ...form, role: event.target.value })}
            placeholder={t("role")}
            className="rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
          />
          <textarea
            value={form.interest}
            onChange={(event) => setForm({ ...form, interest: event.target.value })}
            placeholder={t("interest")}
            className="min-h-[140px] rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
          />

          <input
            type="text"
            value={form.website}
            onChange={(event) => setForm({ ...form, website: event.target.value })}
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
          />

          <label className="flex items-start gap-3 rounded-[1.25rem] border border-line bg-white px-4 py-4 text-sm text-muted">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => setForm({ ...form, consent: event.target.checked })}
              className="mt-0.5"
              required
            />
            <span>{t("consent")}</span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? t("submitting") : t("button")}
          </button>

          <p aria-live="polite" className="text-sm text-muted">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
