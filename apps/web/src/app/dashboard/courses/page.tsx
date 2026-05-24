"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "@/components/dashboard/course-card";
import { CoursesFilter } from "@/components/dashboard/courses-filter";

const lectureForProgress = (progress: number) => {
  if (progress >= 100) return "lec-1";
  if (progress >= 80) return "lec-9";
  if (progress >= 60) return "lec-7";
  if (progress >= 40) return "lec-5";
  if (progress >= 20) return "lec-3";
  return "lec-1";
};

const allCourses = [
  {
    courseId: "course-1",
    title: "Machine Learning Engineering for Production",
    instructor: "Dr. Amelia Chen",
    progress: 68,
    totalLectures: 25,
    completedLectures: 17,
    category: "Machine Learning",
    level: "Advanced" as const,
    duration: "18h 40m",
    accentColor: "#C1622F",
  },
  {
    courseId: "course-1",
    title: "Distributed Systems Architecture",
    instructor: "Prof. Marcus Webb",
    progress: 42,
    totalLectures: 33,
    completedLectures: 14,
    category: "Systems Design",
    level: "Advanced" as const,
    duration: "26h 15m",
    accentColor: "#5C7A9B",
  },
  {
    courseId: "course-1",
    title: "Advanced Cloud-Native Patterns",
    instructor: "Sarah Lindström",
    progress: 86,
    totalLectures: 42,
    completedLectures: 36,
    category: "Cloud Engineering",
    level: "Intermediate" as const,
    duration: "31h 00m",
    accentColor: "#4E7C6B",
  },
  {
    courseId: "course-1",
    title: "Algorithms & Data Structures in Depth",
    instructor: "Dr. Ravi Shankar",
    progress: 100,
    totalLectures: 48,
    completedLectures: 48,
    category: "Computer Science",
    level: "Intermediate" as const,
    duration: "38h 20m",
    accentColor: "#4E7C6B",
  },
  {
    courseId: "course-1",
    title: "TypeScript Mastery",
    instructor: "James O'Brien",
    progress: 0,
    totalLectures: 22,
    completedLectures: 0,
    category: "Frontend",
    level: "Intermediate" as const,
    duration: "14h 30m",
    accentColor: "#5C7A9B",
  },
  {
    courseId: "course-1",
    title: "System Design Interview Preparation",
    instructor: "Priya Nair",
    progress: 25,
    totalLectures: 18,
    completedLectures: 4,
    category: "Career",
    level: "Advanced" as const,
    duration: "12h 00m",
    accentColor: "#C1622F",
  },
];

const filterMap: Record<string, (c: typeof allCourses[0]) => boolean> = {
  All: () => true,
  "In Progress": (c) => c.progress > 0 && c.progress < 100,
  Completed: (c) => c.progress === 100,
  "Not Started": (c) => c.progress === 0,
};

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = allCourses.filter(filterMap[activeFilter]);

  return (
    <div className="max-w-6xl mx-auto pb-16">

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "rgba(30,30,28,0.2)" }}
          />
          <span
            className="text-[10px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: "#6B6B68" }}
          >
            Your Library
          </span>
        </div>
        <h1
          className="mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#1E1E1C",
          }}
        >
          My Courses
        </h1>

        <div className="flex items-center justify-between">
          <CoursesFilter active={activeFilter} onChange={setActiveFilter} />
          <span
            className="text-[10px] font-semibold tracking-wider uppercase"
            style={{ color: "#A8A8A5" }}
          >
            {filtered.length} course{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Warm divider */}
        <div
          className="mt-5"
          style={{ height: "1px", backgroundColor: "rgba(30,30,28,0.08)" }}
        />
      </motion.div>

      {/* Course grid — varied by content, not enforced equal height */}
      {filtered.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <p
            className="text-base"
            style={{ color: "#A8A8A5", fontStyle: "italic" }}
          >
            No courses here yet. Every great learner starts somewhere.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {filtered.map(({ courseId, ...course }, i) => (
            <CourseCard
              key={course.title}
              {...course}
              href={`/learn/${courseId}/${lectureForProgress(course.progress)}`}
              index={i}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
