"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NotePencil, Robot, Clock, Plus } from "@phosphor-icons/react";

type Panel = "notes" | "ai";

export function WorkspacePanel() {
  const [activePanel, setActivePanel] = useState<Panel>("notes");
  const [noteContent, setNoteContent] = useState(
    "Raft is a consensus algorithm designed to be more understandable than Paxos.\n\nKey properties:\n- Leader-based: all writes go through leader\n- Log replication: leader sends AppendEntries RPCs\n- Election safety: at most one leader per term\n\nLeader Election:\n1. Follower times out → becomes Candidate\n2. Votes for self, sends RequestVote RPC\n3. Wins majority → becomes Leader\n4. Sends heartbeats to prevent new elections"
  );

  return (
    <div
      className="w-[340px] shrink-0 flex flex-col h-full"
      style={{
        backgroundColor: "#FFFFFF",
        borderLeft: "1px solid rgba(30,30,28,0.10)",
      }}
    >
      {/* Panel toggle — text links, not pills */}
      <div
        className="shrink-0 flex items-center px-5 h-[52px]"
        style={{ borderBottom: "1px solid rgba(30,30,28,0.08)" }}
      >
        {[
          { id: "notes" as Panel, icon: NotePencil, label: "Notes" },
          { id: "ai" as Panel, icon: Robot, label: "AI Tutor" },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activePanel === tab.id;
          const color =
            tab.id === "ai" && active
              ? "#5C7A9B"
              : active
              ? "#1E1E1C"
              : "#A8A8A5";
          return (
            <button
              key={tab.id}
              onClick={() => setActivePanel(tab.id)}
              className="relative flex items-center gap-1.5 mr-6 pb-px text-sm font-medium transition-colors duration-150"
              style={{ color }}
            >
              <Icon size={13} />
              {tab.label}
              {active && (
                <motion.div
                  layoutId="workspace-tab"
                  className="absolute -bottom-px left-0 right-0 h-px"
                  style={{
                    backgroundColor:
                      tab.id === "ai" ? "#5C7A9B" : "#C1622F",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}

        <div className="ml-auto">
          {activePanel === "notes" && (
            <button
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
          )}
        </div>
      </div>

      {/* Panel content */}
      <div className="flex-1 overflow-hidden">
        {activePanel === "notes" ? (
          <motion.div
            key="notes"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full flex flex-col"
          >
            {/* Note metadata */}
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{ borderBottom: "1px solid rgba(30,30,28,0.06)" }}
            >
              <Clock size={11} style={{ color: "#C8C8C5" }} />
              <span
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: "#C8C8C5" }}
              >
                Lecture 4 · Edited 2 min ago
              </span>
            </div>

            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Start capturing your thoughts here…"
              className="flex-1 resize-none p-5 text-sm leading-relaxed bg-transparent border-none outline-none"
              style={{ color: "#1E1E1C" }}
            />

            {noteContent.length === 0 && (
              <div className="px-5 pb-5">
                <p
                  className="text-xs"
                  style={{ color: "#A8A8A5", fontStyle: "italic" }}
                >
                  "Capture ideas while they&apos;re fresh — they&apos;re easy to refine later."
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="h-full flex flex-col"
          >
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {/* AI message — Slate Blue left border */}
              <div
                className="rounded-lg px-4 py-3.5"
                style={{
                  backgroundColor: "rgba(92,122,155,0.06)",
                  border: "1px solid rgba(92,122,155,0.12)",
                  borderLeft: "3px solid #5C7A9B",
                }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Robot size={11} style={{ color: "#5C7A9B" }} />
                  <span
                    className="text-[9px] font-semibold tracking-widest uppercase"
                    style={{ color: "#5C7A9B" }}
                  >
                    Aethera AI
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#1E1E1C" }}>
                  You&apos;re currently on Lecture 4 — Raft Consensus. Would you like me to explain the leader election process or quiz you on what you&apos;ve learned so far?
                </p>
              </div>
            </div>

            <div
              className="shrink-0 p-4"
              style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
            >
              <div
                className="flex items-center gap-2 px-3 h-9 rounded-md"
                style={{
                  backgroundColor: "rgba(30,30,28,0.03)",
                  border: "1px solid rgba(30,30,28,0.10)",
                }}
              >
                <input
                  type="text"
                  placeholder="Ask about this lecture…"
                  className="flex-1 bg-transparent text-xs border-none outline-none"
                  style={{ color: "#1E1E1C" }}
                />
                <Robot size={13} style={{ color: "#5C7A9B" }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
