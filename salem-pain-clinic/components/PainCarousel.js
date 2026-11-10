'use client';
import { useLanguage } from '@/components/LanguageProvider';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';

const slides = [
  ['clinic-logo-refined.png', 'Salem Pain Clinic'],
  ['pain-carousel/back-clinical.webp', 'Red highlight over the lower spine'],
  ['pain-carousel/knee-clinical.webp', 'Red highlights at the knees with a translucent view of the knee joint'],
];

export default function PainCarousel() {
  const { t } = useLanguage();
  const [slide, setSlide] = useState({ index: 0, previous: null, ready: true });
  const { index, previous, ready } = slide;
  const touchStart = useRef(null);
  const carouselRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const visible = ready ? index : previous;

  const move = useCallback((step, automatic = false) => {
    if (automatic) setKeyboardNavigation(false);
    setSlide(current => {
      if (automatic && !current.ready) return current;
      const from = current.ready ? current.index : current.previous;
      const next = (current.index + step + slides.length) % slides.length;
      return {
        index: next,
        previous: next === from ? null : from,
        ready: next === from || next === current.previous,
      };
    });
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function pauseForPreference() {
      if (preference.matches) setPlaying(false);
    }
    pauseForPreference();
    preference.addEventListener('change', pauseForPreference);
    return () => preference.removeEventListener('change', pauseForPreference);
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(() => {
      const bounds = carouselRef.current?.getBoundingClientRect();
      if (!document.hidden && bounds && bounds.bottom > 0 && bounds.top < window.innerHeight) move(1, true);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [hovered, move, playing]);

  function startSwipe(event) {
    const touch = event.touches.length === 1 ? event.touches[0] : null;
    touchStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  function endSwipe(event) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      setKeyboardNavigation(false);
      setPlaying(false);
      move(dx < 0 ? 1 : -1);
    }
  }

  return (
    <section
      ref={carouselRef}
      className="clinic-pain-carousel clinic-hero-media"
      data-paused={!playing}
      aria-label={t("Pain points")}
      aria-roledescription={t("carousel")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="clinic-carousel-rotation"
        type="button"
        aria-label={t(playing ? 'Pause slideshow' : 'Play slideshow')}
        aria-describedby="clinic-carousel-motion"
        aria-keyshortcuts="ArrowLeft ArrowRight"
        onFocus={event => {
          if (event.currentTarget.matches(':focus-visible')) setPlaying(false);
        }}
        onClick={() => setPlaying(current => !current)}
        onKeyDown={event => {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          setPlaying(false);
          setKeyboardNavigation(true);
          move(event.key === 'ArrowLeft' ? -1 : 1);
        }}
      >
        {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
      </button>
      <span id="clinic-carousel-motion" className="sr-only">{t("Controls the slideshow and background motion.")}</span>
      <figure
        className="clinic-pain-frame"
        data-motion={keyboardNavigation ? 'instant' : 'smooth'}
        aria-live={playing ? 'off' : 'polite'}
        onTouchStart={startSwipe}
        onTouchEnd={endSwipe}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        {(previous === null ? [index] : [previous, index]).map(frame => {
          const [filename, alt] = slides[frame];
          const incoming = frame === index && previous !== null;
          return (
            <Image
              key={filename}
              src={'/images/' + filename}
              alt={frame === visible ? t(alt) : ''}
              aria-hidden={frame !== visible}
              className={frame === 0 ? 'clinic-carousel-logo' : undefined}
              data-reveal={incoming ? ready ? 'active' : 'waiting' : undefined}
              fill
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1344px) 52vw, 684px"
              priority={frame === 0}
              fetchPriority={frame === 0 ? 'high' : undefined}
              loading={incoming && frame !== 0 ? 'eager' : undefined}
              onLoad={incoming ? () => setSlide(current => current.index === frame && !current.ready
                ? { ...current, ready: true }
                : current) : undefined}
              onError={incoming ? () => setSlide(current => current.index === frame && current.previous !== null
                ? { ...current, index: current.previous, previous: null, ready: true }
                : current) : undefined}
            />
          );
        })}
      </figure>
    </section>
  );
}
