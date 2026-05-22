"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  Play,
  Clock,
  BookOpen,
  GraduationCap,
} from "@phosphor-icons/react";

const easing = [0.25, 0.1, 0.25, 1] as const;

export interface CourseData {
  id: string;
  title: string;
  instructor: string;
  category: string;
  categoryColor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  thumbnailGradient: string;
  thumbnailIcon: "code" | "brain" | "database" | "chart" | "atom" | "pen";
  status: "in-progress" | "recommended" | "completed" | "saved";
}

const iconMap = {
  code: "</>",
  brain: "🧠",
  database: "🗄",
  chart: "📊",
  atom: "⚛",
  pen: "✎",
};

interface CourseCardProps {
  course: CourseData;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 40,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 40,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }, [mouseX, mouseY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.08 + index * 0.07,
        ease: easing,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isHovered
          ? {
              rotateX,
              rotateY,
              transformPerspective: 800,
            }
          : {}
      }
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { type: "spring", stiffness: 400, damping: 28 },
      }}
      className={cn(
        "group relative rounded-xl overflow-hidden bg-bg-layer border border-white/[0.03] shadow-elevated ring-1 ring-white/[0.01] cursor-pointer transition-colors duration-300 hover:border-white/[0.06] will-change-transform"
      )}
    >
      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-support/[0.03] rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </motion.div>

      {/* Thumbnail */}
      <div
        className="relative h-[168px] overflow-hidden"
        style={{ background: course.thumbnailGradient }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "16px 16px",
          }}
        />
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: isHovered ? 0.7 : 0.4 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/5">
            <span className="text-[10px] font-semibold text-white/80 tracking-wide">{course.category}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm border border-white/5">
            <Clock size={10} className="text-white/70" weight="fill" />
            <span className="text-[10px] font-semibold text-white/70">{course.duration}</span>
          </div>
        </div>
        {/* Central icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.3, ease: easing }}
            className="w-14 h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center"
          >
            <span className="text-xl opacity-80">{iconMap[course.thumbnailIcon]}</span>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-sm font-heading font-semibold text-text-primary leading-snug mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-xs text-text-secondary/50 mb-3.5">
          {course.instructor}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[11px] text-text-secondary/50 mb-2">
            <span className="tabular-nums font-medium">
              {course.completedLessons}/{course.totalLessons} lessons
            </span>
            <span className="tabular-nums font-semibold text-text-secondary/70">
              {course.progress}%
            </span>
          </div>
          <div className="w-full h-[6px] rounded-full bg-black/30 overflow-hidden ring-1 ring-white/[0.02]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${course.progress}%` }}
              transition={{ duration: 1, delay: 0.15 + index * 0.09, ease: easing }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ backgroundColor: `var(--color-${course.categoryColor})` }}
            >
              <motion.div
                initial={false}
                animate={
                  isHovered
                    ? { x: ["-100%", "200%"] }
                    : { x: "-100%", opacity: 0 }
                }
                transition={
                  isHovered
                    ? { duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2 }
                    : { duration: 0.35 }
                }
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
              />
              <div
                className="absolute inset-0 rounded-full opacity-40 blur-[3px]"
                style={{ backgroundColor: `var(--color-${course.categoryColor})` }}
              />
            </motion.div>
          </div>
        </div>

        {/* Action */}
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 450, damping: 26 }}
          className={cn(
            "flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ring-1",
            course.status === "completed"
              ? "bg-accent-support/10 text-accent-support border border-transparent ring-accent-support/20 hover:bg-accent-support/20 hover:ring-accent-support/40 shadow-[0_0_15px_rgba(95,122,101,0.08)] hover:shadow-[0_0_25px_rgba(95,122,101,0.15)]"
              : course.status === "saved"
                ? "bg-accent-soft/10 text-accent-soft border border-transparent ring-accent-soft/20 hover:bg-accent-soft/20 hover:ring-accent-soft/40 shadow-[0_0_15px_rgba(214,194,161,0.08)] hover:shadow-[0_0_25px_rgba(214,194,161,0.15)]"
                : "bg-accent text-white border border-transparent ring-accent/20 shadow-[0_0_20px_rgba(196,106,58,0.15)] hover:shadow-[0_0_35px_rgba(196,106,58,0.25)]"
          )}
        >
          {course.status === "in-progress" || course.status === "recommended" ? (
            <>
              <Play size={11} weight="fill" />
              {course.status === "in-progress" ? "Continue" : "Start Course"}
            </>
          ) : course.status === "completed" ? (
            <>
              <GraduationCap size={11} />
              Review
            </>
          ) : (
            <>
              <BookOpen size={11} />
              View
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
