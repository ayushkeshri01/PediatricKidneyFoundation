import React from 'react';
import { Hospital, School, HeartHandshake, Shield } from 'lucide-react';

export default function PartnersSection() {
  const partnerCategories = [
    { title: 'Hospital logos', icon: Hospital, desc: 'Partnering tertiary pediatric hospitals and renal departments' },
    { title: 'Medical Colleges', icon: School, desc: 'Collaboration with academic faculty, fellows, and researchers' },
    { title: 'CSR Partners', icon: HeartHandshake, desc: 'Corporate social responsibility foundations supporting clinical aid' },
    { title: 'NGOs', icon: Shield, desc: 'Nonprofit and healthcare advocacy allies across communities' }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Collaboration &amp; Care
          </span>
          <h2 className="text-3xl font-bold text-navy">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
