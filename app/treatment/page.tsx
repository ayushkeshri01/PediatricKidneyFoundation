import React from 'react';
import Link from 'next/link';
import { RefreshCw, Heart, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Treatment Journey | Pediatric Kidney Foundation',
  description: 'Treatment Journey: Dialysis and Kidney Transplant.'
};

export default function TreatmentPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Treatment Journey' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <h1 className="text-4xl text-navy font-bold mb-4">
            Treatment Journey
          </h1>
        </div>

        {/* Dialysis Section */}
        <div id="dialysis" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xs my-10 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-navy">Dialysis</h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-base">
            Dialysis is a treatment that helps do the work of the kidneys when they are no longer able to function properly. Healthy kidneys remove waste, extra water, and harmful substances from the blood. When the kidneys stop working, these waste products build up in the body. Dialysis helps remove them and keeps the body healthy.
          </p>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">When Is Dialysis Needed?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A child may need dialysis when the kidneys are not able to work well enough to keep the body healthy. This may happen because of severe kidney injury or advanced chronic kidney disease. Your child&apos;s doctor will decide if and when dialysis is needed.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-navy text-lg mb-4">Types of Dialysis</h3>
            <p className="text-sm text-gray-700 mb-4">There are two main types of dialysis:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-warm-white rounded-2xl border border-gray-100">
                <h4 className="font-bold text-navy text-base mb-2">Peritoneal Dialysis (PD)</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  In this type of dialysis, a special fluid is put into the abdomen through a soft tube. The lining of the abdomen acts as a natural filter to remove waste and extra fluid. This treatment can often be done at home after proper training.
                </p>
              </div>

              <div className="p-6 bg-warm-white rounded-2xl border border-gray-100">
                <h4 className="font-bold text-navy text-base mb-2">Hemodialysis (HD)</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  In hemodialysis, blood is passed through a dialysis machine that removes waste and extra fluid before returning the cleaned blood to the body. This treatment is usually done in a hospital or dialysis centre several times a week.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">Is Dialysis Permanent?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In some children with acute kidney injury, dialysis is only needed for a short period until the kidneys recover. In children with chronic kidney disease, dialysis may be needed until a kidney transplant can be done.
            </p>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">Living with Dialysis</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              With the right treatment, a healthy diet, regular medicines, and follow-up care, many children on dialysis can continue to attend school, play, and enjoy daily activities. Support from family and healthcare providers is an important part of their care.
            </p>
          </div>
        </div>

        {/* Kidney Transplant Section */}
        <div id="transplant" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xs my-10 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-navy">Kidney Transplant</h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-base">
            A kidney transplant is a surgery in which a healthy kidney from a donor is placed into the body of a child whose kidneys are no longer working properly. For many children with advanced kidney disease, a kidney transplant offers the best chance of leading a healthy and active life.
          </p>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">Who Needs a Kidney Transplant?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A kidney transplant may be recommended for children whose kidneys have permanently stopped working due to advanced chronic kidney disease. Before a transplant, the child undergoes a detailed medical evaluation to make sure they are ready for the procedure.
            </p>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">Where Does the Donor Kidney Come From?</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">A kidney can be donated by:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                <span>A living donor, such as a parent or a close relative who is healthy and a suitable match</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                <span>A deceased donor, whose family has agreed to donate organs after death</span>
              </li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              The doctor will determine the most suitable donor after careful testing.
            </p>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">What Happens After the Transplant?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              After surgery, the child will need to take medicines every day to prevent the body from rejecting the new kidney. Regular follow-up visits with the pediatric nephrologist are essential to check kidney function and adjust medicines.
            </p>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">Can Children Live a Normal Life After a Transplant?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Yes. Many children who receive a kidney transplant can return to school, play with friends, and enjoy a good quality of life. With regular medicines, healthy eating, and routine medical check-ups, most children can grow and develop well.
            </p>
          </div>

          <div className="p-6 bg-off-white rounded-2xl border border-gray-100">
            <h3 className="font-bold text-navy text-lg mb-2">When Should You Talk to Your Doctor?</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              If your child has advanced kidney disease, talk to your pediatric nephrologist about whether dialysis or a kidney transplant is the right option. Early planning and family counseling help ensure the best possible care for your child.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/kidney-health/nutrition"
            className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            Nutrition &amp; Lifestyle <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kidney-health/diagnosis"
            className="inline-flex items-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-all"
          >
            Diagnosis &amp; Investigations
          </Link>
        </div>
      </div>
    </div>
  );
}
