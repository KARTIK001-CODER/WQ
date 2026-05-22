"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  MagnifyingGlass,
  FunnelSimple,
  CaretDown,
} from "@phosphor-icons/react";

const easing = [0.25, 0.1, 0.25, 1] as const;

const categories = [
  { label: "All", value: "all" },
  { label: "In Progress", value: "in-progress" },
  { label: "Recommended", value: "recommended" },
  { label: "Completed", value: "completed" },
  { label: "Saved", value: "saved" },
];

const sortOptions = [
  { label: "Recent", value: "recent" },
  { label: "Progress", value: "progress" },
  { label: "A-Z", value: "alpha" },
];

interface CoursesFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CoursesFilter({
  activeCategory,
  onCategoryChange,
}: CoursesFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("recent");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08, ease: easing }}
      className="mb-10"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        {/* Search */}
        <div className="relative flex-1 max-w-sm w-full group">
          <MagnifyingGlass
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary/40 group-focus-within:text-accent transition-colors duration-300 pointer-events-none z-10"
          />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/20 hover:bg-black/30 border border-white/[0.03] hover:border-white/[0.06] focus:border-accent/40 rounded-lg pl-9 pr-3 py-[7px] text-sm font-medium text-text-primary placeholder:text-text-secondary/35 outline-none transition-all duration-300 focus:bg-black/40 focus:ring-1 focus:ring-accent/10 focus:shadow-[0_0_15px_rgba(196,106,58,0.03)]"
          />
        </div>

        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 px-3 py-[7px] rounded-lg bg-bg-layer/50 border border-border-subtle text-xs text-text-secondary/60 hover:text-text-secondary hover:border-border-mid/60 transition-all duration-200"
          >
            <FunnelSimple size={14} />
            <span className="capitalize">{activeSort}</span>
            <CaretDown size={11} className={`transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
          </button>
          {sortOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.96 }}
              transition={{ duration: 0.15, ease: easing }}
              className="absolute top-full right-0 mt-1.5 w-[140px] bg-bg-layer border border-border-mid rounded-lg shadow-elevated z-20 py-1"
            >
              {sortOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { setActiveSort(opt.value); setSortOpen(false); }}
                  className={cn(
                    "w-full text-left px-3 py-2 text-xs transition-colors duration-150",
                    activeSort === opt.value
                      ? "text-accent bg-accent/5"
                      : "text-text-secondary/60 hover:text-text-primary hover:bg-hover-bg"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Category pills */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
        <div className="flex items-center p-1 rounded-xl bg-black/20 border border-white/[0.02] shadow-inner">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onCategoryChange(cat.value)}
              className={cn(
                "relative px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 whitespace-nowrap outline-none",
                activeCategory === cat.value
                  ? "text-text-primary"
                  : "text-text-secondary/40 hover:text-text-secondary/80"
              )}
            >
              {activeCategory === cat.value && (
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-lg bg-white/[0.04] border border-white/[0.06] shadow-card ring-1 ring-white/[0.01]"
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
