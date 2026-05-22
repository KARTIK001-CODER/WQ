"use client";

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookmarkSimple,
  Clock,
  Play,
  NotePencil,
  Lightbulb,
  Sparkle,
  VideoCamera,
} from "@phosphor-icons/react";

function useGreeting() {
  const [greeting, setGreeting] = useState<string>("Good morning");
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12
        ? "Good morning"
        : hour < 18
          ? "Good afternoon"
          : "Good evening"
    );
  }, []);
  return greeting;
}

export function WelcomeSection() {
  const greeting = useGreeting();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-12"
    >
      <h1 className="text-[32px] font-heading font-semibold text-text-primary tracking-tight leading-tight">
        {greeting}, Alex.
      </h1>
      <p className="text-text-secondary/60 text-base mt-2 leading-relaxed">
        Here&apos;s your learning overview for today.
      </p>
    </motion.div>
  );
}

export function ContinueLearning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/[0.08] to-accent-support/[0.04] border border-border-active shadow-elevated group cursor-pointer"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-support/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 p-6 lg:p-7">
        <div className="flex items-center gap-2 mb-4">
          <BookmarkSimple size={15} weight="fill" className="text-accent" />
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
            Continue Learning
          </span>
        </div>
        <h3 className="text-xl font-heading font-semibold text-text-primary mb-1.5 tracking-tight">
          Advanced React Patterns
        </h3>
        <p className="text-sm text-text-secondary/70 mb-5">
          Module 4: Render Props & Compound Components
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-text-secondary/50 mb-2">
              <span className="font-medium">Progress</span>
              <span className="font-medium">62%</span>
            </div>
            <div className="w-full h-[5px] rounded-full bg-bg-secondary/80 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "62%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full rounded-full bg-accent relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/70 opacity-50 blur-sm" />
              </motion.div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-xs font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
          >
            <Play size={12} weight="fill" />
            Resume
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function QuickActions() {
  const actions = [
    { label: "New Note", icon: <NotePencil size={18} /> },
    { label: "Start Quiz", icon: <Lightbulb size={18} /> },
    { label: "Ask AI", icon: <Sparkle size={18} /> },
    { label: "Join Live", icon: <VideoCamera size={18} /> },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {actions.map((action, i) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-bg-layer/60 border border-border-subtle/60 text-text-secondary/60 hover:text-text-primary hover:border-border-mid/80 hover:bg-hover-bg hover:shadow-raised transition-all duration-250"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-secondary/50 border border-border-subtle/40 group-hover:bg-accent/[0.08] group-hover:border-accent/20 group-hover:text-accent transition-all duration-250">
            {action.icon}
          </span>
          <span className="text-[11px] font-medium tracking-wide">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

export function LearningStreak() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const activeDays = [true, true, true, true, true, false, false];
  const labels = ["20", "21", "22", "23", "24", "25", "26"];

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="text-xl leading-none">🔥</div>
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-heading font-semibold text-text-primary tracking-tight leading-none">
              7
            </span>
            <span className="text-sm text-text-secondary/50 ml-0.5">days</span>
          </div>
        </div>
        <div className="w-px h-8 bg-border-mid/40" />
        <div>
          <span className="text-[11px] text-text-secondary/50 block leading-none mb-1">Best Streak</span>
          <span className="text-sm font-medium text-text-primary/80">14 days</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {days.map((day, i) => (
          <motion.div
            key={`${day}-${i}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
            className="flex flex-col items-center gap-1.5 flex-1"
          >
            <div
              className={`w-full aspect-square max-w-[36px] rounded-xl flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                activeDays[i]
                  ? "bg-accent/15 text-accent border border-accent/25 shadow-sm shadow-accent/10"
                  : "bg-bg-secondary/50 text-text-secondary/30 border border-border-subtle/50"
              }`}
            >
              {day}
            </div>
            <span className="text-[9px] text-text-secondary/40 tracking-tight">
              {labels[i]}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProductivityWidget() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative w-11 h-11 rounded-xl bg-accent/[0.08] border border-accent/15 flex items-center justify-center">
            <Clock size={19} className="text-accent" />
            <div className="absolute inset-0 rounded-xl bg-accent/5 animate-pulse" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">Focus Time</p>
            <p className="text-xs text-text-secondary/50">Today</p>
          </div>
        </div>
        <span className="text-[26px] font-heading font-semibold text-text-primary tracking-tight leading-none">
          3h<span className="text-lg text-text-secondary/60">24m</span>
        </span>
      </div>

      <div className="relative">
        <div className="w-full h-[6px] rounded-full bg-bg-secondary/80 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "56%" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-full rounded-full bg-accent-support relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-support to-accent-support/60 opacity-60 blur-[3px]" />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-between text-[11px] text-text-secondary/40">
        <span className="font-medium">0h</span>
        <span className="text-text-secondary/60 font-medium">Goal: 6h</span>
        <span className="font-medium">6h</span>
      </div>
    </div>
  );
}
