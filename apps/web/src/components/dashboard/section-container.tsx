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
          <div>
            {title && (
              <h2 className="text-[15px] font-heading font-semibold text-text-primary tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-text-secondary/70 mt-1">
                {subtitle}
              </p>
            )}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
