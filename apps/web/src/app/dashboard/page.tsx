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
  BookmarkSimple,
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
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export default function DashboardPage() {
  const recentCourses = [
    {
      title: "Advanced React Patterns",
      progress: 62,
      lectures: "12/19",
    },
    {
      title: "Data Structures & Algorithms",
      progress: 34,
      lectures: "8/24",
    },
    {
      title: "System Design Fundamentals",
      progress: 78,
      lectures: "14/18",
    },
  ];

  const recentNotes = [
    { title: "useReducer vs useState", time: "2h ago" },
    { title: "Binary Search Variants", time: "5h ago" },
    { title: "Database Indexing Strategies", time: "1d ago" },
  ];

  const upcomingTasks = [
    { title: "Complete React Quiz", due: "Today" },
    { title: "DSA Problem Set 4", due: "Tomorrow" },
    { title: "Review System Design Notes", due: "In 2 days" },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="max-w-7xl mx-auto pb-16"
    >
      {/* Welcome */}
      <motion.div variants={itemVariants}>
        <WelcomeSection />
      </motion.div>

      {/* Continue Learning + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        <div className="lg:col-span-2">
          <motion.div variants={itemVariants}>
            <SectionContainer title="Continue Learning">
              <ContinueLearning />
            </SectionContainer>
          </motion.div>
        </div>
        <div>
          <motion.div variants={itemVariants}>
            <SectionContainer title="Quick Actions">
              <QuickActions />
            </SectionContainer>
          </motion.div>
        </div>
      </div>

      {/* Analytics Preview */}
      <motion.div variants={itemVariants} className="mb-12">
        <SectionContainer
          title="This Week"
          subtitle="Your learning at a glance"
        >
          <AnalyticsPreview />
        </SectionContainer>
      </motion.div>

      {/* Bottom Grid */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
      >
        {/* Learning Streak */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Learning Streak">
            <LearningStreak />
          </SectionContainer>
        </DashboardCard>

        {/* Productivity */}
        <DashboardCard variant="primary" padding="md">
          <SectionContainer title="Productivity">
            <ProductivityWidget />
          </SectionContainer>
        </DashboardCard>

        {/* In Progress */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="In Progress"
            action={
              <button className="text-[11px] font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                View all <ArrowRight size={12} />
              </button>
            }
          >
            <div className="space-y-4">
              {recentCourses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <GraduationCap
                      size={14}
                      className="text-accent-soft/60 shrink-0"
                    />
                    <span className="text-sm font-medium text-text-primary/90 group-hover:text-accent transition-colors duration-200 truncate">
                      {course.title}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-text-secondary/50 mb-2 ml-7">
                    <span>{course.lectures} lectures</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="ml-7 w-full h-[5px] rounded-full bg-bg-secondary/80 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className="h-full rounded-full bg-accent relative"
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/60 opacity-40 blur-[2px]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>

        {/* Recent Notes */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="Recent Notes"
            action={
              <button className="text-[11px] font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                View all <ArrowRight size={12} />
              </button>
            }
          >
            <div className="space-y-1">
              {recentNotes.map((note, i) => (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-hover-bg transition-colors duration-200 cursor-pointer group"
                >
                  <NotePencil
                    size={14}
                    className="text-accent-soft/40 shrink-0 group-hover:text-accent-soft/70 transition-colors duration-200"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary/80 group-hover:text-text-primary transition-colors duration-200 truncate">
                      {note.title}
                    </p>
                  </div>
                  <span className="text-[10px] text-text-secondary/40 shrink-0">
                    {note.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>

        {/* Upcoming Tasks */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="Upcoming"
            action={
              <button className="text-[11px] font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                View all <ArrowRight size={12} />
              </button>
            }
          >
            <div className="space-y-1">
              {upcomingTasks.map((task, i) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-hover-bg transition-colors duration-200 cursor-pointer group"
                >
                  <BookmarkSimple
                    size={14}
                    className="text-accent/50 shrink-0 group-hover:text-accent/80 transition-colors duration-200"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-text-primary/80 group-hover:text-text-primary transition-colors duration-200 truncate">
                      {task.title}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-medium shrink-0 ${
                      task.due === "Today"
                        ? "text-accent"
                        : "text-text-secondary/50"
                    }`}
                  >
                    {task.due}
                  </span>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </DashboardCard>

        {/* Weekly Activity */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Weekly Activity">
            <div className="flex items-end gap-1.5 h-24 pt-2">
              {[40, 65, 35, 80, 55, 25, 45].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex-1 rounded-t-[4px] bg-accent/15 hover:bg-accent/30 transition-colors duration-200 cursor-pointer relative group/bar"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 text-[10px] text-accent font-medium whitespace-nowrap">
                    {height}h
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between mt-3 text-[10px] text-text-secondary/40">
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
    </motion.div>
  );
}
