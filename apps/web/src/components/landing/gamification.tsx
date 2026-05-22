"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function Gamification() {
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
            Gamification
          </span>
          <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Learning that
            <br />
            <span className="text-text-secondary">keeps you coming back</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={itemVariants} className="rounded-xl border border-border-subtle/50 bg-bg-secondary p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">XP & Levels</h3>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline justify-between">
                <span className="font-heading text-3xl font-bold text-text-primary">Level 7</span>
                <span className="font-sans text-sm text-accent">+250 XP today</span>
              </div>
              <p className="mt-1 font-sans text-xs text-text-secondary">1,450 / 2,000 XP to Level 8</p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-layer">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }}
                className="h-1.5 rounded-full bg-accent"
              />
            </div>
            <div className="mt-6 space-y-2">
              {[
                { action: "Completed Python Basics", xp: "+50 XP" },
                { action: "Daily login bonus", xp: "+10 XP" },
                { action: "Quiz score 90%+", xp: "+30 XP" },
              ].map(({ action, xp }) => (
                <div key={action} className="flex items-center justify-between">
                  <span className="font-sans text-sm text-text-secondary">{action}</span>
                  <span className="font-sans text-xs text-accent">{xp}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-xl border border-border-subtle/50 bg-bg-secondary p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-support/10">
                <svg className="h-5 w-5 text-accent-support" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">Streaks</h3>
            </div>
            <div className="mb-6 flex items-end gap-3">
              <span className="font-heading text-5xl font-bold text-accent">12</span>
              <div className="pb-1">
                <p className="font-heading text-base font-semibold text-text-primary">Day Streak</p>
                <p className="font-sans text-xs text-text-secondary">Best: 28 days</p>
              </div>
            </div>
            <div className="flex gap-1.5">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex h-9 flex-1 items-center justify-center rounded-lg text-xs font-medium ${
                    i < 5
                      ? "bg-accent text-white"
                      : i === 5
                      ? "bg-accent/20 text-accent"
                      : "bg-bg-layer text-text-secondary"
                  }`}
                >
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-xl border border-border-subtle/50 bg-bg-secondary p-8 shadow-card md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft/10">
                <svg className="h-5 w-5 text-accent-soft" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary">Badges</h3>
            </div>
            <div className="mb-6 flex gap-3">
              {[
                { name: "Quick Starter", icon: "★" },
                { name: "Dedicated", icon: "●" },
                { name: "Scholar", icon: "◆" },
              ].map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-1 flex-col items-center gap-2 rounded-lg bg-bg-layer py-4 transition-all duration-200 hover:bg-bg-layer/80"
                >
                  <span className="text-xl text-accent">{icon}</span>
                  <span className="text-center font-sans text-xs text-text-secondary">{name}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-bg-layer p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-sans text-xs font-medium text-text-primary">Leaderboard</span>
                <span className="font-sans text-xs text-text-secondary">This Week</span>
              </div>
              <div className="space-y-2">
                {[
                  { rank: 1, name: "Sarah K.", xp: "2,450 XP" },
                  { rank: 2, name: "Alex M.", xp: "2,180 XP" },
                  { rank: 3, name: "You", xp: "1,890 XP" },
                ].map(({ rank, name, xp }) => (
                  <div
                    key={rank}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                      name === "You" ? "bg-accent/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-text-secondary">#{rank}</span>
                      <span className={`font-sans text-sm ${name === "You" ? "text-accent" : "text-text-primary"}`}>
                        {name}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-text-secondary">{xp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
