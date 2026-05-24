"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Robot, PaperPlaneTilt, ArrowClockwise, BookOpen } from "@phosphor-icons/react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hello. I'm your AI Tutor — here to help you understand concepts deeply, not just surface-level summaries. What are you working through today?",
    timestamp: "Just now",
  },
];

const suggestedPrompts = [
  "Explain Raft consensus algorithm",
  "What is the CAP theorem?",
  "Difference between gRPC and REST",
  "How does model quantization work?",
];

export function AIChatArea() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "That's a thoughtful question. Let me walk you through this concept carefully. In distributed systems, this relates to fundamental trade-offs between consistency, availability, and partition tolerance. The key insight is that no system can guarantee all three simultaneously under network partitions...",
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1400);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={msg.role === "user" ? "flex justify-end" : ""}
            >
              {msg.role === "assistant" ? (
                // AI message — Slate Blue left-border card
                <div
                  className="max-w-[85%] rounded-lg px-5 py-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(30,30,28,0.08)",
                    borderLeft: "3px solid #5C7A9B",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <Robot size={13} style={{ color: "#5C7A9B" }} />
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase"
                      style={{ color: "#5C7A9B" }}
                    >
                      Aethera AI
                    </span>
                    <span
                      className="text-[10px] tracking-wider uppercase"
                      style={{ color: "#C8C8C5" }}
                    >
                      · {msg.timestamp}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#1E1E1C" }}
                  >
                    {msg.content}
                  </p>
                </div>
              ) : (
                // User message — Ember left-border, right-aligned
                <div
                  className="max-w-[75%] rounded-lg px-5 py-4"
                  style={{
                    backgroundColor: "rgba(193, 98, 47, 0.06)",
                    border: "1px solid rgba(193, 98, 47, 0.12)",
                    borderRight: "3px solid #C1622F",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#1E1E1C" }}
                  >
                    {msg.content}
                  </p>
                  <div className="flex justify-end mt-1.5">
                    <span
                      className="text-[10px] tracking-wider uppercase"
                      style={{ color: "#A8A8A5" }}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-5 py-3 rounded-lg w-fit"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(30,30,28,0.08)",
              borderLeft: "3px solid #5C7A9B",
            }}
          >
            <Robot size={13} style={{ color: "#5C7A9B" }} />
            <div className="flex gap-1 items-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: "#5C7A9B" }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length === 1 && (
        <div className="px-6 pb-3">
          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-150"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(30,30,28,0.12)",
                  color: "#6B6B68",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#C1622F";
                  (e.currentTarget as HTMLElement).style.color = "#C1622F";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,30,28,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#6B6B68";
                }}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div
        className="shrink-0 px-6 py-4"
        style={{ borderTop: "1px solid rgba(30,30,28,0.08)" }}
      >
        <div
          className="flex items-end gap-3 rounded-lg px-4 py-3 transition-all duration-150"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid rgba(30,30,28,0.12)",
          }}
        >
          <BookOpen size={16} className="shrink-0 mb-0.5" style={{ color: "#A8A8A5" }} />
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
            placeholder="Ask Aethera anything about your courses…"
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm border-none outline-none"
            style={{
              color: "#1E1E1C",
              lineHeight: 1.5,
            }}
          />
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMessages(initialMessages)}
              className="w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-150"
              style={{ color: "#A8A8A5" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#6B6B68")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#A8A8A5")
              }
            >
              <ArrowClockwise size={14} />
            </button>
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-7 h-7 rounded-md flex items-center justify-center text-white transition-opacity duration-150 disabled:opacity-40"
              style={{ backgroundColor: "#C1622F" }}
            >
              <PaperPlaneTilt size={13} weight="fill" />
            </button>
          </div>
        </div>
        <p
          className="mt-2 text-center text-[10px]"
          style={{ color: "#C8C8C5" }}
        >
          AI responses are for learning assistance. Always verify critical information.
        </p>
      </div>
    </div>
  );
}
