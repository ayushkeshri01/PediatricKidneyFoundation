import React from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function ImpactSection() {
  const metrics = [
    { target: 19, suffix: 'y', label: 'Trusted Expertise', delay: '0s' },
    { target: 50, suffix: '+', label: 'Awareness Camps', delay: '0.1s' },
    { target: 250, suffix: '+', label: 'Surgeries Funded', delay: '0.2s' },
    { target: 12, suffix: 'k', label: 'Free Screenings', delay: '0.3s' }
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="text-center border-r border-white/10 last:border-0 reveal active"
              style={{ transitionDelay: m.delay }}
            >
              <p className="text-5xl font-extrabold text-coral mb-2">
                <AnimatedCounter target={m.target} suffix={m.suffix} />
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
