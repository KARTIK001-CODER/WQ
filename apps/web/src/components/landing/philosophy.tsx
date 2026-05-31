'use client';

import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="relative py-28 overflow-hidden border-y border-[rgba(30,30,28,0.07)]">
      {/* Horizontal rule accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(193,98,47,0.3)] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12 items-start">
          {/* Left: rotated label */}
          <motion.div
            className="flex items-center gap-3 lg:pt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-6 h-px bg-ember flex-shrink-0" />
            <span className="meta-label whitespace-nowrap">Our Belief</span>
          </motion.div>

          {/* Right: editorial statement */}
          <div>
            <motion.h2
              className="font-display font-light text-[clamp(2rem,3.8vw,3.6rem)] leading-[1.15] tracking-[-0.025em] text-ink max-w-[820px]"
              initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              Most learning platforms are built around{' '}
              <span className="italic text-ink-2">content.</span>
              <br />
              We're built around{' '}
              <span className="relative inline-block">
                <span className="relative z-10">attention.</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-[2px] bg-ember"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.8,
                  }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h2>

            {/* Supporting thought */}
            <motion.p
              className="text-ink-3 text-[15px] font-sans leading-relaxed mt-8 max-w-[520px]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              The design of a learning environment shapes the quality of thought
              that happens inside it. Aethera is built on this principle — every
              detail is intentional, every surface considered.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(193,98,47,0.3)] to-transparent" />
    </section>
  );
}
