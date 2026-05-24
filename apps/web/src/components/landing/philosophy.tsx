"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Deep Learning",
    description:
      "We believe understanding takes time. Aethera is built for sustained focus, not quick consumption. Every feature serves depth over speed.",
    accent: "moss",
  },
  {
    title: "Calm Productivity",
    description:
      "Every surface is designed to disappear. The platform serves your focus, not the other way around. No notifications, no noise, no distraction.",
    accent: "ember",
  },
  {
    title: "Intentional Design",
    description:
      "Every detail is crafted with purpose. Nothing is added without reason. The result is a workspace that feels quiet, capable, and considered.",
    accent: "slate",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-32 md:py-40 bg-bg"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-divider-strong" />
              <span className="meta-label">Philosophy</span>
            </div>
            <h2
              className="font-display text-ink leading-[1.05] -tracking-[0.02em]"
              style={{
                fontWeight: 300,
                fontSize: "clamp(36px, 5vw, 64px)",
              }}
            >
              Built for
              <br />
              <span className="italic text-ink-2">depth.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {principles.map((principle, i) => {
              const borderColor =
                principle.accent === "ember"
                  ? "border-l-ember"
                  : principle.accent === "slate"
                    ? "border-l-slate"
                    : "border-l-moss";
              const textColor =
                principle.accent === "ember"
                  ? "text-ember"
                  : principle.accent === "slate"
                    ? "text-slate"
                    : "text-moss";

              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1,
                  }}
                  className={`rounded-sm bg-surface border border-card-border border-l-[3px] p-[28px] ${borderColor}`}
                >
                  <span
                    className={`meta-label block mb-3 ${textColor}`}
                  >
                    {principle.title}
                  </span>
                  <p className="text-base leading-relaxed text-ink">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
