import { useTranslations } from "next-intl";

export default function AIDifferentiation() {
  const t = useTranslations("differentiation");

  const cards = [
    {
      title: t("cards.answer.title"),
      body: t("cards.answer.body"),
    },
    {
      title: t("cards.agree.title"),
      body: t("cards.agree.body"),
    },
    {
      title: t("cards.homework.title"),
      body: t("cards.homework.body"),
    },
    {
      title: t("cards.voice.title"),
      body: t("cards.voice.body"),
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/30 bg-[#fff6ec] p-8 shadow-[0_40px_90px_rgba(18,16,12,0.08)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {t("label")}
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            {t("title")}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            ChatGPT gives you answers. Noetic trains you to think, speak, and defend your own.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-slate-200/20 bg-[#f8efe5] p-6 shadow-[0_15px_35px_rgba(18,16,12,0.08)]"
            >
              <p className="text-sm font-semibold text-foreground">{card.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
