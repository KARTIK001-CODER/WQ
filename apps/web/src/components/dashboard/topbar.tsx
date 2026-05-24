"use client";

import { MagnifyingGlass, Bell } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function Topbar() {
  return (
    <motion.header
      initial={{ y: -4, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 flex items-center justify-between px-8 h-[60px]"
      style={{
        backgroundColor: "#F6F3EE",
        borderBottom: "1px solid rgba(30, 30, 28, 0.10)",
      }}
    >
      {/* Search */}
      <div className="flex items-center gap-2.5 flex-1 max-w-sm">
        <div
          className="flex items-center gap-2.5 w-full px-3.5 h-9 rounded-md transition-all duration-200"
          style={{
            backgroundColor: "rgba(30, 30, 28, 0.04)",
            border: "1px solid rgba(30, 30, 28, 0.08)",
          }}
        >
          <MagnifyingGlass
            size={14}
            style={{ color: "#A8A8A5", flexShrink: 0 }}
          />
          <input
            type="text"
            placeholder="Search courses, notes, topics…"
            className="flex-1 bg-transparent text-sm placeholder:text-ink-3 text-ink border-none outline-none font-ui"
            style={{ fontSize: "13px" }}
          />
          <kbd
            className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
            style={{
              color: "#A8A8A5",
              backgroundColor: "rgba(30, 30, 28, 0.06)",
              border: "1px solid rgba(30, 30, 28, 0.08)",
            }}
          >
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3 ml-4">
        <button
          className="relative w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-150"
          style={{ color: "#6B6B68" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor =
              "rgba(30, 30, 28, 0.05)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.backgroundColor =
              "transparent")
          }
        >
          <Bell size={16} />
          <span
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C1622F" }}
          />
        </button>

        {/* Divider */}
        <div
          className="h-5 w-px"
          style={{ backgroundColor: "rgba(30, 30, 28, 0.12)" }}
        />

        {/* Avatar */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer"
          style={{ backgroundColor: "#C1622F" }}
        >
          K
        </div>
      </div>
    </motion.header>
  );
}
