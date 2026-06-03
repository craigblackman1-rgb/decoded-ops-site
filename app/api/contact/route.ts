import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactRatelimit } from '@/lib/rate-limit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
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
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sanitizedMessage = message.replace(/<[^>]*>/g, '').slice(0, 5000);
    const sanitizedName = name.replace(/<[^>]*>/g, '').slice(0, 200);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ionos.co.uk',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${sanitizedName}" <${process.env.SMTP_FROM || 'noreply@decodedops.co.uk'}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL || 'craig@decodedops.co.uk',
      subject: `New proposal acceptance — ${sanitizedName}`,
      text: sanitizedMessage,
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
