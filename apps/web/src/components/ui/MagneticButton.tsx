'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'ember' | 'ghost' | 'dark';
  type?: 'button' | 'submit';
  id?: string;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  variant = 'ember',
  type = 'button',
  id,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 350, damping: 22, mass: 0.4 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.28);
    y.set((e.clientY - cy) * 0.28);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const variantStyles: Record<string, string> = {
    ember:
      'bg-ember text-white hover:bg-[#b3572a] shadow-[0_1px_3px_rgba(193,98,47,0.25)]',
    ghost:
      'border border-[rgba(30,30,28,0.18)] text-ink bg-transparent hover:bg-[rgba(30,30,28,0.04)]',
    dark: 'bg-[#18211E] text-white hover:bg-[#1e2c28]',
  };

  const shared = {
    onMouseMove: onMouseMove as React.MouseEventHandler<HTMLElement>,
    onMouseLeave,
    style: { x: springX, y: springY },
    whileTap: { scale: 0.96 },
    className: `inline-flex items-center justify-center gap-2 rounded-md text-sm font-sans font-medium transition-colors duration-200 cursor-pointer select-none ${variantStyles[variant]} ${className}`,
    id,
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...shared}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      {...shared}
    >
      {children}
    </motion.button>
  );
}
