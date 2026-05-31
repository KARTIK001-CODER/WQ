'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const features = [
  {
    id: 'focused-learning',
    title: 'Focused Learning',
    description:
      'Every element of Aethera is designed to remove distraction. One course, one lecture, one thought at a time. Your attention is the most valuable resource — we protect it.',
    tag: 'Core',
    dominant: true,
    accent: null,
  },
  {
    id: 'timestamp-notes',
    title: 'Timestamp Notes',
    description:
      'Notes attached to the exact second in a lecture. Review what you wrote and return instantly.',
    tag: 'Recall',
    dominant: false,
    accent: 'slate',
  },
  {
    id: 'ai-tutor',
    title: 'AI Tutor',
    description:
      'A tutor that has watched every lecture you have. Ask anything — it knows the context.',
    tag: 'AI',
    dominant: false,
    accent: 'slate',
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    description: 'Honest, calm visibility into your learning patterns.',
    tag: 'Insight',
    dominant: false,
    accent: 'moss',
    leftBorderOnly: true,
  },
  {
    id: 'library',
    title: 'Course Library',
    description: 'Carefully curated. Not 10,000 videos — the right 100.',
    tag: 'Content',
    dominant: false,
    accent: null,
    leftBorderOnly: true,
  },
  {
    id: 'workspace',
    title: 'Personal Workspace',
    description: 'Your notes, progress, and course history — all in one calm place.',
    tag: 'Personal',
    dominant: false,
    accent: null,
    leftBorderOnly: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: EASE },
  },
};

/** Card with cursor-spotlight effect */
function SpotlightCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function onMouseLeave() {
    mouseX.set(-300);
    mouseY.set(-300);
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className ?? ''}`}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Spotlight gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(260px circle at ${x}px ${y}px, rgba(193,98,47,0.06), transparent 70%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function Features() {
  const dominant = features[0];
  const top = features.slice(1, 3);
  const bottom = features.slice(3);

  return (
    <section id="features" className="py-28 bg-bg">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Label */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[rgba(30,30,28,0.2)]" />
              <span className="meta-label">Features</span>
            </div>
            <span className="font-display font-light text-[rgba(30,30,28,0.1)] text-5xl select-none">
              06
            </span>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* ── Top row ── */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Dominant card */}
            <motion.div variants={cardVariants} className="lg:flex-[1.4]">
              <SpotlightCard className="group bg-white border border-[rgba(30,30,28,0.08)] rounded-xl p-9 flex flex-col justify-between min-h-[360px] cursor-default">
                {/* Oversized bg letter */}
                <div
                  className="absolute bottom-[-20px] right-[-10px] font-display font-light text-[120px] leading-none text-[rgba(30,30,28,0.025)] select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                  aria-hidden="true"
                >
                  F
                </div>

                <div>
                  <div className="flex items-center justify-between mb-10">
                    <span className="meta-label">{dominant.tag}</span>
                    <motion.div
                      className="w-8 h-8 rounded-md border border-[rgba(30,30,28,0.1)] flex items-center justify-center"
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7h10M7 2l5 5-5 5"
                          stroke="#1E1E1C"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.4"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="font-display font-light text-[2.2rem] leading-tight tracking-[-0.02em] text-ink mb-5">
                    {dominant.title}
                  </h3>
                  <p className="text-ink-2 text-[15px] font-sans leading-[1.75] max-w-[380px]">
                    {dominant.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {[
                    { label: 'Distraction-free', color: 'bg-ember/10 text-ember' },
                    { label: 'Deep focus', color: 'bg-moss/10 text-moss' },
                    { label: 'Single-task', color: 'bg-[rgba(30,30,28,0.05)] text-ink-2' },
                  ].map((tag) => (
                    <span
                      key={tag.label}
                      className={`text-[11px] font-sans font-medium px-3 py-1.5 rounded-sm ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Right stack */}
            <div className="lg:flex-1 flex flex-col gap-4">
              {top.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  className="flex-1"
                >
                  <SpotlightCard className="group h-full bg-white border border-[rgba(30,30,28,0.08)] rounded-xl p-7 flex flex-col justify-between cursor-default">
                    <div className="flex items-center justify-between mb-6">
                      <span className="meta-label">{feature.tag}</span>
                      {feature.accent === 'slate' && (
                        <div className="w-2 h-2 rounded-full bg-[#5C7A9B]" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display font-light text-[1.6rem] leading-tight tracking-[-0.02em] text-ink mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-ink-2 text-[13.5px] font-sans leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Bottom row: editorial left-border cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bottom.map((feature, i) => (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="border-l-[2px] pl-6 pr-6 py-7 bg-[rgba(255,255,255,0.6)] rounded-r-xl border border-l-0 border-[rgba(30,30,28,0.06)] cursor-default"
                style={{
                  borderLeftColor:
                    feature.accent === 'moss'
                      ? '#4E7C6B'
                      : feature.accent === 'slate'
                        ? '#5C7A9B'
                        : 'rgba(30,30,28,0.15)',
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="meta-label">{feature.tag}</span>
                  <span className="font-display font-light text-[rgba(30,30,28,0.09)] text-3xl select-none">
                    {String(i + 4).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-light text-[1.25rem] leading-tight tracking-[-0.015em] text-ink mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-ink-2 text-[13px] font-sans leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
