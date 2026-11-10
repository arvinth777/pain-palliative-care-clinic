'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      let delay = 0;
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        const isPhoto = target.hasAttribute('data-clinic-reveal');
        const frames = isPhoto ? [
          { clipPath: 'inset(8% 0 8% 0 round 16px)', transform: 'translateY(18px)', opacity: .55 },
          { clipPath: 'inset(0 0 0 0 round 16px)', transform: 'translateY(0)', opacity: 1 },
        ] : [
          { transform: 'translateY(26px)' },
          { transform: 'translateY(0)' },
        ];
        const animation = target.animate(frames, {
          duration: isPhoto ? 650 : 500,
          delay: isPhoto ? 0 : delay,
          fill: 'backwards',
          easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        });
        if (!isPhoto) delay += 65;
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: .15 });
    document.querySelectorAll('[data-clinic-reveal], [data-clinic-sequence] > *')
      .forEach(element => observer.observe(element));
    const stop = () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
    preference.addEventListener('change', stop);
    return () => { stop(); preference.removeEventListener('change', stop); };
  }, [pathname]);

  return null;
}
