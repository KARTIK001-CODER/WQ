"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote: "Aethera completely changed how I approach learning. The AI tutor feels like having a patient mentor available 24/7. I've progressed further in 3 months than I did in a year of self-study.",
    name: "Emily Chen",
    role: "Computer Science Student",
    accent: "#C1622F",
  },
  {
    quote: "What sets Aethera apart is the design. Everything feels intentional and calm. There's no noise — just pure, focused learning. The first platform that actually makes me want to study.",
    name: "Priya Sharma",
    role: "UX Designer",
    accent: "#5C7A9B",
  },
  {
    quote: "The analytics alone are worth it. I can finally see exactly where I'm spending my time and where I need to focus. It's like having a personal learning coach.",
    name: "Marcus Johnson",
    role: "Data Scientist",
    accent: "#4E7C6B",
  },
];

export function LandingTestimonials() {
  const id = useId();

  return (
    <section className="py-28 md:py-36 bg-[#F6F3EE]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[rgba(30,30,28,0.25)]" />
            <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#6B6B68]">What Learners Say</span>
          </div>
          <h2 className="text-[clamp(36px,5vw,56px)] leading-[1.1] -tracking-[0.02em] text-[#1E1E1C]" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>
            Trusted by
            <br />
            <span className="italic text-[#6B6B68]" style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}>serious learners.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${id}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="rounded-sm flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(30,30,28,0.08)",
                borderLeft: `3px solid ${t.accent}`,
                padding: "32px 28px",
              }}
            >
              <Quotes size={20} weight="fill" style={{ color: t.accent, opacity: 0.2 }} className="mb-4" />
              <blockquote className="flex-1">
                <p className="text-sm leading-relaxed mb-6 text-[#6B6B68]">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div className="pt-5 border-t border-[rgba(30,30,28,0.06)]">
                <p className="text-sm font-semibold text-[#1E1E1C]">{t.name}</p>
                <p className="text-[10px] font-semibold tracking-[0.12em] uppercase mt-0.5 text-[#A8A8A5]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
