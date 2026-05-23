"use client";

import { createContext, useContext, useState, useCallback, useRef, type ReactNode } from "react";
import type { ChatMessage } from "./placeholder-data";
import { aiResponses } from "./placeholder-data";

interface AIContextType {
  messages: ChatMessage[];
  sendMessage: (content: string) => void;
  newChat: () => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  contextOpen: boolean;
  toggleContext: () => void;
  streamingId: string | null;
}

const AIContext = createContext<AIContextType | null>(null);

const defaultWelcome: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hello! I'm your AI learning tutor. I can help you understand concepts, review material, create quizzes, and more. What would you like to explore today?",
};

function getResponseKey(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("explain") || lower.includes("what is") || lower.includes("how does")) return "explain";
  if (lower.includes("summar") || lower.includes("summary") || lower.includes("brief")) return "summarize";
  if (lower.includes("quiz") || lower.includes("test") || lower.includes("question")) return "quiz";
  if (lower.includes("simplify") || lower.includes("simple") || lower.includes("beginner") || lower.includes("easy")) return "simplify";
  if (lower.includes("note") || lower.includes("revision") || lower.includes("study")) return "notes";
  return "explain";
}

export function AIProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([defaultWelcome]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contextOpen, setContextOpen] = useState(true);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const lockedRef = useRef(false);

  const sendMessage = useCallback((content: string) => {
    if (lockedRef.current || !content.trim()) return;
    lockedRef.current = true;

    const userMsg: ChatMessage = { id: `user-${Date.now()}`, role: "user", content };
    setMessages((prev) => [...prev, userMsg]);

    const aiId = `ai-${Date.now()}`;
    setStreamingId(aiId);

    setTimeout(() => {
      const key = getResponseKey(content);
      const responseText = aiResponses[key] || aiResponses.explain;
      setMessages((prev) => [...prev, { id: aiId, role: "assistant", content: responseText }]);
      setStreamingId(null);
      lockedRef.current = false;
    }, 1200);
  }, []);

  const newChat = useCallback(() => {
    setMessages([defaultWelcome]);
  }, []);

  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), []);
  const toggleContext = useCallback(() => setContextOpen((p) => !p), []);

  return (
    <AIContext.Provider
      value={{ messages, sendMessage, newChat, sidebarOpen, toggleSidebar, contextOpen, toggleContext, streamingId }}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const ctx = useContext(AIContext);
  if (!ctx) throw new Error("useAI must be used within AIProvider");
  return ctx;
}
