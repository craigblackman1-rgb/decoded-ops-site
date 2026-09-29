import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getEmailStatus } from '@/lib/email';
import { toolCaptureRatelimit } from '@/lib/rate-limit';
import { hubFetch } from '@/lib/hub-fetch';

const ALLOWED_ORIGINS = [
  'https://decodedops.co.uk',
  'https://www.decodedops.co.uk',
  ...(process.env.NODE_ENV === 'development' ? ['http://localhost:8765', 'http://localhost:3000'] : []),
];

const VALID_TOOLS = [
  'automation-roi-calculator',
  'downtime-cost-calculator',
  'ops-health-score',
  'rto-calculator',
  'should-i-replace-erp',
] as const;

const VALID_RESOURCES = ['sop-template'] as const;

type ToolSlug = (typeof VALID_TOOLS)[number];
type ResourceSlug = (typeof VALID_RESOURCES)[number];

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

    if (!tool || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof tool !== 'string' || typeof name !== 'string' || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    if (company !== undefined && typeof company !== 'string') {
      return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
    }

    const isResource = (VALID_RESOURCES as readonly string[]).includes(tool);
    const isTool = (VALID_TOOLS as readonly string[]).includes(tool);

    if (!isResource && !isTool) {
      return NextResponse.json({ error: 'Invalid tool.' }, { status: 400 });
    }

    if (isResource) {
      // Resources: resultSummary and answers are optional
      if (resultSummary !== undefined && typeof resultSummary !== 'string') {
        return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
      }
      if (answers !== undefined && (typeof answers !== 'object' || answers === null || Array.isArray(answers))) {
        return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
      }
    } else {
      // Tools: resultSummary and answers are required
      if (!resultSummary || !answers) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
      if (typeof resultSummary !== 'string') {
        return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
      }
      if (typeof answers !== 'object' || answers === null || Array.isArray(answers)) {
        return NextResponse.json({ error: 'Invalid input format.' }, { status: 400 });
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const sanitizedName = name.replace(/<[^>]*>/g, '').slice(0, 200);
    const sanitizedEmail = email.replace(/<[^>]*>/g, '').slice(0, 320);
    const sanitizedCompany = company ? company.replace(/<[^>]*>/g, '').slice(0, 200) : undefined;

    const sanitizedSummary = isResource
      ? `Requested resource: ${tool}`
      : (resultSummary as string).replace(/<[^>]*>/g, '').slice(0, 500);
    const safeAnswers = isResource ? {} : (answers as Record<string, unknown>);

    const hubUrl = process.env.HUB_API_URL;
    const hubKey = process.env.HUB_PUBLIC_API_KEY;
    if (!hubUrl || !hubKey) {
      return NextResponse.json({ error: 'Tool lead capture not configured' }, { status: 500 });
    }

    const payload: Record<string, unknown> = {
      tool: tool as ToolSlug | ResourceSlug,
      name: sanitizedName,
      email: sanitizedEmail,
      resultSummary: sanitizedSummary,
      answers: safeAnswers,
    };
    if (sanitizedCompany) {
      payload.company = sanitizedCompany;
    }
    if (isResource) {
      payload.optin = 'ops-briefing';
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

    if (isResource) {
      // Resource download email to the requester
      const firstName = sanitizedName.split(' ')[0] || sanitizedName;
      const resourceSubject = 'Your SOP template from Decoded Ops';
      const resourceText = [
        `Hi ${firstName},`,
        ``,
        `Here is the SOP template: https://decodedops.co.uk/downloads/decoded-ops-sop-template.docx`,
        ``,
        `Start with the process that would hurt most if the person who does it was off.`,
        ``,
        `Craig`,
        ``,
        `---`,
        `You are receiving this because you requested the SOP template from decodedops.co.uk.`,
        `Reply to this email if you have questions, or unsubscribe at any time.`,
      ].join('\n');
      const resourceHtml = [
        `<p>Hi ${firstName},</p>`,
        `<p>Here is the SOP template: <a href="https://decodedops.co.uk/downloads/decoded-ops-sop-template.docx">download the .docx</a>.</p>`,
        `<p>Start with the process that would hurt most if the person who does it was off.</p>`,
        `<p>Craig</p>`,
        `<p style="margin-top:24px;font-size:13px;color:#666">You are receiving this because you requested the SOP template from decodedops.co.uk.<br>Reply to this email if you have questions, or unsubscribe at any time.</p>`,
      ].join('\n');

      try {
        const emailStatus = getEmailStatus();
        if (emailStatus.configured) {
          await sendEmail({
            to: sanitizedEmail,
            subject: resourceSubject,
            html: resourceHtml,
            text: resourceText,
          });
        }
      } catch (emailError) {
        console.error('[tools/capture] resource email failed', emailError);
      }

      return NextResponse.json({ ok: true });
    }

    // Tool lead alert email to Craig
    const toolNames: Record<string, string> = {
      'ops-health-score': 'Ops Health Score',
      'downtime-cost-calculator': 'Downtime Cost Calculator',
      'rto-calculator': 'RTO Calculator',
      'should-i-replace-erp': 'Should I Replace My ERP',
      'automation-roi-calculator': 'Automation ROI Calculator',
    };
    const readableTool = toolNames[tool] || tool;

    const answerLines = Object.entries(safeAnswers)
      .map(([key, value]) => {
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (s) => s.toUpperCase());
        return `${label}: ${String(value)}`;
      })
      .join('\n');

    const recipient = process.env.LEAD_ALERT_EMAIL || process.env.CONTACT_EMAIL || 'craig@decodedops.co.uk';
    const subject = `New lead — ${readableTool} — ${sanitizedName}`;
    const textBody = [
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
      `View in CRM: ${process.env.HUB_API_URL}/admin/leads`,
    ].join('\n');

    const htmlBody = [
      `<h2>New lead from the ${readableTool} tool</h2>`,
      `<table style="border-collapse:collapse;margin:16px 0">`,
      `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Name</td><td style="padding:4px 0">${sanitizedName}</td></tr>`,
      `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Email</td><td style="padding:4px 0"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td></tr>`,
      `<tr><td style="padding:4px 12px 4px 0;font-weight:600">Company</td><td style="padding:4px 0">${sanitizedCompany || 'not given'}</td></tr>`,
      `</table>`,
      `<h3>Result</h3>`,
      `<p style="white-space:pre-wrap">${sanitizedSummary}</p>`,
      `<h3>Answers</h3>`,
      `<ul style="list-style:none;padding:0;margin:0">`,
      ...Object.entries(safeAnswers).map(([key, value]) => {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
        return `<li style="padding:2px 0"><strong>${label}:</strong> ${String(value)}</li>`;
      }),
      `</ul>`,
      `<p style="margin-top:16px"><a href="${process.env.HUB_API_URL}/admin/leads">View in CRM</a></p>`,
    ].join('\n');

    try {
      const emailStatus = getEmailStatus();
      if (!emailStatus.configured) {
        console.warn('[tools/capture] no email backend configured — lead alert skipped');
      } else {
        await sendEmail({
          to: recipient,
          subject,
          html: htmlBody,
          text: textBody,
          replyTo: sanitizedEmail,
        });
      }
    } catch (emailError) {
      console.error('[tools/capture] lead alert failed', emailError);
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
