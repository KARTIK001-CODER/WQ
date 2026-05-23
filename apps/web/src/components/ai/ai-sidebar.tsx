"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  BookmarkSimple,
  Sparkle,
  NotePencil,
  ChatDots,
  Plus,
} from "@phosphor-icons/react";
import { useAI } from "./ai-provider";
import { chatSessions, savedExplanations } from "./placeholder-data";

export function AISidebar() {
  const { sidebarOpen, newChat } = useAI();

  return (
    <motion.aside
      layout
      initial={false}
      animate={{ width: sidebarOpen ? 260 : 0, opacity: sidebarOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="overflow-hidden border-r border-white/[0.02] bg-bg-secondary/30 relative z-20 shrink-0"
    >
      <div className="w-[260px] h-full flex flex-col">
        {/* Header */}
        <div className="px-4 pt-3.5 pb-3 border-b border-white/[0.02]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Sparkle size={12} className="text-accent" weight="fill" />
              </div>
              <span className="text-[13px] font-heading font-semibold text-text-primary/80">AI Tutor</span>
            </div>
          </div>
          <motion.button
            onClick={newChat}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-accent/10 border border-accent/20 text-[11px] font-bold text-accent hover:bg-accent/20 transition-all duration-300 shadow-[0_0_15px_rgba(196,106,58,0.06)]"
          >
            <Plus size={12} />
            New Session
          </motion.button>
        </div>

        <div className="flex-1 overflow-y-auto scroll-smooth">
          {/* Recent chats */}
          <div className="px-3 pt-3 pb-2">
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-2.5 px-1">
              Recent Chats
            </h3>
            <div className="space-y-0.5">
              {chatSessions.map((session) => (
                <button
                  key={session.id}
                  className="w-full flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-left hover:bg-white/[0.02] transition-all duration-200 group"
                >
                  <ChatDots size={12} className="text-text-secondary/20 mt-0.5 shrink-0 group-hover:text-text-secondary/40 transition-colors duration-200" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-medium text-text-secondary/60 truncate group-hover:text-text-primary transition-colors duration-200">
                        {session.title}
                      </span>
                      {session.pinned && <BookmarkSimple size={8} className="text-accent-soft/50 shrink-0" weight="fill" />}
                    </div>
                    <p className="text-[9px] text-text-secondary/25 truncate mt-0.5">{session.preview}</p>
                  </div>
                  <span className="text-[8px] text-text-secondary/20 shrink-0 mt-0.5">{session.timestamp}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Saved explanations */}
          <div className="px-3 pt-2 pb-3">
            <h3 className="text-[9px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30 mb-2.5 px-1">
              Saved Explanations
            </h3>
            <div className="space-y-0.5">
              {savedExplanations.map((exp) => (
                <button
                  key={exp.id}
                  className="w-full flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-left hover:bg-white/[0.02] transition-all duration-200 group"
                >
                  <NotePencil size={12} className="text-accent/30 mt-0.5 shrink-0 group-hover:text-accent/50 transition-colors duration-200" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-medium text-text-secondary/60 truncate block group-hover:text-text-primary transition-colors duration-200">
                      {exp.title}
                    </span>
                    <p className="text-[9px] text-text-secondary/25 truncate mt-0.5">{exp.preview}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
