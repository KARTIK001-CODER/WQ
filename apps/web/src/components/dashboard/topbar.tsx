"use client";

import { useDashboard } from "@/lib/dashboard-context";
import {
  MagnifyingGlass,
  Bell,
  List,
  Star,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Topbar() {
  const { toggleMobileSidebar } = useDashboard();

  return (
    <header className="h-[56px] flex items-center justify-between px-6 lg:px-8 border-b border-border-subtle/50 bg-bg-primary/70 backdrop-blur-xl shrink-0">
      {/* Left */}
      <div className="flex items-center gap-5 flex-1 min-w-0">
        <button
          suppressHydrationWarning
          onClick={toggleMobileSidebar}
          className="md:hidden text-text-secondary/60 hover:text-text-primary transition-colors p-1.5 rounded-md hover:bg-hover-bg"
          aria-label="Open menu"
        >
          <List size={20} />
        </button>

        <div className="relative flex items-center flex-1 max-w-sm">
          <MagnifyingGlass
            size={14}
            className="absolute left-3 text-text-secondary/40 pointer-events-none"
          />
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Search..."
            className="w-full bg-bg-layer/50 border border-border-subtle rounded-lg pl-9 pr-3 py-[7px] text-sm text-text-primary placeholder:text-text-secondary/30 outline-none transition-all duration-200 focus:border-border-mid focus:bg-bg-layer focus:shadow-surface"
          />
          <kbd className="absolute right-2.5 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-text-secondary/40 bg-bg-secondary/50 border border-border-subtle rounded">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* XP & Streak */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-bg-layer/50 border border-border-subtle/50"
        >
          <div className="flex items-center gap-1.5">
            <Star size={12} weight="fill" className="text-accent" />
            <span className="text-xs text-text-secondary/60">
              <span className="text-accent font-medium">1,280</span>
            </span>
          </div>
          <div className="w-px h-3.5 bg-border-mid/50" />
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-text-secondary/60">
              <span className="text-accent-soft font-medium">7</span> day streak
            </span>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.button
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.13 }}
          className="relative p-2 rounded-lg text-text-secondary/50 hover:text-text-secondary hover:bg-hover-bg transition-all duration-200"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-[7px] h-[7px] rounded-full bg-accent ring-[3px] ring-bg-primary" />
        </motion.button>

        {/* Profile */}
        <motion.button
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="flex items-center gap-2.5 p-1.5 pl-2 rounded-lg hover:bg-hover-bg transition-all duration-200"
          aria-label="Profile"
        >
          <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-accent-support/40 to-accent-support/20 flex items-center justify-center ring-1 ring-white/[0.04]">
            <span className="text-[9px] font-semibold text-accent-soft/90">AK</span>
          </div>
          <span className="hidden sm:block text-sm text-text-primary/80 font-medium">
            Alex
          </span>
        </motion.button>
      </div>
    </header>
  );
}
