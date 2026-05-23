"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  Note,
  Paperclip,
  ChatCircle,
  Exam,
  Sparkle,
  MagnifyingGlass,
  BookmarkSimple,
  Clock,
  Download,
  ArrowSquareOut,
  CheckCircle,
} from "@phosphor-icons/react";
import { useLearn, type WorkspaceTab } from "./learn-provider";
import { AiAssistant } from "./ai-assistant";
import {
  placeholderNotes,
  placeholderResources,
  placeholderDiscussions,
  placeholderQuizzes,
} from "./placeholder-data";

const tabs: { id: WorkspaceTab; label: string; icon: typeof Note }[] = [
  { id: "notes", label: "Notes", icon: Note },
  { id: "resources", label: "Resources", icon: Paperclip },
  { id: "discussions", label: "Discussions", icon: ChatCircle },
  { id: "quizzes", label: "Quizzes", icon: Exam },
  { id: "ai", label: "AI Assistant", icon: Sparkle },
];

export function WorkspacePanel() {
  const { activeTab, setActiveTab, focusMode } = useLearn();

  return (
    <motion.aside
      layout
      initial={false}
      animate={{ width: focusMode ? 0 : 370, opacity: focusMode ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="border-l border-white/[0.02] bg-bg-secondary/15 relative z-20 shrink-0 overflow-hidden"
    >
      <div className="w-[370px] h-full flex flex-col">
        {/* Tab bar */}
        <div className="flex items-center gap-0.5 px-1.5 pt-2 pb-0 border-b border-white/[0.02] shrink-0 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full"
            >
              {activeTab === "notes" && <NotesView />}
              {activeTab === "resources" && <ResourcesView />}
              {activeTab === "discussions" && <DiscussionsView />}
              {activeTab === "quizzes" && <QuizzesView />}
              {activeTab === "ai" && <AiAssistant />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}

function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: (typeof tabs)[number];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = tab.icon;
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative flex items-center gap-1 px-2 py-2 text-[10px] font-medium transition-colors duration-200 rounded-t-lg -mb-px whitespace-nowrap",
        isActive
          ? "text-accent bg-white/[0.015]"
          : "text-text-secondary/25 hover:text-text-secondary/60"
      )}
    >
      {isActive && (
        <motion.div
          layoutId="panel-tab-indicator"
          className="absolute top-0 left-2 right-2 h-[2px] rounded-full bg-accent"
          transition={{ type: "spring", stiffness: 500, damping: 35 }}
        />
      )}
      <Icon size={12} weight={isActive ? "fill" : "regular"} />
      <span className="hidden sm:inline">{tab.label}</span>
    </motion.button>
  );
}

function NotesView() {
  const [searchQuery, setSearchQuery] = useState("");
  const notes = placeholderNotes.filter(
    (n) =>
      n.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.timestamp.includes(searchQuery)
  );

  return (
    <div className="p-4 space-y-3">
      <div className="relative">
        <MagnifyingGlass size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-secondary/20" />
        <input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-7 pr-3 py-1.5 rounded-lg bg-white/[0.01] border border-white/[0.03] text-[11px] text-text-primary placeholder:text-text-secondary/20 outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-200"
        />
      </div>
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.05] transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-semibold text-accent/80 tabular-nums bg-accent/10 px-1.5 py-0.5 rounded-md border border-accent/15">
                  {note.timestamp}
                </span>
                {note.pinned && (
                  <BookmarkSimple size={11} className="text-accent-soft/60" weight="fill" />
                )}
              </div>
              <span className="text-[9px] text-text-secondary/20 shrink-0">{note.createdAt}</span>
            </div>
            <p className="text-[11px] text-text-secondary/60 leading-relaxed">
              {note.content}
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2.5 rounded-xl border border-dashed border-white/[0.04] text-[10px] text-text-secondary/25 hover:text-text-secondary/50 hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-200"
      >
        + Add a note at current timestamp
      </motion.button>
    </div>
  );
}

function ResourcesView() {
  const typeColors: Record<string, string> = {
    PDF: "text-red-400/60 bg-red-400/8 border-red-400/15",
    GitHub: "text-text-secondary/40 bg-white/[0.02] border-white/[0.04]",
    Slides: "text-accent-soft/60 bg-accent-soft/8 border-accent-soft/15",
  };

  return (
    <div className="p-4 space-y-2">
      {placeholderResources.map((res) => (
        <motion.div
          key={res.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.05] transition-all duration-300 cursor-pointer"
        >
          <div
            className={cn(
              "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border text-[8px] font-bold tracking-wider",
              typeColors[res.type] || "bg-white/[0.02] border-white/[0.04] text-text-secondary/30"
            )}
          >
            {res.type === "PDF" ? "PDF" : res.type === "GitHub" ? "</>" : res.type.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-medium text-text-secondary/70 truncate group-hover:text-text-primary transition-colors duration-200">
              {res.title}
            </p>
            <p className="text-[9px] text-text-secondary/25">
              {res.type} &middot; {res.size}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1.5 rounded-lg text-text-secondary/20 hover:text-accent hover:bg-accent/10 transition-all duration-200"
          >
            <Download size={12} />
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}

function DiscussionsView() {
  return (
    <div className="p-4 space-y-2">
      {placeholderDiscussions.map((disc) => (
        <motion.div
          key={disc.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="group p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.05] transition-all duration-300 cursor-pointer"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <p className="text-[11px] font-medium text-text-secondary/70 leading-snug line-clamp-2 group-hover:text-text-primary transition-colors duration-200">
              {disc.title}
            </p>
            <ArrowSquareOut size={10} className="text-text-secondary/15 shrink-0 mt-0.5 group-hover:text-text-secondary/40 transition-colors duration-200" />
          </div>
          <div className="flex items-center gap-2.5 text-[9px] text-text-secondary/25">
            <span className="text-text-secondary/40">{disc.author}</span>
            <span className="w-0.5 h-0.5 rounded-full bg-text-secondary/20" />
            <span>{disc.replies} replies</span>
            <span className="w-0.5 h-0.5 rounded-full bg-text-secondary/20" />
            <span>{disc.time}</span>
          </div>
        </motion.div>
      ))}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2.5 rounded-xl border border-dashed border-white/[0.04] text-[10px] text-text-secondary/25 hover:text-text-secondary/50 hover:border-white/[0.08] hover:bg-white/[0.01] transition-all duration-200"
      >
        + Start a discussion
      </motion.button>
    </div>
  );
}

function QuizzesView() {
  return (
    <div className="p-4 space-y-2">
      {placeholderQuizzes.map((quiz) => {
        const circumference = 2 * Math.PI * 10;
        return (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="group p-3.5 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.05] transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <p className="text-[11px] font-medium text-text-secondary/70 leading-snug group-hover:text-text-primary transition-colors duration-200">
                {quiz.title}
              </p>
              {quiz.completed ? (
                <div className="relative w-8 h-8 shrink-0">
                  <svg className="w-8 h-8 -rotate-90" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                    <motion.circle
                      cx="12" cy="12" r="10"
                      fill="none" stroke="var(--color-accent-support)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: circumference * (1 - (quiz.score || 0) / 100) }}
                      transition={{ duration: 0.8 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[7px] font-bold text-accent-support/80 tabular-nums">
                    {quiz.score}%
                  </span>
                </div>
              ) : (
                <span className="text-[9px] text-text-secondary/20 px-2 py-1 rounded-md bg-white/[0.01] border border-white/[0.03] shrink-0">
                  Pending
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[9px] text-text-secondary/25">
              <Exam size={9} className="text-text-secondary/20" />
              <span>{quiz.questions} questions</span>
              {!quiz.completed && (
                <>
                  <span className="w-0.5 h-0.5 rounded-full bg-text-secondary/20" />
                  <span className="text-accent/70 font-medium">Start Quiz</span>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
