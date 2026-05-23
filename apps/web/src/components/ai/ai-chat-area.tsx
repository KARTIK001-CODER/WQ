"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import {
  Sparkle,
  PaperPlaneTilt,
  Brain,
  NotePencil,
  Exam,
  ArrowsDownUp,
  BookOpen,
} from "@phosphor-icons/react";
import { useAI } from "./ai-provider";
import { smartActions, suggestedPrompts } from "./placeholder-data";

const actionIconMap: Record<string, typeof Brain> = {
  explain: Brain,
  summarize: BookOpen,
  quiz: Exam,
  simplify: ArrowsDownUp,
  notes: NotePencil,
};

const placeholders = [
  "Ask me anything about your course...",
  "Explain a concept from your lecture...",
  "Quiz me on today's topic...",
  "Help me understand this better...",
  "Create revision notes for me...",
];

export function AIChatArea() {
  const { messages, sendMessage, streamingId } = useAI();
  const [input, setInput] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const chatRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Cycle placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingId]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
    inputRef.current?.focus();
  }, [input, sendMessage]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!chatRef.current) return;
    const rect = chatRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <div
      ref={chatRef}
      onMouseMove={handleMouseMove}
      className="flex-1 flex flex-col relative overflow-hidden"
    >
      {/* Cursor-reactive ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(196,106,58,0.025) 0%, transparent 50%)`,
        }}
      />

      <div className="flex-1 overflow-y-auto scroll-smooth relative z-10">
        <div className="max-w-3xl mx-auto px-6 py-8 space-y-4">
          <AnimatePresence>
            {messages.map((msg) => (
              <ChatMessageBubble key={msg.id} message={msg} isStreaming={msg.id === streamingId} />
            ))}
          </AnimatePresence>

          {/* Thinking indicator */}
          {streamingId && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(196,106,58,0.06)]">
                <Sparkle size={12} className="text-accent" weight="fill" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-text-secondary/25"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Show action cards when only welcome message */}
          {messages.length === 1 && !streamingId && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <div className="mt-6 mb-4">
                <p className="text-[10px] font-medium text-text-secondary/30 mb-3 tracking-wide">
                  QUICK ACTIONS
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                  {smartActions.map((action) => {
                    const Icon = actionIconMap[action.id] || Brain;
                    return (
                      <motion.button
                        key={action.id}
                        onClick={() => sendMessage(action.prompt)}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.06] transition-all duration-300 group"
                      >
                        <Icon size={16} className="text-accent/60 group-hover:text-accent transition-colors duration-300" />
                        <span className="text-[10px] font-medium text-text-secondary/50 group-hover:text-text-secondary/80 text-center transition-colors duration-300">
                          {action.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Suggested prompts */}
              <div>
                <p className="text-[10px] font-medium text-text-secondary/30 mb-2.5 tracking-wide">
                  SUGGESTED
                </p>
                <div className="space-y-1.5">
                  {suggestedPrompts.map((prompt) => (
                    <motion.button
                      key={prompt.text}
                      onClick={() => sendMessage(prompt.text)}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-left hover:bg-white/[0.015] transition-all duration-200 group"
                    >
                      <span className="text-sm">{prompt.icon}</span>
                      <span className="text-[11px] text-text-secondary/40 group-hover:text-text-secondary/70 transition-colors duration-200">
                        {prompt.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="relative z-20 border-t border-white/[0.02] bg-bg-primary/60 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="relative flex items-end gap-2">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholders[placeholderIndex]}
                rows={1}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.01] border border-white/[0.04] text-[13px] text-text-primary placeholder:text-text-secondary/20 outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-300 resize-none leading-relaxed"
                style={{ minHeight: 48, maxHeight: 160 }}
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = Math.min(el.scrollHeight, 160) + "px";
                }}
              />
            </div>
            <motion.button
              onClick={handleSend}
              disabled={!input.trim()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent disabled:opacity-20 disabled:cursor-not-allowed hover:bg-accent/20 transition-all duration-300 shadow-[0_0_15px_rgba(196,106,58,0.06)] shrink-0"
            >
              <PaperPlaneTilt size={15} />
            </motion.button>
          </div>
          <p className="text-[9px] text-text-secondary/20 text-center mt-2">
            AI Tutor may produce inaccurate information. Verify important facts.
          </p>
        </div>
      </div>
    </div>
  );
}

function ChatMessageBubble({ message, isStreaming }: { message: { id: string; role: string; content: string }; isStreaming: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
    >
      {message.role === "assistant" && (
        <div className="w-7 h-7 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-1 shadow-[0_0_12px_rgba(196,106,58,0.06)]">
          <Sparkle size={12} className="text-accent" weight="fill" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed",
          message.role === "user"
            ? "bg-accent/10 border border-accent/20 text-text-primary"
            : "bg-white/[0.01] border border-white/[0.04] text-text-secondary/65"
        )}
      >
        {message.content ? (
          <StreamingText content={message.content} isStreaming={isStreaming} />
        ) : null}
      </div>
    </motion.div>
  );
}

function StreamingText({ content, isStreaming }: { content: string; isStreaming: boolean }) {
  const [displayed, setDisplayed] = useState(isStreaming ? "" : content);

  useEffect(() => {
    if (!isStreaming) {
      setDisplayed(content);
      return;
    }
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      i++;
      if (i <= content.length) {
        setDisplayed(content.slice(0, i));
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [content, isStreaming]);

  // Split by newlines and render markdown-like formatting
  const lines = displayed.split("\n");
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-2" />;
        // Bold text
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="leading-relaxed">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="font-semibold text-text-primary/80">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={j}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}
