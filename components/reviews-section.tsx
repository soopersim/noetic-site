"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type Review = {
  id: string;
  name: string;
  role: string | null;
  rating: number;
  review: string;
};

type ReviewFormState = {
  name: string;
  role: string;
  rating: number;
  review: string;
  language: string;
  website: string;
};

const createInitialState = (locale: string): ReviewFormState => ({
  name: "",
  role: "",
  rating: 5,
  review: "",
  language: locale,
  website: "",
});

export default function ReviewsSection() {
  const locale = useLocale();
  const t = useTranslations("reviews");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [form, setForm] = useState<ReviewFormState>(() => createInitialState(locale));
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews", {
          cache: "no-store",
          signal: controller.signal,
        });
        const data = (await response.json()) as { reviews?: Review[] };

        setReviews(data.reviews ?? []);
      } catch {
        if (!controller.signal.aborted) {
          setReviews([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadReviews();
    return () => controller.abort();
  }, []);

  const getErrorMessage = (code?: string) => {
    switch (code) {
      case "INVALID_REVIEW_DATA":
        return t("errors.invalid");
      case "SUPABASE_NOT_CONFIGURED":
        return t("errors.config");
      default:
        return t("errors.generic");
    }
  };

  const submitReview = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
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
    <section
      id="reviews"
      className="mx-auto grid max-w-7xl gap-8 px-6 py-24 sm:px-8 lg:grid-cols-[minmax(0,1.05fr)_420px] lg:px-12"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {t("label")}
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{t("body")}</p>

        <div className="mt-8 space-y-4">
          {isLoading ? (
            <div className="rounded-[1.75rem] border border-line bg-surface-strong p-6 text-sm text-muted">
              {t("loading")}
            </div>
          ) : reviews.length === 0 ? (
            <div className="rounded-[1.75rem] border border-line bg-surface-strong p-6 text-sm text-muted">
              {t("empty")}
            </div>
          ) : (
            reviews.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.75rem] border border-line bg-surface-strong p-6 shadow-[0_18px_50px_rgba(28,28,26,0.06)]"
              >
                <p className="text-sm tracking-[0.3em] text-accent">
                  {"★".repeat(item.rating)}
                </p>
                <p className="mt-4 text-base leading-7 text-foreground">{item.review}</p>
                <p className="mt-5 text-sm text-muted">
                  {item.name}
                  {item.role ? `, ${item.role}` : ""}
                </p>
              </article>
            ))
          )}
        </div>
      </div>

      <div className="rounded-[2rem] border border-line bg-surface-strong p-8 shadow-[0_24px_80px_rgba(28,28,26,0.08)]">
        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
          {t("formTitle")}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{t("formBody")}</p>

        <form onSubmit={submitReview} className="mt-8 grid gap-4">
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder={t("name")}
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
          <select
            value={form.rating}
            onChange={(event) =>
              setForm({ ...form, rating: Number(event.target.value) })
            }
            className="rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
          >
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>
                {t("ratingOption", { value })}
              </option>
            ))}
          </select>
          <textarea
            value={form.review}
            onChange={(event) => setForm({ ...form, review: event.target.value })}
            placeholder={t("review")}
            className="min-h-[160px] rounded-[1.25rem] border border-line bg-white px-4 py-3.5 text-sm text-foreground outline-none focus:border-line-strong focus:ring-4 focus:ring-black/5"
            required
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

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
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
