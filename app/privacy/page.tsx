import React from 'react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy | Pediatric Kidney Foundation',
  description: 'Privacy policy and donor data protection policies of the Pediatric Kidney Foundation (PKF).'
};

export default function PrivacyPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 my-8">
          <h1 className="text-3xl font-bold text-navy mb-6">Privacy Policy</h1>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              The Pediatric Kidney Foundation (PKF) is committed to safeguarding the privacy and confidentiality of our patients, families, donors, volunteers, and website visitors.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">1. Information We Collect</h2>
            <p>
              We collect information provided voluntarily through our contact forms, newsletter subscription, and donation portals. For donors seeking an 80G tax receipt under the Indian Income Tax Act, we collect name, email, phone number, address, and Permanent Account Number (PAN) as mandated by the Government of India.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">2. How We Use Information</h2>
            <p>
              Patient health information shared with PKF care coordinators is strictly utilized to provide medical guidance, second opinions, and financial aid navigation. Donor information is used exclusively to generate tax exemption certificates and issue foundation updates. PKF never sells, rents, or commercializes donor or patient records.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">3. Security</h2>
            <p>
              We implement industry-standard 256-bit SSL encryption to ensure that all data transmitted through our web portal remains secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
