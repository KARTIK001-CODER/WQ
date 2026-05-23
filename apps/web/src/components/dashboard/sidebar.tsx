"use client";

import { cn } from "@/lib/cn";
import { useDashboard } from "@/lib/dashboard-context";
import { SidebarNavItem } from "./sidebar-nav-item";
import {
  House,
  BookOpen,
  Sparkle,
  NotePencil,
  CalendarDots,
  ChartBar,
  Trophy,
  GearSix,
  Sidebar as SidebarIcon,
  X,
} from "@phosphor-icons/react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: <House size={18} weight="duotone" /> },
  { href: "/dashboard/courses", label: "My Courses", icon: <BookOpen size={18} weight="duotone" /> },
  { href: "/ai/tutor", label: "AI Tutor", icon: <Sparkle size={18} weight="duotone" /> },
  { href: "/dashboard/notes", label: "Notes", icon: <NotePencil size={18} weight="duotone" /> },
  { href: "/dashboard/planner", label: "Planner", icon: <CalendarDots size={18} weight="duotone" /> },
  { href: "/dashboard/analytics", label: "Analytics", icon: <ChartBar size={18} weight="duotone" /> },
  { href: "/dashboard/achievements", label: "Achievements", icon: <Trophy size={18} weight="duotone" /> },
  { href: "/dashboard/settings", label: "Settings", icon: <GearSix size={18} weight="duotone" /> },
];

export function Sidebar() {
  const {
    sidebarCollapsed,
    mobileSidebarOpen,
    toggleSidebar,
    closeMobileSidebar,
  } = useDashboard();

  const sidebarContent = (
    <div
      className={cn(
        "flex flex-col h-full transition-[width] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        sidebarCollapsed ? "w-[68px]" : "w-[240px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4.5 h-[56px] border-b border-white/[0.03] shrink-0">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-3 overflow-hidden",
            sidebarCollapsed && "justify-center w-full"
          )}
        >
          <div className="w-5.5 h-5.5 rounded-md bg-accent flex items-center justify-center shrink-0 shadow-glow relative overflow-hidden">
            <span className="text-[9px] font-extrabold text-white relative z-10">A</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
          </div>
          {!sidebarCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="font-heading text-[14px] font-bold tracking-tight text-text-primary uppercase"
            >
              Aethera
            </motion.span>
          )}
        </Link>
        <button
          suppressHydrationWarning
          onClick={toggleSidebar}
          className={cn(
            "text-text-secondary/30 hover:text-text-primary hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all p-1 rounded-md",
            sidebarCollapsed && "hidden"
          )}
          aria-label="Collapse sidebar"
        >
          <SidebarIcon size={14} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1.5 px-2 py-6 overflow-y-auto">
        {navItems.map((item) => (
          <SidebarNavItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            collapsed={sidebarCollapsed}
          />
        ))}
      </nav>

      {/* Bottom Profile Section */}
      <div
        className={cn(
          "px-4 py-4 border-t border-white/[0.03] bg-black/[0.08]",
          sidebarCollapsed && "flex justify-center"
        )}
      >
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-support/30 to-accent-support/10 flex items-center justify-center shrink-0 ring-1 ring-white/[0.08] shadow-inner relative overflow-hidden">
            <span className="text-[9px] font-bold text-accent-soft/80 relative z-10">AK</span>
            <div className="absolute inset-0 bg-black/10" />
          </div>
          {!sidebarCollapsed && (
            <div className="overflow-hidden flex-1">
              <p className="text-xs font-semibold text-text-primary/95 group-hover:text-accent transition-colors duration-300 truncate">
                Alex K.
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/30 truncate">
                Pro Learner
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden md:flex flex-col shrink-0 bg-bg-secondary/40 backdrop-blur-xl border-r border-white/[0.03] h-screen transition-[width] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          sidebarCollapsed ? "w-[68px]" : "w-[240px]"
        )}
      >
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileSidebar}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-[260px] bg-bg-secondary/80 backdrop-blur-xl border-r border-white/[0.03] md:hidden"
            >
              <div className="flex items-center justify-between px-4.5 h-[56px] border-b border-white/[0.03]">
                <Link href="/dashboard" className="flex items-center gap-3">
                  <div className="w-5.5 h-5.5 rounded-md bg-accent flex items-center justify-center shadow-glow">
                    <span className="text-[9px] font-extrabold text-white">A</span>
                  </div>
                  <span className="font-heading text-[14px] font-bold tracking-tight text-text-primary uppercase">
                    Aethera
                  </span>
                </Link>
                <button
                  suppressHydrationWarning
                  onClick={closeMobileSidebar}
                  className="text-text-secondary/40 hover:text-text-primary p-1.5 rounded-md hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all"
                  aria-label="Close sidebar"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="flex flex-col gap-1.5 px-2 py-6">
                {navItems.map((item) => (
                  <SidebarNavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-4 border-t border-white/[0.03] bg-black/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-support/30 to-accent-support/10 flex items-center justify-center ring-1 ring-white/[0.08]">
                    <span className="text-[9px] font-bold text-accent-soft/80">AK</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-primary/95">Alex K.</p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/30">Pro Learner</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
