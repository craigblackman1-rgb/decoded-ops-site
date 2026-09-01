import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { toolCaptureRatelimit } from '@/lib/rate-limit';
import { hubFetch } from '@/lib/hub-fetch';

const ALLOWED_ORIGINS = [
  'https://decodedops.co.uk',
  'https://www.decodedops.co.uk',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:8765', 'http://localhost:3000'] : []),
];

const VALID_TOOLS = [
  'ai-readiness-check',
  'automation-roi-calculator',
  'downtime-cost-calculator',
  'ops-health-score',
  'rto-calculator',
  'should-i-replace-erp',
] as const;

type ToolSlug = (typeof VALID_TOOLS)[number];

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

    const rateLimiter = toolCaptureRatelimit();
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
    const { tool, name, email, company, resultSummary, answers, _honey } = body;

    if (_honey) {
      return NextResponse.json({ ok: true });
    }

    if (!tool || !name || !email || !resultSummary || !answers) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof tool !== 'string' || typeof name !== 'string' || typeof email !== 'string' || typeof resultSummary !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    if (company !== undefined && typeof company !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    if (typeof answers !== 'object' || answers === null || Array.isArray(answers)) {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    if (!(VALID_TOOLS as readonly string[]).includes(tool)) {
      return NextResponse.json({ error: 'Invalid tool.' }, { status: 400 });
    }

    if (name.length > 200 || email.length > 320 || resultSummary.length > 500) {
      return NextResponse.json({ error: 'Input too long.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sanitizedName = name.replace(/<[^>]*>/g, '').slice(0, 200);
    const sanitizedEmail = email.replace(/<[^>]*>/g, '').slice(0, 320);
    const sanitizedCompany = company ? company.replace(/<[^>]*>/g, '').slice(0, 200) : undefined;
    const sanitizedSummary = resultSummary.replace(/<[^>]*>/g, '').slice(0, 500);

    const hubUrl = process.env.HUB_API_URL;
    const hubKey = process.env.HUB_PUBLIC_API_KEY;
    if (!hubUrl || !hubKey) {
      return NextResponse.json({ error: 'Tool lead capture not configured' }, { status: 500 });
    }

    const payload: Record<string, unknown> = {
      tool: tool as ToolSlug,
      name: sanitizedName,
      email: sanitizedEmail,
      resultSummary: sanitizedSummary,
      answers,
    };
    if (sanitizedCompany) {
      payload.company = sanitizedCompany;
    }

    const hubResponse = await hubFetch(`${hubUrl}/api/public/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!hubResponse.ok) {
      console.error('Hub lead capture failed:', hubResponse.status);
      return NextResponse.json(
        { error: 'Failed to save your details. Please try again.' },
        { status: 502 }
      );
    }

    try {
      const toolNames: Record<string, string> = {
        'ops-health-score': 'Ops Health Score',
        'downtime-cost-calculator': 'Downtime Cost Calculator',
        'rto-calculator': 'RTO Calculator',
        'should-i-replace-erp': 'Should I Replace My ERP',
        'ai-readiness-check': 'AI Readiness Check',
        'automation-roi-calculator': 'Automation ROI Calculator',
      };
      const readableTool = toolNames[tool] || tool;

      const answerLines = Object.entries(answers)
        .map(([key, value]) => {
          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (s) => s.toUpperCase());
          return `${label}: ${String(value)}`;
        })
        .join('\n');

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
        subject: `New lead — ${readableTool} — ${sanitizedName}`,
        text: [
          `New lead from the ${readableTool} tool.`,
          ``,
          `Name: ${sanitizedName}`,
          `Email: ${sanitizedEmail}`,
          `Company: ${sanitizedCompany || 'not given'}`,
          ``,
          `Result:`,
          sanitizedSummary,
          ``,
          `Answers:`,
          answerLines,
          ``,
          `View in CRM: ${process.env.HUB_API_URL}/leads`,
        ].join('\n'),
      });
    } catch (emailError) {
      console.error('Lead alert email failed:', emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Tool lead capture error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
