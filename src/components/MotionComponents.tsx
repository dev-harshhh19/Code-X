'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

// Fade in from bottom animation
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.6,
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1] // Custom easing for buttery smoothness
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Fade in with scale
export function FadeInScale({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
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

// Stagger children animation container
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
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
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1]
          }
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hover scale effect
export function HoverScale({
  children,
  scale = 1.03,
  className = '',
}: {
  children: ReactNode;
  scale?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth button with press effect
export function AnimatedButton({
  children,
  className = '',
  onClick,
  ...props
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & Omit<HTMLMotionProps<'button'>, 'children' | 'onClick'>) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Floating animation (for decorative elements)
export function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
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
  const x = direction === 'left' ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
