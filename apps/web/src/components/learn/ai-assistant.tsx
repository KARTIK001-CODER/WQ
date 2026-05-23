"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkle, PaperPlaneTilt, CaretRight, ChatText } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

type Suggestion = {
  label: string;
  action: string;
};

const suggestions: Suggestion[] = [
  { label: "Explain this concept", action: "explain" },
  { label: "Summarize lecture", action: "summarize" },
  { label: "Quiz me", action: "quiz" },
  { label: "Key takeaways", action: "takeaways" },
];

const initialMessages: Message[] = [
  {
    id: "ai-welcome",
    role: "assistant",
    content:
      "I'm your learning assistant. Ask me anything about this lecture — I can explain concepts, summarize key points, or help you review.",
  },
];

export function AiAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: `user-${Date.now()}`, role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content:
            "Great question! Based on the lecture content, this relates to how containerization streamlines ML model deployment. Would you like me to elaborate on a specific aspect?",
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSuggestion = (action: string) => {
    const prompts: Record<string, string> = {
      explain: "Explain the key concept from this lecture",
      summarize: "Give me a brief summary of this lecture",
      quiz: "Ask me a question about this topic",
      takeaways: "What are the main takeaways from this lecture?",
    };
    const text = prompts[action] || action;
    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, role: "user", content: text }]);
    setIsTyping(true);
    setTimeout(() => {
      let response = "";
      switch (action) {
        case "explain":
          response =
            "The core concept here is containerization — packaging ML models with all their dependencies into isolated environments. This ensures consistency across development, testing, and production, eliminating the 'it works on my machine' problem.";
          break;
        case "summarize":
          response =
            "This lecture covers ML containerization fundamentals: Docker image creation, dependency management, environment reproducibility, and integration with orchestration platforms. The key takeaway is that containerization is essential for reliable ML deployment.";
          break;
        case "quiz":
          response =
            "Here's a question: What are the key benefits of using multi-stage Docker builds for ML models? Think about image size, security, and dependency management.";
          break;
        case "takeaways":
          response =
            "Main takeaways:\n1. Containerization ensures reproducible ML environments\n2. Multi-stage builds optimize image size\n3. Docker Compose simplifies multi-service setups\n4. Container registries enable version control for models";
          break;
      }
      setMessages((prev) => [...prev, { id: `ai-${Date.now()}`, role: "assistant", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                "flex gap-2.5",
                msg.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_12px_rgba(196,106,58,0.06)]">
                  <Sparkle size={12} className="text-accent" weight="fill" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-xl px-3.5 py-2.5 text-[11px] leading-relaxed shadow-sm",
                  msg.role === "user"
                    ? "bg-accent/10 border border-accent/20 text-text-primary"
                    : "bg-white/[0.015] border border-white/[0.04] text-text-secondary/65"
                )}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <Sparkle size={12} className="text-accent" weight="fill" />
            </div>
            <div className="rounded-xl px-3.5 py-3 bg-white/[0.015] border border-white/[0.04]">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                    className="w-1 h-1 rounded-full bg-text-secondary/30"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 pb-3 pt-2 border-t border-white/[0.02]">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {suggestions.map((s) => (
            <motion.button
              key={s.action}
              onClick={() => handleSuggestion(s.action)}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/[0.01] border border-white/[0.03] text-[9px] text-text-secondary/35 hover:text-text-secondary/70 hover:bg-white/[0.02] hover:border-white/[0.06] transition-all duration-200"
            >
              <CaretRight size={8} />
              {s.label}
            </motion.button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask a question about this lecture..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="flex-1 px-3 py-2 rounded-xl bg-white/[0.01] border border-white/[0.03] text-[11px] text-text-primary placeholder:text-text-secondary/20 outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all duration-200"
          />
          <motion.button
            onClick={handleSend}
            disabled={!input.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent disabled:opacity-25 disabled:cursor-not-allowed hover:bg-accent/20 transition-all duration-200 shadow-[0_0_12px_rgba(196,106,58,0.06)]"
          >
            <PaperPlaneTilt size={13} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
