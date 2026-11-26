import React from 'react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Terms of Use | Pediatric Kidney Foundation',
  description: 'Terms of use for the Pediatric Kidney Foundation website.'
};

export default function TermsPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Use' }]} />
        <div className="my-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-navy mb-6">Terms of Use</h1>
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <p>By accessing and using the Pediatric Kidney Foundation (PKF) website, you agree to use the site responsibly and in accordance with these terms.</p>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Informational Purpose</h2>
              <p>Content on this website is provided for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Medical Emergency</h2>
              <p>If your child has a medical emergency, seek immediate care from a qualified healthcare professional or emergency services. Do not rely on website forms for urgent medical needs.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Acceptable Use</h2>
              <p>You agree not to misuse the website, attempt unauthorized access, submit harmful content, or interfere with site functionality.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Intellectual Property</h2>
              <p>Website content, branding, and materials are owned by or licensed to PKF unless otherwise stated. Reuse requires appropriate permission.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Updates</h2>
              <p>PKF may update these terms from time to time. Continued use of the website constitutes acceptance of updated terms.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
