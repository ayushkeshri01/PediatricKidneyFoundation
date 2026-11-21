import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, Microscope, ClipboardCheck, ShieldPlus, Droplets, ArrowRight } from 'lucide-react';

export default function KidneyHealthAwareness() {
  const cards = [
    {
      id: 'health-symptoms-link',
      title: 'Kidney Symptoms',
      desc: 'Recognizing early warning signs & facial edema',
      href: '/kidney-health/symptoms',
      icon: Activity,
      badge: 'Warning Signs',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      accentColor: 'text-teal',
      badgeBg: 'bg-teal/90'
    },
    {
      id: 'health-diseases-link',
      title: 'Kidney Diseases',
      desc: 'Common childhood renal conditions',
      href: '/kidney-health/diseases',
      icon: Microscope,
      badge: 'Clinical Guides',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
      accentColor: 'text-turquoise',
      badgeBg: 'bg-turquoise/90'
    },
    {
      id: 'health-diagnosis-link',
      title: 'Diagnosis',
      desc: 'Urine, blood & radiation-free ultrasound tests',
      href: '/kidney-health/diagnosis',
      icon: ClipboardCheck,
      badge: 'Investigations',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      accentColor: 'text-sage',
      badgeBg: 'bg-navy/90'
    },
    {
      id: 'health-treatment-link',
      title: 'Treatment',
      desc: 'Dialysis and kidney transplant pathways',
      href: '/treatment',
      icon: ShieldPlus,
      badge: 'Care Journeys',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
      accentColor: 'text-navy',
      badgeBg: 'bg-navy/90'
    },
    {
      id: 'health-prevention-link',
      title: 'Prevention',
      desc: 'Healthy hydration, low-salt diet & active play',
      href: '/kidney-health/nutrition',
      icon: Droplets,
      badge: 'Everyday Habits',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
      accentColor: 'text-coral',
      badgeBg: 'bg-coral/90'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal active">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Parent &amp; Caregiver Education
          </span>
          <h2 className="text-4xl text-navy mb-4 font-bold">Empowering Parents Through Knowledge</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Kidney health is vital for growth and development. Understanding the signs and science is the first step toward early intervention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                id={card.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div>
                  {/* Visual Image Header */}
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 20vw"
                    />
                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* Badge */}
                    <span className={`absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeBg} shadow-sm backdrop-blur-sm`}>
                      {card.badge}
                    </span>

                    {/* Frosted Floating Icon */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-navy group-hover:bg-coral group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-navy group-hover:text-teal transition-colors mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <span className="text-xs font-bold text-teal group-hover:text-coral inline-flex items-center gap-1 transition-colors">
                    Explore guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
