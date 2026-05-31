'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { CountUp } from '../ui/CountUp';

export function SocialProof() {
  return (
    <section id="social-proof" className="py-28 bg-bg">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-[rgba(30,30,28,0.2)]" />
            <span className="meta-label">By the Numbers</span>
          </div>
        </ScrollReveal>

        {/* Asymmetric editorial grid */}
        <div className="border-t border-[rgba(30,30,28,0.1)] grid grid-cols-1 lg:grid-cols-[1fr_0.55fr] gap-0">
          {/* Left: hero stat */}
          <div className="pt-12 pb-10 lg:pr-16 lg:border-r border-[rgba(30,30,28,0.07)]">
            <ScrollReveal delay={0.05}>
              <span className="meta-label block mb-5">Students Learning</span>
            </ScrollReveal>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 90, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="font-display font-light text-[clamp(5rem,11vw,10rem)] leading-none tracking-[-0.03em] text-ink">
                  <CountUp to={12400} suffix="+" separator />
                </span>
              </motion.div>
            </div>

            <ScrollReveal delay={0.25}>
              <p className="text-ink-2 text-base font-sans mt-6 max-w-[380px] leading-relaxed">
                Learners across 60+ countries have found their focus with
                Aethera. Not a number we chase — a community we cultivate.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: 3 stacked stats */}
          <div className="pt-12 lg:pl-16 flex flex-col gap-0 border-t lg:border-t-0 border-[rgba(30,30,28,0.07)] mt-8 lg:mt-0">
            {/* Stat 1 — Completion with moss left border */}
            <div className="pb-8 border-b border-[rgba(30,30,28,0.07)] pl-4 border-l-[2px] border-l-moss">
              <span className="meta-label block mb-3">Course Completion</span>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="font-display font-light text-[clamp(3rem,5vw,4.2rem)] leading-none tracking-[-0.025em] text-ink">
                  <CountUp to={91} suffix="%" />
                </span>
              </motion.div>
              <p className="text-ink-3 text-xs font-sans mt-2">
                Industry avg. is 44%
              </p>
            </div>

            {/* Stat 2 — Rating */}
            <div className="py-8 border-b border-[rgba(30,30,28,0.07)]">
              <span className="meta-label block mb-3">Average Rating</span>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
              >
                <span className="font-display font-light text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.025em] text-ink">
                  <CountUp to={4.9} suffix="/5" decimals={1} separator={false} />
                </span>
              </motion.div>
              <div className="flex gap-0.5 mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M5.5 1l1.06 3.26H9.9L7.17 6.48l1.02 3.14L5.5 7.77 3.31 9.62l1.02-3.14L1.6 4.26H4.44L5.5 1z"
                      fill={i <= 4 ? '#C1622F' : 'rgba(193,98,47,0.25)'}
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Stat 3 — Study Hours */}
            <div className="pt-8">
              <span className="meta-label block mb-3">Study Hours Logged</span>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
              >
                <span className="font-display font-light text-[clamp(2.4rem,4vw,3.4rem)] leading-none tracking-[-0.025em] text-ink">
                  <CountUp to={250} suffix="K+" separator={false} />
                </span>
              </motion.div>
              <p className="text-ink-3 text-xs font-sans mt-2">
                and growing every week
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
