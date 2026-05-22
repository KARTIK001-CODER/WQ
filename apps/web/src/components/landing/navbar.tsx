"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "AI Tutor", href: "#ai" },
  { label: "Analytics", href: "#analytics" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-6 pt-5 md:px-12 lg:px-20">
        <nav
          className={`flex items-center justify-between rounded-lg px-5 py-3.5 transition-all duration-500 ${
            scrolled
              ? "bg-bg-secondary/80 shadow-card backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-md shadow-sm border border-border-subtle">
              <img 
                src="/aethera-logo.png?v=2" 
                alt="Aethera Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-heading text-sm font-semibold tracking-widest text-text-primary">
              AETHERA
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <motion.a
            href="/register"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 font-sans text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90"
          >
            Start Learning
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
