'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  separator?: boolean;
}

export function CountUp({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 2.2,
  className = '',
  separator = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || !ref.current) return;
    hasAnimated.current = true;

    const el = ref.current;

    const format = (v: number) => {
      const fixed = decimals > 0 ? v.toFixed(decimals) : Math.floor(v);
      const formatted =
        separator && typeof fixed === 'number'
          ? Math.floor(v).toLocaleString()
          : fixed;
      return `${prefix}${formatted}${suffix}`;
    };

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(value) {
        if (el) el.textContent = format(value);
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, suffix, prefix, decimals, duration, separator]);

  const initialDisplay = `${prefix}${
    decimals > 0 ? from.toFixed(decimals) : from.toLocaleString()
  }${suffix}`;

  return (
    <span ref={ref} className={className}>
      {initialDisplay}
    </span>
  );
}
