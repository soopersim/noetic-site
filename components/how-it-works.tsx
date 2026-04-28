import { useTranslations } from "next-intl";

const steps = ["one", "two", "three", "four", "five"] as const;

export default function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/5 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.1)] backdrop-blur sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {t("label")}
        </p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-xl text-base leading-7 text-muted">{t("intro")}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article
              key={step}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
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
