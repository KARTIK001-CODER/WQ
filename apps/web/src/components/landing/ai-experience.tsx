"use client";

import { motion } from "framer-motion";

export default function AiExperience() {
  return (
    <section id="ai" className="relative py-36 md:py-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            AI Learning
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            An AI tutor that
            <br />
            <span className="text-text-secondary">truly understands</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border-subtle/50 bg-bg-secondary shadow-elevated"
        >
          <div className="flex items-center gap-3 border-b border-border-subtle/50 px-6 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
              <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm font-medium text-text-primary">Aethera AI</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-support" />
              </div>
              <span className="font-sans text-xs text-accent-support">Active · Ready to help</span>
            </div>
          </div>

          <div className="space-y-4 px-6 py-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-end"
            >
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-accent/10 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-text-primary">
                  Can you help me understand recursion in Python?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-start"
            >
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-bg-layer px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-text-primary">
                  Of course. Recursion is when a function calls itself to solve smaller instances of the same problem. Think of it like Russian nesting dolls — each doll contains a smaller version of itself.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <code className="rounded bg-bg-primary px-2 py-1 font-mono text-xs text-accent">
                    def factorial(n):
                  </code>
                  <span className="font-sans text-xs text-text-secondary">Example</span>
                </div>
                <div className="mt-3 flex items-center gap-4 border-t border-border-subtle/30 pt-3">
                  <span className="font-sans text-xs text-text-secondary">Helpful?</span>
                  <span className="font-sans text-xs text-accent cursor-pointer">Yes</span>
                  <span className="font-sans text-xs text-text-secondary cursor-pointer hover:text-text-primary">No</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-end"
            >
              <div className="max-w-[75%] rounded-2xl rounded-br-md bg-accent/10 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-text-primary">
                  Can you show me a practical example?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-start"
            >
              <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-accent/5 px-5 py-3.5">
                <p className="font-sans text-sm leading-relaxed text-text-primary">
                  Here&apos;s a simple recursive function that calculates the sum of a list...
                </p>
                <div className="mt-2 h-1 w-2/3 animate-pulse rounded-full bg-bg-layer" />
                <div className="mt-1 h-1 w-1/2 animate-pulse rounded-full bg-bg-layer" />
                <div className="mt-1 h-1 w-3/4 animate-pulse rounded-full bg-bg-layer" />
              </div>
            </motion.div>
          </div>

          <div className="flex items-center gap-3 border-t border-border-subtle/50 px-6 py-4">
            <div className="flex-1 rounded-lg border border-border-subtle bg-bg-primary px-4 py-2.5">
              <span className="font-sans text-sm text-text-secondary">Ask anything about your course...</span>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
