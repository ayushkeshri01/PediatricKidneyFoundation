import React from 'react';
import Link from 'next/link';
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
    { name: 'Swelling (Edema)', desc: 'Puffy eyelids upon waking, swollen feet or abdomen', href: '/kidney-health/symptoms#swelling' },
    { name: 'Blood in Urine (Hematuria)', desc: 'Reddish, pink, tea-colored, or cola-colored urine', href: '/kidney-health/symptoms#blood-in-urine' },
    { name: 'Frothy Urine (Proteinuria)', desc: 'Foamy or bubbly urine that doesn’t clear quickly', href: '/kidney-health/symptoms#frothy-urine' },
    { name: 'Poor Physical Growth', desc: 'Slow weight gain, poor appetite, failure to thrive', href: '/kidney-health/symptoms#poor-growth' },
    { name: 'High Blood Pressure', desc: 'Pediatric hypertension, occasional morning headaches', href: '/kidney-health/symptoms#high-blood-pressure' },
    { name: 'Fever with UTI', desc: 'Unexplained high fever, crying or pain during urination', href: '/kidney-health/symptoms#fever-uti' }
  ];

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
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
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

      {/* Understanding Healthy Kidneys Overview Banner */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal/5 border border-teal/20 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest mb-3">
                <HeartPulse className="w-4 h-4" />
                <span>Foundational Physiology</span>
              </div>
              <h2 className="text-3xl text-navy font-bold mb-4">Understanding Healthy Kidneys</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The kidneys are remarkable organs that perform essential functions necessary for life. They remove waste products from the blood, regulate body fluids and electrolytes, maintain healthy blood pressure, produce hormones that stimulate red blood cell production, and support healthy bone growth. In children, healthy kidneys are particularly important because they contribute directly to normal growth and development.
              </p>
              <Link
                href="/kidney-health/healthy-kidneys"
                className="inline-flex items-center gap-2 text-teal font-bold hover:underline"
              >
                Read full physiological guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="/kidney-health/diseases"
                className="bg-teal text-white px-6 py-3.5 rounded-xl font-bold hover:brightness-110 text-center transition-all shadow-md"
              >
                Browse Diseases Library
              </Link>
              <Link
                href="/kidney-health/diagnosis"
                className="bg-white border-2 border-navy text-navy px-6 py-3.5 rounded-xl font-bold hover:bg-navy hover:text-white text-center transition-all"
              >
                Diagnostic Tests
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms Grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal">Early Warning Signs</span>
              <h2 className="text-3xl text-navy font-bold mt-1">Common Symptoms in Children</h2>
              <p className="text-gray-600 text-sm mt-2 max-w-xl">
                Symptoms in children can often be subtle. If you observe any of the following signs, prompt evaluation with a pediatric nephrologist is recommended.
              </p>
            </div>
            <Link
              href="/kidney-health/symptoms"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1.5 transition-colors"
            >
              Detailed Symptoms Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptomList.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal/30 transition-all group block"
              >
                <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4 group-hover:bg-coral group-hover:text-white transition-colors">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy text-lg group-hover:text-teal transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-bold text-teal uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Diseases Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal">Conditions Library</span>
              <h2 className="text-3xl text-navy font-bold mt-1">Kidney Diseases in Children</h2>
            </div>
            <Link
              href="/kidney-health/diseases"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1"
            >
              View All 7 Conditions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diseasesData.slice(0, 6).map((disease) => (
              <div
                key={disease.id}
                className="bg-warm-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-teal/10 text-teal mb-3 inline-block">
                    {disease.category}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-2">{disease.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                    {disease.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/kidney-health/diseases/${disease.slug}`}
                  className="text-teal font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                >
                  Read Comprehensive Guide <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete PKF FAQs Section */}
      <section id="faqs" className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Medical Q&A</span>
            </div>
            <h2 className="text-3xl sm:text-4xl text-navy font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-base mt-2">
              Essential answers to common questions asked by parents and families caring for children with kidney disease.
            </p>
          </div>

          <Accordion items={faqItems} />

          <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-gray-200">
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
