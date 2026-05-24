"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[64px] overflow-hidden bg-bg">
      <div
        className="absolute top-0 right-0 w-[50vw] h-full pointer-events-none"
        style={{ backgroundColor: "rgba(193, 98, 47, 0.02)" }}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 min-h-[calc(100vh-64px)] py-20">
          <div className="lg:w-[55%] shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-divider-strong" />
              <span className="meta-label">Aethera &middot; Learning Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="font-display text-ink leading-[0.95] -tracking-[0.02em]"
              style={{
                fontWeight: 300,
                fontSize: "clamp(56px, 7.5vw, 96px)",
              }}
            >
              Learning should
              <br />
              feel{" "}
              <span className="italic text-ember">thoughtful</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="mt-8 text-lg leading-relaxed text-ink-2 max-w-[420px]"
            >
              A workspace designed for depth, not distraction. Aethera brings
              intelligence, craft, and calm to the way you learn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.45,
              }}
              className="mt-10"
            >
              <Link
                href="/register"
                className="group inline-flex items-center gap-2.5 px-7 h-12 rounded-md text-white font-medium text-sm bg-ember hover:opacity-90 transition-all duration-200"
              >
                Begin your workspace
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex items-center gap-4"
            >
              <div className="w-12 h-px bg-divider" />
              <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-ink-3">
                Built for depth
              </span>
              <div className="flex-1 h-px bg-divider" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
            className="lg:w-[45%] relative lg:-mr-12 xl:-mr-16 group cursor-pointer"
          >
            <Link href="/learn/course-1/lec-4" className="block rounded-xl overflow-hidden bg-surface border border-card-border shadow-raised transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(30,30,28,0.12)]">
              <div className="h-10 flex items-center gap-2 px-4 border-b border-divider">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <div className="ml-4 h-4 flex-1 rounded bg-[rgba(30,30,28,0.04)]" />
              </div>

              <div className="flex" style={{ height: "400px" }}>
                <div className="flex-1 bg-[#0D0D0B] flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center">
                    <div className="w-3 h-3 ml-0.5 border-l-2 border-b-2 border-[rgba(255,255,255,0.4)] -rotate-45" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-8 flex items-center px-4 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent">
                    <div className="flex-1 h-[2px] rounded-full bg-[rgba(255,255,255,0.15)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-ember"
                        style={{ width: "42%" }}
                      />
                    </div>
                    <span className="ml-3 text-[10px] text-[rgba(255,255,255,0.4)] font-mono">
                      12:34 / 28:15
                    </span>
                  </div>
                </div>

                <div className="w-[220px] shrink-0 border-l border-divider p-4 flex flex-col gap-3">
                  <span className="meta-label text-ink-3">Lecture Notes</span>
                  <div className="h-2.5 rounded w-[80%] bg-[rgba(30,30,28,0.06)]" />
                  <div className="h-2.5 rounded w-[60%] bg-[rgba(30,30,28,0.06)]" />
                  <div className="h-px bg-divider my-1" />
                  <div className="h-2.5 rounded w-[90%] bg-[rgba(30,30,28,0.04)]" />
                  <div className="h-2.5 rounded w-[70%] bg-[rgba(30,30,28,0.04)]" />
                  <div className="h-2.5 rounded w-[85%] bg-[rgba(30,30,28,0.04)]" />
                  <div className="h-px bg-divider my-1" />
                  <div className="pl-2 border-l-2 border-ember">
                    <div className="h-2 rounded w-full bg-[rgba(30,30,28,0.07)]" />
                    <div className="h-2 rounded w-[70%] bg-[rgba(30,30,28,0.07)] mt-1.5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/learn/course-1/lec-4"
              className="absolute -bottom-4 left-6 px-4 py-2.5 rounded-lg bg-surface border border-card-border shadow-card border-l-[3px] border-slate hover:shadow-raised transition-shadow duration-200"
            >
              <p className="meta-label text-slate">AI Context Active</p>
              <p className="text-xs text-ink-2 mt-0.5">
                &ldquo;Summarize this lecture&rdquo;
              </p>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center px-8 md:px-12 pb-6">
        <div className="h-px flex-1 bg-divider" />
        <span className="mx-6 meta-label text-ink-3">Scroll to explore</span>
        <div className="h-px flex-1 bg-divider" />
      </div>
    </section>
  );
}
