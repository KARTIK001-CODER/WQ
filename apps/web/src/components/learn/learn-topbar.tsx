"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sidebar, MonitorPlay, Clock } from "@phosphor-icons/react";
import { useLearn } from "./learn-provider";
import { cn } from "@/lib/cn";

export function LearnTopbar({ courseTitle }: { courseTitle: string }) {
  const { toggleSidebar, toggleFocusMode, focusMode, sidebarOpen } = useLearn();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-11 flex items-center justify-between px-4 border-b border-white/[0.02] bg-bg-primary/60 backdrop-blur-2xl relative z-30"
    >
      <div className="flex items-center gap-4">
        <motion.a
          href="/dashboard/courses"
          whileHover={{ x: -2 }}
          className="flex items-center gap-1.5 text-text-secondary/35 hover:text-text-primary transition-colors duration-300 text-[11px] font-medium"
        >
          <ArrowLeft size={12} />
          <span className="hidden sm:inline">Back</span>
        </motion.a>
        <div className="w-px h-3.5 bg-white/[0.03]" />
        <h1 className="text-[11px] font-heading font-semibold text-text-secondary/60 tracking-tight truncate max-w-[200px]">
          {courseTitle}
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.01] border border-white/[0.02] text-[10px] text-text-secondary/35 tabular-nums font-medium">
          <Clock size={9} className="text-text-secondary/25" />
          32:15 / 1:24:30
        </div>
        <motion.button
          onClick={toggleSidebar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "p-1.5 rounded-md transition-all duration-300",
            sidebarOpen
              ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_12px_rgba(196,106,58,0.08)]"
              : "text-text-secondary/35 hover:text-text-primary hover:bg-white/[0.02] border border-transparent"
          )}
          title="Toggle sidebar"
        >
          <Sidebar size={13} />
        </motion.button>
        <motion.button
          onClick={toggleFocusMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "p-1.5 rounded-md transition-all duration-300",
            focusMode
              ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_12px_rgba(196,106,58,0.08)]"
              : "text-text-secondary/35 hover:text-text-primary hover:bg-white/[0.02] border border-transparent"
          )}
          title="Focus mode"
        >
          <MonitorPlay size={13} />
        </motion.button>
      </div>
    </motion.header>
  );
}
