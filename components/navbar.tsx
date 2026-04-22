import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ee]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-semibold tracking-[-0.05em] text-foreground">
          noetic
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#product" className="text-sm text-muted hover:text-foreground">
            {t("product")}
          </a>
          <a href="#how-it-works" className="text-sm text-muted hover:text-foreground">
            {t("how")}
          </a>
          <a href="#reviews" className="text-sm text-muted hover:text-foreground">
            {t("reviews")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#waitlist"
            className="hidden rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(23,23,23,0.16)] sm:inline-flex"
          >
            {t("waitlist")}
          </a>
        </div>
      </div>
    </header>
  );
}
