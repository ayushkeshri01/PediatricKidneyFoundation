import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INQUIRIES = new Set([
  'Get Help for Your Child',
  'Find a Pediatric Nephrologist',
  'Parent Support Groups',
  'Donate',
  'Partner With Us',
  'Volunteer',
  'General Inquiry'
]);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const inquiryType = (body.inquiryType || '').trim();
  const message = (body.message || '').trim();

  if (!name || !email || !phone || !message || !inquiryType) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }
  if (!ALLOWED_INQUIRIES.has(inquiryType)) {
    return NextResponse.json({ error: 'Invalid inquiry type.' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json({ error: 'Message must be between 10 and 2000 characters.' }, { status: 400 });
  }

  const referenceId = `PKF-${Date.now().toString(36).toUpperCase()}`;
  console.info('[contact-inquiry]', { referenceId, name, email, phone, inquiryType, messageLength: message.length });

  return NextResponse.json({
    ok: true,
    referenceId,
    message: 'Inquiry received. Our team will contact you shortly.'
  });
}
