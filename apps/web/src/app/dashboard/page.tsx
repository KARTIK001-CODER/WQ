"use client";

import { WelcomeSection } from "@/components/dashboard/placeholder-widgets";
import { ContinueLearning } from "@/components/dashboard/placeholder-widgets";
import { QuickActions } from "@/components/dashboard/placeholder-widgets";
import { LearningStreak } from "@/components/dashboard/placeholder-widgets";
import { ProductivityWidget } from "@/components/dashboard/placeholder-widgets";
import { AnalyticsPreview } from "@/components/dashboard/analytics-preview";
import { SectionContainer } from "@/components/dashboard/section-container";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import {
  GraduationCap,
  NotePencil,
  ArrowRight,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

const easing = [0.25, 0.1, 0.25, 1] as const;

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

const inProgressColor = (i: number) => {
  const colors = ["accent", "accent-support", "accent-soft"];
  return colors[i % colors.length];
};

export default function DashboardPage() {
  const recentCourses = [
    {
      title: "Machine Learning Engineering for Production",
      progress: 68,
      lectures: "17/25",
    },
    {
      title: "Distributed Systems Architecture",
      progress: 42,
      lectures: "14/33",
    },
    {
      title: "Advanced Cloud-Native Patterns",
      progress: 86,
      lectures: "36/42",
    },
  ];

  const recentNotes = [
    { title: "Consensus Algorithms (Raft vs Paxos)", time: "2h ago" },
    { title: "Microservices Deployment Strategies", time: "5h ago" },
    { title: "Model Serving Latency Optimization", time: "1d ago" },
  ];

  const upcomingTasks = [
    { title: "Complete Distributed Tracing Lab", due: "Today", priority: "high" },
    { title: "Review ML Pipeline Architecture", due: "Tomorrow", priority: "medium" },
    { title: "Read CAP Theorem Paper", due: "In 2 days", priority: "low" },
    { title: "Design High Availability DB Schema", due: "This week", priority: "low" },
  ];

  const weeklyData = [40, 65, 35, 80, 55, 25, 45];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="max-w-7xl mx-auto pb-20 px-4 md:px-8 space-y-10"
    >
      {/* Welcome */}
      <motion.div variants={itemVariants}>
        <WelcomeSection />
      </motion.div>

      {/* Continue Learning + Quick Actions */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-8"
      >
        <SectionContainer title="Continue Learning">
          <ContinueLearning />
        </SectionContainer>
        <SectionContainer title="Quick Actions">
          <QuickActions />
        </SectionContainer>
      </motion.div>

      {/* Analytics Preview */}
      <motion.div variants={itemVariants}>
        <SectionContainer
          title="This Week"
          subtitle="Your learning analytics dashboard"
        >
          <AnalyticsPreview />
        </SectionContainer>
      </motion.div>

      {/* Productivity + Streak */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8"
      >
        <DashboardCard variant="primary" padding="md">
          <SectionContainer title="Focus Session">
            <ProductivityWidget />
          </SectionContainer>
        </DashboardCard>

        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Learning Streak">
            <LearningStreak />
          </SectionContainer>
        </DashboardCard>
      </motion.div>

      {/* In Progress + Weekly Activity */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8"
      >
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="In Progress"
            action={
              <button suppressHydrationWarning className="text-[10px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.02] border border-white/[0.03]">
                View all <ArrowRight size={10} />
              </button>
            }
          >
            <div className="space-y-4 mt-2">
              {recentCourses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 + i * 0.05 }}
                  className="group cursor-pointer p-2.5 -mx-2.5 rounded-xl hover:bg-white/[0.01] border border-transparent hover:border-white/[0.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg bg-${inProgressColor(
                        i
                      )}/10 border border-${inProgressColor(i)}/20 flex items-center justify-center shrink-0 shadow-inner`}
                    >
                      <GraduationCap
                        size={14}
                        className={`text-${inProgressColor(i)}/85`}
                      />
                    </div>
                    <span className="text-sm font-semibold text-text-primary/90 group-hover:text-accent transition-colors duration-300 truncate">
                      {course.title}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[10px] font-bold text-text-secondary/40 mb-2 ml-10">
                    <span className="tabular-nums uppercase tracking-wide">{course.lectures} lectures</span>
                    <span className="tabular-nums text-text-secondary/60">{course.progress}%</span>
                  </div>
                  
                  <div className="ml-10 w-full h-[4px] rounded-full bg-bg-primary border border-white/[0.02] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        delay: 0.2 + i * 0.05,
                      }}
                      className="h-full rounded-full relative"
                      style={{ backgroundColor: `var(--color-${inProgressColor(i)})` }}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-20" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>

        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Weekly Activity">
            <div className="flex items-end gap-2.5 h-32 pt-6">
              {weeklyData.map((height, i) => {
                const barColors = [
                  "from-accent/60 to-accent/20",
                  "from-accent-support/60 to-accent-support/20",
                  "from-accent-soft/50 to-accent-soft/15",
                  "from-accent/70 to-accent/30",
                  "from-accent-support/50 to-accent-support/15",
                  "from-accent-soft/40 to-accent-soft/10",
                  "from-accent/50 to-accent/20",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: i * 0.04,
                    }}
                    className="flex-1 rounded-t-md bg-white/[0.01] border-x border-t border-white/[0.02] relative overflow-hidden cursor-pointer group/bar h-full"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: i * 0.04,
                      }}
                      className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${barColors[i % barColors.length]} rounded-t-md`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-full rounded-t-md hover:bg-white/[0.03] transition-colors duration-300" />
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-300 text-[10px] text-accent font-bold whitespace-nowrap tabular-nums">
                      {height}h
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex justify-between mt-4 text-[9px] font-bold text-text-secondary/40 uppercase tracking-wider px-1">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </SectionContainer>
        </DashboardCard>
      </motion.div>

      {/* Notes + Upcoming */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8"
      >
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="Recent Notes"
            action={
              <button suppressHydrationWarning className="text-[10px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.02] border border-white/[0.03]">
                View all <ArrowRight size={10} />
              </button>
            }
          >
            <div className="space-y-1 mt-2">
              {recentNotes.map((note, i) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.04 }}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.01] border border-transparent hover:border-white/[0.02] transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center shrink-0 group-hover:bg-accent/[0.06] group-hover:border-accent/20 transition-all duration-300">
                    <NotePencil
                      size={14}
                      className="text-text-secondary/40 shrink-0 group-hover:text-accent transition-colors duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-primary/95 group-hover:text-accent transition-colors duration-300 truncate">
                      {note.title}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-text-secondary/40 shrink-0 uppercase tracking-wider tabular-nums">
                    {note.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>

        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="Upcoming"
            action={
              <button suppressHydrationWarning className="text-[10px] font-bold uppercase tracking-wider text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.02] border border-white/[0.03]">
                View all <ArrowRight size={10} />
              </button>
            }
          >
            <div className="space-y-1 mt-2">
              {upcomingTasks.map((task, i) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.04 }}
                  className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.01] border border-transparent hover:border-white/[0.02] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-text-primary/95 group-hover:text-accent transition-colors duration-300 truncate">
                      {task.title}
                    </p>
                  </div>
                  
                  {/* Styled task priority indicator badge */}
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded border ${
                    task.priority === "high"
                      ? "bg-accent/10 border-accent/20 text-accent"
                      : task.priority === "medium"
                        ? "bg-accent-soft/10 border-accent-soft/20 text-accent-soft"
                        : "bg-white/5 border-white/10 text-text-secondary/60"
                  }`}>
                    {task.priority}
                  </span>
                  
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider shrink-0 ${
                      task.due === "Today"
                        ? "text-accent"
                        : "text-text-secondary/40"
                    }`}
                  >
                    {task.due}
                  </span>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>
      </motion.div>
    </motion.div>
  );
}
