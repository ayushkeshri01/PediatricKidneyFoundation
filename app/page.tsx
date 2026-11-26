import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import AboutPKFSection from '@/components/home/AboutPKFSection';
import ImpactSection from '@/components/home/ImpactSection';
import StoriesSection from '@/components/home/StoriesSection';
import LatestInitiativesSection from '@/components/home/LatestInitiativesSection';
import PartnersSection from '@/components/home/PartnersSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Banner, Buttons, Quick Help */}
      <HomeHero />

      {/* 2. About PKF, Why Pediatric Kidney Health Matters, Who We Help */}
      <AboutPKFSection />

      {/* 3. Our Impact */}
      <ImpactSection />

      {/* 4. Stories & Testimonials */}
      <StoriesSection />

      {/* 5. Latest Initiatives */}
      <LatestInitiativesSection />

      {/* 6. Our Partners */}
      <PartnersSection />
    </>
  );
}
