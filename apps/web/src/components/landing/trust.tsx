"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50,000+", label: "Active Students" },
  { value: "2,500+", label: "Expert Educators" },
  { value: "1.2M", label: "Learning Hours" },
  { value: "94%", label: "Completion Rate" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Trust() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-0 md:grid-cols-4"
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className={`py-16 text-center ${
                i < 2 ? "border-b border-border-subtle/50 md:border-b-0" : ""
              } ${i < 3 ? "md:border-r md:border-border-subtle/50" : ""}`}
            >
              <p className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {value}
              </p>
              <p className="mt-1.5 font-sans text-sm text-text-secondary">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
