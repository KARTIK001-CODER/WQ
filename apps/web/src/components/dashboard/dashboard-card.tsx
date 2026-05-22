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
    "bg-bg-layer border border-border-subtle shadow-surface",
  elevated:
    "bg-bg-secondary border border-border-mid shadow-raised",
  primary:
    "bg-bg-elevated border border-border-active shadow-elevated",
  utility:
    "bg-bg-layer border border-border-subtle shadow-surface",
};

export function DashboardCard({
  children,
  className,
  variant = "default",
  padding = "md",
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -3,
        transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className={cn(
        "rounded-xl will-change-transform",
        variantClasses[variant],
        className
      )}
    >
      <div className={cn(paddingMap[padding])}>{children}</div>
    </motion.div>
  );
}
