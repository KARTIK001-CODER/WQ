"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen } from "@phosphor-icons/react";
import { CoursesHeader } from "@/components/dashboard/courses-header";
import { CoursesFilter } from "@/components/dashboard/courses-filter";
import { CourseCard } from "@/components/dashboard/course-card";
import { SectionContainer } from "@/components/dashboard/section-container";
import type { CourseData } from "@/components/dashboard/course-card";

const easing = [0.25, 0.1, 0.25, 1] as const;

const coursesData: CourseData[] = [
  {
    id: "1",
    title: "Machine Learning Engineering for Production",
    instructor: "Dr. Aisha Patel",
    category: "Data Science",
    categoryColor: "accent",
    progress: 68,
    totalLessons: 25,
    completedLessons: 17,
    duration: "16h 30m",
    thumbnailGradient: "linear-gradient(135deg, rgba(196,106,58,0.25) 0%, rgba(95,122,101,0.15) 100%)",
    thumbnailIcon: "chart",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Distributed Systems Architecture",
    instructor: "Marcus Williams",
    category: "Engineering",
    categoryColor: "accent-support",
    progress: 42,
    totalLessons: 33,
    completedLessons: 14,
    duration: "21h 45m",
    thumbnailGradient: "linear-gradient(135deg, rgba(95,122,101,0.25) 0%, rgba(196,106,58,0.1) 100%)",
    thumbnailIcon: "database",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Advanced Cloud-Native Patterns",
    instructor: "Elena Rodriguez",
    category: "Engineering",
    categoryColor: "accent-soft",
    progress: 86,
    totalLessons: 42,
    completedLessons: 36,
    duration: "28h 20m",
    thumbnailGradient: "linear-gradient(135deg, rgba(214,194,161,0.2) 0%, rgba(196,106,58,0.1) 100%)",
    thumbnailIcon: "brain",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Deep Learning Foundations",
    instructor: "Prof. James Park",
    category: "Data Science",
    categoryColor: "accent",
    progress: 15,
    totalLessons: 30,
    completedLessons: 4,
    duration: "20h 00m",
    thumbnailGradient: "linear-gradient(135deg, rgba(196,106,58,0.2) 0%, rgba(214,194,161,0.1) 100%)",
    thumbnailIcon: "atom",
    status: "in-progress",
  },
  {
    id: "5",
    title: "Quantum Computing Fundamentals",
    instructor: "Dr. Aisha Patel",
    category: "Physics",
    categoryColor: "accent-support",
    progress: 0,
    totalLessons: 15,
    completedLessons: 0,
    duration: "10h 10m",
    thumbnailGradient: "linear-gradient(135deg, rgba(95,122,101,0.2) 0%, rgba(214,194,161,0.1) 100%)",
    thumbnailIcon: "atom",
    status: "recommended",
  },
  {
    id: "6",
    title: "Financial Engineering & Algorithmic Trading",
    instructor: "Lily Nakamura",
    category: "Finance",
    categoryColor: "accent-soft",
    progress: 0,
    totalLessons: 24,
    completedLessons: 0,
    duration: "14h 30m",
    thumbnailGradient: "linear-gradient(135deg, rgba(214,194,161,0.25) 0%, rgba(95,122,101,0.1) 100%)",
    thumbnailIcon: "chart",
    status: "recommended",
  },
  {
    id: "7",
    title: "Generative AI and Large Language Models",
    instructor: "Marcus Williams",
    category: "Data Science",
    categoryColor: "accent",
    progress: 0,
    totalLessons: 28,
    completedLessons: 0,
    duration: "22h 15m",
    thumbnailGradient: "linear-gradient(135deg, rgba(196,106,58,0.15) 0%, rgba(95,122,101,0.2) 100%)",
    thumbnailIcon: "brain",
    status: "recommended",
  },
  {
    id: "8",
    title: "Rust for Systems Programming",
    instructor: "Sarah Chen",
    category: "Engineering",
    categoryColor: "accent",
    progress: 100,
    totalLessons: 22,
    completedLessons: 22,
    duration: "16h 40m",
    thumbnailGradient: "linear-gradient(135deg, rgba(196,106,58,0.2) 0%, rgba(95,122,101,0.15) 100%)",
    thumbnailIcon: "code",
    status: "completed",
  },
  {
    id: "9",
    title: "High Performance Database Design",
    instructor: "Elena Rodriguez",
    category: "Engineering",
    categoryColor: "accent-support",
    progress: 100,
    totalLessons: 16,
    completedLessons: 16,
    duration: "11h 20m",
    thumbnailGradient: "linear-gradient(135deg, rgba(95,122,101,0.2) 0%, rgba(196,106,58,0.1) 100%)",
    thumbnailIcon: "database",
    status: "completed",
  },
  {
    id: "10",
    title: "Optimization Algorithms in C++",
    instructor: "Prof. James Park",
    category: "Engineering",
    categoryColor: "accent-soft",
    progress: 100,
    totalLessons: 18,
    completedLessons: 18,
    duration: "13h 50m",
    thumbnailGradient: "linear-gradient(135deg, rgba(214,194,161,0.2) 0%, rgba(95,122,101,0.15) 100%)",
    thumbnailIcon: "code",
    status: "completed",
  },
  {
    id: "11",
    title: "Design Systems & Architecture",
    instructor: "Lily Nakamura",
    category: "Design",
    categoryColor: "accent",
    progress: 0,
    totalLessons: 12,
    completedLessons: 0,
    duration: "9h 30m",
    thumbnailGradient: "linear-gradient(135deg, rgba(196,106,58,0.15) 0%, rgba(214,194,161,0.15) 100%)",
    thumbnailIcon: "pen",
    status: "saved",
  },
  {
    id: "12",
    title: "Microservices Deployment Strategies",
    instructor: "Sarah Chen",
    category: "Engineering",
    categoryColor: "accent-support",
    progress: 0,
    totalLessons: 26,
    completedLessons: 0,
    duration: "20h 10m",
    thumbnailGradient: "linear-gradient(135deg, rgba(95,122,101,0.15) 0%, rgba(196,106,58,0.1) 100%)",
    thumbnailIcon: "database",
    status: "saved",
  },
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? coursesData
      : coursesData.filter((c) => c.status === activeCategory);

  const inProgress = filteredCourses.filter((c) => c.status === "in-progress");
  const recommended = filteredCourses.filter((c) => c.status === "recommended");
  const completed = filteredCourses.filter((c) => c.status === "completed");
  const saved = filteredCourses.filter((c) => c.status === "saved");

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="max-w-7xl mx-auto pb-20 relative"
    >
      {/* Ambient glow */}
      <div className="absolute top-40 -left-32 w-64 h-64 bg-accent/[0.015] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent-support/[0.01] rounded-full blur-3xl pointer-events-none" />
      <motion.div variants={sectionVariants}>
        <CoursesHeader />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CoursesFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </motion.div>

      {/* In Progress */}
      {inProgress.length > 0 && activeCategory !== "completed" && activeCategory !== "saved" && (
        <motion.div variants={sectionVariants} className="mb-14">
          <SectionContainer
            title="In Progress"
            subtitle={activeCategory === "all" ? `${inProgress.length} active courses` : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {inProgress.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </SectionContainer>
        </motion.div>
      )}

      {/* Recommended */}
      {recommended.length > 0 && activeCategory !== "completed" && activeCategory !== "saved" && (
        <motion.div variants={sectionVariants} className="mb-14">
          <SectionContainer
            title="Recommended for You"
            subtitle="Based on your learning history"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {recommended.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </SectionContainer>
        </motion.div>
      )}

      {/* Completed */}
      {completed.length > 0 && activeCategory !== "saved" && (
        <motion.div variants={sectionVariants} className="mb-14">
          <SectionContainer
            title="Completed"
            subtitle={activeCategory === "all" ? `${completed.length} courses finished` : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {completed.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </SectionContainer>
        </motion.div>
      )}

      {/* Saved */}
      {saved.length > 0 && activeCategory !== "completed" && (
        <motion.div variants={sectionVariants} className="mb-14">
          <SectionContainer
            title="Saved for Later"
            subtitle={activeCategory === "all" ? `${saved.length} bookmarked courses` : undefined}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {saved.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </SectionContainer>
        </motion.div>
      )}

      {/* Empty state */}
      {filteredCourses.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-24 text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-bg-layer border border-border-subtle flex items-center justify-center mb-4">
            <BookOpen size={24} className="text-text-secondary/30" />
          </div>
          <h3 className="text-base font-heading font-semibold text-text-primary/60 mb-1">
            No courses found
          </h3>
          <p className="text-sm text-text-secondary/40 max-w-xs">
            Try adjusting your filters or explore recommended courses.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
