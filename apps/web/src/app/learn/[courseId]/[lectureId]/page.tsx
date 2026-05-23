"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { LearnProvider } from "@/components/learn/learn-provider";
import { LearnTopbar } from "@/components/learn/learn-topbar";
import { VideoPlayer } from "@/components/learn/video-player";
import { LectureSidebar } from "@/components/learn/lecture-sidebar";
import { WorkspacePanel } from "@/components/learn/workspace-panel";
import { placeholderCourse } from "@/components/learn/placeholder-data";
import { ArrowRight } from "@phosphor-icons/react";

const easing = [0.25, 0.1, 0.25, 1] as const;

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col w-full h-screen bg-bg-primary overflow-hidden"
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient glow layers */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-accent-support/[0.02] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-soft/[0.01] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

        <LearnTopbar courseTitle={placeholderCourse.title} />

        <div className="flex-1 flex overflow-hidden relative">
          <LectureSidebar
            modules={placeholderCourse.modules}
            currentLectureId={lectureId}
          />

          <motion.main
            layout
            transition={{ duration: 0.35, ease: easing }}
            className="flex-1 overflow-y-auto relative z-10 scroll-smooth"
          >
            <div className="max-w-5xl mx-auto px-6 lg:px-10 py-6 lg:py-8">
              <VideoPlayer
                title={`${module.title}: ${lecture.title}`}
                instructor={placeholderCourse.instructor}
                description={
                  module.lectures.length > 1
                    ? `${lecture.title} — part of the "${module.title}" module. ${placeholderCourse.description}`
                    : placeholderCourse.description
                }
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: easing }}
                className="mt-8 pt-6 border-t border-white/[0.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-[0.15em] text-text-secondary/30">
                      Course Progress
                    </span>
                    <span className="text-[10px] text-text-secondary/30 tabular-nums font-medium">
                      5 / 11 lectures
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-[11px] font-medium text-text-secondary/40 hover:text-text-secondary/80 transition-all duration-300 px-3 py-1.5 rounded-lg hover:bg-white/[0.03]"
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 450, damping: 26 }}
                      className="group flex items-center gap-1.5 text-[11px] font-bold text-accent px-4 py-1.5 rounded-lg bg-accent/10 border border-transparent ring-1 ring-accent/20 hover:bg-accent/20 hover:ring-accent/40 shadow-[0_0_20px_rgba(196,106,58,0.1)] transition-all duration-300"
                    >
                      Next Lecture
                      <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </motion.button>
                  </div>
                </div>
                <div className="w-full h-[1px] rounded-full bg-black/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "42%" }}
                    transition={{ duration: 0.8, ease: easing }}
                    className="h-full rounded-full bg-gradient-to-r from-accent/60 via-accent/40 to-accent/20"
                  />
                </div>
              </motion.div>
            </div>
          </motion.main>

          <WorkspacePanel />
        </div>
      </motion.div>
    </LearnProvider>
  );
}
