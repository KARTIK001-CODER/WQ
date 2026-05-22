"use client";

import { motion } from "framer-motion";

export default function Collaboration() {
  return (
    <section className="relative py-36 md:py-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-accent-support/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-support">
            Collaboration
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Learn together,
            <br />
            <span className="text-text-secondary">grow together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="overflow-hidden rounded-xl border border-border-subtle/50 bg-bg-secondary shadow-elevated"
        >
          <div className="flex items-center justify-between border-b border-border-subtle/50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["bg-accent", "bg-accent-support", "bg-accent-soft"].map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${color} text-[10px] font-medium text-white`}
                  >
                    {["S", "M", "J"][i]}
                  </div>
                ))}
              </div>
              <span className="font-sans text-sm font-medium text-text-primary">Study Group · Algorithms</span>
            </div>
            <span className="font-sans text-xs text-accent-support">4 active members</span>
          </div>

          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3 border-r border-border-subtle/50">
              <div className="space-y-0">
                {[
                  { name: "Sarah", text: "Has anyone finished the recursion assignment?", time: "2m ago" },
                  { name: "Marcus", text: "Almost done! The DFS traversal part was tricky.", time: "1m ago" },
                  { name: "You", text: "I can help with DFS — just solved it.", time: "Just now" },
                  { name: "Sarah", text: "That would be great! Can you share your approach?", time: "Just now" },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className={`border-b border-border-subtle/30 px-6 py-4 transition-colors hover:bg-bg-layer/50 ${
                      msg.name === "You" ? "bg-accent/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-sans text-xs font-medium text-text-primary">{msg.name}</span>
                      <span className="font-sans text-[10px] text-text-secondary">{msg.time}</span>
                    </div>
                    <p className="font-sans text-sm text-text-secondary">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 px-6 py-4">
                <div className="flex-1 rounded-lg border border-border-subtle bg-bg-primary px-4 py-2.5">
                  <span className="font-sans text-sm text-text-secondary">Share your thoughts...</span>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-support">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-6">
              <h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-wider text-text-primary">
                Shared Workspace
              </h4>
              <div className="rounded-lg bg-bg-layer p-4 font-mono text-xs">
                <div className="text-accent">def&nbsp;dfs(graph,&nbsp;start,&nbsp;visited=None):</div>
                <div className="pl-4 text-text-secondary">if&nbsp;visited&nbsp;is&nbsp;None:</div>
                <div className="pl-8 text-text-secondary">visited&nbsp;=&nbsp;set()</div>
                <div className="pl-4 text-text-secondary">visited.add(start)</div>
                <div className="pl-4 text-text-secondary">print(start,&nbsp;end=&quot;&nbsp;&quot;)</div>
                <div className="pl-4 text-text-primary">for&nbsp;neighbor&nbsp;in&nbsp;graph[start]:</div>
                <div className="pl-8 text-text-secondary">if&nbsp;neighbor&nbsp;not&nbsp;in&nbsp;visited:</div>
                <div className="pl-12 text-accent">dfs(graph,&nbsp;neighbor,&nbsp;visited)</div>
                <div className="mt-2 text-accent-support">← Sarah is typing...</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
