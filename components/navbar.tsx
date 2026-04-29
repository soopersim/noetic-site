"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(247,244,239,0.08)] bg-[rgba(24,20,20,0.72)] backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">
        <a href={`/${currentLocale}`} className="flex items-center gap-2">
          <Image 
            src="/logos/noetic-logo.png"
            alt="Noetic"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="text-sm font-semibold tracking-[-0.02em] text-[#F7F4EF]">noetic</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href={`/${currentLocale}#demo`} className="text-sm text-[#C9C2B8] hover:text-[#F7F4EF] transition">
            {t("product")}
          </a>
          <a href={`/${currentLocale}#rubric`} className="text-sm text-[#C9C2B8] hover:text-[#F7F4EF] transition">
            {t("how")}
          </a>
          <a href={`/${currentLocale}#testimonials`} className="text-sm text-[#C9C2B8] hover:text-[#F7F4EF] transition">
            {t("reviews")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={`/${currentLocale}#waitlist`}
            className="hidden rounded-full border border-[rgba(247,244,239,0.18)] bg-[rgba(247,244,239,0.08)] hover:bg-[rgba(247,244,239,0.12)] px-4 py-2.5 text-sm font-semibold text-[#F7F4EF] transition sm:inline-flex"
          >
            {t("waitlist")}
          </a>
        </div>
      </div>
    </header>
  );
}
