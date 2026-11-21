import React from 'react';
import Link from 'next/link';
import { AlertCircle, Clock, Dna, ArrowRight } from 'lucide-react';

export default function ConditionsOverview() {
  const conditions = [
    {
      title: 'Nephrotic Syndrome',
      description:
        'A kidney disorder that causes your body to pass too much protein in your urine. It is often the first sign of kidney issues in children.',
      icon: AlertCircle,
      iconBg: 'bg-teal/10',
      iconHoverBg: 'group-hover:bg-teal',
      iconColor: 'text-teal',
      href: '/kidney-health/diseases/nephrotic-syndrome',
      delay: '0s'
    },
    {
      title: 'Chronic Kidney Disease',
      description:
        'A gradual loss of kidney function over time. Early detection is critical for managing long-term health in pediatrics.',
      icon: Clock,
      iconBg: 'bg-navy/10',
      iconHoverBg: 'group-hover:bg-navy',
      iconColor: 'text-navy',
      href: '/kidney-health/diseases/chronic-kidney-disease',
      delay: '0.1s'
    },
    {
      title: 'Congenital Disorders',
      description:
        'Structural abnormalities of the kidneys or urinary tract that are present at birth (CAKUT). Requires specialized care.',
      icon: Dna,
      iconBg: 'bg-coral/10',
      iconHoverBg: 'group-hover:bg-coral',
      iconColor: 'text-coral',
      href: '/kidney-health/diseases/congenital-kidney-disorders',
      delay: '0.2s'
    }
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12 reveal active">
          <div>
            <h4 className="text-teal font-bold uppercase tracking-widest text-sm mb-2">
              Medical Library
            </h4>
            <h2 className="text-3xl text-navy">Common Conditions</h2>
          </div>
          <Link
            href="/kidney-health/diseases"
            id="all-conditions-link"
            className="text-navy font-bold hover:text-teal group inline-flex items-center gap-1.5 transition-colors"
          >
            View All Conditions{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal active hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                style={{ transitionDelay: item.delay }}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded ${item.iconBg} flex items-center justify-center mb-6 ${item.iconHoverBg} transition-colors`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor} group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-xl text-navy mb-4 font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>
                <div>
                  <Link
                    href={item.href}
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
