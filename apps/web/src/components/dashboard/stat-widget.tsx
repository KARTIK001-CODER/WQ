"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StatWidgetProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  className?: string;
  delay?: number;
}

export function StatWidget({
  label,
  value,
  icon,
  trend,
  trendDirection = "neutral",
  className,
  delay = 0,
}: StatWidgetProps) {
  const trendColor = {
    up: "text-accent",
    down: "text-red-400",
    neutral: "text-text-secondary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={cn(
        "bg-bg-layer border border-border-subtle rounded-xl p-5 shadow-surface cursor-default",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[11px] font-medium tracking-widest uppercase text-text-secondary/60">
          {label}
        </span>
        <span className="text-accent-soft/50">{icon}</span>
      </div>
      <div className="flex items-baseline gap-2.5">
        <span className="text-[26px] font-heading font-semibold text-text-primary tracking-tight leading-none">
          {value}
        </span>
        {trend && (
          <span
            className={cn(
              "text-[11px] font-medium",
              trendColor[trendDirection]
            )}
          >
            {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
}
