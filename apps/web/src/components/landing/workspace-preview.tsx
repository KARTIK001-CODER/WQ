"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const lectureItems = [
  { label: "Introduction", time: "0:00", active: false },
  { label: "Neuron Architecture", time: "4:32", active: true },
  { label: "Activation Functions", time: "12:15", active: false },
  { label: "Backpropagation", time: "22:40", active: false },
  { label: "Training Loop", time: "33:10", active: false },
];

export function WorkspacePreview() {
  return (
    <section id="workspace" className="py-32 md:py-40 bg-sidebar">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[rgba(255,255,255,0.15)]" />
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[rgba(255,255,255,0.35)]">
              Workspace
            </span>
          </div>
          <h2
            className="font-display leading-[1.05] -tracking-[0.02em] text-[rgba(255,255,255,0.92)]"
            style={{
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            The workspace.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[rgba(255,255,255,0.45)] max-w-[440px]">
            A single, thoughtful environment for watching lectures, taking
            notes, and exploring ideas &mdash; all without leaving your flow.
          </p>
          <Link
            href="/dashboard/courses"
            className="mt-6 inline-flex text-xs font-medium text-ember hover:opacity-80 transition-opacity duration-200"
          >
            Explore courses &rarr;
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
          className="relative -mx-8 md:-mx-12 lg:mx-0 rounded-xl overflow-hidden bg-[#0F0F0D] border border-[rgba(255,255,255,0.06)] group cursor-pointer"
        >
          <Link href="/learn/course-1/lec-4" className="block">
          <div className="h-12 flex items-center px-5 border-b border-[rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.15)]" />
            </div>
            <div className="ml-5 flex items-center gap-2">
              <span className="text-[11px] font-medium text-[rgba(255,255,255,0.3)]">
                CS 229 &middot; Machine Learning
              </span>
              <span className="text-[11px] text-[rgba(255,255,255,0.15)]">
                /
              </span>
              <span className="text-[11px] text-[rgba(255,255,255,0.5)]">
                Lecture 12 &middot; Neural Networks
              </span>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row"
            style={{ minHeight: "480px" }}
          >
            <div className="flex-1 bg-[#080807] flex items-center justify-center relative">
              <div className="w-14 h-14 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                <div className="w-3.5 h-3.5 ml-0.5 border-l-2 border-b-2 border-[rgba(255,255,255,0.3)] -rotate-45" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 flex items-center px-5 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent">
                <div className="flex-1 h-[2px] rounded-full bg-[rgba(255,255,255,0.12)] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-ember"
                    style={{ width: "38%" }}
                  />
                </div>
                <span className="ml-4 text-[11px] text-[rgba(255,255,255,0.3)] font-mono">
                  15:22 / 42:08
                </span>
              </div>
            </div>

            <div className="w-full lg:w-[280px] shrink-0 border-t lg:border-t-0 lg:border-l border-[rgba(255,255,255,0.06)] p-5 flex flex-col gap-3 bg-[rgba(255,255,255,0.02)]">
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[rgba(255,255,255,0.25)]">
                Lecture Content
              </span>

              {lectureItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-3 py-2 rounded-sm"
                  style={{
                    backgroundColor: item.active
                      ? "rgba(193, 98, 47, 0.08)"
                      : "transparent",
                    borderLeft: item.active
                      ? "2px solid #C1622F"
                      : "2px solid transparent",
                  }}
                >
                  <span
                    className="text-xs"
                    style={{
                      color: item.active
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {item.label}
                  </span>
                  <span className="ml-auto text-[10px] text-[rgba(255,255,255,0.25)]">
                    {item.time}
                  </span>
                </div>
              ))}

              <div className="h-px bg-[rgba(255,255,255,0.06)] my-2" />
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[rgba(255,255,255,0.25)]">
                Your Notes
              </span>
              <div className="p-3 rounded-sm bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] min-h-[80px]">
                <div className="h-2 rounded w-[85%] bg-[rgba(255,255,255,0.08)] mb-2" />
                <div className="h-2 rounded w-[60%] bg-[rgba(255,255,255,0.08)] mb-2" />
                <div className="h-2 rounded w-[70%] bg-[rgba(255,255,255,0.06)]" />
              </div>
            </div>
          </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
