import React from 'react';
import { Heart, Stethoscope, BookOpen, Users } from 'lucide-react';

export default function ImpactSection() {
  const impactItems = [
    { title: 'Children Supported', icon: Heart },
    { title: 'Treatment Aid Provided', icon: Stethoscope },
    { title: 'Awareness & Education', icon: BookOpen },
    { title: 'Patient Support', icon: Users }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-all stagger-item"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal/20 text-teal flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
