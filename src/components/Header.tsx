"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo-fog.png" alt="Timefog" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-white">
            Timefog
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#features"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="/support"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-surface transition-transform hover:scale-105"
          >
            Download
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/5 sm:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <line x1="3" y1="6" x2="17" y2="6" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="14" x2="17" y2="14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-white/5 bg-surface/95 px-6 py-4 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-full bg-white px-5 py-2 text-center text-sm font-medium text-surface"
            >
              Download
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

