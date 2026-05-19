'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// Fade in from bottom — use sparingly, only for above-fold content
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'children'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation container
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger child item
export function StaggerItem({
  children,
  className = '',
  tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  tag?: 'div' | 'li';
}) {
  const Component = tag === 'li' ? motion.li : motion.div;

  return (
    <Component
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

// Slide in from side
export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
}) {
  const x = direction === 'left' ? -40 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
