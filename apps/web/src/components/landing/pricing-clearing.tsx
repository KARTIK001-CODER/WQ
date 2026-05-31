'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { MagneticButton } from '../ui/MagneticButton';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Start building the habit.',
    features: [
      'Access to 5 starter courses',
      'Basic timestamp notes',
      'Community access',
      '7-day learning streaks',
    ],
    cta: 'Get Started Free',
    dominant: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12',
    period: 'per month',
    tagline: 'For learners who are serious.',
    features: [
      'Full course library access',
      'AI Tutor — lecture-aware',
      'Advanced notes & export',
      'Personalized learning path',
      'Priority support',
      'Offline mode',
    ],
    cta: 'Start Learning',
    dominant: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-bg">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[rgba(30,30,28,0.2)]" />
              <span className="meta-label">Pricing</span>
            </div>
            <p className="text-ink-2 text-sm font-sans hidden md:block">
              Simple. Transparent. No tricks.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards — asymmetric layout */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Free plan — smaller, slightly lower */}
          <motion.div
            className="lg:w-[340px] lg:mt-12 bg-white border border-[rgba(30,30,28,0.09)] rounded-xl p-8 flex-shrink-0"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3, transition: { duration: 0.3 } }}
          >
            <div className="mb-8">
              <span className="meta-label block mb-4">Free</span>
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="font-display font-light text-[3.5rem] leading-none tracking-[-0.03em] text-ink">
                  $0
                </span>
                <span className="text-ink-3 text-sm font-sans">/ forever</span>
              </div>
              <p className="text-ink-2 text-[13.5px] font-sans leading-relaxed">
                Start building the habit.
              </p>
            </div>

            <div className="border-t border-[rgba(30,30,28,0.07)] pt-7 mb-8">
              <ul className="space-y-4">
                {plans[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm border border-[rgba(30,30,28,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                        <path
                          d="M1 2.5l1.5 1.5 3.5-3.5"
                          stroke="#1E1E1C"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                    <span className="text-[13px] font-sans text-ink-2 leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <MagneticButton
              href="/dashboard"
              variant="ghost"
              id="pricing-free-cta"
              className="w-full py-3 text-[13px]"
            >
              Get Started Free
            </MagneticButton>
          </motion.div>

          {/* Pro plan — dominant, dark */}
          <motion.div
            className="flex-1 bg-[#18211E] rounded-xl overflow-hidden relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(193,98,47,0.06)] rounded-full blur-[80px] pointer-events-none" />

            <div className="p-10 relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] block mb-4">
                    Pro
                  </span>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="font-display font-light text-[4rem] leading-none tracking-[-0.03em] text-white">
                      $12
                    </span>
                    <span className="text-[rgba(255,255,255,0.35)] text-sm font-sans">
                      / month
                    </span>
                  </div>
                  <p className="text-[rgba(255,255,255,0.5)] text-[13.5px] font-sans">
                    For learners who are serious.
                  </p>
                </div>
                <div className="bg-ember/15 border border-ember/25 rounded-md px-3 py-1.5">
                  <span className="text-ember text-[11px] font-sans font-medium">
                    Most popular
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[rgba(255,255,255,0.07)] mb-8" />

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plans[1].features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm bg-ember/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                        <path
                          d="M1 2.5l1.5 1.5 3.5-3.5"
                          stroke="#C1622F"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-sans text-[rgba(255,255,255,0.65)] leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="/dashboard"
                variant="ember"
                id="pricing-pro-cta"
                className="w-full py-4 text-[14px] font-medium"
              >
                Start Learning
              </MagneticButton>

              <p className="text-[rgba(255,255,255,0.2)] text-[11px] font-sans text-center mt-4">
                Cancel anytime · No questions asked
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
