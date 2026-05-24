import React from "react";

interface SectionContainerProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  title,
  subtitle,
  action,
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div className={className}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-5">
          <div>
            {title && (
              <h2
                className="text-[10px] font-semibold tracking-[0.12em] uppercase"
                style={{ color: "#6B6B68" }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className="text-xs mt-0.5"
                style={{ color: "#A8A8A5" }}
              >
                {subtitle}
              </p>
            )}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
