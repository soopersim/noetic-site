import type { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

const messageLoaders: Record<AppLocale, () => Promise<Record<string, unknown>>> = {
  en: async () => (await import("../../messages/en.json")).default,
  "zh-HK": async () => (await import("../../messages/zh-HK.json")).default,
  "zh-CN": async () => (await import("../../messages/zh-CN.json")).default,
};

const localeMetadata: Record<AppLocale, Metadata> = {
  en: {
    alternates: { canonical: "https://noetic.app/en" },
    openGraph: { locale: "en_US", url: "https://noetic.app/en" },
  },
  "zh-HK": {
    title: {
      default: "Noetic — 清晰思考。有力論證。",
      template: "%s | Noetic",
    },
    description:
      "Noetic 是一個 AI 主持的空間，年輕思想者在這裡磨練推理能力、表達想法，並進行尊重而有深度的辯論。立即加入候補名單。",
    alternates: { canonical: "https://noetic.app/zh-HK" },
    openGraph: {
      title: "Noetic — 清晰思考。有力論證。",
      description:
        "Noetic 是一個 AI 主持的空間，年輕思想者在這裡磨練推理能力、表達想法，並進行尊重而有深度的辯論。立即加入候補名單。",
      locale: "zh_HK",
      url: "https://noetic.app/zh-HK",
    },
    twitter: {
      title: "Noetic — 清晰思考。有力論證。",
      description:
        "Noetic 是一個 AI 主持的空間，年輕思想者在這裡磨練推理能力、表達想法，並進行尊重而有深度的辯論。立即加入候補名單。",
    },
  },
  "zh-CN": {
    title: {
      default: "Noetic — 清晰思考。有力论证。",
      template: "%s | Noetic",
    },
    description:
      "Noetic 是一个 AI 主持的空间，年轻思想者在这里磨练推理能力、表达想法，并进行尊重而有深度的辩论。立即加入候补名单。",
    alternates: { canonical: "https://noetic.app/zh-CN" },
    openGraph: {
      title: "Noetic — 清晰思考。有力论证。",
      description:
        "Noetic 是一个 AI 主持的空间，年轻思想者在这里磨练推理能力、表达想法，并进行尊重而有深度的辩论。立即加入候补名单。",
      locale: "zh_CN",
      url: "https://noetic.app/zh-CN",
    },
    twitter: {
      title: "Noetic — 清晰思考。有力论证。",
      description:
        "Noetic 是一个 AI 主持的空间，年轻思想者在这里磨练推理能力、表达想法，并进行尊重而有深度的辩论。立即加入候补名单。",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as AppLocale)) return {};
  return localeMetadata[locale as AppLocale];
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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={await messageLoaders[locale as AppLocale]()}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
