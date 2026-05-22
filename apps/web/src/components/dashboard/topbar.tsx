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
    <header className="h-[56px] flex items-center justify-between px-6 lg:px-8 border-b border-white/[0.03] bg-bg-primary/40 backdrop-blur-xl shrink-0 relative z-30">
      {/* Left */}
      <div className="flex items-center gap-5 flex-1 min-w-0">
        <button
          suppressHydrationWarning
          onClick={toggleMobileSidebar}
          className="md:hidden text-text-secondary/50 hover:text-text-primary transition-all duration-300 p-1.5 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/[0.06]"
          aria-label="Open menu"
        >
          <List size={16} />
        </button>

        <div className="relative flex items-center flex-1 max-w-sm group">
          <MagnifyingGlass
            size={14}
            className="absolute left-3 text-text-secondary/40 group-focus-within:text-accent transition-colors duration-300 pointer-events-none z-10"
          />
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Search..."
            className="w-full bg-black/20 hover:bg-black/30 border border-white/[0.03] hover:border-white/[0.06] focus:border-accent/40 rounded-lg pl-9 pr-12 py-[7px] text-xs font-medium text-text-primary placeholder:text-text-secondary/35 outline-none transition-all duration-300 focus:bg-black/40 focus:ring-1 focus:ring-accent/10 focus:shadow-[0_0_15px_rgba(196,106,58,0.03)]"
          />
          <kbd className="absolute right-2.5 hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-text-secondary/30 bg-white/[0.02] border border-white/[0.04] rounded-md shadow-sm">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* XP & Streak */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/[0.01] hover:bg-white/[0.02] border border-white/[0.03] hover:border-white/[0.06] shadow-card ring-1 ring-white/[0.01] transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-center gap-1.5">
            <Star size={12} weight="fill" className="text-accent animate-pulse-glow" />
            <span className="text-[11px] font-bold text-text-secondary/50 tracking-wide uppercase">
              <span className="text-text-primary font-extrabold tracking-normal">1,280</span> XP
            </span>
          </div>
          <div className="w-px h-3 bg-white/[0.06]" />
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-text-secondary/50 tracking-wide uppercase">
              <span className="text-accent-soft font-extrabold tracking-normal">7</span> Day Streak
            </span>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.button
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative p-2 rounded-lg text-text-secondary/50 hover:text-text-primary bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/[0.06] shadow-card ring-1 ring-white/[0.01] transition-all duration-300"
          aria-label="Notifications"
        >
          <Bell size={15} weight="duotone" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent ring-[2px] ring-bg-secondary" />
        </motion.button>

        {/* Profile */}
        <motion.button
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="flex items-center gap-2.5 p-1 pl-1.5 pr-2.5 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.03] hover:border-white/[0.06] shadow-card ring-1 ring-white/[0.01] transition-all duration-300 cursor-pointer"
          aria-label="Profile"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent-support/30 to-accent-support/10 flex items-center justify-center ring-1 ring-white/[0.08] shadow-inner relative overflow-hidden shrink-0">
            <span className="text-[9px] font-bold text-accent-soft/85 relative z-10">AK</span>
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <span className="hidden sm:block text-xs font-semibold text-text-primary/90">
            Alex
          </span>
        </motion.button>
      </div>
    </header>
  );
}
