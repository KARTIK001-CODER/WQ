"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FrostedBadgeProps {
  children: ReactNode;
  className?: string;
}

export default function FrostedBadge({
  children,
  className,
}: FrostedBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full",
        "bg-white/60 backdrop-blur-md text-xs font-sans font-semibold",
        "uppercase tracking-wider text-deep-moss shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
