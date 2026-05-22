"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 15 });
  const springY = useSpring(y, { stiffness: 300, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-[10%] h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute right-1/4 bottom-[20%] h-[400px] w-[400px] rounded-full bg-accent-support/5 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex min-h-screen flex-col pt-36 lg:pt-44">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-sans text-xs font-medium tracking-widest text-accent">
              AI-POWERED LEARNING OS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mx-auto max-w-5xl text-center font-heading text-5xl leading-[1.05] tracking-tight text-text-primary sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Learn Smarter
            <br />
            <span className="text-accent">With AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-6 max-w-xl text-center font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            An intelligent operating system for learning. Combining AI tutoring,
            interactive experiences, analytics, and personalized growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton
              href="/register"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-sans text-base font-medium text-white shadow-glow transition-all duration-200 hover:bg-accent/90"
            >
              Start Learning
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </MagneticButton>
            <MagneticButton
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-bg-secondary/50 px-7 py-3.5 font-sans text-base font-medium text-text-secondary transition-all duration-200 hover:border-border-mid hover:text-text-primary"
            >
              Explore Courses
            </MagneticButton>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="mx-auto mt-20 w-full max-w-5xl"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-accent/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-bg-secondary shadow-elevated">
                {/* Window chrome */}
                <div className="flex items-center gap-3 border-b border-border-subtle/50 px-6 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="font-sans text-xs text-text-secondary/60">Aethera — Workspace</span>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-5">
                  {/* Sidebar */}
                  <div className="border-r border-border-subtle/50 bg-bg-primary/30 p-5 md:col-span-1">
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/10 text-[9px] text-accent">
                          A
                        </span>
                        <span className="font-heading text-xs font-semibold tracking-wider text-text-primary">
                          AETHERA
                        </span>
                      </div>
                    </div>
                    <nav className="space-y-1">
                      {["Dashboard", "Courses", "AI Tutor", "Analytics", "Settings"].map((item) => (
                        <div
                          key={item}
                          className={`rounded-md px-3 py-2 text-xs transition-colors ${
                            item === "Dashboard"
                              ? "bg-accent/10 font-medium text-accent"
                              : "text-text-secondary hover:bg-bg-layer"
                          }`}
                        >
                          {item}
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Main content */}
                  <div className="p-6 md:col-span-4">
                    <div className="mb-5 flex items-center justify-between">
                      <h2 className="font-heading text-base font-semibold text-text-primary">
                        Welcome back, Alex
                      </h2>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs text-accent">12-day streak</span>
                        <span className="rounded-md bg-accent/10 px-2 py-0.5 font-sans text-[11px] text-accent">
                          +250 XP
                        </span>
                      </div>
                    </div>

                    <div className="mb-5 grid gap-3 md:grid-cols-3">
                      {[
                        { label: "Focus Score", value: "92", color: "bg-accent" },
                        { label: "Study Time", value: "14h", color: "bg-accent-support" },
                        { label: "Courses", value: "4", color: "bg-accent-soft" },
                      ].map(({ label, value, color }) => (
                        <div
                          key={label}
                          className="rounded-lg bg-bg-layer p-4 transition-colors hover:bg-bg-layer/80"
                        >
                          <div className={`mb-2 h-1.5 w-1.5 rounded-full ${color}`} />
                          <p className="font-heading text-xl font-semibold text-text-primary">
                            {value}
                          </p>
                          <p className="font-sans text-xs text-text-secondary">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-lg bg-bg-layer p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="font-sans text-xs font-medium text-text-primary">
                            Course Progress
                          </span>
                          <span className="font-sans text-xs text-text-secondary">68%</span>
                        </div>
                        <div className="mb-3 h-1.5 w-full rounded-full bg-bg-primary">
                          <div className="h-1.5 w-[68%] rounded-full bg-accent" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-text-secondary">
                          <span>Python Fundamentals</span>
                          <span>12/18 lessons</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg bg-bg-layer p-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                          <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-sans text-xs font-medium text-text-primary">AI Suggestion</p>
                          <p className="font-sans text-xs text-text-secondary">Review functions & loops next</p>
                        </div>
                        <span className="font-sans text-xs text-accent">Now →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
