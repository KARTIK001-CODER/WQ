"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, CheckCircle, NotePencil } from "@phosphor-icons/react";

const courseStats = [
  {
    title: "Machine Learning Engineering for Production",
    progress: 68,
    color: "#C1622F",
  },
  {
    title: "Distributed Systems Architecture",
    progress: 42,
    color: "#5C7A9B",
  },
  {
    title: "Advanced Cloud-Native Patterns",
    progress: 86,
    color: "#4E7C6B",
  },
  {
    title: "Algorithms & Data Structures",
    progress: 100,
    color: "#4E7C6B",
  },
];

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(30,30,28,0.2)" }} />
            <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#6B6B68" }}>
              Your Account
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#1E1E1C",
            }}
          >
            Profile
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Left — Identity card */}
          <div className="space-y-5">
            <div
              className="rounded-lg p-7"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(30,30,28,0.08)",
                borderLeft: "3px solid #C1622F",
              }}
            >
              {/* Avatar */}
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-semibold text-white mb-4"
                  style={{ backgroundColor: "#C1622F" }}
                >
                  K
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    color: "#1E1E1C",
                    fontSize: "22px",
                  }}
                >
                  Kartik
                </h2>
                <p className="text-sm mt-1" style={{ color: "#6B6B68" }}>
                  kartik@example.com
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span
                    className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded"
                    style={{
                      backgroundColor: "rgba(78,124,107,0.10)",
                      color: "#4E7C6B",
                    }}
                  >
                    Student
                  </span>
                </div>
              </div>

              <div
                className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
              >
                <div className="space-y-3">
                  {[
                    { label: "Member Since", value: "January 2024" },
                    { label: "Last Active", value: "Today" },
                    { label: "Timezone", value: "IST (UTC+5:30)" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-semibold tracking-wider uppercase"
                        style={{ color: "#A8A8A5" }}
                      >
                        {item.label}
                      </span>
                      <span className="text-xs font-medium" style={{ color: "#6B6B68" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary stats */}
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(30,30,28,0.08)",
              }}
            >
              <h3
                className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-4"
                style={{ color: "#6B6B68" }}
              >
                Learning Summary
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4", label: "Courses", icon: BookOpen, color: "#C1622F" },
                  { value: "69", label: "Lectures", icon: CheckCircle, color: "#4E7C6B" },
                  { value: "12.2h", label: "This week", icon: Clock, color: "#5C7A9B" },
                  { value: "18", label: "Notes", icon: NotePencil, color: "#C1622F" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-md p-3"
                      style={{ backgroundColor: "rgba(30,30,28,0.025)" }}
                    >
                      <Icon size={14} style={{ color: stat.color }} />
                      <p
                        className="text-xl font-semibold mt-1.5 tabular-nums"
                        style={{ color: "#1E1E1C" }}
                      >
                        {stat.value}
                      </p>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: "#A8A8A5" }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — Course progress */}
          <div
            className="rounded-lg p-7"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(30,30,28,0.08)",
            }}
          >
            <h3
              className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-6"
              style={{ color: "#6B6B68" }}
            >
              Course Progress
            </h3>

            <div className="space-y-6">
              {courseStats.map((course, i) => (
                <div key={course.title}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium" style={{ color: "#1E1E1C" }}>
                      {course.title}
                    </p>
                    <span
                      className="text-[10px] font-semibold tabular-nums"
                      style={{ color: "#6B6B68" }}
                    >
                      {course.progress}%
                    </span>
                  </div>
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{ height: "2px", backgroundColor: "rgba(30,30,28,0.08)" }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: course.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A8A8A5", fontStyle: "italic" }}
              >
                "Every lecture completed is a step toward mastery. You&apos;re building
                something that compounds."
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
