import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactRatelimit } from '@/lib/rate-limit';

const ALLOWED_ORIGINS = [
  'https://decodedops.co.uk',
  'https://www.decodedops.co.uk',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:8765', 'http://localhost:3000'] : []),
];

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin');
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: 'Invalid request origin.' }, { status: 403 });
    }

    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type.' }, { status: 415 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('cf-connecting-ip') || req.headers.get('x-real-ip') || 'unknown';

    const rateLimiter = contactRatelimit();
    if (rateLimiter) {
      const { success } = await rateLimiter.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many submissions. Please try again later.' },
          { status: 429 }
        );
      }
    }

    const body = await req.json();
    const { name, email, message, _honey } = body;

    if (_honey) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    if (name.length > 200 || email.length > 320 || message.length > 10000) {
      return NextResponse.json({ error: 'Input too long.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sanitizedMessage = message.replace(/<[^>]*>/g, '').replace(/[\r\n]{3,}/g, '\n\n').slice(0, 5000);
    const sanitizedName = name.replace(/<[^>]*>/g, '').slice(0, 200);
    const sanitizedEmail = email.replace(/<[^>]*>/g, '').slice(0, 320);

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json({ error: 'Contact form not configured' }, { status: 500 });
    }
    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json({ error: 'Contact form not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@decodedops.co.uk',
      replyTo: sanitizedEmail,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact form submission — ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
