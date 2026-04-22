import { useTranslations } from "next-intl";

const pointKeys = [
  "reasoning",
  "approachable",
  "growth",
  "audience",
] as const;

const statKeys = ["students", "sessions", "design"] as const;

export default function Intro() {
  const t = useTranslations("intro");

  return (
    <section id="product" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {t("label")}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-muted">
            <p>{t("paragraphOne")}</p>
            <p>{t("paragraphTwo")}</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pointKeys.map((key) => (
              <article
                key={key}
                className="rounded-[1.75rem] border border-line bg-surface-strong p-6 shadow-[0_18px_50px_rgba(28,28,26,0.06)]"
              >
                <p className="text-base font-semibold text-foreground">
                  {t(`points.${key}.title`)}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {t(`points.${key}.body`)}
                </p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-line bg-[#f9f6f1] p-6 shadow-[0_24px_70px_rgba(28,28,26,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {t("trustLabel")}
          </p>
          <div className="mt-6 space-y-4">
            {statKeys.map((key) => (
              <div
                key={key}
                className="rounded-[1.5rem] border border-line bg-white/80 px-5 py-4"
              >
                <p className="text-3xl font-semibold tracking-[-0.05em] text-foreground">
                  {t(`stats.${key}.value`)}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {t(`stats.${key}.label`)}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
