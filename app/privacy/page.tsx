import React from 'react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | Pediatric Kidney Foundation',
  description: 'Privacy policy for the Pediatric Kidney Foundation website.'
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <div className="my-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-navy mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <p>Pediatric Kidney Foundation (PKF) respects your privacy and is committed to protecting personal information shared through this website.</p>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Information We Collect</h2>
              <p>We may collect information you voluntarily provide, including your name, email address, phone number, and message details when you submit contact or newsletter forms.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">How We Use Information</h2>
              <p>Information is used to respond to inquiries, provide requested support, share updates when you subscribe, and improve our services. We do not sell personal information.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Data Security</h2>
              <p>We take reasonable administrative and technical measures to protect information. However, no internet transmission or electronic storage method is completely secure.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Third-Party Links</h2>
              <p>Our website may contain links to external websites. PKF is not responsible for the privacy practices or content of third-party sites.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-navy mb-2">Contact</h2>
              <p>For privacy-related questions, contact us at contact@pediatrickidneyfoundation.org or +91 11 2469 8888.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
