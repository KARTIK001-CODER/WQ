"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { LearnProvider } from "@/components/learn/learn-provider";
import { VideoPlayer } from "@/components/learn/video-player";
import { LectureSidebar } from "@/components/learn/lecture-sidebar";
import { WorkspacePanel } from "@/components/learn/workspace-panel";
import { placeholderCourse } from "@/components/learn/placeholder-data";
import { ArrowLeft, ArrowRight, GraduationCap } from "@phosphor-icons/react";
import Link from "next/link";

function getCurrentLecture(courseId: string, lectureId: string) {
  for (const mod of placeholderCourse.modules) {
    for (const lec of mod.lectures) {
      if (lec.id === lectureId) {
        return { lecture: lec, module: mod };
      }
    }
  }
  const firstMod = placeholderCourse.modules[0];
  return { lecture: firstMod.lectures[0], module: firstMod };
}

export default function LecturePage({
  params,
}: {
  params: Promise<{ courseId: string; lectureId: string }>;
}) {
  const { courseId, lectureId } = use(params);
  const { lecture, module } = getCurrentLecture(courseId, lectureId);

  return (
    <LearnProvider>
      <div
        className="flex flex-col w-full h-screen overflow-hidden"
        style={{ backgroundColor: "#0D1614" }}
      >
        {/* Learn Topbar */}
        <motion.header
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 h-[52px] flex items-center justify-between px-5"
          style={{
            backgroundColor: "#18211E",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              <ArrowLeft size={12} />
              <GraduationCap size={13} style={{ color: "#C1622F" }} />
              Dashboard
            </Link>
            <div
              className="w-px h-4"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            <div>
              <span
                className="text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {placeholderCourse.title}
              </span>
              <span
                className="mx-2 text-xs"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                ·
              </span>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {module.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* 2px progress indicator */}
            <div className="flex items-center gap-2.5">
              <span
                className="text-[10px] font-semibold uppercase tracking-wider tabular-nums"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                4 / 8 lectures
              </span>
              <div
                className="w-20 rounded-full overflow-hidden"
                style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: "38%", backgroundColor: "#4E7C6B" }}
                />
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main layout */}
        <div className="flex-1 flex overflow-hidden">
          <LectureSidebar />

          {/* Center — video + nav */}
          <div
            className="flex-1 flex flex-col overflow-hidden"
            style={{ backgroundColor: "#0D1614" }}
          >
            {/* Video */}
            <div className="flex-1 overflow-hidden">
              <VideoPlayer
                title={`${module.title}: ${lecture.title}`}
              />
            </div>

            {/* Navigation footer */}
            <div
              className="shrink-0 px-6 py-3 flex items-center justify-between"
              style={{
                backgroundColor: "#18211E",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <button
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.65)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.3)")
                }
              >
                <ArrowLeft size={12} />
                Previous Lecture
              </button>

              <span
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Lecture 4 of 8
              </span>

              <button
                className="flex items-center gap-1.5 text-xs font-semibold px-4 h-8 rounded-md text-white transition-opacity duration-150 hover:opacity-90"
                style={{ backgroundColor: "#C1622F" }}
              >
                Next Lecture
                <ArrowRight size={12} />
              </button>
            </div>
          </div>

          <WorkspacePanel />
        </div>
      </div>
    </LearnProvider>
  );
}
