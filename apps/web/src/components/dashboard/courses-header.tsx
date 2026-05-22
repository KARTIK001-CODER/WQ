"use client";

import { motion } from "framer-motion";
import { BookOpen, ChartLineUp, Clock, GraduationCap } from "@phosphor-icons/react";

const easing = [0.25, 0.1, 0.25, 1] as const;

const insights = [
  { label: "Focus growth", value: "+18%", icon: <ChartLineUp size={13} />, color: "accent" },
  { label: "Hours this week", value: "12.5", icon: <Clock size={13} />, color: "accent-support" },
  { label: "Courses completed", value: "3", icon: <GraduationCap size={13} />, color: "accent-soft" },
];

export function CoursesHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easing }}
      className="mb-12 relative"
    >
      {/* Ambient background glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-72 h-72 bg-accent-support/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <h1 className="text-[34px] font-heading font-bold text-text-primary tracking-tight leading-[1.15]">
                My Courses
              </h1>
            </div>
            <p className="text-text-secondary/60 text-base leading-relaxed max-w-lg">
              You have <span className="text-accent font-semibold tracking-wide">4 active courses</span> this semester. 
              Complete rate is up <span className="text-accent-support font-semibold tracking-wide">18%</span> from last month.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.15 }}
            className="hidden lg:flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/[0.01] border border-white/[0.03] shadow-card ring-1 ring-white/[0.01]"
          >
            <BookOpen size={15} className="text-accent animate-pulse-glow" weight="duotone" />
            <span className="text-[11px] font-bold text-text-secondary/50 tracking-wide uppercase">
              <span className="text-text-primary font-extrabold tracking-normal text-xs">12</span> ENROLLED
            </span>
          </motion.div>
        </div>

        {/* Insight metrics */}
        <div className="flex items-center gap-3">
          {insights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: easing }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.01] border border-white/[0.02]"
            >
              <span className={`text-${item.color}`}>{item.icon}</span>
              <span className="text-xs text-text-secondary/50">
                <span className={`text-${item.color} font-semibold`}>{item.value}</span> {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
