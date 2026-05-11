"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";

const locales = [
  { code: "en", label: "English" },
  { code: "zh-HK", label: "繁體中文" },
  { code: "zh-CN", label: "简体中文" },
] as const;

type LocaleCode = (typeof locales)[number]["code"];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const activeLocale = useLocale() as LocaleCode;
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLabel = locales.find((l) => l.code === activeLocale)?.label ?? "English";

  function hrefFor(code: string) {
    return pathname.replace(/^\/(en|zh-HK|zh-CN)/, `/${code}`);
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{activeLabel}</span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 w-36 rounded border border-[var(--line-strong)] bg-background py-1 shadow-[0_8px_24px_rgba(26,23,20,0.10)]"
        >
          {locales.map((locale) => (
            <li key={locale.code} role="option" aria-selected={locale.code === activeLocale}>
              <Link
                href={hrefFor(locale.code)}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm transition-colors ${
                  locale.code === activeLocale
                    ? "font-semibold text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {locale.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
