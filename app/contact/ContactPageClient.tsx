'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, AlertCircle, Loader2, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { foundationData } from '@/content/foundation';

const INQUIRY_OPTIONS = [
  'Get Help for Your Child',
  'Find a Pediatric Nephrologist',
  'Parent Support Groups',
  'Donate',
  'Partner With Us',
  'Volunteer',
  'General Inquiry'
] as const;

const INQUIRY_MAP: Record<string, (typeof INQUIRY_OPTIONS)[number]> = {
  help: 'Get Help for Your Child',
  doctor: 'Find a Pediatric Nephrologist',
  evaluation: 'Find a Pediatric Nephrologist',
  support: 'Parent Support Groups',
  donate: 'Donate',
  partner: 'Partner With Us',
  volunteer: 'Volunteer',
  general: 'General Inquiry'
};

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Get Help for Your Child' as (typeof INQUIRY_OPTIONS)[number],
    message: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    const key = (searchParams.get('inquiry') || '').toLowerCase();
    const mapped = INQUIRY_MAP[key];
    if (!mapped) return;
    const id = setTimeout(() => {
      setFormState((s) => (s.inquiryType === mapped ? s : { ...s, inquiryType: mapped }));
    }, 0);
    return () => clearTimeout(id);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formState.message.trim().length < 10) {
      setError('Please provide a message with at least 10 characters.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unable to submit your inquiry.');
      setReferenceId(data.referenceId || '');
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', inquiryType: formState.inquiryType, message: '', website: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit your inquiry. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const { contact } = foundationData;
  const hasSocial = Object.values(contact.social).some(Boolean);

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">Get In Touch</span>
          <h1 className="text-4xl text-navy font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 leading-relaxed text-base">Pediatric Kidney Foundation is here to support children and families facing kidney diseases.</p>
        </div>

        <div className="bg-coral/10 border border-coral/20 rounded-2xl p-4 mb-8 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-coral shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700"><span className="font-bold text-navy">Medical emergency:</span> This form is not for urgent medical needs. If your child needs immediate care, contact your doctor or local emergency services right away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">{contact.name}</h2>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><MapPin className="text-teal w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Office Address</h3>
                  <p className="text-sm text-white/90 leading-relaxed mt-1">Pediatric Kidney Foundation<br />E-11, South Extension-1,<br />New Delhi-110049</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Phone className="text-teal w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Phone</h3>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-sm text-white/90 mt-1 hover:text-white underline-offset-2 hover:underline">{contact.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Mail className="text-teal w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Email</h3>
                  <a href={`mailto:${contact.email}`} className="text-sm text-white/90 mt-1 hover:text-white underline-offset-2 hover:underline break-all">{contact.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"><Clock className="text-teal w-5 h-5" /></div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-teal">Office Hours</h3>
                  <p className="text-sm text-white/90 mt-1">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-teal mb-3">Follow Us</h3>
                {hasSocial ? (
                  <div className="flex gap-3">
                    {contact.social.facebook && <a href={contact.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all" aria-label="Facebook">f</a>}
                    {contact.social.twitter && <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all" aria-label="Twitter / X">X</a>}
                    {contact.social.instagram && <a href={contact.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all" aria-label="Instagram">ig</a>}
                    {contact.social.linkedin && <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-xs font-bold hover:bg-teal hover:text-white transition-all" aria-label="LinkedIn">in</a>}
                  </div>
                ) : (
                  <p className="text-sm text-white/70">Official social profiles will be listed here once available.</p>
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-xs">
              <h3 className="font-bold text-navy text-sm uppercase tracking-wider mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-teal" /> Google Map</h3>
              <div className="p-6 bg-off-white rounded-2xl border border-gray-200 text-center">
                <p className="font-bold text-navy text-sm">{contact.name}</p>
                <p className="text-xs text-gray-500 mt-1">{contact.address}</p>
                <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 bg-teal text-white text-xs font-bold px-4 py-2 rounded-xl hover:brightness-110 transition-all">
                  Open in Google Map <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xs">
            <h2 className="text-2xl font-bold text-navy mb-2">Contact Form</h2>
            <p className="text-xs text-gray-500 mb-6">Please submit your details and our team will get in touch with you. We aim to respond within 2 business days.</p>

            {isSubmitted ? (
              <div className="py-12 text-center" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="w-8 h-8" /></div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Received</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mb-2">Thank you for contacting the Pediatric Kidney Foundation. Our team will reach out to you shortly.</p>
                {referenceId && <p className="text-xs text-gray-500 mb-6">Reference ID: <span className="font-semibold text-navy">{referenceId}</span></p>}
                <button type="button" onClick={() => { setIsSubmitted(false); setError(''); }} className="bg-navy text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-teal transition-colors cursor-pointer">Send Another Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">Inquiry Reason *</label>
                  <select id="inquiryType" value={formState.inquiryType} onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value as (typeof INQUIRY_OPTIONS)[number] })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white">
                    {INQUIRY_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">Full Name *</label>
                    <input id="name" type="text" required autoComplete="name" placeholder="Your name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">Phone Number *</label>
                    <input id="phone" type="tel" required autoComplete="tel" placeholder="+91 Phone number" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">Email Address *</label>
                  <input id="email" type="email" required autoComplete="email" placeholder="email@example.com" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">Message *</label>
                  <textarea id="message" required rows={4} placeholder="How can we assist you or your child?" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal bg-warm-white" />
                </div>
                <input type="text" tabIndex={-1} autoComplete="off" value={formState.website} onChange={(e) => setFormState({ ...formState, website: e.target.value })} className="hidden" aria-hidden="true" />
                {error && <p className="text-sm text-coral flex items-center gap-2" role="alert"><AlertCircle className="w-4 h-4" />{error}</p>}
                <p className="text-[11px] text-gray-500">By submitting, you agree to our <Link href="/privacy" className="text-teal hover:underline">Privacy Policy</Link>. We only use your information to respond to your inquiry.</p>
                <button type="submit" disabled={isSubmitting} className="w-full bg-coral hover:brightness-110 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <><Send className="w-4 h-4" /> Submit Inquiry</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
