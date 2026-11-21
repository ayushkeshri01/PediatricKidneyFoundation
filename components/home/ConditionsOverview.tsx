import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertCircle, Clock, Dna, ArrowRight } from 'lucide-react';

export default function ConditionsOverview() {
  const conditions = [
    {
      title: 'Nephrotic Syndrome',
      subtitle: 'Most Common in Children',
      description:
        'A kidney disorder where microscopic glomerular filters leak excessive protein into the urine, causing swelling around the eyes, face, and abdomen.',
      icon: AlertCircle,
      iconColor: 'text-teal',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=700',
      badge: 'High Treatment Response',
      badgeBg: 'bg-teal',
      href: '/kidney-health/diseases/nephrotic-syndrome',
      delay: '0s'
    },
    {
      title: 'Chronic Kidney Disease',
      subtitle: 'Progressive Management',
      description:
        'A gradual loss of kidney function over time affecting growth and energy. Early pediatric detection and specialized care slow progression significantly.',
      icon: Clock,
      iconColor: 'text-navy',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=700',
      badge: 'Multidisciplinary Care',
      badgeBg: 'bg-navy',
      href: '/kidney-health/diseases/chronic-kidney-disease',
      delay: '0.1s'
    },
    {
      title: 'Congenital Disorders (CAKUT)',
      subtitle: 'Present at Birth',
      description:
        'Structural variations of the kidneys or urinary tract developed in the womb. Many can be corrected with pediatric surgery and antibiotics.',
      icon: Dna,
      iconColor: 'text-coral',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700',
      badge: 'Early Ultrasound Detection',
      badgeBg: 'bg-coral',
      href: '/kidney-health/diseases/congenital-kidney-disorders',
      delay: '0.2s'
    }
  ];

  return (
    <section className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4 reveal active">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
              Medical Reference Library
            </span>
            <h2 className="text-3xl sm:text-4xl text-navy font-bold">Common Conditions</h2>
          </div>
          <Link
            href="/kidney-health/diseases"
            id="all-conditions-link"
            className="text-navy font-bold hover:text-teal group inline-flex items-center gap-1.5 transition-colors text-sm"
          >
            View All 7 Conditions{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {conditions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 reveal active hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                style={{ transitionDelay: item.delay }}
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    <span className={`absolute top-4 left-4 text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeBg} shadow-sm backdrop-blur-sm`}>
                      {item.badge}
                    </span>

                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-7">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl text-navy mb-3 font-bold group-hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0 border-t border-gray-50 mt-2 pt-4">
                  <Link
                    href={item.href}
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:text-coral inline-flex items-center gap-1.5 transition-colors"
                  >
                    Read Medical Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
