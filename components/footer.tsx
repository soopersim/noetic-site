import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-black/5 px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[-0.05em] text-foreground">noetic</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">{t("tagline")}</p>
        </div>
        <div className="text-sm text-muted space-y-2">
          <p>{t("contactLabel")}</p>
          <a
            href="mailto:asknoetic@gmail.com"
            className="mt-1 flex items-center gap-2 text-foreground"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M3 6.75C3 5.7835 3.7835 5 4.75 5H19.25C20.2165 5 21 5.7835 21 6.75V17.25C21 18.2165 20.2165 19 19.25 19H4.75C3.7835 19 3 18.2165 3 17.25V6.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.75 6.75L12 12.25L20.25 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            asknoetic@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/company/noeticapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BFpXNhAAoQ6ShOornrV2FXA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-foreground"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M6.75 8.25V18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 8.75H8.5V18.25H5V8.75Z" fill="currentColor" />
                <path d="M8.5 8.75H11.5V10.25H11.55C12.0535 9.439 13.061 8.75 14.42 8.75C17.04 8.75 18 10.44 18 13.21V18.25H14.5V13.79C14.5 12.63 14.48 11.17 12.85 11.17C11.2 11.17 11 12.45 11 13.72V18.25H7.5V8.75H8.5Z" fill="currentColor" />
              </svg>
            </span>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
