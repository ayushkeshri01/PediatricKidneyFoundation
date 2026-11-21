import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import QuickAccess from '@/components/home/QuickAccess';
import AboutPKFSection from '@/components/home/AboutPKFSection';
import KidneyHealthAwareness from '@/components/home/KidneyHealthAwareness';
import ConditionsOverview from '@/components/home/ConditionsOverview';
import ImpactSection from '@/components/home/ImpactSection';
import StoriesSection from '@/components/home/StoriesSection';
import PartnersSection from '@/components/home/PartnersSection';
import DonationCTASection from '@/components/home/DonationCTASection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Three.js 3D Realistic Kidney Visualization */}
      <HomeHero />

      {/* 2. Quick Access Overlap Cards */}
      <QuickAccess />

      {/* 3. About PKF (Editorial Layout with Archival Photography & Counter) */}
      <AboutPKFSection />

      {/* 4. Kidney Health Awareness Grid */}
      <KidneyHealthAwareness />

      {/* 5. Conditions Overview Cards */}
      <ConditionsOverview />

      {/* 6. Impact Statistics in Navy */}
      <ImpactSection />

      {/* 7. Voices of Hope / Patient Stories */}
      <StoriesSection />

      {/* 8. Institutional Partners */}
      <PartnersSection />

      {/* 9. Donation Call-To-Action */}
      <DonationCTASection />
    </>
  );
}
