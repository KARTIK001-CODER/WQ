"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  CaretDown,
  CheckCircle,
  PlayCircle,
  Circle,
  BookOpen,
} from "@phosphor-icons/react";
import { useLearn } from "./learn-provider";
import type { Module, Lecture } from "./placeholder-data";

interface LectureSidebarProps {
  modules: Module[];
  currentLectureId: string;
}

export function LectureSidebar({ modules, currentLectureId }: LectureSidebarProps) {
  const { sidebarOpen } = useLearn();
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    modules.forEach((m) => {
      if (m.lectures.some((l) => l.id === currentLectureId)) initial.add(m.id);
    });
    return initial;
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const completedCount = modules.reduce(
    (acc, m) => acc + m.lectures.filter((l) => l.completed).length,
    0
  );
  const totalCount = modules.reduce((acc, m) => acc + m.lectures.length, 0);
  const progress = completedCount / totalCount;
  const circumference = 2 * Math.PI * 15;

  return (
    <motion.aside
      layout
      initial={false}
      animate={{
        width: sidebarOpen ? 260 : 0,
        opacity: sidebarOpen ? 1 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden border-r border-white/[0.02] bg-bg-secondary/30 relative z-20 shrink-0"
    >
      <div className="w-[260px] h-full flex flex-col">
        {/* Course overview header */}
        <div className="px-4 py-3.5 border-b border-white/[0.02]">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-9 h-9 shrink-0">
              <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18" cy="18" r="15"
                  fill="none" stroke="rgba(255,255,255,0.03)"
                  strokeWidth="2.5"
                />
                <motion.circle
                  cx="18" cy="18" r="15"
                  fill="none" stroke="var(--color-accent)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: circumference * (1 - progress) }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-accent/80 tabular-nums">
                {Math.round(progress * 100)}%
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/40 mb-0.5">
                Course Content
              </h3>
              <p className="text-[11px] text-text-secondary/60 font-heading font-semibold truncate">
                Machine Learning Engineering
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-1 flex-1 rounded-full bg-black/30 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent/60"
              />
            </div>
            <span className="text-[10px] text-text-secondary/35 tabular-nums font-medium">
              {completedCount}/{totalCount}
            </span>
          </div>
        </div>

        {/* Module list */}
        <div className="flex-1 overflow-y-auto py-2 scroll-smooth">
          {modules.map((module) => (
            <ModuleSection
              key={module.id}
              module={module}
              isExpanded={expandedModules.has(module.id)}
              onToggle={() => toggleModule(module.id)}
              currentLectureId={currentLectureId}
            />
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

function ModuleSection({
  module,
  isExpanded,
  onToggle,
  currentLectureId,
}: {
  module: Module;
  isExpanded: boolean;
  onToggle: () => void;
  currentLectureId: string;
}) {
  const moduleProgress = module.lectures.filter((l) => l.completed).length;
  const totalInModule = module.lectures.length;
  const allComplete = moduleProgress === totalInModule;

  return (
    <div className="px-2 mb-0.5">
      <motion.button
        onClick={onToggle}
        layout
        className={cn(
          "flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left transition-all duration-300 outline-none group",
          isExpanded ? "bg-white/[0.02]" : "hover:bg-white/[0.02]"
        )}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 0 : -90 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-text-secondary/25 shrink-0"
        >
          <CaretDown size={10} weight="fill" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-heading font-semibold text-text-secondary/60 truncate block">
              {module.title}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[9px] text-text-secondary/25 tabular-nums font-medium">
            {moduleProgress}/{totalInModule}
          </span>
          {allComplete && (
            <CheckCircle size={10} className="text-accent-support/50" weight="fill" />
          )}
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-1 pt-0.5">
              {module.lectures.map((lecture) => (
                <LectureItem
                  key={lecture.id}
                  lecture={lecture}
                  isActive={lecture.id === currentLectureId}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LectureItem({ lecture, isActive }: { lecture: Lecture; isActive: boolean }) {
  return (
    <motion.a
      href="#"
      layout
      className={cn(
        "flex items-center gap-3 px-3.5 py-2 rounded-lg text-left transition-all duration-300 mx-1",
        isActive
          ? "bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(196,106,58,0.05)]"
          : "hover:bg-white/[0.02] border border-transparent"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="active-lecture-bar"
          className="absolute left-0 w-0.5 h-5 rounded-full bg-accent"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="shrink-0">
        {lecture.completed ? (
          <div className="w-4 h-4 rounded-full bg-accent-support/15 flex items-center justify-center">
            <CheckCircle size={10} className="text-accent-support/60" weight="fill" />
          </div>
        ) : isActive ? (
          <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center">
            <PlayCircle size={10} className="text-accent" weight="fill" />
          </div>
        ) : (
          <Circle size={10} className="text-text-secondary/20" weight="fill" />
        )}
      </span>
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            "text-[11px] block truncate leading-snug",
            isActive ? "text-text-primary font-medium" : "text-text-secondary/45"
          )}
        >
          {lecture.title}
        </span>
      </div>
      <span
        className={cn(
          "text-[9px] tabular-nums shrink-0",
          isActive ? "text-text-secondary/35" : "text-text-secondary/20"
        )}
      >
        {lecture.duration}
      </span>
    </motion.a>
  );
}
