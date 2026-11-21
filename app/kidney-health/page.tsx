import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  HeartPulse,
  Activity,
  Microscope,
  ClipboardCheck,
  ShieldPlus,
  Droplets,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Accordion from '@/components/ui/Accordion';
import { pkfFAQs } from '@/content/faq';
import { diseasesData } from '@/content/diseases';

export const metadata = {
  title: 'Kidney Health Hub | Pediatric Kidney Foundation',
  description: 'Comprehensive medical education for parents and caregivers on healthy kidneys, common pediatric symptoms, diagnosis, and care.'
};

export default function KidneyHealthPage() {
  const symptomList = [
    {
      name: 'Swelling (Edema)',
      desc: 'Puffy eyelids upon waking, swollen feet or abdomen',
      href: '/kidney-health/symptoms#swelling',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Blood in Urine (Hematuria)',
      desc: 'Reddish, pink, tea-colored, or cola-colored urine',
      href: '/kidney-health/symptoms#blood-in-urine',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Frothy Urine (Proteinuria)',
      desc: 'Foamy or bubbly urine that doesn’t clear quickly',
      href: '/kidney-health/symptoms#frothy-urine',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Poor Physical Growth',
      desc: 'Slow weight gain, poor appetite, failure to thrive',
      href: '/kidney-health/symptoms#poor-growth',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'High Blood Pressure',
      desc: 'Pediatric hypertension, occasional morning headaches',
      href: '/kidney-health/symptoms#high-blood-pressure',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Fever with UTI',
      desc: 'Unexplained high fever, crying or pain during urination',
      href: '/kidney-health/symptoms#fever-uti',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const diseaseImages: Record<string, string> = {
    uti: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=500',
    'nephrotic-syndrome': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500',
    ckd: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=500',
    congenital: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=500',
    aki: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500',
    glomerulonephritis: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=500',
    'kidney-stones': 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=500'
  };

  const faqItems = pkfFAQs.map((faq) => ({
    id: faq.id,
    title: `${faq.id}. ${faq.question}`,
    content: (
      <div>
        <p className="mb-2">{faq.answer}</p>
        {faq.category && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-0.5 rounded">
            {faq.category}
          </span>
        )}
      </div>
    )
  }));

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Kidney Health Hub' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
              <span className="text-xs font-bold tracking-widest uppercase text-coral">
                Parent & Caregiver Education
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Kidney Health Hub
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Empowering families with clear, medically validated guidance on how childhood kidneys function, recognizing subtle warning signs early, and navigating care.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Healthy Kidneys Overview Banner with High-Res Visual */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-off-white border border-gray-200 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden shadow-sm">
            <div className="lg:w-7/12">
              <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest mb-3">
                <HeartPulse className="w-4 h-4" />
                <span>Foundational Physiology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl text-navy font-bold mb-4">Understanding Healthy Kidneys</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-base">
                The kidneys perform essential functions necessary for life: filtering metabolic wastes, balancing bodily fluids and electrolytes, controlling blood pressure, stimulating red blood cell production, and supporting healthy bone growth. In children, healthy kidneys directly govern physical growth and cognitive energy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kidney-health/healthy-kidneys"
                  className="bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  Explore Physiological Guide <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kidney-health/diseases"
                  className="border-2 border-navy text-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy hover:text-white transition-all"
                >
                  Browse Diseases Library
                </Link>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                  alt="Doctor with pediatric patient"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-xs font-semibold">Specialized Pediatric Nephrology Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms Grid with Images */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full inline-block mb-2">
                Early Warning Signs
              </span>
              <h2 className="text-3xl text-navy font-bold mt-1">Common Symptoms in Children</h2>
              <p className="text-gray-600 text-sm mt-2 max-w-xl">
                Symptoms in children can often be subtle. If you observe any of the following signs, prompt evaluation with a pediatric nephrologist is recommended.
              </p>
            </div>
            <Link
              href="/kidney-health/symptoms"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1.5 transition-colors text-sm"
            >
              Detailed Symptoms Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptomList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group block"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center shadow-md">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <span className="text-white text-xs font-bold drop-shadow-md">
                      Warning Sign 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-navy text-lg group-hover:text-teal transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-xs font-bold text-teal uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Diseases Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full inline-block mb-2">
                Conditions Library
              </span>
              <h2 className="text-3xl text-navy font-bold mt-1">Kidney Diseases in Children</h2>
            </div>
            <Link
              href="/kidney-health/diseases"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 text-sm"
            >
              View All 7 Conditions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diseasesData.map((disease) => (
              <div
                key={disease.id}
                className="bg-warm-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={diseaseImages[disease.id] || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=500'}
                      alt={disease.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-teal text-white shadow-sm">
                      {disease.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                      {disease.name}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {disease.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-gray-100 pt-3">
                  <Link
                    href={`/kidney-health/diseases/${disease.slug}`}
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:text-coral inline-flex items-center gap-1 transition-colors"
                  >
                    Read Comprehensive Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete PKF FAQs Section */}
      <section id="faqs" className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest mb-2 bg-teal/10 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4" />
              <span>Medical Q&amp;A</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-navy font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base mt-2">
              Essential answers to common questions asked by parents and families caring for children with kidney disease.
            </p>
          </div>

          <Accordion items={faqItems} />

          <div className="mt-12 text-center p-8 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-navy text-lg mb-2">Have a question not addressed here?</h3>
            <p className="text-gray-600 text-sm mb-6">
              Our pediatric medical advisory team is available to connect you with pediatric nephrology resources.
            </p>
            <Link
              href="/contact?inquiry=question"
              className="bg-coral text-white px-8 py-3 rounded-xl font-bold text-sm shadow hover:brightness-110 transition-all inline-block"
            >
              Contact PKF Medical Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
