import React from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function ImpactSection() {
  const metrics = [
    { target: 15000, suffix: '+', label: 'Children Supported', delay: '0s' },
    { target: 250, suffix: '+', label: 'Treatment Aid Provided', delay: '0.1s' },
    { target: 50, suffix: '+', label: 'Awareness & Education', delay: '0.2s' },
    { target: 12000, suffix: '+', label: 'Patient Support', delay: '0.3s' }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-coral block mb-2">
            Pediatric Kidney Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our Impact
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="text-center border-r border-white/10 last:border-0 p-4"
              style={{ transitionDelay: m.delay }}
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-coral mb-2">
                <AnimatedCounter target={m.target} suffix={m.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
