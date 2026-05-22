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
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-1">
            {title && (
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                <h2 className="text-[11px] font-heading font-bold uppercase tracking-[0.15em] text-text-primary/70">
                  {title}
                </h2>
              </div>
            )}
            {subtitle && (
              <p className="text-xs text-text-secondary/40 font-medium pl-4.5">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0 pl-4">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
