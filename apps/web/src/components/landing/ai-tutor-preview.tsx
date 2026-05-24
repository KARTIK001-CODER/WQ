"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkle } from "@phosphor-icons/react";

const suggestions = [
  "Visualize layers",
  "Compare activations",
  "Training tips",
];

export function AiTutorPreview() {
  return (
    <section id="ai-tutor" className="py-32 md:py-40 bg-bg">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-divider-strong" />
              <span className="meta-label text-slate">AI Intelligence</span>
            </div>
            <h2
              className="font-display text-ink leading-[1.05] -tracking-[0.02em]"
              style={{
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 64px)",
              }}
            >
              Intelligence,
              <br />
              <span className="italic text-slate">where you need it.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-2 max-w-[400px]">
              Aethera&apos;s AI works alongside you &mdash; not as a chatbot,
              but as a contextual tutor that understands what you&apos;re
              learning and helps you go deeper.
            </p>
            <Link
              href="/ai/tutor"
              className="mt-6 inline-flex text-xs font-medium text-slate hover:opacity-80 transition-opacity duration-200"
            >
              Explore AI Tutor &rarr;
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.15,
            }}
            className="rounded-xl overflow-hidden bg-surface border border-card-border shadow-raised group cursor-pointer"
          >
            <Link href="/ai/tutor" className="block">
            <div className="h-10 flex items-center gap-2 px-4 border-b border-divider">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <Sparkle size={14} className="text-slate" />
                <span className="meta-label text-slate">AI Context</span>
              </div>

              <p className="text-sm leading-relaxed text-ink mb-5">
                Based on your current lecture, here is a simplified explanation
                of the concept being discussed.
              </p>

              <div className="p-4 rounded-lg bg-[rgba(92,122,155,0.06)] border border-[rgba(92,122,155,0.12)] border-l-[3px] border-l-slate mb-5">
                <p className="text-sm leading-relaxed text-ink-2">
                  &ldquo;A neural network is a function composition. Each layer
                  transforms its input through a weighted sum followed by a
                  non-linear activation. What makes them powerful is that with
                  enough layers, they can approximate almost any function.&rdquo;
                </p>
              </div>

              <span className="meta-label text-ink-3 block mb-3">
                Suggested explorations
              </span>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <span
                    key={suggestion}
                    className="px-3 py-1.5 rounded-sm text-xs text-slate bg-[rgba(92,122,155,0.08)] border border-[rgba(92,122,155,0.12)]"
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
