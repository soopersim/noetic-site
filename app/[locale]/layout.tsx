import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const messageLoaders: Record<AppLocale, () => Promise<Record<string, unknown>>> = {
  en: async () => (await import("../../messages/en.json")).default,
  "zh-HK": async () => (await import("../../messages/zh-HK.json")).default,
  "zh-CN": async () => (await import("../../messages/zh-CN.json")).default,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={await messageLoaders[locale as AppLocale]()}
    >
      {children}
    </NextIntlClientProvider>
  );
}
