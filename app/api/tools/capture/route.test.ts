import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@/lib/email', () => ({
  sendEmail: vi.fn(),
  getEmailStatus: vi.fn(() => ({ configured: true, backend: 'resend', from: 'test@example.com' })),
}));

vi.mock('@/lib/hub-fetch', () => ({
  hubFetch: vi.fn(),
}));

vi.mock('@/lib/rate-limit', () => ({
  toolCaptureRatelimit: vi.fn(() => null),
}));

import { POST } from '@/app/api/tools/capture/route';
import { sendEmail, getEmailStatus } from '@/lib/email';
import { hubFetch } from '@/lib/hub-fetch';
import { NextRequest } from 'next/server';

function makeRequest(body: Record<string, unknown>, origin = 'https://decodedops.co.uk'): NextRequest {
  return new NextRequest('http://localhost/api/tools/capture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      origin,
    },
    body: JSON.stringify(body),
  });
}

const VALID_PAYLOAD = {
  tool: 'ops-health-score',
  name: 'Jane Smith',
  email: 'jane@example.com',
  company: 'Acme Ltd',
  resultSummary: 'Your score is 72/100',
  answers: { annualRevenue: '1000000', employeeCount: '25' },
};

describe('tool lead capture', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    delete process.env.LEAD_ALERT_EMAIL;
    delete process.env.CONTACT_EMAIL;
    process.env.HUB_API_URL = 'http://localhost:3001';
    process.env.HUB_PUBLIC_API_KEY = 'test-key';

    (hubFetch as ReturnType<typeof vi.fn>).mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: 'lead-123' }),
    });
  });

  it('calls sendEmail with correct recipient and subject', async () => {
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });

    const req = makeRequest(VALID_PAYLOAD);
    const res = await POST(req);

    expect(res.status).toBe(200);
    expect(sendEmail).toHaveBeenCalledTimes(1);

    const call = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call.to).toBe('craig@decodedops.co.uk');
    expect(call.subject).toContain('Ops Health Score');
    expect(call.subject).toContain('Jane Smith');
    expect(call.replyTo).toBe('jane@example.com');
    expect(call.text).toContain('New lead from the Ops Health Score tool');
    expect(call.html).toContain('Ops Health Score');
  });

  it('uses LEAD_ALERT_EMAIL when set', async () => {
    process.env.LEAD_ALERT_EMAIL = 'alerts@example.com';
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });

    const req = makeRequest(VALID_PAYLOAD);
    const res = await POST(req);

    expect(res.status).toBe(200);
    const call = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call.to).toBe('alerts@example.com');
  });

  it('falls back to CONTACT_EMAIL when LEAD_ALERT_EMAIL is unset', async () => {
    process.env.CONTACT_EMAIL = 'contact@example.com';
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });

    const req = makeRequest(VALID_PAYLOAD);
    const res = await POST(req);

    expect(res.status).toBe(200);
    const call = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call.to).toBe('contact@example.com');
  });

  it('still returns 200 when sendEmail rejects', async () => {
    (sendEmail as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('SMTP timeout'));

    const req = makeRequest(VALID_PAYLOAD);
    const res = await POST(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
  });

  it('skips email and logs warning when no backend configured', async () => {
    (getEmailStatus as ReturnType<typeof vi.fn>).mockReturnValue({ configured: false, backend: 'none', from: '' });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    const req = makeRequest(VALID_PAYLOAD);
    const res = await POST(req);

    expect(res.status).toBe(200);
    expect(sendEmail).not.toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith('[tools/capture] no email backend configured — lead alert skipped');
    warnSpy.mockRestore();
  });

  it('accepts sop-template resource without resultSummary or answers', async () => {
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });
    (getEmailStatus as ReturnType<typeof vi.fn>).mockReturnValue({ configured: true, backend: 'resend', from: 'test@example.com' });

    const req = makeRequest({
      tool: 'sop-template',
      name: 'Alice Brown',
      email: 'alice@example.com',
    });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);

    // Hub payload should carry the resource source
    const hubCall = (hubFetch as ReturnType<typeof vi.fn>).mock.calls[0][1];
    const payload = JSON.parse(hubCall.body);
    expect(payload.tool).toBe('sop-template');
    expect(payload.resultSummary).toBe('Requested resource: sop-template');
    expect(payload.answers).toEqual({});
    expect(payload.optin).toBe('ops-briefing');

    // Email to the requester, not a lead alert to Craig
    expect(sendEmail).toHaveBeenCalledTimes(1);
    const emailCall = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(emailCall.to).toBe('alice@example.com');
    expect(emailCall.subject).toBe('Your SOP template from Decoded Ops');
    expect(emailCall.text).toContain('Hi Alice');
    expect(emailCall.text).toContain('decodedops.co.uk/downloads/decoded-ops-sop-template.docx');
  });

  it('rejects an unknown resource slug', async () => {
    const req = makeRequest({
      tool: 'fake-resource',
      name: 'Bob',
      email: 'bob@example.com',
    });
    const res = await POST(req);

    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toBe('Invalid tool.');
  });

  it('accepts audit-checklist resource and sends correct email', async () => {
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });
    (getEmailStatus as ReturnType<typeof vi.fn>).mockReturnValue({ configured: true, backend: 'resend', from: 'test@example.com' });

    const req = makeRequest({
      tool: 'audit-checklist',
      name: 'Carol Davis',
      email: 'carol@example.com',
    });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);

    const hubCall = (hubFetch as ReturnType<typeof vi.fn>).mock.calls[0][1];
    const payload = JSON.parse(hubCall.body);
    expect(payload.tool).toBe('audit-checklist');
    expect(payload.optin).toBe('ops-briefing');

    expect(sendEmail).toHaveBeenCalledTimes(1);
    const emailCall = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(emailCall.to).toBe('carol@example.com');
    expect(emailCall.subject).toBe('Your operations audit checklist from Decoded Ops');
    expect(emailCall.text).toContain('decodedops.co.uk/downloads/decoded-ops-audit-checklist.docx');
  });

  it('accepts erp-selection-playbook resource and sends correct email', async () => {
    (sendEmail as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true });
    (getEmailStatus as ReturnType<typeof vi.fn>).mockReturnValue({ configured: true, backend: 'resend', from: 'test@example.com' });

    const req = makeRequest({
      tool: 'erp-selection-playbook',
      name: 'Dave Wilson',
      email: 'dave@example.com',
    });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);

    const hubCall = (hubFetch as ReturnType<typeof vi.fn>).mock.calls[0][1];
    const payload = JSON.parse(hubCall.body);
    expect(payload.tool).toBe('erp-selection-playbook');
    expect(payload.optin).toBe('ops-briefing');

    expect(sendEmail).toHaveBeenCalledTimes(1);
    const emailCall = (sendEmail as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(emailCall.to).toBe('dave@example.com');
    expect(emailCall.subject).toBe('Your ERP selection playbook from Decoded Ops');
    expect(emailCall.text).toContain('decodedops.co.uk/downloads/decoded-ops-erp-selection-playbook.docx');
  });
});
