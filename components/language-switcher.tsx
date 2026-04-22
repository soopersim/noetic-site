"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

const locales = [
  { code: "en", label: "EN" },
  { code: "zh-HK", label: "繁" },
  { code: "zh-CN", label: "简" },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-full border border-line bg-surface-strong p-1 shadow-[0_12px_30px_rgba(28,28,26,0.06)]">
      {locales.map((locale) => {
        const href = pathname.replace(/^\/(en|zh-HK|zh-CN)/, `/${locale.code}`);

        return (
          <Link
            key={locale.code}
            href={href}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium text-muted",
              activeLocale === locale.code && "bg-white text-foreground shadow-sm",
            )}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
