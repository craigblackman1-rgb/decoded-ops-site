import { NextResponse } from 'next/server';

// Temporary diagnostic endpoint — remove after fixing document routing
// Hit: /api/debug/hub-status?clientId=tacklebag
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get('clientId') || 'tacklebag';

  const hubUrl = process.env.HUB_API_URL;

  const result: Record<string, unknown> = {
    HUB_API_URL: hubUrl ?? '⚠️ NOT SET',
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? '✓ set' : '⚠️ NOT SET',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? '⚠️ NOT SET',
    clientId,
  };

  if (!hubUrl) {
    return NextResponse.json({ ...result, status: 'error', reason: 'HUB_API_URL env var is missing' });
  }

  const targetUrl = `${hubUrl}/api/public/client-docs?clientId=${clientId}`;
  result.targetUrl = targetUrl;

  try {
    const res = await fetch(targetUrl, { cache: 'no-store', signal: AbortSignal.timeout(8000) });
    result.httpStatus = res.status;
    result.contentType = res.headers.get('content-type');

    const text = await res.text();
    result.rawBodyPreview = text.slice(0, 500);

    if (res.ok) {
      try {
        const json = JSON.parse(text);
        result.docCount = Array.isArray(json) ? json.length : '(not an array)';
        result.firstDoc = Array.isArray(json) && json.length > 0 ? json[0] : null;
        result.status = 'ok';
      } catch {
        result.status = 'error';
        result.reason = 'Hub responded 200 but body is not valid JSON';
      }
    } else {
      result.status = 'error';
      result.reason = `Hub returned HTTP ${res.status}`;
    }
  } catch (err: unknown) {
    result.status = 'error';
    result.reason = err instanceof Error ? err.message : String(err);
  }

  return NextResponse.json(result, { status: 200 });
}
