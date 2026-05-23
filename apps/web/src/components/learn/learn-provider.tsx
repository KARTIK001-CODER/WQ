"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type WorkspaceTab = "notes" | "resources" | "discussions" | "quizzes" | "ai";

interface LearnContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  activeTab: WorkspaceTab;
  setActiveTab: (tab: WorkspaceTab) => void;
  focusMode: boolean;
  setFocusMode: (focus: boolean) => void;
  toggleFocusMode: () => void;
}

const LearnContext = createContext<LearnContextType | null>(null);

export function LearnProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<WorkspaceTab>("notes");
  const [focusMode, setFocusMode] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((p) => !p), []);
  const toggleFocusMode = useCallback(() => setFocusMode((p) => !p), []);

  return (
    <LearnContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        activeTab,
        setActiveTab,
        focusMode,
        setFocusMode,
        toggleFocusMode,
      }}
    >
      {children}
    </LearnContext.Provider>
  );
}

export function useLearn() {
  const ctx = useContext(LearnContext);
  if (!ctx) throw new Error("useLearn must be used within LearnProvider");
  return ctx;
}
