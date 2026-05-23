"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { AIProvider } from "@/components/ai/ai-provider";
import { AISidebar } from "@/components/ai/ai-sidebar";
import { AIChatArea } from "@/components/ai/ai-chat-area";
import { AIContextPanel } from "@/components/ai/ai-context-panel";
import { ArrowLeft, Sidebar, Square } from "@phosphor-icons/react";
import { useAI } from "@/components/ai/ai-provider";
import { cn } from "@/lib/cn";

function AITopbar() {
  const { toggleSidebar, toggleContext, sidebarOpen, contextOpen } = useAI();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-11 flex items-center justify-between px-4 border-b border-white/[0.02] bg-bg-primary/60 backdrop-blur-2xl relative z-30"
    >
      <div className="flex items-center gap-4">
        <motion.a
          href="/dashboard"
          whileHover={{ x: -2 }}
          className="flex items-center gap-1.5 text-text-secondary/35 hover:text-text-primary transition-colors duration-300 text-[11px] font-medium"
        >
          <ArrowLeft size={12} />
          <span className="hidden sm:inline">Dashboard</span>
        </motion.a>
        <div className="w-px h-3.5 bg-white/[0.03]" />
        <h1 className="text-[11px] font-heading font-semibold text-text-secondary/60 tracking-tight">
          AI Tutor
        </h1>
      </div>

      <div className="flex items-center gap-1">
        <motion.button
          onClick={toggleSidebar}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "p-1.5 rounded-md transition-all duration-300",
            sidebarOpen
              ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_12px_rgba(196,106,58,0.08)]"
              : "text-text-secondary/35 hover:text-text-primary hover:bg-white/[0.02] border border-transparent"
          )}
          title="Toggle history"
        >
          <Sidebar size={13} />
        </motion.button>
        <motion.button
          onClick={toggleContext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "p-1.5 rounded-md transition-all duration-300",
            contextOpen
              ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_12px_rgba(196,106,58,0.08)]"
              : "text-text-secondary/35 hover:text-text-primary hover:bg-white/[0.02] border border-transparent"
          )}
          title="Toggle context panel"
        >
          <Square size={13} />
        </motion.button>
      </div>
    </motion.header>
  );
}

export default function AITutorPage() {
  return (
    <AIProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col w-full h-screen bg-bg-primary overflow-hidden"
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.012]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-support/[0.015] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <AITopbar />

        <div className="flex-1 flex overflow-hidden relative">
          <AISidebar />
          <AIChatArea />
          <AIContextPanel />
        </div>
      </motion.div>
    </AIProvider>
  );
}
