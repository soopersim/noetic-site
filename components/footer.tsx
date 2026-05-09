import Link from "next/link";
import { X, Globe, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] px-6 pt-14 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Three-column grid */}
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Column 1: Logo + mission */}
          <div>
            <p className="text-sm font-bold tracking-[-0.02em] text-foreground">noetic</p>
            <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-muted">
              Building the next generation of rigorous, respectful thinkers.
            </p>
          </div>

          {/* Column 2: Product + Company */}
          <div className="grid grid-cols-2 gap-6 sm:col-span-1 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Product</p>
              <ul className="space-y-2 text-xs text-muted">
                <li><span className="opacity-50">App — coming soon</span></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Company</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/en/terms" className="text-muted hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/en/privacy" className="text-muted hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Connect */}
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">Connect</p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:asknoetic@gmail.com"
                aria-label="Email"
                className="text-muted hover:text-foreground transition-colors"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="text-muted hover:text-foreground transition-colors"
              >
                <X size={16} />
              </a>
              <a
                href="https://noetic.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="text-muted hover:text-foreground transition-colors"
              >
                <Globe size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Stretched NOETIC wordmark */}
        <div className="mt-16 overflow-hidden" aria-hidden="true">
          <p
            className="select-none text-[clamp(4rem,14vw,10rem)] font-bold leading-none tracking-[-0.06em] text-foreground opacity-[0.04]"
            style={{ letterSpacing: "-0.06em" }}
          >
            NOETIC
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-4 flex flex-col gap-2 border-t border-[var(--line)] pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted">© {year} Noetic. All rights reserved.</p>
          <a
            href="mailto:asknoetic@gmail.com"
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            asknoetic@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
