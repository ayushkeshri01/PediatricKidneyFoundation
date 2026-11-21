'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  className = ''
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const startTime = performance.now();

            const update = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic: 1 - Math.pow(1 - progress, 3)
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easedProgress * target);

              setDisplayValue(currentVal);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                setDisplayValue(target);
              }
            };

            requestAnimationFrame(update);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={elementRef} className={`counter ${className}`}>
      {displayValue}
      {suffix}
    </span>
  );
}
