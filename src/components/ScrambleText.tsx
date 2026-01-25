'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  duration?: number;
  className?: string;
  isScrambling?: boolean;
}

// Characters to use for scrambling effect
const SCRAMBLE_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz:.-!@#$%^&*';

export default function ScrambleText({
  text,
  duration = 1500,
  className = '',
  isScrambling = false
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | null>(null);
  const previousTextRef = useRef(text);

  useEffect(() => {
    // Only scramble if text actually changed and isScrambling is true
    if (text !== previousTextRef.current && isScrambling && text.length > 0) {
      previousTextRef.current = text;
      scramble(text);
    } else if (text !== previousTextRef.current) {
      previousTextRef.current = text;
      setDisplayText(text);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [text, isScrambling]);

  const scramble = (targetText: string) => {
    if (!targetText) {
      setDisplayText('');
      return;
    }

    setIsAnimating(true);
    const startTime = performance.now();
    const textLength = targetText.length;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Calculate how many characters should be "settled"
      const settledCount = Math.floor(progress * textLength);

      // Build the display string
      let result = '';
      for (let i = 0; i < textLength; i++) {
        if (i < settledCount) {
          // This character has settled to its final value
          result += targetText[i];
        } else {
          // Still scrambling - pick a random character
          // Unless it's a space, keep the space
          if (targetText[i] === ' ') {
            result += ' ';
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(targetText);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  return (
    <motion.span
      className={className}
      animate={isAnimating ? { opacity: [0.8, 1, 0.8] } : { opacity: 1 }}
      transition={isAnimating ? { duration: 0.1, repeat: Infinity } : { duration: 0.2 }}
    >
      {displayText}
    </motion.span>
  );
}
