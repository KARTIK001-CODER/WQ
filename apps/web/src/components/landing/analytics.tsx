"use client";

import { motion } from "framer-motion";

export default function Analytics() {
  return (
    <section id="analytics" className="relative py-36 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Analytics
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Understand your
            <br />
            <span className="text-text-secondary">learning patterns</span>
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
            <h3 className="font-heading text-sm font-semibold text-text-primary">Learning Dashboard</h3>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-accent/10 px-3 py-1 font-sans text-xs text-accent">
                This Month
              </span>
              <span className="font-sans text-xs text-text-secondary">vs last month</span>
            </div>
          </div>

          <div className="grid gap-px bg-border-subtle/30 md:grid-cols-3">
            {[
              { label: "Focus Score", value: "87", unit: "%", change: "+5%" },
              { label: "Study Time", value: "42", unit: "hrs", change: "+12%" },
              { label: "Courses Active", value: "3", unit: "", change: "On track" },
            ].map(({ label, value, unit, change }) => (
              <div key={label} className="bg-bg-secondary p-8">
                <p className="font-sans text-sm text-text-secondary">{label}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-bold text-text-primary">{value}</span>
                  <span className="font-sans text-sm text-text-secondary">{unit}</span>
                </div>
                <p className="mt-2 font-sans text-xs text-accent-support">{change}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-px bg-border-subtle/30 md:grid-cols-2">
            <div className="bg-bg-secondary p-8">
              <p className="mb-6 font-sans text-sm font-medium text-text-primary">Weekly Activity</p>
              <div className="flex items-end gap-3">
                {[35, 55, 42, 78, 65, 48, 52].map((height, i) => {
                  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                  return (
                    <div key={i} className="flex flex-1 flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: height * 1.4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] as const }}
                        className="w-full rounded-sm bg-accent/50 transition-all duration-300 hover:bg-accent"
                        style={{ height: `${height * 1.4}px` }}
                      />
                      <span className="font-sans text-[10px] text-text-secondary">{days[i]}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-bg-secondary p-8">
              <p className="mb-6 font-sans text-sm font-medium text-text-primary">Productivity Insights</p>
              <div className="space-y-5">
                {[
                  { label: "Morning (6-12)", pct: 42 },
                  { label: "Afternoon (12-6)", pct: 35 },
                  { label: "Evening (6-12)", pct: 23 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-sans text-sm text-text-secondary">{label}</span>
                      <span className="font-sans text-sm font-medium text-text-primary">{pct}%</span>
                    </div>
                    <div className="h-2 w-full rounded-sm bg-bg-layer">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as const }}
                        className="h-2 rounded-sm bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border-subtle/50 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-sans text-xs text-text-secondary">Progress trend</span>
            </div>
            <span className="font-sans text-xs text-accent-support">+8% improvement this month</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
