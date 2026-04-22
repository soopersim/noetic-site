import { getRequestConfig } from "next-intl/server";
import { routing, type AppLocale } from "./routing";

const messageLoaders: Record<AppLocale, () => Promise<Record<string, unknown>>> = {
  en: async () => (await import("../messages/en.json")).default,
  "zh-HK": async () => (await import("../messages/zh-HK.json")).default,
  "zh-CN": async () => (await import("../messages/zh-CN.json")).default,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = routing.locales.includes(requestedLocale as AppLocale)
    ? (requestedLocale as AppLocale)
    : routing.defaultLocale;

  return {
    locale,
    messages: await messageLoaders[locale](),
  };
});
