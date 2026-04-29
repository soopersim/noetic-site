"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname?.split("/")[1] || "en";

  return (
    <footer className="border-t border-[rgba(247,244,239,0.12)] px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg font-semibold text-[#F7F4EF]">noetic</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#C9C2B8]">{t("tagline")}</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 text-sm">
            <div>
              <p className="text-[#C9C2B8] font-semibold mb-4">Product</p>
              <div className="space-y-2">
                <a href={`/${currentLocale}#demo`} className="block text-[#C9C2B8] hover:text-[#F7F4EF] transition">Demo</a>
                <a href={`/${currentLocale}#rubric`} className="block text-[#C9C2B8] hover:text-[#F7F4EF] transition">Feedback</a>
              </div>
            </div>
            
            <div>
              <p className="text-[#C9C2B8] font-semibold mb-4">Legal</p>
              <div className="space-y-2">
                <Link href={`/${currentLocale}/privacy`} className="block text-[#C9C2B8] hover:text-[#F7F4EF] transition">Privacy Policy</Link>
                <Link href={`/${currentLocale}/terms`} className="block text-[#C9C2B8] hover:text-[#F7F4EF] transition">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(247,244,239,0.12)] pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-sm text-[#C9C2B8]">
            <p>© {new Date().getFullYear()} Noetic. All rights reserved.</p>
            <a href="mailto:asknoetic@gmail.com" className="hover:text-[#F7F4EF] transition">
              asknoetic@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
