"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Aethera completely changed how I approach learning. The AI tutor feels like having a patient mentor available 24/7. I've progressed further in 3 months than I did in a year of self-study.",
    name: "Emily Chen",
    role: "Computer Science Student",
  },
  {
    quote:
      "The analytics alone are worth it. I can finally see exactly where I'm spending my time and where I need to focus. It's like having a personal learning coach.",
    name: "Marcus Johnson",
    role: "Data Scientist",
  },
  {
    quote:
      "What sets Aethera apart is the design. Everything feels intentional and calm. There's no noise — just pure, focused learning. The first platform that actually makes me want to study.",
    name: "Priya Sharma",
    role: "UX Designer",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-36 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Testimonials
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Loved by
            <br />
            <span className="text-text-secondary">learners worldwide</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {testimonials.map(({ quote, name, role }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="group rounded-xl border border-border-subtle/50 bg-bg-secondary p-8 transition-all duration-300 hover:border-border-mid hover:bg-bg-layer"
            >
              <div className="mb-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-3 w-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-8 font-sans text-sm leading-relaxed text-text-secondary">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <div className="border-t border-border-subtle/30 pt-4">
                <p className="font-sans text-sm font-medium text-text-primary">{name}</p>
                <p className="font-sans text-xs text-text-secondary">{role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
