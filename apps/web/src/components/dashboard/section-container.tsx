"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface SectionContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function SectionContainer({
  title,
  subtitle,
  children,
  className,
  action,
}: SectionContainerProps) {
  return (
    <section className={cn("", className)}>
      {(title || action) && (
        <div className="flex items-end justify-between mb-6">
          <div className="flex flex-col gap-1.5">
            {title && (
              <div className="flex items-center gap-3">
                <div className="w-0.5 h-4 rounded-full bg-accent/50 shrink-0" />
                <h2 className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-text-primary/70">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="text-xs text-text-secondary/40 font-medium ml-3.5">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex-1 mx-6 h-px bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-transparent self-center mb-px" />
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
