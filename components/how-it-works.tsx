import { useTranslations } from "next-intl";

const steps = ["one", "two", "three"] as const;

export default function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="rounded-[2.25rem] border border-line bg-surface-strong p-8 shadow-[0_30px_90px_rgba(28,28,26,0.08)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {t("label")}
        </p>
        <div className="mt-4 flex max-w-3xl flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted">{t("intro")}</p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-[1.75rem] border border-line bg-white/85 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                0{index + 1}
              </p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {t(`steps.${step}.body`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
