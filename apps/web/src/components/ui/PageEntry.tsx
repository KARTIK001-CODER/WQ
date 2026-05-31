'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function PageEntry() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Complete the entry after the sequence
    const t = setTimeout(() => setDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] bg-bg flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          {/* Wordmark reveal */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-8 h-8 rounded-[6px] bg-ember flex items-center justify-center">
              <span className="text-white text-base font-display font-light italic leading-none">
                a
              </span>
            </div>
            <span className="font-display text-[1.4rem] font-light text-ink tracking-[-0.02em]">
              Aethera
            </span>
          </motion.div>

          {/* Bottom progress line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-ember"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
