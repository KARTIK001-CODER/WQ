"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SpeakerHigh,
  ArrowsOut,
  SkipBack,
  SkipForward,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface VideoPlayerProps {
  title: string;
  videoUrl?: string;
}

export function VideoPlayer({ title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate playback
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 0.3, 100));
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <div
      className="flex flex-col h-full"
      style={{ backgroundColor: "#0D1614" }}
    >
      {/* Video area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: "rgba(193,98,47,0.15)",
              border: "1px solid rgba(193,98,47,0.3)",
            }}
            onClick={() => setPlaying(!playing)}
          >
            {playing ? (
              <Pause size={24} style={{ color: "#C1622F" }} />
            ) : (
              <Play size={24} style={{ color: "#C1622F" }} weight="fill" />
            )}
          </div>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}
          >
            {playing ? "Playing…" : "Click to play lecture"}
          </p>
        </div>

        {/* Lecture title overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="text-xs font-semibold"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div
        className="shrink-0 px-5 py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* 2px progress bar — signature detail */}
        <div
          className="w-full rounded-full overflow-hidden mb-3 cursor-pointer"
          style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.10)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, backgroundColor: "#C1622F" }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.8)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              <SkipBack size={16} />
            </button>
            <button
              onClick={() => setPlaying(!playing)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150"
              style={{ backgroundColor: "#C1622F" }}
            >
              {playing ? (
                <Pause size={14} className="text-white" />
              ) : (
                <Play size={14} className="text-white" weight="fill" />
              )}
            </button>
            <button
              className="transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.8)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              <SkipForward size={16} />
            </button>
          </div>

          <span
            className="text-[10px] font-semibold tabular-nums uppercase tracking-wider"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {Math.floor(progress * 0.45)}:{String(Math.floor((progress * 0.45 * 60) % 60)).padStart(2, "0")} / 45:00
          </span>

          <div className="flex items-center gap-2">
            <button style={{ color: "rgba(255,255,255,0.4)" }}>
              <SpeakerHigh size={15} />
            </button>
            <button style={{ color: "rgba(255,255,255,0.4)" }}>
              <ArrowsOut size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
