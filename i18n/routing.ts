import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "zh-HK", "zh-CN"],
  defaultLocale: "en",
});

export type AppLocale = (typeof routing.locales)[number];
