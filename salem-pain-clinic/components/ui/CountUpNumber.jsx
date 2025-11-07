'use client';

import { CountUp } from 'countup.js';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A component that animates a number from 0 to a target
 * when it scrolls into the viewport.
 */
export function CountUpNumber({
  target,
  suffix = '',
  prefix = '',
  className = '',
  duration = 2.5,
  separator = ',',
}) {
  const countupRef = useRef(null);
  const countUpAnim = useRef(null);

  // useInView hook will track when the element is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  useEffect(() => {
    if (inView && countupRef.current) {
      // When the component is in view, initialize and start CountUp
      if (!countUpAnim.current) {
        countUpAnim.current = new CountUp(countupRef.current, target, {
          prefix: prefix,
          suffix: suffix,
          duration: duration,
          useGrouping: true, // e.g., 10,000
          separator: separator,
        });
      }
      if (countUpAnim.current && !countUpAnim.current.error) {
        countUpAnim.current.start();
      } else {
        console.error(countUpAnim.current?.error);
      }
    }
  }, [inView, target, prefix, suffix, duration, separator]); // Re-run if inView changes

  return (
    <span
      className={className}
      ref={(node) => {
        // This combines the refs for useInView and countup.js
        ref(node);
        countupRef.current = node;
      }}
    >
      {/* We show 0 as a placeholder before it animates */}
      {prefix}0{suffix}
    </span>
  );
}
