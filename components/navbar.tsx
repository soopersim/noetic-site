"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const localeHref = (hash: string) => `/${currentLocale}${hash}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "border-[var(--line-strong)] bg-[rgba(245,241,234,0.94)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8 lg:px-12">
        {/* Wordmark */}
        <a href={localeHref("")} className="flex items-center gap-2.5 group">
          <Image
            src="/logos/noetic-logo.png"
            alt="Noetic"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="text-sm font-bold tracking-[-0.03em] text-foreground">
            noetic
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={localeHref(link.href)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={localeHref("#waitlist")}
            className="hidden rounded-full border border-accent bg-accent px-5 py-2 text-sm font-semibold text-white hover:bg-accent-hover transition sm:inline-flex"
          >
            Join Waitlist
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] text-muted hover:text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="border-t border-[var(--line)] bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={localeHref(link.href)}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={localeHref("#waitlist")}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accent-hover transition"
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
