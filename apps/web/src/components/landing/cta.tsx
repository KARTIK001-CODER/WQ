'use client';

import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-[#18211E] py-40 px-8 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[rgba(193,98,47,0.04)] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[rgba(92,122,155,0.04)] blur-[100px]" />
      </div>

      {/* Horizontal rule */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="border-t border-[rgba(255,255,255,0.07)] pt-16 flex flex-col items-center text-center">
          {/* Editorial label */}
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-px bg-ember" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)]">
              Begin
            </span>
            <div className="w-8 h-px bg-ember" />
          </motion.div>

          {/* Heading */}
          <h2 className="font-display font-light text-[clamp(3rem,6vw,6.5rem)] leading-[1.05] tracking-[-0.025em] text-white max-w-[800px] mb-16">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Start learning
            </motion.span>
            <motion.span
              className="block text-[rgba(255,255,255,0.4)] italic"
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              with intention.
            </motion.span>
          </h2>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <MagneticButton
              href="/dashboard"
              variant="ember"
              id="final-cta-button"
              className="px-10 py-4 text-[15px] font-medium"
            >
              Start Learning
            </MagneticButton>
          </motion.div>

          {/* Bottom divider text */}
          <motion.p
            className="text-[rgba(255,255,255,0.2)] text-xs font-sans mt-8 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Free plan available · No setup required
          </motion.p>
        </div>
      </div>
    </section>
  );
}
