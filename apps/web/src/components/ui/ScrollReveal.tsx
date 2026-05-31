'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 24,
  once = true,
  duration = 0.7,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  const getInitialY = () => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: getInitialY(),
        x: getInitialX(),
        filter: 'blur(3px)',
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : getInitialY(),
        x: isInView ? 0 : getInitialX(),
        filter: isInView ? 'blur(0px)' : 'blur(3px)',
      }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
