"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Courses", href: "/dashboard/courses" },
  { label: "Workspace", href: "#workspace" },
];

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#F6F3EE" : "transparent",
        borderBottom:
          scrolled
            ? "1px solid rgba(30,30,28,0.10)"
            : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-[64px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-[18px] h-[18px] rounded-[3px] bg-ember transition-transform duration-200 group-hover:scale-105" />
          <span
            className="text-lg tracking-tight text-ink font-display"
            style={{ fontWeight: 300 }}
          >
            Aethera
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ink-2 hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Link
          href="/register"
          className="hidden md:inline-flex px-5 h-9 items-center rounded-md text-sm font-medium text-white bg-ember hover:opacity-90 transition-all duration-200"
        >
          Begin workspace
        </Link>

        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M3 5H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 10H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 15H17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-8 pb-6 bg-bg border-t border-divider"
          >
            <div className="flex flex-col gap-5 pt-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-2 hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px bg-divider" />
              <Link
                href="/register"
                className="text-sm font-medium text-ember"
                onClick={() => setMobileOpen(false)}
              >
                Begin workspace &rarr;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
