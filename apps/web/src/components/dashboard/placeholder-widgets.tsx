"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Robot,
  NotePencil,
  CheckCircle,
} from "@phosphor-icons/react";

// ─── WelcomeSection ──────────────────────────────────────────────────────────

export function WelcomeSection() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="pt-2">
      {/* Oversized editorial greeting — intentionally breaks the grid */}
      <div className="relative">
        <h1
          className="text-[52px] leading-[1.1] tracking-tight text-ink font-display"
          style={{ fontWeight: 300 }}
        >
          {greeting},
          <br />
          <span style={{ color: "#C1622F" }}>Kartik.</span>
        </h1>

        {/* Rotated editorial label — one unexpected detail per screen */}
        <div
          className="absolute top-4 right-0 hidden lg:flex items-center gap-2"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "right center",
            right: "-8px",
          }}
        >
          <div
            className="w-6 h-px"
            style={{ backgroundColor: "rgba(30,30,28,0.2)" }}
          />
          <span
            className="text-[9px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "#A8A8A5" }}
          >
            Phase I — 2024
          </span>
        </div>
      </div>

      <p className="mt-3 text-base" style={{ color: "#6B6B68", maxWidth: 460 }}>
        You have{" "}
        <span className="font-semibold" style={{ color: "#1E1E1C" }}>
          3 courses in progress
        </span>{" "}
        and a note waiting to be finished.
      </p>
    </div>
  );
}

// ─── ContinueLearning ────────────────────────────────────────────────────────

const continueCourses = [
  {
    title: "Machine Learning Engineering for Production",
    progress: 68,
    lectures: "17 of 25",
    lastLesson: "Model Serving & Deployment",
  },
  {
    title: "Distributed Systems Architecture",
    progress: 42,
    lectures: "14 of 33",
    lastLesson: "Consensus Algorithms",
  },
];

export function ContinueLearning() {
  return (
    <div className="space-y-3">
      {continueCourses.map((course, i) => (
        <motion.div
          key={course.title}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.07,
          }}
          className="group cursor-pointer rounded-lg transition-all duration-200"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(30, 30, 28, 0.08)",
            borderLeft: "3px solid #C1622F",
            padding: "18px 20px",
          }}
          whileHover={{ y: -1 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold truncate"
                style={{ color: "#1E1E1C" }}
              >
                {course.title}
              </p>
              <p
                className="text-xs mt-1 truncate"
                style={{ color: "#A8A8A5" }}
              >
                Last: {course.lastLesson}
              </p>
            </div>
            <div
              className="shrink-0 flex items-center gap-1 text-xs font-semibold transition-colors duration-200"
              style={{ color: "#C1622F" }}
            >
              <span>Continue</span>
              <ArrowRight size={12} />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-1.5">
              <span
                className="text-[10px] font-semibold tracking-wider uppercase"
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
            {/* 2px progress bar */}
            <div
              className="w-full rounded-full overflow-hidden"
              style={{
                height: "2px",
                backgroundColor: "rgba(30, 30, 28, 0.10)",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.1,
                }}
                className="h-full rounded-full"
                style={{ backgroundColor: "#C1622F" }}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── QuickActions ─────────────────────────────────────────────────────────────

const quickActions = [
  {
    label: "Open AI Tutor",
    icon: Robot,
    href: "/ai",
    color: "#5C7A9B",
    bgColor: "rgba(92, 122, 155, 0.08)",
    description: "Ask anything about your courses",
  },
  {
    label: "New Note",
    icon: NotePencil,
    href: "/dashboard/notes",
    color: "#1E1E1C",
    bgColor: "rgba(30, 30, 28, 0.04)",
    description: "Capture your thoughts",
  },
  {
    label: "Browse Courses",
    icon: BookOpen,
    href: "/dashboard/courses",
    color: "#4E7C6B",
    bgColor: "rgba(78, 124, 107, 0.08)",
    description: "Explore your library",
  },
];

export function QuickActions() {
  return (
    <div className="space-y-2">
      {quickActions.map((action, i) => {
        const Icon = action.icon;
        return (
          <motion.a
            key={action.label}
            href={action.href}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.06,
            }}
            className="flex items-center gap-3.5 px-4 py-3.5 rounded-lg transition-all duration-200 group cursor-pointer"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(30, 30, 28, 0.08)",
            }}
            whileHover={{ x: 2 }}
          >
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: action.bgColor }}
            >
              <Icon size={15} style={{ color: action.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold"
                style={{ color: "#1E1E1C" }}
              >
                {action.label}
              </p>
              <p className="text-xs" style={{ color: "#A8A8A5" }}>
                {action.description}
              </p>
            </div>
            <ArrowRight
              size={13}
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: "#6B6B68" }}
            />
          </motion.a>
        );
      })}
    </div>
  );
}

// ─── LearningStreak ───────────────────────────────────────────────────────────

export function LearningStreak() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const completed = [true, true, true, true, false, false, false];

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <span
          className="text-3xl font-semibold tabular-nums"
          style={{ color: "#1E1E1C" }}
        >
          4
        </span>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#1E1E1C" }}>
            day streak
          </p>
          <p className="text-xs" style={{ color: "#A8A8A5" }}>
            Keep going this week
          </p>
        </div>
      </div>

      <div className="flex gap-1.5">
        {days.map((day, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className="w-full h-6 rounded"
              style={{
                backgroundColor: completed[i]
                  ? "#4E7C6B"
                  : "rgba(30, 30, 28, 0.06)",
                border: completed[i]
                  ? "none"
                  : "1px solid rgba(30, 30, 28, 0.08)",
              }}
            />
            <span
              className="text-[9px] font-semibold tracking-wider uppercase"
              style={{
                color: completed[i] ? "#4E7C6B" : "#A8A8A5",
              }}
            >
              {day}
            </span>
          </div>
        ))}
      </div>

      <p
        className="mt-4 text-xs"
        style={{ color: "#A8A8A5", fontStyle: "italic" }}
      >
        "Consistency is what transforms practice into mastery."
      </p>
    </div>
  );
}

// ─── ProductivityWidget ───────────────────────────────────────────────────────

export function ProductivityWidget() {
  return (
    <div>
      <div className="flex items-baseline gap-2 mb-1">
        <span
          className="text-4xl font-semibold tabular-nums"
          style={{ color: "#1E1E1C" }}
        >
          2.4
        </span>
        <span className="text-sm" style={{ color: "#6B6B68" }}>
          hrs today
        </span>
      </div>
      <p className="text-xs mb-5" style={{ color: "#A8A8A5" }}>
        Your best day this week was Thursday — 3.1 hrs
      </p>

      {/* Sessions */}
      <div className="space-y-2">
        {[
          { label: "Morning session", duration: "1h 20m", done: true },
          { label: "Afternoon review", duration: "1h 05m", done: true },
          { label: "Evening focus", duration: "—", done: false },
        ].map((session, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-xs py-2"
            style={{
              borderBottom: "1px solid rgba(30,30,28,0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle
                size={13}
                weight={session.done ? "fill" : "regular"}
                style={{ color: session.done ? "#4E7C6B" : "#A8A8A5" }}
              />
              <span style={{ color: session.done ? "#1E1E1C" : "#A8A8A5" }}>
                {session.label}
              </span>
            </div>
            <span
              className="font-semibold tabular-nums"
              style={{ color: session.done ? "#6B6B68" : "#C8C8C5" }}
            >
              {session.duration}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Clock size={13} style={{ color: "#A8A8A5" }} />
        <span className="text-xs" style={{ color: "#A8A8A5" }}>
          Goal: 3 hours per day
        </span>
        <div
          className="flex-1 mx-2 rounded-full"
          style={{
            height: "2px",
            backgroundColor: "rgba(30,30,28,0.08)",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: "80%", backgroundColor: "#4E7C6B" }}
          />
        </div>
        <span
          className="text-[10px] font-semibold"
          style={{ color: "#4E7C6B" }}
        >
          80%
        </span>
      </div>
    </div>
  );
}

// ─── AnalyticsPreview (stub) ──────────────────────────────────────────────────

export { AnalyticsPreview } from "./analytics-preview";
