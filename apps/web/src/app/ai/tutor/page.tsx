"use client";

import { motion } from "framer-motion";
import { AIProvider } from "@/components/ai/ai-provider";
import { AIChatArea } from "@/components/ai/ai-chat-area";
import { ArrowLeft, Robot } from "@phosphor-icons/react";
import Link from "next/link";

export default function AITutorPage() {
  return (
    <AIProvider>
      <div
        className="flex flex-col w-full h-screen overflow-hidden"
        style={{ backgroundColor: "#F6F3EE" }}
      >
        {/* AI Tutor Topbar */}
        <motion.header
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 h-[60px] flex items-center justify-between px-6"
          style={{
            backgroundColor: "#18211E",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.75)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              <ArrowLeft size={13} />
              Dashboard
            </Link>

            <div
              className="w-px h-4"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            />

            <div className="flex items-center gap-2">
              <Robot size={15} style={{ color: "#5C7A9B" }} />
              <span
                className="text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                AI Tutor
              </span>
              <span
                className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                style={{
                  backgroundColor: "rgba(92,122,155,0.15)",
                  color: "#5C7A9B",
                }}
              >
                Aethera AI
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              Distributed Systems — Session 3
            </span>
          </div>
        </motion.header>

        {/* Chat area */}
        <div
          className="flex-1 flex overflow-hidden"
          style={{ backgroundColor: "#F6F3EE" }}
        >
          {/* Left sidebar — session history */}
          <motion.aside
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-[240px] shrink-0 flex flex-col h-full overflow-hidden"
            style={{
              backgroundColor: "#FFFFFF",
              borderRight: "1px solid rgba(30,30,28,0.08)",
            }}
          >
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ borderBottom: "1px solid rgba(30,30,28,0.07)" }}
            >
              <span
                className="text-[10px] font-semibold tracking-[0.14em] uppercase"
                style={{ color: "#6B6B68" }}
              >
                History
              </span>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              {[
                { title: "Raft vs Paxos consensus", time: "2h ago", active: true },
                { title: "CAP theorem explained", time: "Yesterday" },
                { title: "gRPC vs REST trade-offs", time: "2d ago" },
                { title: "Database sharding strategies", time: "3d ago" },
                { title: "Event sourcing patterns", time: "1w ago" },
              ].map((session, i) => (
                <button
                  key={i}
                  className="w-full text-left px-5 py-3 transition-all duration-150"
                  style={{
                    backgroundColor: session.active
                      ? "rgba(92,122,155,0.08)"
                      : "transparent",
                    borderLeft: session.active
                      ? "3px solid #5C7A9B"
                      : "3px solid transparent",
                    borderBottom: "1px solid rgba(30,30,28,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    if (!session.active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "rgba(30,30,28,0.025)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!session.active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "transparent";
                    }
                  }}
                >
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
                    {session.time}
                  </p>
                </button>
              ))}
            </div>
          </motion.aside>

          {/* Main chat */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex-1 flex flex-col overflow-hidden"
            style={{ backgroundColor: "#F6F3EE" }}
          >
            {/* Context header */}
            <div
              className="shrink-0 px-6 py-3 flex items-center gap-3"
              style={{
                backgroundColor: "rgba(92,122,155,0.06)",
                borderBottom: "1px solid rgba(92,122,155,0.12)",
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#5C7A9B" }}
              />
              <span
                className="text-[11px] font-semibold"
                style={{ color: "#5C7A9B" }}
              >
                Context:
              </span>
              <span
                className="text-[11px]"
                style={{ color: "#6B6B68" }}
              >
                Distributed Systems Architecture · Lecture 14 — Consensus Algorithms
              </span>
            </div>

            <div className="flex-1 overflow-hidden">
              <AIChatArea />
            </div>
          </motion.div>
        </div>
      </div>
    </AIProvider>
  );
}
