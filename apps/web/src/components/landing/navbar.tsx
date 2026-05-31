'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MagneticButton } from '../ui/MagneticButton';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-[rgba(246,243,238,0.88)] border-b border-[rgba(30,30,28,0.08)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <nav className="max-w-[1400px] mx-auto px-8 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group" id="navbar-logo">
          <div className="w-7 h-7 rounded-[5px] bg-ember flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-white text-[13px] font-display font-light italic leading-none select-none">
              a
            </span>
          </div>
          <span className="font-display text-[1.1rem] font-light text-ink tracking-[-0.015em]">
            Aethera
          </span>
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className="text-[13.5px] font-sans text-ink-2 hover:text-ink transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-ember transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <MagneticButton
          href="/dashboard"
          variant="ember"
          id="navbar-cta"
          className="px-5 py-2.5 text-[13px] font-medium"
        >
          Start Learning
        </MagneticButton>
      </nav>
    </motion.header>
  );
}
