"use client";

import Link from "next/link";

export function LandingFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sidebar">
      <div className="h-px bg-[rgba(193,98,47,0.08)]" />
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-[14px] h-[14px] rounded-[3px] bg-ember" />
          <span
            className="text-base text-[rgba(255,255,255,0.6)] font-display"
            style={{ fontWeight: 300 }}
          >
            Aethera
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.5)] transition-colors duration-150"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xs text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.5)] transition-colors duration-150"
          >
            Terms
          </Link>
        </div>
        <p className="text-[11px] text-[rgba(255,255,255,0.2)]">
          &copy; {year} Aethera.
        </p>
      </div>
    </footer>
  );
}
