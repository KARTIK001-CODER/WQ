"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Active Students" },
  { value: "2.5K+", label: "Expert Educators" },
  { value: "1.2M", label: "Learning Hours" },
  { value: "94%", label: "Completion Rate" },
];

export function LandingTrustBar() {
  return (
    <section className="bg-[#F6F3EE] border-t border-b border-[rgba(30,30,28,0.06)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="py-10 md:py-12 text-center transition-all duration-200"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(30,30,28,0.05)" : undefined,
                borderBottom: i < 2 ? "1px solid rgba(30,30,28,0.05)" : undefined,
              }}
            >
              <p className="text-[clamp(28px,3vw,36px)] text-[#1E1E1C] tabular-nums" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
                {stat.value}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mt-1.5 text-[#A8A8A5]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
