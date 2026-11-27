'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR =
  '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-item';

export default function ScrollObserver() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((el) => el.classList.add('active'));
      return;
    }

    revealElements.forEach((el) => {
      if (!el.classList.contains('stagger-item') && !el.classList.contains('reveal-scale')) return;
      const siblings = Array.from(el.parentElement?.children ?? []);
      const index = siblings.indexOf(el);
      if (index > 0) {
        el.style.transitionDelay = `${Math.min(index, 7) * 90}ms`;
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));

    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>('.parallax-image')
    );
    const header = document.querySelector<HTMLElement>('header');
    const progressBar = progressRef.current;
    let ticking = false;

    const updateScrollEffects = () => {
      ticking = false;

      if (progressBar) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      }

      header?.classList.toggle('header-scrolled', window.scrollY > 24);

      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const speed = Number(img.dataset.parallaxSpeed ?? 0.055);
        const distance = (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight;
        const offset = Math.max(-1, Math.min(1, distance)) * rect.height * speed;
        img.style.setProperty('--parallax-y', `${offset.toFixed(1)}px`);
      });
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateScrollEffects);
    };

    updateScrollEffects();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
