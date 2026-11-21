'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Hospital } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'help',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Header with Visual Clinical Secretariat Banner */}
        <div className="my-8 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Clinical Guidance &amp; Secretariat Desk
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-4">
                Contact Pediatric Kidney Foundation
              </h1>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
                Whether you are a parent seeking diagnostic guidance for your child, a healthcare professional wishing to collaborate, or an institution exploring CSR partnerships, our team is here to assist you.
              </p>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                  alt="PKF Clinical Coordination Secretariat New Delhi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-bold flex items-center gap-1.5">
                    <Hospital className="w-3.5 h-3.5 text-teal" /> PKF Central Secretariat
                  </p>
                  <p className="text-white/80 text-[11px]">South Extension-1, New Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-10">
          {/* Contact Details & Office Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy text-white p-8 sm:p-10 rounded-3xl shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-coral">
                Headquarters
              </span>
              <h2 className="text-2xl font-bold mt-2 mb-6 text-white">Central Secretariat</h2>

              <ul className="space-y-6 text-sm text-white/90">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-base">Office Address</strong>
                    <span className="text-white/80 leading-relaxed block mt-1">
                      Pediatric Kidney Foundation<br />
                      E-11, South Extension-1,<br />
                      New Delhi – 110049, India
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-base">Phone Assistance</strong>
                    <span className="text-white/80 block mt-1">+91 (011) 4567-8901</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-base">Email Desk</strong>
                    <span className="text-white/80 block mt-1">contact@pkf-india.org</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-teal w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-base">Office Hours</strong>
                    <span className="text-white/80 block mt-1">
                      Monday – Friday: 9:00 AM – 5:30 PM (IST)<br />
                      Saturday: 9:30 AM – 1:30 PM (IST)
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Representation */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal" /> Location Hub
              </h3>
              <div className="h-56 bg-off-white rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-gray-200">
                <MapPin className="w-8 h-8 text-coral mb-2 animate-bounce-subtle" />
                <p className="font-bold text-navy text-sm">E-11, South Extension-1, New Delhi</p>
                <p className="text-xs text-gray-500 mt-1">Near AIIMS &amp; Safdarjung Hospital Hub</p>
                <a
                  href="https://maps.google.com/?q=South+Extension-1+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-teal text-white text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Thank you for reaching out to the Pediatric Kidney Foundation. A member of our clinical coordination team will respond within 24–48 business hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-navy text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-teal transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-2">Send an Inquiry</h2>
                  <p className="text-xs text-gray-500">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Inquiry Category *
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                  >
                    <option value="help">Get Help for a Child / Medical Guidance</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="csr">CSR &amp; Institutional Partnership</option>
                    <option value="host-camp">Host a Pediatric Screening Camp</option>
                    <option value="doctor">Medical Professional Collaboration</option>
                    <option value="general">General Foundation Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Priya Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Message / Clinical Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please describe your query, patient condition, or proposal in detail..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal hover:brightness-110 active:scale-95 text-white font-bold py-4 rounded-xl text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry to PKF
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
