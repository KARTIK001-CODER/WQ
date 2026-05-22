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
  { href: "/dashboard/ai-tutor", label: "AI Tutor", icon: <Sparkle size={18} weight="duotone" /> },
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
        "flex flex-col h-full transition-[width] duration-300 ease-out",
        sidebarCollapsed ? "w-[68px]" : "w-[252px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 h-[60px] border-b border-border-subtle/60 shrink-0">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-2.5 overflow-hidden",
            sidebarCollapsed && "justify-center w-full"
          )}
        >
          <div className="w-6 h-6 rounded-[6px] bg-accent flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-white">A</span>
          </div>
          {!sidebarCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-heading text-[15px] font-semibold tracking-tight text-text-primary"
            >
              Aethera
            </motion.span>
          )}
        </Link>
        <button
          onClick={toggleSidebar}
          className={cn(
            "text-text-secondary/40 hover:text-text-secondary transition-colors p-1 rounded-md hover:bg-hover-bg",
            sidebarCollapsed && "hidden"
          )}
          aria-label="Collapse sidebar"
        >
          <SidebarIcon size={15} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-0.5 px-2 py-5 overflow-y-auto">
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

      {/* Bottom section */}
      <div
        className={cn(
          "px-3 py-3 border-t border-border-subtle/60",
          sidebarCollapsed && "flex justify-center"
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-support/40 to-accent-support/20 flex items-center justify-center shrink-0 ring-1 ring-white/[0.04]">
            <span className="text-[10px] font-semibold text-accent-soft/90">AK</span>
          </div>
          {!sidebarCollapsed && (
            <div className="overflow-hidden">
              <p className="text-xs font-medium text-text-primary/90 truncate">
                Alex K.
              </p>
              <p className="text-[10px] text-text-secondary/50 truncate">
                Student
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
          "hidden md:flex flex-col shrink-0 bg-bg-secondary border-r border-border-subtle/60 h-screen transition-[width] duration-300 ease-out",
          sidebarCollapsed ? "w-[68px]" : "w-[252px]"
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
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileSidebar}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-[280px] bg-bg-secondary border-r border-border-subtle/60 md:hidden"
            >
              <div className="flex items-center justify-between px-4 h-[60px] border-b border-border-subtle/60">
                <Link href="/dashboard" className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-[6px] bg-accent flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">A</span>
                  </div>
                  <span className="font-heading text-[15px] font-semibold text-text-primary">
                    Aethera
                  </span>
                </Link>
                <button
                  onClick={closeMobileSidebar}
                  className="text-text-secondary/50 hover:text-text-secondary p-1 rounded-md hover:bg-hover-bg transition-colors"
                  aria-label="Close sidebar"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-0.5 px-2 py-5">
                {navItems.map((item) => (
                  <SidebarNavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 px-3 py-3 border-t border-border-subtle/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent-support/40 to-accent-support/20 flex items-center justify-center ring-1 ring-white/[0.04]">
                    <span className="text-[10px] font-semibold text-accent-soft/90">AK</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-primary/90">Alex K.</p>
                    <p className="text-[10px] text-text-secondary/50">Student</p>
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
