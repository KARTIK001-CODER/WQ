"use client";

import { motion } from "framer-motion";
import { ChatDots, BookmarkSimple, Plus } from "@phosphor-icons/react";
import { useAI } from "./ai-provider";
import { chatSessions, savedExplanations } from "./placeholder-data";

export function AISidebar() {
  const { sidebarOpen, newChat } = useAI();

  return (
    <motion.aside
      layout
      initial={false}
      animate={{ width: sidebarOpen ? 240 : 0, opacity: sidebarOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden shrink-0 flex flex-col"
      style={{ borderRight: "1px solid rgba(30,30,28,0.08)", backgroundColor: "#FFFFFF" }}
    >
      <div className="w-[240px] h-full flex flex-col">
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center justify-between shrink-0"
          style={{ borderBottom: "1px solid rgba(30,30,28,0.07)" }}
        >
          <span
            className="text-[10px] font-semibold tracking-[0.14em] uppercase"
            style={{ color: "#6B6B68" }}
          >
            History
          </span>
          <button
            onClick={newChat}
            className="w-6 h-6 rounded flex items-center justify-center transition-colors duration-150"
            style={{ color: "#A8A8A5" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#1E1E1C")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#A8A8A5")
            }
          >
            <Plus size={13} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          {/* Recent chats */}
          <div className="mb-4">
            <div className="px-5 py-2">
              <span
                className="text-[9px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#A8A8A5" }}
              >
                Recent
              </span>
            </div>
            {chatSessions.map((session, i) => (
              <button
                key={session.id}
                className="w-full text-left px-5 py-3 transition-all duration-150"
                style={{
                  borderLeft: i === 0 ? "3px solid #5C7A9B" : "3px solid transparent",
                  backgroundColor: i === 0 ? "rgba(92,122,155,0.06)" : "transparent",
                  borderBottom: "1px solid rgba(30,30,28,0.04)",
                }}
                onMouseEnter={(e) => {
                  if (i !== 0) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(30,30,28,0.025)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== 0) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }
                }}
              >
                <div className="flex items-start gap-2">
                  <ChatDots
                    size={12}
                    className="shrink-0 mt-0.5"
                    style={{ color: i === 0 ? "#5C7A9B" : "#A8A8A5" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-medium truncate"
                      style={{ color: "#1E1E1C" }}
                    >
                      {session.title}
                    </p>
                    <p
                      className="text-[10px] mt-0.5 uppercase tracking-wider font-semibold"
                      style={{ color: "#A8A8A5" }}
                    >
                      {session.timestamp}
                    </p>
                  </div>
                  {session.pinned && (
                    <BookmarkSimple
                      size={10}
                      weight="fill"
                      className="shrink-0"
                      style={{ color: "#C1622F" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Saved */}
          <div>
            <div className="px-5 py-2">
              <span
                className="text-[9px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#A8A8A5" }}
              >
                Saved Explanations
              </span>
            </div>
            {savedExplanations.map((exp) => (
              <button
                key={exp.id}
                className="w-full text-left px-5 py-3 transition-all duration-150"
                style={{ borderBottom: "1px solid rgba(30,30,28,0.04)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(30,30,28,0.025)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent")
                }
              >
                <p className="text-xs font-medium truncate" style={{ color: "#1E1E1C" }}>
                  {exp.title}
                </p>
                <p className="text-[10px] mt-0.5 truncate" style={{ color: "#A8A8A5" }}>
                  {exp.preview}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
