"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Start a Course",
    description: "Browse curated courses or let AI recommend the perfect learning path based on your goals.",
  },
  {
    number: "02",
    title: "Learn Interactively",
    description: "Watch smart videos with timestamped notes, AI explanations, and built-in quizzes.",
  },
  {
    number: "03",
    title: "Practice & Review",
    description: "Reinforce knowledge with AI-generated exercises, spaced repetition, and progress tracking.",
  },
  {
    number: "04",
    title: "Track & Grow",
    description: "Monitor your focus score, study patterns, and unlock achievements as you advance.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Workflow() {
  return (
    <section className="relative py-36 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Student Workflow
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            From start to
            <br />
            <span className="text-text-secondary">mastery in four steps</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ number, title, description }) => (
            <motion.div
              key={number}
              variants={itemVariants}
              className="group rounded-xl border border-border-subtle/50 bg-bg-secondary p-8 transition-all duration-300 hover:border-border-mid hover:bg-bg-layer"
            >
              <span className="font-heading text-3xl font-bold text-accent/30 transition-colors duration-300 group-hover:text-accent/60">
                {number}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
