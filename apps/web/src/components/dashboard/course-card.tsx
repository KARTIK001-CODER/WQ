"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, CheckCircle } from "@phosphor-icons/react";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  totalLectures: number;
  completedLectures: number;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  accentColor: string;
  href: string;
  index?: number;
}

const levelColors = {
  Beginner: "#4E7C6B",
  Intermediate: "#C1622F",
  Advanced: "#5C7A9B",
};

export function CourseCard({
  title,
  instructor,
  progress,
  totalLectures,
  completedLectures,
  category,
  level,
  duration,
  accentColor,
  href,
  index = 0,
}: CourseCardProps) {
  const isComplete = progress >= 100;
  const progressColor = isComplete ? "#4E7C6B" : accentColor;

  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.07,
        }}
        className="group cursor-pointer rounded-lg transition-all duration-200"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(30, 30, 28, 0.08)",
          borderLeft: `3px solid ${accentColor}`,
          padding: "24px 24px",
        }}
        whileHover={{ y: -2 }}
      >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-[10px] font-semibold tracking-[0.12em] uppercase"
              style={{ color: accentColor }}
            >
              {category}
            </span>
            <div
              className="w-px h-3"
              style={{ backgroundColor: "rgba(30,30,28,0.12)" }}
            />
            <span
              className="text-[10px] font-semibold tracking-[0.1em] uppercase"
              style={{ color: levelColors[level] }}
            >
              {level}
            </span>
          </div>
          <h3
            className="text-sm font-semibold leading-snug"
            style={{ color: "#1E1E1C" }}
          >
            {title}
          </h3>
          <p className="text-xs mt-1" style={{ color: "#A8A8A5" }}>
            {instructor}
          </p>
        </div>

        {isComplete && (
          <CheckCircle
            size={20}
            weight="fill"
            className="shrink-0 mt-0.5"
            style={{ color: "#4E7C6B" }}
          />
        )}
      </div>

      {/* Metadata row */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1.5">
          <BookOpen size={12} style={{ color: "#A8A8A5" }} />
          <span
            className="text-[10px] font-semibold uppercase tracking-wider tabular-nums"
            style={{ color: "#6B6B68" }}
          >
            {completedLectures} / {totalLectures} lectures
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={12} style={{ color: "#A8A8A5" }} />
          <span
            className="text-[10px] font-semibold uppercase tracking-wider"
            style={{ color: "#6B6B68" }}
          >
            {duration}
          </span>
        </div>
      </div>

      {/* 2px Progress bar */}
      <div
        className="w-full rounded-full overflow-hidden mb-1.5"
        style={{ height: "2px", backgroundColor: "rgba(30,30,28,0.08)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + index * 0.05 }}
          className="h-full rounded-full"
          style={{ backgroundColor: progressColor }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span
          className="text-[10px] font-semibold tabular-nums"
          style={{ color: "#A8A8A5" }}
        >
          {progress}% complete
        </span>
        <div
          className="flex items-center gap-1 text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: accentColor }}
        >
          {isComplete ? "Review" : "Continue"}
          <ArrowRight size={11} />
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
