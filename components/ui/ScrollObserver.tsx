'use client';

import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // Intersection Observer for Scroll Animations
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .stagger-item'
    );
    elementsToReveal.forEach((el) => observer.observe(el));

    // Parallax Scroll Effect for images
    const handleScroll = () => {
      const images = document.querySelectorAll<HTMLElement>('.parallax-image');
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const speed = 0.05;
          const offset = (window.innerHeight - rect.top) * speed;
          img.style.transform = `translateY(${offset}px) scale(1.05) rotate(2deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
