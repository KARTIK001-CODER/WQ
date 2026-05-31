'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const REVIEWS = [
  {
    name: 'Priya Mehta',
    role: 'Software Engineer',
    text: "Aethera changed how I approach learning. The workspace feels intentional — nothing is in the way.",
  },
  {
    name: 'James Okafor',
    role: 'Product Designer',
    text: "I've tried every learning platform. None of them felt this considered. The notes system alone is worth it.",
  },
  {
    name: 'Sofia Laurent',
    role: 'Data Scientist',
    text: "The AI Tutor understands the lecture context. It's not ChatGPT bolted on — it actually knows where you are.",
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Student',
    text: "Completed two courses I'd been putting off for months. The design makes you want to come back.",
  },
  {
    name: 'Aisha Patel',
    role: 'ML Researcher',
    text: "The completion rate isn't luck — it's design. Aethera makes consistency feel natural.",
  },
  {
    name: 'Luca Rossi',
    role: 'Startup Founder',
    text: "Learning at 1.5x speed with timestamp notes is a superpower. Hours of learning, distilled.",
  },
  {
    name: 'Yuna Kim',
    role: 'UX Researcher',
    text: "The typography alone tells you this was built with care. Rare for a learning platform.",
  },
  {
    name: 'Noah Williams',
    role: 'Backend Developer',
    text: "Finally a platform that doesn't try to gamify everything. Just clean, focused learning.",
  },
];

// Duplicate for seamless loop
const ROW_A = [...REVIEWS, ...REVIEWS];
const ROW_B = [...[...REVIEWS].reverse(), ...[...REVIEWS].reverse()];

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[0];
}) {
  return (
    <motion.div
      className="flex-shrink-0 w-[300px] bg-white border border-[rgba(30,30,28,0.08)] rounded-xl p-6 mx-3 cursor-default"
      whileHover={{
        y: -4,
        boxShadow: '0 8px 32px rgba(30,30,28,0.1)',
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      <p className="text-ink text-[13.5px] font-sans leading-[1.7] mb-5">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-[rgba(30,30,28,0.06)] pt-4">
        <div className="w-7 h-7 rounded-full bg-[rgba(30,30,28,0.06)] flex items-center justify-center flex-shrink-0">
          <span className="text-[11px] font-sans font-medium text-ink-2">
            {review.name[0]}
          </span>
        </div>
        <div>
          <p className="text-[12px] font-sans font-medium text-ink leading-none mb-0.5">
            {review.name}
          </p>
          <p className="text-[11px] font-sans text-ink-3">{review.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-28 bg-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 mb-14">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[rgba(30,30,28,0.2)]" />
            <span className="meta-label">What People Say</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4">
        {/* Row 1 — scroll left */}
        <div className="marquee-container overflow-hidden">
          <div className="flex animate-scroll-left">
            {ROW_A.map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 — scroll right */}
        <div className="marquee-container overflow-hidden">
          <div className="flex animate-scroll-right">
            {ROW_B.map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
