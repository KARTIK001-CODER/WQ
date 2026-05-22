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
        "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 outline-none",
        isActive
          ? "text-text-primary"
          : "text-text-secondary/70 hover:text-text-primary"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 rounded-lg bg-hover-bg border border-border-subtle"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-3">
        <span
          className={cn(
            "shrink-0 w-5 h-5 flex items-center justify-center transition-colors duration-200",
            isActive
              ? "text-accent"
              : "text-text-secondary/50 group-hover:text-text-secondary/80"
          )}
        >
          {icon}
        </span>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {label}
          </motion.span>
        )}
      </span>
    </Link>
  );
}
