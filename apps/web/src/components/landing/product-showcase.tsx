'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const BEATS = [
  {
    id: 'video',
    num: '01',
    title: 'Watch without distraction.',
    description:
      'A clean, purpose-built video player. No ads, no sidebar recommendations. Control your pace — pause, rewind, change speed — with purpose.',
  },
  {
    id: 'notes',
    num: '02',
    title: 'Notes tied to the moment.',
    description:
      'Timestamp notes attach to the exact second in a lecture. Review what you wrote and jump right back. Recall is built into the workflow.',
  },
  {
    id: 'ai',
    num: '03',
    title: 'Ask when you\'re stuck.',
    description:
      'Your AI tutor has watched every lecture you have. Ask anything — it knows the context, the terminology, the concept you just heard.',
  },
  {
    id: 'progress',
    num: '04',
    title: 'See your consistency.',
    description:
      'A calm, honest progress tracker. Your learning patterns, your streaks, your completion rate — insight without gamification.',
  },
  {
    id: 'library',
    num: '05',
    title: 'A library built for depth.',
    description:
      'Not 10,000 videos. The right 100. Every course is curated for quality, depth, and coherence. Breadth is easy — depth is rare.',
  },
];

export function WorkspaceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map 0→1 scroll progress to 0→4 active index
  const activeRaw = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 1, 2, 3, 4, 4]
  );

  return (
    <div ref={containerRef} className="relative bg-[#18211E]" style={{ height: '500vh' }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-10 pt-9 pb-7 border-b border-[rgba(255,255,255,0.06)] flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-ember" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)]">
              The Workspace
            </span>
          </div>
          <span className="font-display font-light text-[rgba(255,255,255,0.12)] text-xl">
            Aethera
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 grid grid-cols-[320px_1fr] min-h-0">
          {/* Left: beat navigation */}
          <div className="border-r border-[rgba(255,255,255,0.06)] p-10 flex flex-col justify-center gap-0 overflow-hidden">
            {BEATS.map((beat, i) => (
              <BeatItem key={beat.id} beat={beat} index={i} activeRaw={activeRaw} />
            ))}
          </div>

          {/* Right: product panels */}
          <div className="relative flex items-center justify-center p-8 overflow-hidden">
            {BEATS.map((beat, i) => (
              <ProductPanel
                key={beat.id}
                beat={beat}
                index={i}
                activeRaw={activeRaw}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BeatItem({
  beat,
  index,
  activeRaw,
}: {
  beat: (typeof BEATS)[0];
  index: number;
  activeRaw: MotionValue<number>;
}) {
  const titleColor = useTransform(activeRaw, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.5
      ? '#F6F3EE'
      : `rgba(246,243,238,${Math.max(0.22, 0.22 + (0.78 - dist * 0.4))})`;
  });

  const itemOpacity = useTransform(activeRaw, (v: number) => {
    const dist = Math.abs(v - index);
    return Math.max(0.18, 1 - dist * 0.4);
  });

  const descOpacity = useTransform(activeRaw, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.6 ? Math.max(0, 1 - dist * 1.8) : 0;
  });

  const barScaleX = useTransform(activeRaw, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.5 ? 1 : 0;
  });

  return (
    <motion.div
      className="py-5 border-b border-[rgba(255,255,255,0.05)] last:border-0"
      style={{ opacity: itemOpacity }}
    >
      <div className="flex items-start gap-4">
        {/* Number + active bar */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0 mt-0.5">
          <span className="text-[10px] font-mono text-[rgba(255,255,255,0.25)]">
            {beat.num}
          </span>
          <motion.div
            className="w-px h-3 bg-ember origin-top"
            style={{ scaleY: barScaleX }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <motion.h3
            className="font-display font-light text-[1.2rem] leading-tight tracking-[-0.01em] mb-2"
            style={{ color: titleColor }}
          >
            {beat.title}
          </motion.h3>
          <motion.p
            className="text-[13px] font-sans text-[rgba(255,255,255,0.45)] leading-relaxed"
            style={{ opacity: descOpacity }}
          >
            {beat.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

function ProductPanel({
  beat,
  index,
  activeRaw,
}: {
  beat: (typeof BEATS)[0];
  index: number;
  activeRaw: MotionValue<number>;
}) {
  const opacity = useTransform(activeRaw, (v: number) => {
    const dist = Math.abs(v - index);
    return Math.max(0, 1 - dist * 2);
  });

  const y = useTransform(activeRaw, (v: number) => {
    return (index - v) * 40;
  });

  return (
    <motion.div
      className="absolute inset-8"
      style={{ opacity, y, pointerEvents: 'none' }}
    >
      <div className="w-full h-full">
        {beat.id === 'video' && <VideoPanel />}
        {beat.id === 'notes' && <NotesPanel />}
        {beat.id === 'ai' && <AIPanel />}
        {beat.id === 'progress' && <ProgressPanel />}
        {beat.id === 'library' && <LibraryPanel />}
      </div>
    </motion.div>
  );
}

/* ─── Product Panel Mockups ─── */

function VideoPanel() {
  return (
    <div className="w-full h-full bg-[#0f1815] rounded-xl border border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
      {/* Video area */}
      <div className="flex-1 relative bg-gradient-to-br from-[#1a2a26] via-[#0f1815] to-[#0a1210] flex items-center justify-center">
        <div className="absolute top-6 left-8 w-32 h-32 rounded-full bg-[rgba(78,124,107,0.05)] blur-3xl" />
        <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-[rgba(92,122,155,0.06)] blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] flex items-center justify-center">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M2 1.5l13 7.5-13 7.5V1.5z" fill="rgba(255,255,255,0.7)" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-[rgba(255,255,255,0.6)] text-sm font-sans">Training Data · Lecture 3</p>
            <p className="text-[rgba(255,255,255,0.3)] text-xs font-sans mt-1">Introduction to AI · 41:00</p>
          </div>
        </div>

        {/* Speed controls */}
        <div className="absolute bottom-5 right-5 flex items-center gap-3 bg-[rgba(0,0,0,0.3)] rounded-md px-3 py-1.5 backdrop-blur-sm">
          {['0.75×', '1×', '1.5×', '2×'].map((s) => (
            <span
              key={s}
              className={`text-[11px] font-sans ${s === '1.5×' ? 'text-ember font-semibold' : 'text-[rgba(255,255,255,0.35)]'}`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Scrubber */}
      <div className="px-6 py-4 border-t border-[rgba(255,255,255,0.05)]">
        <div className="h-[2px] bg-[rgba(255,255,255,0.1)] rounded-full relative mb-2">
          <div className="absolute left-0 top-0 h-full bg-ember rounded-full" style={{ width: '35%' }} />
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-ember border-2 border-[#0f1815]"
            style={{ left: 'calc(35% - 6px)' }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-[10px] font-mono text-[rgba(255,255,255,0.28)]">14:22</span>
          <span className="text-[10px] font-mono text-[rgba(255,255,255,0.28)]">41:00</span>
        </div>
      </div>
    </div>
  );
}

function NotesPanel() {
  const notes = [
    { time: '02:15', text: 'Training data is the foundation — garbage in, garbage out' },
    { time: '08:41', text: 'Three types: supervised, unsupervised, reinforcement learning' },
    { time: '14:22', text: 'Data labeling is expensive → consider active learning strategies' },
    { time: '22:05', text: 'Class imbalance: oversample minority or undersample majority class' },
  ];

  return (
    <div className="w-full h-full bg-[#111a17] rounded-xl border border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="w-2 h-2 rounded-full bg-[#5C7A9B]" />
        <span className="text-[10px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.3)]">
          Timestamp Notes
        </span>
        <span className="ml-auto text-[10px] text-[rgba(92,122,155,0.7)] font-sans">Training Data · L3</span>
      </div>

      <div className="flex-1 p-6 space-y-5 overflow-hidden">
        {notes.map((note, i) => (
          <div key={i} className="flex gap-5">
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <span className="text-[10px] font-mono text-[rgba(92,122,155,0.7)]">{note.time}</span>
              <div className="w-px flex-1 bg-[rgba(255,255,255,0.04)]" />
            </div>
            <p className="text-[13px] font-sans text-[rgba(255,255,255,0.6)] leading-relaxed pt-0.5 pb-3">
              {note.text}
            </p>
          </div>
        ))}

        {/* Active cursor */}
        <div className="flex gap-5">
          <span className="text-[10px] font-mono text-ember/60 flex-shrink-0 pt-0.5">22:48</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-sans text-[rgba(255,255,255,0.2)] italic">
              Add a note...
            </span>
            <motion.div
              className="w-px h-4 bg-[rgba(255,255,255,0.3)]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AIPanel() {
  const messages = [
    { role: 'user', text: 'What exactly is data augmentation?' },
    {
      role: 'ai',
      text: 'Data augmentation artificially expands your training dataset by applying transformations to existing samples — flipping, rotating, cropping images. The model learns to generalize better without more raw data.',
    },
    { role: 'user', text: 'Does this apply to text data too?' },
  ];

  return (
    <div className="w-full h-full bg-[#111a17] rounded-xl border border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="w-2 h-2 rounded-full bg-[#5C7A9B]" />
        <span className="text-[10px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.3)]">
          AI Tutor
        </span>
        <span className="ml-auto text-[10px] text-[rgba(92,122,155,0.6)] font-sans">Lecture-aware</span>
      </div>

      <div className="flex-1 p-5 space-y-4 overflow-hidden">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 ${
                msg.role === 'user'
                  ? 'bg-[rgba(193,98,47,0.18)] text-[rgba(255,255,255,0.8)]'
                  : 'bg-[rgba(92,122,155,0.12)] border border-[rgba(92,122,155,0.18)] text-[rgba(255,255,255,0.65)]'
              }`}
            >
              <p className="text-[12.5px] font-sans leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {/* Typing dots */}
        <div className="flex justify-start">
          <div className="bg-[rgba(92,122,155,0.1)] border border-[rgba(92,122,155,0.15)] rounded-xl px-4 py-3">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((j) => (
                <motion.div
                  key={j}
                  className="w-1.5 h-1.5 rounded-full bg-[rgba(92,122,155,0.6)]"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: j * 0.15, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3">
          <span className="text-[12px] text-[rgba(255,255,255,0.22)] font-sans flex-1 italic">
            Ask about this lecture...
          </span>
          <div className="w-6 h-6 rounded bg-[rgba(92,122,155,0.2)] flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M1 5h8M5 1l4 4-4 4"
                stroke="rgba(92,122,155,0.8)"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressPanel() {
  const courses = [
    { name: 'Introduction to AI', pct: 40, color: '#4E7C6B' },
    { name: 'Python for Data Science', pct: 72, color: '#C1622F' },
    { name: 'Machine Learning Basics', pct: 15, color: '#5C7A9B' },
  ];

  const weekActivity = [4, 6, 2, 7, 5, 0, 3];
  const maxActivity = Math.max(...weekActivity);

  return (
    <div className="w-full h-full bg-[#111a17] rounded-xl border border-[rgba(255,255,255,0.06)] p-7 flex flex-col gap-6 overflow-hidden">
      <div>
        <span className="text-[10px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.3)]">
          Progress
        </span>
      </div>

      <div className="space-y-5">
        {courses.map((c, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12.5px] text-[rgba(255,255,255,0.6)] font-sans">{c.name}</span>
              <span className="text-[11px] text-[rgba(255,255,255,0.3)] font-mono">{c.pct}%</span>
            </div>
            <div className="h-[2px] bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: c.color }}
                initial={{ width: 0 }}
                animate={{ width: `${c.pct}%` }}
                transition={{ delay: 0.2 + i * 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Weekly bars */}
      <div>
        <p className="text-[10px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.25)] mb-3">
          This Week
        </p>
        <div className="flex items-end gap-2.5 h-14">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex items-end" style={{ height: '40px' }}>
                <motion.div
                  className="w-full rounded-sm"
                  style={{
                    background:
                      weekActivity[i] > 0
                        ? 'rgba(78,124,107,0.55)'
                        : 'rgba(255,255,255,0.04)',
                  }}
                  initial={{ height: 0 }}
                  animate={{
                    height: weekActivity[i] > 0
                      ? `${(weekActivity[i] / maxActivity) * 38}px`
                      : '4px',
                  }}
                  transition={{ delay: 0.4 + i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-[9px] text-[rgba(255,255,255,0.2)] font-sans">{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Streak chip */}
      <div className="mt-auto flex items-center gap-3 p-3 rounded-lg bg-[rgba(78,124,107,0.1)] border border-[rgba(78,124,107,0.18)]">
        <span className="text-base">🔥</span>
        <div>
          <p className="text-[12px] text-[rgba(255,255,255,0.7)] font-sans font-medium">12-day streak</p>
          <p className="text-[10px] text-[rgba(255,255,255,0.3)] font-sans">Keep going</p>
        </div>
      </div>
    </div>
  );
}

function LibraryPanel() {
  const courses = [
    { title: 'Introduction to AI', meta: '12 lectures · 4h 20m', tag: 'Foundations', pct: null },
    { title: 'Data Science with Python', meta: '18 lectures · 6h 15m', tag: 'Technical', pct: null },
    { title: 'System Design', meta: '10 lectures · 3h 40m', tag: 'Engineering', pct: 72 },
    { title: 'Product Thinking', meta: '8 lectures · 2h 55m', tag: 'Strategy', pct: null },
  ];

  return (
    <div className="w-full h-full bg-[#111a17] rounded-xl border border-[rgba(255,255,255,0.06)] flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[rgba(255,255,255,0.06)]">
        <span className="text-[10px] font-sans font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.3)]">
          Course Library
        </span>
        <div className="ml-auto flex items-center gap-2 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] rounded-md px-3 py-1">
          <span className="text-[10px] text-[rgba(255,255,255,0.3)] font-sans">All Topics</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M1 1l3 3 3-3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-2.5 overflow-hidden">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 p-3.5 rounded-lg border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.025)] transition-colors"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-9 h-9 rounded-md bg-[rgba(255,255,255,0.05)] flex-shrink-0 border border-[rgba(255,255,255,0.04)]" />
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] text-[rgba(255,255,255,0.7)] font-sans font-medium truncate">
                {course.title}
              </p>
              <p className="text-[10.5px] text-[rgba(255,255,255,0.28)] font-sans mt-0.5">{course.meta}</p>
            </div>
            <div className="flex-shrink-0">
              {course.pct ? (
                <div className="flex items-center gap-2">
                  <div className="w-14 h-[2px] bg-[rgba(255,255,255,0.08)] rounded-full">
                    <div className="h-full bg-moss rounded-full" style={{ width: `${course.pct}%` }} />
                  </div>
                  <span className="text-[10px] text-[#4E7C6B] font-mono">{course.pct}%</span>
                </div>
              ) : (
                <span className="text-[10px] text-[rgba(255,255,255,0.2)] font-sans border border-[rgba(255,255,255,0.07)] px-2 py-0.5 rounded">
                  {course.tag}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
