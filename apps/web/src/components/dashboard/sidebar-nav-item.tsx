"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SidebarNavItemProps {
  href: string;
  label: string;
  icon: ReactNode;
  collapsed?: boolean;
}

export function SidebarNavItem({
  href,
  label,
  icon,
  collapsed,
}: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 outline-none",
        isActive
          ? "text-text-primary"
          : "text-text-secondary/60 hover:text-text-primary"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.04] shadow-card ring-1 ring-white/[0.01]"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
      {isActive && !collapsed && (
        <motion.div
          layoutId="sidebar-active-accent"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-4 rounded-r-full bg-accent"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3 w-full">
        <span
          className={cn(
            "shrink-0 w-5 h-5 flex items-center justify-center transition-all duration-300",
            isActive
              ? "text-accent"
              : "text-text-secondary/40 group-hover:text-text-secondary/80"
          )}
        >
          {icon}
        </span>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="truncate"
          >
            {label}
          </motion.span>
        )}
      </span>
    </Link>
  );
}
