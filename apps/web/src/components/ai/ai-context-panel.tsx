"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  ChartBar,
  Lightbulb,
  Lightning,
  Clock,
  Sparkle,
} from "@phosphor-icons/react";
import { useAI } from "./ai-provider";
import { weakTopics, learningInsights } from "./placeholder-data";

export function AIContextPanel() {
  const { contextOpen } = useAI();

  return (
    <motion.aside
      layout
      initial={false}
      animate={{ width: contextOpen ? 280 : 0, opacity: contextOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden border-l border-white/[0.02] bg-bg-secondary/20 relative z-20 shrink-0"
    >
      <div className="w-[280px] h-full flex flex-col">
        <div className="flex-1 overflow-y-auto scroll-smooth p-4 space-y-5">
          {/* Current context */}
          <div>
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-3">
              <div className="flex items-center gap-1.5">
                <Lightning size={10} className="text-accent/50" />
                Current Context
              </div>
            </h3>
            <div className="p-3 rounded-xl bg-accent/8 border border-accent/15">
              <p className="text-[11px] font-medium text-accent/90 mb-1">
                ML Engineering for Production
              </p>
              <p className="text-[10px] text-accent/60 leading-relaxed">
                Module: Production Infrastructure
              </p>
              <div className="mt-2 flex items-center gap-1.5 text-[9px] text-accent/40">
                <Clock size={8} />
                Last active 2 hours ago
              </div>
            </div>
          </div>

          {/* Weak topics */}
          <div>
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-3">
              <div className="flex items-center gap-1.5">
                <ChartBar size={10} className="text-accent-support/50" />
                Areas to Review
              </div>
            </h3>
            <div className="space-y-2">
              {weakTopics.map((topic) => (
                <div key={topic.name} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-text-secondary/50 group-hover:text-text-secondary/70 transition-colors duration-200">
                      {topic.name}
                    </span>
                    <span className="text-[9px] text-text-secondary/30 tabular-nums">
                      {topic.confidence}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-black/30 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${topic.confidence}%` }}
                      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                      className={cn(
                        "h-full rounded-full",
                        topic.confidence < 40
                          ? "bg-accent/60"
                          : topic.confidence < 60
                            ? "bg-accent-soft/60"
                            : "bg-accent-support/60"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested prompts */}
          <div>
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-3">
              <div className="flex items-center gap-1.5">
                <Lightbulb size={10} className="text-accent-soft/50" />
                Suggested
              </div>
            </h3>
            <div className="space-y-1.5">
              {[
                { text: "Review container orchestration fundamentals", icon: Sparkle },
                { text: "Practice model serving concepts", icon: Sparkle },
                { text: "Get help with data pipeline design", icon: Sparkle },
              ].map((item) => (
                <button
                  key={item.text}
                  className="w-full flex items-start gap-2 px-2.5 py-2 rounded-lg text-left hover:bg-white/[0.015] transition-all duration-200 group"
                >
                  <item.icon size={10} className="text-accent/30 mt-0.5 shrink-0 group-hover:text-accent/60 transition-colors duration-200" />
                  <span className="text-[10px] text-text-secondary/35 group-hover:text-text-secondary/60 leading-snug transition-colors duration-200">
                    {item.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Learning insights */}
          <div>
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-3">
              <div className="flex items-center gap-1.5">
                <ChartBar size={10} className="text-accent-support/50" />
                Insights
              </div>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {learningInsights.map((insight) => (
                <div
                  key={insight.label}
                  className="p-2.5 rounded-xl bg-white/[0.01] border border-white/[0.03]"
                >
                  <p className="text-[15px] font-heading font-bold text-text-primary/70 tabular-nums">
                    {insight.value}
                  </p>
                  <p className="text-[8px] text-text-secondary/25 mt-0.5 uppercase tracking-wide">
                    {insight.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
