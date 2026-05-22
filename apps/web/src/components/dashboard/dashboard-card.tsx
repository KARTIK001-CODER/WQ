"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "primary" | "utility";
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantClasses = {
  default:
    "bg-gradient-to-b from-bg-layer to-bg-secondary/40 border border-white/[0.03] shadow-card ring-1 ring-white/[0.01]",
  elevated:
    "bg-gradient-to-b from-bg-elevated to-bg-layer border border-white/[0.05] shadow-raised ring-1 ring-white/[0.02]",
  primary:
    "bg-gradient-to-b from-bg-layer via-bg-layer to-accent/[0.02] border border-accent/20 shadow-elevated ring-1 ring-accent/[0.05]",
  utility:
    "bg-bg-secondary/80 border border-white/[0.02] shadow-surface backdrop-blur-md",
};

export function DashboardCard({
  children,
  className,
  variant = "default",
  padding = "md",
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      whileHover={{
        y: -4,
        scale: 1.004,
        shadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        transition: { type: "spring", stiffness: 400, damping: 28 },
      }}
      className={cn(
        "rounded-xl will-change-transform transition-colors duration-300 relative overflow-hidden",
        variantClasses[variant],
        className
      )}
    >
      {/* Subtle top sheen line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      <div className={cn(paddingMap[padding])}>{children}</div>
    </motion.div>
  );
}
