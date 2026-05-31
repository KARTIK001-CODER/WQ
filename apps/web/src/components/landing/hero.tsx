'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedText } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/MagneticButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgNumY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const leftY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-[68px] overflow-hidden bg-bg"
    >
      {/* Background vertical rule */}
      <div className="absolute left-[53%] top-0 bottom-0 w-px bg-[rgba(30,30,28,0.055)] pointer-events-none hidden lg:block" />

      {/* Oversized decorative number */}
      <motion.div
        className="absolute bottom-[-2%] right-[-1%] font-display font-light text-[30vw] leading-none text-[rgba(30,30,28,0.032)] select-none pointer-events-none"
        style={{ y: bgNumY }}
        aria-hidden="true"
      >
        01
      </motion.div>

      {/* Main grid */}
      <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1fr_0.88fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-68px)] py-20">
        {/* ── LEFT: Editorial content ── */}
        <motion.div className="relative z-10" style={{ y: leftY }}>
          {/* Section label */}
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-ember" />
              <span className="meta-label">AI Learning Platform</span>
              <div className="w-2 h-2 rounded-full bg-ember opacity-60 animate-pulse" />
            </div>
          </ScrollReveal>

          {/* Heading */}
          <h1 className="font-display font-light text-[clamp(2.8rem,5.2vw,5rem)] leading-[1.08] tracking-[-0.025em] text-ink mb-8 max-w-[640px]">
            <AnimatedText
              text={"Learning\nshouldn't feel\nlike another tab."}
              delay={0.2}
            />
          </h1>

          {/* Supporting copy */}
          <ScrollReveal delay={0.55} direction="up" distance={20}>
            <p className="text-ink-2 text-[1.05rem] leading-[1.8] max-w-[460px] mb-12 font-sans">
              A thoughtfully crafted learning workspace designed to help you
              focus, understand faster, and stay consistent.
            </p>
          </ScrollReveal>

          {/* CTA row */}
          <ScrollReveal delay={0.68} direction="up" distance={16}>
            <div className="flex items-center gap-6">
              <MagneticButton
                href="/dashboard"
                variant="ember"
                id="hero-cta"
                className="px-7 py-3.5 text-[13.5px] font-medium"
              >
                Start Learning
              </MagneticButton>
              <span className="text-sm text-ink-3 font-sans">
                Free to start · No credit card
              </span>
            </div>
          </ScrollReveal>

          {/* Rotated editorial label */}
          <motion.div
            className="absolute -left-4 bottom-8 hidden xl:flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{ rotate: -90, transformOrigin: 'left center' }}
          >
            <div className="w-6 h-px bg-[rgba(30,30,28,0.2)]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.14em] uppercase text-ink-3">
              Aethera 2026
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Product mockup ── */}
        <motion.div
          className="relative z-10"
          style={{ y: rightY }}
          initial={{ opacity: 0, x: 48, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <HeroProductMockup />
        </motion.div>
      </div>
    </section>
  );
}

function HeroProductMockup() {
  return (
    <div className="relative">
      {/* Floating annotation — top right */}
      <motion.div
        className="absolute -top-5 right-6 bg-white border border-[rgba(30,30,28,0.09)] rounded-lg px-4 py-2.5 shadow-raised flex items-center gap-2.5 z-20"
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-2 h-2 rounded-full bg-moss animate-pulse" />
        <span className="text-[12px] font-sans text-ink-2">AI Tutor · Active</span>
      </motion.div>

      {/* Floating progress chip — bottom left */}
      <motion.div
        className="absolute -bottom-5 -left-5 bg-white border border-[rgba(30,30,28,0.09)] rounded-lg px-4 py-3 shadow-raised z-20"
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-[rgba(78,124,107,0.1)] flex items-center justify-center">
            <span className="text-moss text-[11px] font-bold font-sans">74%</span>
          </div>
          <div>
            <p className="text-[11.5px] font-semibold text-ink font-sans">Course Progress</p>
            <div className="w-28 h-[3px] bg-[rgba(30,30,28,0.08)] rounded-full mt-1.5">
              <div
                className="h-full bg-moss rounded-full transition-all"
                style={{ width: '74%' }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main product card */}
      <div className="bg-[#18211E] rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(24,33,30,0.28),0_0_0_1px_rgba(255,255,255,0.04)]">
        {/* Window bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(255,255,255,0.06)]">
          <div className="flex gap-1.5">
            {['rgba(255,255,255,0.12)', 'rgba(255,255,255,0.12)', 'rgba(193,98,47,0.5)'].map(
              (c, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              )
            )}
          </div>
          <span className="text-[11px] font-sans text-[rgba(255,255,255,0.25)]">
            Aethera · Introduction to AI
          </span>
          <div className="w-16" />
        </div>

        {/* App body */}
        <div className="flex h-[460px]">
          {/* Sidebar */}
          <div className="w-[190px] border-r border-[rgba(255,255,255,0.06)] flex flex-col">
            <div className="px-4 pt-5">
              <p className="text-[9.5px] font-sans font-semibold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.28)] mb-3">
                Course
              </p>
              {[
                { label: 'Introduction', done: true },
                { label: 'Neural Networks', done: true },
                { label: 'Training Data', active: true },
                { label: 'Transformers', done: false },
                { label: 'Prompting', done: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 px-2.5 py-[7px] rounded-sm mb-0.5 ${
                    item.active
                      ? 'bg-[rgba(193,98,47,0.14)] border-l-[2px] border-ember'
                      : ''
                  }`}
                >
                  <div
                    className={`w-[15px] h-[15px] rounded-sm flex items-center justify-center flex-shrink-0 ${
                      item.done
                        ? 'bg-moss'
                        : item.active
                          ? 'border border-ember'
                          : 'border border-[rgba(255,255,255,0.14)]'
                    }`}
                  >
                    {item.done && (
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                        <path
                          d="M1 2.5l1.5 1.5 3.5-3.5"
                          stroke="white"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-[11px] font-sans ${
                      item.active
                        ? 'text-white'
                        : item.done
                          ? 'text-[rgba(255,255,255,0.5)]'
                          : 'text-[rgba(255,255,255,0.35)]'
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress footer */}
            <div className="mt-auto px-4 pb-5">
              <div className="p-3 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
                <p className="text-[9.5px] text-[rgba(255,255,255,0.35)] font-sans mb-2">
                  Progress
                </p>
                <div className="h-[2px] bg-[rgba(255,255,255,0.09)] rounded-full">
                  <div
                    className="h-full bg-moss rounded-full"
                    style={{ width: '40%' }}
                  />
                </div>
                <p className="text-[9.5px] text-[rgba(255,255,255,0.25)] font-sans mt-1.5">
                  2 of 5 complete
                </p>
              </div>
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Video area */}
            <div className="flex-1 bg-[#0f1815] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a26] via-[#0f1815] to-[#0a1210]" />
              {/* Abstract blobs */}
              <div className="absolute top-6 left-8 w-28 h-28 rounded-full bg-[rgba(78,124,107,0.06)] blur-3xl" />
              <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-[rgba(92,122,155,0.07)] blur-3xl" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-10">
                <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center backdrop-blur-sm">
                  <svg width="15" height="17" viewBox="0 0 15 17" fill="none">
                    <path
                      d="M2 1.5l12 7L2 15.5V1.5z"
                      fill="rgba(255,255,255,0.75)"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-[rgba(255,255,255,0.55)] text-[11px] font-sans">
                    Training Data — Lecture 3
                  </p>
                </div>
              </div>

              {/* Scrubber */}
              <div className="absolute bottom-4 left-5 right-5 z-10">
                <div className="h-[2px] bg-[rgba(255,255,255,0.1)] rounded-full relative">
                  <div
                    className="absolute left-0 top-0 h-full bg-ember rounded-full"
                    style={{ width: '35%' }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-ember border-2 border-[#0f1815]"
                    style={{ left: 'calc(35% - 5px)' }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[9.5px] font-mono text-[rgba(255,255,255,0.28)]">
                    14:22
                  </span>
                  <span className="text-[9.5px] font-mono text-[rgba(255,255,255,0.28)]">
                    41:00
                  </span>
                </div>
              </div>
            </div>

            {/* Notes strip */}
            <div className="h-[130px] border-t border-[rgba(255,255,255,0.05)] px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[9.5px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.28)]">
                  Notes
                </span>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]" />
                <span className="text-[9.5px] text-[rgba(92,122,155,0.8)] font-sans">
                  ✦ AI-aware
                </span>
              </div>
              <div className="space-y-2">
                {[
                  '→ Training data determines model behavior fundamentally',
                  '→ Bias in training data leads to biased model outputs',
                ].map((note, i) => (
                  <p
                    key={i}
                    className="text-[11px] font-sans text-[rgba(255,255,255,0.5)] leading-relaxed"
                  >
                    {note}
                  </p>
                ))}
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-3 h-px bg-[rgba(255,255,255,0.15)]" />
                  <span className="text-[10px] text-[rgba(255,255,255,0.18)] font-sans italic">
                    Continue writing...
                  </span>
                  <motion.div
                    className="w-px h-3 bg-[rgba(255,255,255,0.3)]"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
