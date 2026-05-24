"use client";

import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import {
  WelcomeSection,
  ContinueLearning,
  QuickActions,
  LearningStreak,
  ProductivityWidget,
} from "@/components/dashboard/placeholder-widgets";
import { AnalyticsPreview } from "@/components/dashboard/analytics-preview";
import { SectionContainer } from "@/components/dashboard/section-container";
import { DashboardCard } from "@/components/dashboard/dashboard-card";
import { NotePencil, ArrowRight, BookOpen } from "@phosphor-icons/react";

const easing = [0.16, 1, 0.3, 1] as const;

const stagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07 } },
};

const fadeUp: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

const recentNotes = [
  { title: "Consensus Algorithms — Raft vs Paxos", time: "2h ago" },
  { title: "Microservices Deployment Strategies", time: "5h ago" },
  { title: "Model Serving Latency Optimization", time: "1d ago" },
];

const recentCourses = [
  {
    title: "Machine Learning Engineering for Production",
    progress: 68,
    lectures: "17 / 25",
    color: "#C1622F",
  },
  {
    title: "Distributed Systems Architecture",
    progress: 42,
    lectures: "14 / 33",
    color: "#5C7A9B",
  },
  {
    title: "Advanced Cloud-Native Patterns",
    progress: 86,
    lectures: "36 / 42",
    color: "#4E7C6B",
  },
];

export default function DashboardPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className="max-w-6xl mx-auto pb-16 space-y-10"
    >
      {/* ── Welcome ── */}
      <motion.div variants={fadeUp}>
        <WelcomeSection />
      </motion.div>

      {/* ── Primary row: Continue Learning + Quick Actions ── */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6"
      >
        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Continue Learning">
            <ContinueLearning />
          </SectionContainer>
        </DashboardCard>

        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Quick Actions">
            <QuickActions />
          </SectionContainer>
        </DashboardCard>
      </motion.div>

      {/* ── Analytics — intentionally full-width, dominant ── */}
      <motion.div variants={fadeUp}>
        <DashboardCard
          variant="left-border"
          accentColor="ember"
          padding="md"
        >
          <SectionContainer
            title="This Week"
            subtitle="Your learning rhythm at a glance"
          >
            <AnalyticsPreview />
          </SectionContainer>
        </DashboardCard>
      </motion.div>

      {/* ── Productivity + Streak ── */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Today's Focus">
            <ProductivityWidget />
          </SectionContainer>
        </DashboardCard>

        <DashboardCard variant="default" padding="md">
          <SectionContainer title="Learning Streak">
            <LearningStreak />
          </SectionContainer>
        </DashboardCard>
      </motion.div>

      {/* ── In Progress + Recent Notes ── */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* In Progress */}
        <DashboardCard variant="default" padding="md">
          <SectionContainer
            title="In Progress"
            action={
              <a
                href="/dashboard/courses"
                className="flex items-center gap-1 text-[10px] font-semibold tracking-widest uppercase transition-colors duration-150"
                style={{ color: "#A8A8A5" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#1E1E1C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#A8A8A5")
                }
              >
                View all <ArrowRight size={10} />
              </a>
            }
          >
            <div className="space-y-4 mt-1">
              {recentCourses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + i * 0.05,
                  }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-2.5 mb-2">
                    <div
                      className="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${course.color}15` }}
                    >
                      <BookOpen size={11} style={{ color: course.color }} />
                    </div>
                    <p
                      className="text-sm font-medium leading-snug flex-1 min-w-0"
                      style={{ color: "#1E1E1C" }}
                    >
                      {course.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mb-1.5 ml-7">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: "#A8A8A5" }}
                    >
                      {course.lectures} lectures
                    </span>
                    <span
                      className="text-[10px] font-semibold tabular-nums"
                      style={{ color: "#6B6B68" }}
                    >
                      {course.progress}%
                    </span>
                  </div>
                  <div className="ml-7">
                    <div
                      className="w-full rounded-full overflow-hidden"
                      style={{
                        height: "2px",
                        backgroundColor: "rgba(30,30,28,0.08)",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.2 + i * 0.08,
                        }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: course.color }}
                      />
                    </div>
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
              <a
                href="/dashboard/notes"
                className="flex items-center gap-1 text-[10px] font-semibold tracking-widest uppercase transition-colors duration-150"
                style={{ color: "#A8A8A5" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#1E1E1C")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#A8A8A5")
                }
              >
                View all <ArrowRight size={10} />
              </a>
            }
          >
            {recentNotes.length === 0 ? (
              <div className="py-8 text-center">
                <p
                  className="text-sm"
                  style={{ color: "#A8A8A5", fontStyle: "italic" }}
                >
                  Your thoughts are waiting to be written.
                </p>
              </div>
            ) : (
              <div className="space-y-1 mt-1">
                {recentNotes.map((note, i) => (
                  <motion.div
                    key={note.title}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: i * 0.05,
                    }}
                    className="flex items-center gap-3 px-3 py-3 -mx-3 rounded-lg transition-all duration-200 cursor-pointer group"
                    style={{ borderLeft: "3px solid transparent" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "rgba(30,30,28,0.025)";
                      (e.currentTarget as HTMLElement).style.borderLeftColor =
                        "#C1622F";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.borderLeftColor =
                        "transparent";
                    }}
                  >
                    <NotePencil
                      size={14}
                      className="shrink-0"
                      style={{ color: "#A8A8A5" }}
                    />
                    <p
                      className="flex-1 text-sm font-medium truncate"
                      style={{ color: "#1E1E1C" }}
                    >
                      {note.title}
                    </p>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider shrink-0"
                      style={{ color: "#C8C8C5" }}
                    >
                      {note.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </SectionContainer>
        </DashboardCard>
      </motion.div>
    </motion.div>
  );
}
