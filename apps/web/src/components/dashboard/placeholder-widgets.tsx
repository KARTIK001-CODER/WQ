"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookmarkSimple,
  Play,
  NotePencil,
  Lightbulb,
  Sparkle,
  VideoCamera,
  Stack,
  Timer,
  ChartLineUp,
  Clock,
  ArrowRight,
  Flame,
  Check,
} from "@phosphor-icons/react";

function useGreeting() {
  const [greeting, setGreeting] = useState("Good morning");
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(
      hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"
    );
  }, []);
  return greeting;
}

function useLiveTime() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
        })
      );
    };
    updateTime();
    const id = setInterval(updateTime, 60000);
    return () => clearInterval(id);
  }, []);

  return { time, date };
}

export function WelcomeSection() {
  const greeting = useGreeting();
  const { time, date } = useLiveTime();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className="mb-10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* Subtle real-time context badge */}
          <div className="flex items-center gap-2 mb-2 text-[10px] tracking-[0.15em] uppercase text-text-secondary/40 font-bold">
            <Clock size={12} className="text-accent/60" />
            <span>{date}</span>
            <span className="w-1 h-1 rounded-full bg-border-active" />
            <span className="tabular-nums lowercase">{time}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-heading font-semibold text-text-primary tracking-tight leading-tight">
            {greeting}, Alex.
          </h1>
          <p className="text-text-secondary/50 text-sm mt-2 leading-relaxed max-w-lg">
            You&apos;re <span className="text-accent font-semibold tracking-wide">72% more consistent</span> than last week. 
            Your deep focus streak is stable.
          </p>
        </div>

        <motion.div 
          whileHover={{ y: -2, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-bg-layer via-bg-layer to-accent-support/[0.02] border border-white/[0.03] shadow-card ring-1 ring-white/[0.01]"
        >
          <div className="w-8 h-8 rounded-lg bg-accent-support/10 border border-accent-support/20 flex items-center justify-center">
            <ChartLineUp size={16} className="text-accent-support" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-text-secondary/40 leading-none mb-1">Weekly Performance</span>
            <span className="text-xs text-text-secondary/60">
              <span className="text-accent-support font-semibold">+18%</span> productivity gains
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ContinueLearning() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      whileHover={{ y: -4, scale: 1.002 }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-b from-bg-layer to-bg-secondary/40 border border-white/[0.03] shadow-card ring-1 ring-white/[0.01] group cursor-pointer"
    >
      {/* Absolute ambient lights */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-radial from-accent-support/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-7 items-center">
        {/* Cinematic Thumbnail Area */}
        <div className="shrink-0 w-full md:w-[160px] h-[108px] rounded-lg bg-gradient-to-br from-white/[0.02] to-white/[0.005] border border-white/[0.04] flex items-center justify-center overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 opacity-[0.03] bg-noise" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-accent-support/5" />
          <div className="relative w-10 h-10 rounded-xl bg-bg-primary/95 border border-white/[0.06] flex items-center justify-center shadow-raised">
            <Stack size={22} className="text-accent-soft/80" weight="light" />
          </div>
          {/* Decorative mini elements */}
          <div className="absolute bottom-2 left-2 flex gap-1 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[8px] uppercase tracking-wider text-text-secondary/40 font-bold">Active Module</span>
          </div>
        </div>

        {/* Content details */}
        <div className="flex-1 min-w-0 w-full">
          <div className="flex items-center gap-2 mb-2">
            <BookmarkSimple size={12} weight="fill" className="text-accent" />
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-accent">
              Current Course
            </span>
          </div>
          
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-0.5 tracking-tight group-hover:text-accent transition-colors duration-300">
            Advanced React Patterns
          </h3>
          <p className="text-xs text-text-secondary/50 mb-4">
            Module 4: Render Props & Compound Components
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center justify-between text-[10px] text-text-secondary/40 mb-1.5">
                <span className="font-semibold uppercase tracking-wider">Progress</span>
                <span className="font-semibold tabular-nums text-text-secondary/60">62% (12 / 19 lectures)</span>
              </div>
              <div className="w-full h-[5px] rounded-full bg-bg-primary border border-white/[0.02] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "62%" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent via-accent to-accent-soft relative"
                >
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-20" />
                </motion.div>
              </div>
            </div>
            
            <motion.button
              suppressHydrationWarning
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/15 shrink-0 w-full sm:w-auto justify-center"
            >
              <Play size={10} weight="fill" />
              <span>Resume Session</span>
              <ArrowRight size={10} className="opacity-60 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function QuickActions() {
  const actions = [
    { label: "New Note", icon: <NotePencil size={16} />, desc: "Capture an idea", shortcut: "N" },
    { label: "Start Quiz", icon: <Lightbulb size={16} />, desc: "Test knowledge", shortcut: "Q" },
    { label: "Ask AI", icon: <Sparkle size={16} />, desc: "Get instant help", shortcut: "A" },
    { label: "Join Live", icon: <VideoCamera size={16} />, desc: "Attend session", shortcut: "L" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, i) => (
        <motion.button
          suppressHydrationWarning
          key={action.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 24, delay: i * 0.05 }}
          whileHover={{ y: -3, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          className="group flex flex-col items-start gap-2.5 p-4 rounded-xl bg-gradient-to-b from-bg-layer to-bg-secondary/40 border border-white/[0.03] text-text-secondary/60 hover:text-text-primary hover:border-white/[0.08] hover:bg-bg-layer hover:shadow-raised transition-all duration-300 relative overflow-hidden text-left"
        >
          {/* Subtle sheen and shortcut indicator */}
          <div className="absolute top-2 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] font-bold text-text-secondary/30 bg-white/[0.03] border border-white/[0.04] px-1 py-0.5 rounded uppercase tabular-nums">
            ⌥{action.shortcut}
          </div>

          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.04] group-hover:bg-accent/[0.06] group-hover:border-accent/20 group-hover:text-accent transition-all duration-300">
            {action.icon}
          </span>
          <div>
            <span className="block text-[11px] font-bold tracking-wide text-text-primary/95">{action.label}</span>
            <span className="block text-[9px] text-text-secondary/40 mt-0.5 group-hover:text-text-secondary/60 transition-colors">{action.desc}</span>
          </div>
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
    <div className="space-y-6">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg bg-accent/[0.06] border border-accent/15 flex items-center justify-center shrink-0">
            <Flame size={20} className="text-accent animate-pulse" weight="fill" />
            <div className="absolute inset-0 rounded-lg bg-accent/5 blur-[4px] pointer-events-none" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/40 leading-none mb-1">Current Streak</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-heading font-semibold text-text-primary tracking-tight leading-none tabular-nums">
                7
              </span>
              <span className="text-xs text-text-secondary/50 font-medium">days</span>
            </div>
          </div>
        </div>
        
        <div className="w-px h-8 bg-white/[0.04]" />
        
        <div className="flex flex-col">
          <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/40 leading-none mb-1.5">Personal Best</span>
          <span className="text-xs font-semibold text-text-primary/80 flex items-center gap-1.5">
            14 days
            <span className="w-1.5 h-1.5 rounded-full bg-accent-support" />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {days.map((day, i) => (
          <motion.div
            key={`${day}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: i * 0.03 }}
            className="flex flex-col items-center gap-1.5 flex-1"
          >
            <div
              className={`w-full aspect-square max-w-[36px] rounded-lg flex items-center justify-center text-[10px] font-bold transition-all duration-300 border relative ${
                activeDays[i]
                  ? "bg-accent/[0.08] text-accent border-accent/25 shadow-sm shadow-accent/5 font-extrabold"
                  : "bg-white/[0.01] text-text-secondary/30 border-white/[0.02]"
              }`}
            >
              {activeDays[i] ? (
                <span>{day}</span>
              ) : (
                <span className="opacity-40">{day}</span>
              )}
              {activeDays[i] && (
                <span className="absolute -bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-accent" />
              )}
            </div>
            <span className="text-[9px] font-medium text-text-secondary/40 tracking-tight tabular-nums">
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
    <div className="space-y-6">
      {/* Focus Time */}
      <div>
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg bg-accent-support/[0.06] border border-accent-support/15 flex items-center justify-center shrink-0">
              <Timer size={18} className="text-accent-support" />
            </div>
            <div>
              <p className="text-xs font-bold text-text-primary/95 leading-none mb-1">Focus Session</p>
              <p className="text-[9px] font-semibold text-text-secondary/40 uppercase tracking-wide">Daily Target</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-heading font-semibold text-text-primary tracking-tight leading-none tabular-nums">
              3h<span className="text-sm font-medium text-text-secondary/40 ml-0.5">24m</span>
            </span>
          </div>
        </div>
        
        <div className="relative mt-3">
          <div className="w-full h-[5px] rounded-full bg-bg-primary border border-white/[0.02] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "56%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="h-full rounded-full bg-accent-support relative"
            >
              <div className="absolute inset-0 rounded-full bg-white/10 opacity-20" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-between text-[9px] font-bold text-text-secondary/40 mt-2.5">
          <span className="tracking-wide">0h</span>
          <span className="text-text-secondary/50 font-bold uppercase tracking-wider">Goal: 6h</span>
          <span className="tracking-wide">6h</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/[0.03]">
        <div className="flex-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/40 mb-1">Sessions</p>
          <p className="text-xs font-semibold text-text-primary/80 tabular-nums">4 today</p>
        </div>
        <div className="w-px h-8 bg-white/[0.03]" />
        <div className="flex-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/40 mb-1">Avg. Focus</p>
          <p className="text-xs font-semibold text-text-primary/80 tabular-nums">51 min</p>
        </div>
        <div className="w-px h-8 bg-white/[0.03]" />
        <div className="flex-1">
          <p className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/40 mb-1">Active</p>
          <p className="text-xs font-semibold text-accent-soft/80 tabular-nums">7 days</p>
        </div>
      </div>
    </div>
  );
}
