import React, { Suspense } from 'react';
import ContactPageClient from './ContactPageClient';

export const metadata = {
  title: 'Contact Us | Pediatric Kidney Foundation',
  description: 'Contact the Pediatric Kidney Foundation for help, support, partnerships, and inquiries.'
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="bg-warm-white min-h-screen py-12" />}>
      <ContactPageClient />
    </Suspense>
  );
}
