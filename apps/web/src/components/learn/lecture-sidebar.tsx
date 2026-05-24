"use client";

import { CheckCircle, Circle, Lock } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface Lecture {
  id: string;
  title: string;
  duration: string;
  status: "completed" | "active" | "locked";
  order: number;
}

const lectures: Lecture[] = [
  { id: "1", title: "Introduction to Distributed Systems", duration: "18m", status: "completed", order: 1 },
  { id: "2", title: "Fault Tolerance & Reliability", duration: "24m", status: "completed", order: 2 },
  { id: "3", title: "Replication Strategies", duration: "31m", status: "completed", order: 3 },
  { id: "4", title: "Consensus Algorithms — Raft", duration: "45m", status: "active", order: 4 },
  { id: "5", title: "Consensus Algorithms — Paxos", duration: "38m", status: "locked", order: 5 },
  { id: "6", title: "Leader Election Protocols", duration: "28m", status: "locked", order: 6 },
  { id: "7", title: "Distributed Transactions", duration: "52m", status: "locked", order: 7 },
  { id: "8", title: "Two-Phase Commit", duration: "34m", status: "locked", order: 8 },
];

export function LectureSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-[280px] shrink-0 flex flex-col h-full overflow-hidden"
      style={{ backgroundColor: "#18211E" }}
    >
      {/* Course info */}
      <div
        className="px-5 py-5 shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <p
          className="text-[9px] font-semibold tracking-[0.16em] uppercase mb-1"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Current Course
        </p>
        <h2
          className="text-sm font-semibold leading-snug"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Distributed Systems Architecture
        </h2>

        {/* Course progress */}
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-[10px] font-semibold tracking-wider uppercase"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              3 of 8 lectures
            </span>
            <span
              className="text-[10px] font-semibold tabular-nums"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              38%
            </span>
          </div>
          <div
            className="w-full rounded-full overflow-hidden"
            style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "38%", backgroundColor: "#4E7C6B" }}
            />
          </div>
        </div>
      </div>

      {/* Lecture list */}
      <div className="flex-1 overflow-y-auto">
        <div className="py-2">
          {lectures.map((lecture) => (
            <button
              key={lecture.id}
              disabled={lecture.status === "locked"}
              className="w-full text-left transition-all duration-150 disabled:cursor-not-allowed"
              style={{
                backgroundColor:
                  lecture.status === "active"
                    ? "rgba(193,98,47,0.12)"
                    : "transparent",
                borderLeft:
                  lecture.status === "active"
                    ? "3px solid #C1622F"
                    : "3px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (lecture.status !== "locked" && lecture.status !== "active") {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                }
              }}
              onMouseLeave={(e) => {
                if (lecture.status !== "active") {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
                }
              }}
            >
              <div className="flex items-start gap-3 px-5 py-3.5">
                {/* Status icon */}
                <div className="shrink-0 mt-0.5">
                  {lecture.status === "completed" && (
                    <CheckCircle size={15} weight="fill" style={{ color: "#4E7C6B" }} />
                  )}
                  {lecture.status === "active" && (
                    <div
                      className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: "#C1622F" }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#C1622F" }}
                      />
                    </div>
                  )}
                  {lecture.status === "locked" && (
                    <Lock size={13} style={{ color: "rgba(255,255,255,0.2)" }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-medium leading-snug truncate"
                    style={{
                      color:
                        lecture.status === "active"
                          ? "rgba(255,255,255,0.90)"
                          : lecture.status === "completed"
                          ? "rgba(255,255,255,0.55)"
                          : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {lecture.order}. {lecture.title}
                  </p>
                  <p
                    className="text-[10px] font-semibold tracking-wider uppercase mt-0.5"
                    style={{
                      color:
                        lecture.status === "active"
                          ? "rgba(193,98,47,0.7)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {lecture.duration}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
