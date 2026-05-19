import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "verdant" | "seafoam" | "sunlight" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface GlazedButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  verdant:
    "bg-verdant text-white hover:bg-verdant-dark hover:shadow-[0_8px_30px_-6px_rgba(61,140,111,0.5)]",
  seafoam: "bg-sea-foam text-white hover:bg-[#5AA08C] hover:shadow-[0_8px_30px_-6px_rgba(107,181,161,0.5)]",
  sunlight:
    "bg-sunlight text-deep-moss hover:bg-[#E0B83A] hover:shadow-[0_8px_30px_-6px_rgba(242,201,76,0.5)]",
  ghost:
    "bg-transparent text-verdant border-2 border-verdant hover:bg-verdant hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function GlazedButton({
  href,
  variant = "verdant",
  size = "md",
  children,
  className = "",
}: GlazedButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden",
        "rounded-xl font-sans font-semibold tracking-wide",
        "transition-all duration-200 ease-out",
        "hover:scale-[1.02] active:scale-[0.98]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.1)]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {/* Dewdrop shine overlay */}
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
