"use client";

import { motion } from "framer-motion";

const filters = ["All", "In Progress", "Completed", "Not Started"];

interface CoursesFilterProps {
  active?: string;
  onChange?: (filter: string) => void;
}

export function CoursesFilter({ active = "All", onChange }: CoursesFilterProps) {
  return (
    <div className="flex items-center gap-6">
      {filters.map((filter) => {
        const isActive = filter === active;
        return (
          <motion.button
            key={filter}
            onClick={() => onChange?.(filter)}
            className="relative text-sm font-medium transition-colors duration-150 py-1"
            style={{ color: isActive ? "#1E1E1C" : "#A8A8A5" }}
            whileHover={{ color: "#6B6B68" }}
          >
            {filter}
            {isActive && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ backgroundColor: "#C1622F" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
