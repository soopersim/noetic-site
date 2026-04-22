import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="max-w-xl rounded-[2rem] border border-line bg-surface-strong px-8 py-12 text-center shadow-[0_20px_80px_rgba(28,28,26,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-foreground">
          {t("title")}
        </h1>
        <p className="mt-4 text-base leading-7 text-muted">{t("body")}</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white"
        >
          {t("action")}
        </Link>
      </div>
    </main>
  );
}
