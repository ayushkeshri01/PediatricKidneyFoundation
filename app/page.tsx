import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import QuickAccess from '@/components/home/QuickAccess';
import AboutPKFSection from '@/components/home/AboutPKFSection';
import KidneyHealthAwareness from '@/components/home/KidneyHealthAwareness';
import ConditionsOverview from '@/components/home/ConditionsOverview';
import ImpactSection from '@/components/home/ImpactSection';
import StoriesSection from '@/components/home/StoriesSection';
import LatestInitiativesSection from '@/components/home/LatestInitiativesSection';
import PartnersSection from '@/components/home/PartnersSection';
import DonationCTASection from '@/components/home/DonationCTASection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Dedicated Pediatric Healthcare Visuals */}
      <HomeHero />

      {/* 2. Quick Access Overlap Cards */}
      <QuickAccess />

      {/* 3. About PKF (About PKF, Why Pediatric Kidney Health Matters, Who We Help) */}
      <AboutPKFSection />

      {/* 4. Kidney Health Awareness */}
      <KidneyHealthAwareness />

      {/* 5. Conditions Overview */}
      <ConditionsOverview />

      {/* 6. Our Impact (Children Supported, Treatment Aid Provided, Awareness & Education, Patient Support) */}
      <ImpactSection />

      {/* 7. Stories & Testimonials */}
      <StoriesSection />

      {/* 8. Latest Initiatives (Upcoming Camps, Awareness Drives, Partnerships, Events) */}
      <LatestInitiativesSection />

      {/* 9. Our Partners (Hospital logos, Medical Colleges, CSR Partners, NGOs) */}
      <PartnersSection />

      {/* 10. Donation Call-To-Action */}
      <DonationCTASection />
    </>
  );
}
