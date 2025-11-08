'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * FadeInUp Component
 * Makes children fade in and slide up when they scroll into view
 * 
 * Usage:
 * <FadeInUp>
 *   <YourContent />
 * </FadeInUp>
 * 
 * Props:
 * - delay: Delay before animation starts (in seconds)
 * - duration: Animation duration (in seconds)
 * - once: If true, animation only happens once
 */

export default function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 0.6,
  once = true,
  className = ""
}) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1, // Trigger when 10% of element is visible
  });

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1] // Smooth easing
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
