'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Get Help for Your Child',
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

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Pediatric Kidney Foundation is here to support children and families facing kidney diseases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          {/* Left Column: Office Address, Phone, Email, Office Hours, Follow Us, Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Pediatric Kidney Foundation</h2>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Office Address</h3>
                  <p className="text-sm text-white/90 leading-relaxed mt-1">
                    Pediatric Kidney Foundation<br />
                    E-11, South Extension-1,<br />
                    New Delhi-110049
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Phone</h3>
                  <p className="text-sm text-white/90 mt-1">+91 (011) 4567-8901</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Email</h3>
                  <p className="text-sm text-white/90 mt-1">contact@pkf-india.org</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="text-teal w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Office Hours</h3>
                  <p className="text-sm text-white/90 mt-1">
                    Monday – Friday: 9:00 AM – 5:30 PM (IST)<br />
                    Saturday: 9:30 AM – 1:30 PM (IST)
                  </p>
                </div>
              </div>

              {/* Follow Us */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all"
                  >
                    f
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all"
                  >
                    ig
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal" /> Google Map
              </h3>
              <div className="p-6 bg-off-white rounded-2xl border border-gray-200 text-center">
                <p className="font-bold text-navy text-sm">Pediatric Kidney Foundation</p>
                <p className="text-xs text-gray-500 mt-1">E-11, South Extension-1, New Delhi-110049</p>
                <a
                  href="https://maps.google.com/?q=South+Extension-1+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 bg-teal text-white text-xs font-bold px-4 py-2 rounded-xl hover:brightness-110 transition-all"
                >
                  Open in Google Map <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xs">
            <h2 className="text-2xl font-bold text-navy mb-2">Contact Form</h2>
            <p className="text-xs text-gray-500 mb-6">
              Please submit your details and our team will get in touch with you.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                  Thank you for contacting the Pediatric Kidney Foundation. Our team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-navy text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-teal transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Inquiry Reason *
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                  >
                    <option value="Get Help for Your Child">Get Help for Your Child</option>
                    <option value="Find a Pediatric Nephrologist">Find a Pediatric Nephrologist</option>
                    <option value="Parent Support Groups">Parent Support Groups</option>
                    <option value="Donate">Donate</option>
                    <option value="Partner With Us">Partner With Us</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Phone number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we assist you or your child?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-coral hover:brightness-110 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
