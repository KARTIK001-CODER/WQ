"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

function useAnimatedValue(target: number, delay: number = 0) {
  const [value, setValue] = useState(() => (delay < 0 ? target : 0));
  const started = useRef(false);

  useEffect(() => {
    if (delay < 0) return;
    if (started.current) return;
    const timeout = setTimeout(() => {
      started.current = true;
      const duration = 800;
      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [target, delay]);

  return value;
}

interface StatWidgetProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  trendDirection?: "up" | "down" | "neutral";
  className?: string;
  delay?: number;
  animate?: boolean;
}

export function StatWidget({
  label,
  value,
  icon,
  trend,
  trendDirection = "neutral",
  className,
  delay = 0,
  animate = false,
}: StatWidgetProps) {
  const numericValue = typeof value === "number" ? value : parseInt(value as string, 10);
  const suffix = typeof value === "string" ? value.replace(/[\d,]/g, "") : "";
  const animatedValue = useAnimatedValue(numericValue, animate ? delay : -1);
  const displayValue = animate ? animatedValue + suffix : value;

  const trendColor = {
    up: "text-accent",
    down: "text-red-400",
    neutral: "text-text-secondary/50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
        delay,
      }}
      whileHover={{ y: -3, scale: 1.005, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className={cn(
        "bg-gradient-to-b from-bg-layer to-bg-secondary/40 border border-white/[0.03] rounded-xl p-5 shadow-card ring-1 ring-white/[0.01] cursor-default relative overflow-hidden transition-colors duration-300",
        className
      )}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      <div className="flex items-start justify-between mb-3.5">
        <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-text-secondary/40">
          {label}
        </span>
        <span className="flex items-center justify-center w-6 h-6 rounded-md bg-accent/[0.06] border border-accent/15 text-accent-soft/60">
          {icon}
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-2.5 mt-2">
        <span className="text-[28px] font-heading font-semibold text-text-primary tracking-tight leading-none tabular-nums">
          {displayValue}
        </span>
        {trend && (
          <span
            className={cn(
              "text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full bg-white/[0.02] border border-white/[0.03]",
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
