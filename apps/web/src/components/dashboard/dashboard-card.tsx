import React from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "accent" | "left-border";
  padding?: "sm" | "md" | "lg";
  accentColor?: "ember" | "slate" | "moss";
  style?: React.CSSProperties;
}

const paddingMap = {
  sm: "p-5",
  md: "p-7",
  lg: "p-8",
};

export function DashboardCard({
  children,
  className,
  variant = "default",
  padding = "md",
  accentColor = "ember",
  style,
}: DashboardCardProps) {
  const accentColors = {
    ember: "#C1622F",
    slate: "#5C7A9B",
    moss: "#4E7C6B",
  };

  const borderStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(30, 30, 28, 0.08)",
      borderRadius: "8px",
    },
    primary: {
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(30, 30, 28, 0.08)",
      borderRadius: "8px",
    },
    accent: {
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(30, 30, 28, 0.08)",
      borderRadius: "8px",
    },
    "left-border": {
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(30, 30, 28, 0.08)",
      borderLeft: `3px solid ${accentColors[accentColor]}`,
      borderRadius: "8px",
    },
  };

  return (
    <div
      className={cn(paddingMap[padding], className)}
      style={{ ...borderStyles[variant], ...style }}
    >
      {children}
    </div>
  );
}
