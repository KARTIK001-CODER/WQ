'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const containerVariants = (delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: delay,
    },
  },
});

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  const lines = text.split('\n');

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={containerVariants(delay)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(' ');
        return (
          <span key={lineIndex} className="block">
            {words.map((word, wordIndex) => (
              <motion.span
                key={`${lineIndex}-${wordIndex}`}
                variants={wordVariants}
                className="inline-block"
                style={{
                  marginRight:
                    wordIndex < words.length - 1 ? '0.28em' : 0,
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.span>
  );
}
