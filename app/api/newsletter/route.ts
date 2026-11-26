import { NextResponse } from 'next/server';

type NewsletterPayload = {
  email?: string;
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: NewsletterPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const email = (body.email || '').trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  console.info('[newsletter-subscribe]', { email, at: new Date().toISOString() });
  return NextResponse.json({ ok: true, message: 'Thank you for subscribing.' });
}
