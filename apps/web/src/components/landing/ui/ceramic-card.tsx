import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlowColor = "verdant" | "seafoam" | "sunlight";

interface CeramicCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: GlowColor;
}

const glowTopLine: Record<GlowColor, string> = {
  verdant: "from-transparent via-verdant to-transparent",
  seafoam: "from-transparent via-sea-foam to-transparent",
  sunlight: "from-transparent via-sunlight to-transparent",
};

export default function CeramicCard({
  children,
  className,
  glowColor = "verdant",
}: CeramicCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-pure-white rounded-2xl",
        "shadow-[0_4px_20px_-2px_rgba(61,140,111,0.08),0_2px_8px_-2px_rgba(30,45,38,0.04)]",
        "hover:shadow-[0_20px_40px_-10px_rgba(61,140,111,0.14),0_8px_16px_-6px_rgba(30,45,38,0.08)]",
        "hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        "overflow-hidden",
        className
      )}
    >
      {/* Top dewdrop accent line */}
      <div
        className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${glowTopLine[glowColor]} rounded-full`}
      />
      {/* Inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
      {children}
    </div>
  );
}
