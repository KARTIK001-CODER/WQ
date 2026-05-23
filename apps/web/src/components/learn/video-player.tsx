"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  ArrowsOut,
  Clock,
} from "@phosphor-icons/react";

interface VideoPlayerProps {
  title: string;
  instructor: string;
  description: string;
}

export function VideoPlayer({ title, instructor, description }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!glowRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.setProperty("--glow-x", `${x}%`);
    glowRef.current.style.setProperty("--glow-y", `${y}%`);
  }, []);

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="relative"
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/[0.06] shadow-[0_0_150px_rgba(196,106,58,0.06)] ring-1 ring-white/[0.02] group cursor-pointer select-none transition-shadow duration-700 hover:shadow-[0_0_200px_rgba(196,106,58,0.1)]"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {/* Cursor-reactive spotlight */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-500 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(196,106,58,0.12) 0%, rgba(196,106,58,0.04) 25%, rgba(196,106,58,0.01) 50%, transparent 70%)`,
          }}
        />

        {/* Slow-rotating conic gradient for atmosphere */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(196,106,58,0.3), transparent, rgba(95,122,101,0.2), transparent)`,
          }}
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-accent-support/[0.015]" />

        {/* Scanline texture */}
        <div
          className="absolute inset-0 opacity-[0.01] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.04) 1px, rgba(255,255,255,0.04) 2px)`,
          }}
        />

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.1] shadow-2xl backdrop-blur-md flex items-center justify-center ring-1 ring-white/[0.05]"
          >
            {isPlaying ? (
              <Pause size={22} className="text-accent ml-px" />
            ) : (
              <Play size={22} className="text-accent ml-0.5" weight="fill" />
            )}
          </motion.div>
        </div>

        {/* Controls overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 px-5 py-3 backdrop-blur-xl bg-black/50 border-t border-white/[0.08] pointer-events-auto shadow-[0_-15px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SkipBack size={12} className="text-white/45 hover:text-white transition-colors duration-200" />
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    {isPlaying ? (
                      <Pause size={12} className="text-white" weight="fill" />
                    ) : (
                      <Play size={12} className="text-white ml-0.5" weight="fill" />
                    )}
                  </motion.button>
                  <SkipForward size={12} className="text-white/45 hover:text-white transition-colors duration-200" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-white/40 tabular-nums font-medium">32:15 / 1:24:30</span>
                  <SpeakerHigh size={11} className="text-white/40" />
                  <ArrowsOut size={11} className="text-white/40" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top gradient vignette */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Lecture info */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-5 px-0.5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[10px] font-medium text-accent/80 bg-accent/10 px-2 py-0.5 rounded-md border border-accent/15">
                Lecture {title.split(":")[0]?.match(/\d+/)?.[0] || "—"}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-text-secondary/35">
                <Clock size={9} />
                22 min
              </span>
            </div>
            <h2 className="text-[22px] font-heading font-bold text-text-primary tracking-tight leading-snug mb-2.5">
              {title}
            </h2>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 ring-1 ring-accent/30">
                <span className="text-[8px] font-bold text-accent tracking-tight">AP</span>
              </div>
              <span className="text-xs font-medium text-text-secondary/60">{instructor}</span>
              <div className="w-px h-3 bg-white/[0.04]" />
              <span className="text-[10px] text-text-secondary/30 font-medium">Production Infrastructure</span>
            </div>
            <p className="text-[13px] text-text-secondary/50 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
