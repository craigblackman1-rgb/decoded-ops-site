import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { hubFetch } from '@/lib/hub-fetch';

interface SessionUser {
  clientId?: string;
}

/**
 * Server-side proxy for client file uploads to the hub.
 *
 * The browser (ProjectView) cannot hold the hub shared secret and must never
 * be trusted to supply its own clientId. Here the clientId is taken from the
 * authenticated session — not from a request parameter — which closes both the
 * internet exposure (hubFetch attaches x-hub-key) and any client-id tampering
 * (a logged-in client can only ever upload against their own account).
 */
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const clientId = (session.user as SessionUser).clientId;
  if (!clientId) {
    return NextResponse.json({ error: 'No client associated with session' }, { status: 403 });
  }

  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) {
    return NextResponse.json({ error: 'Hub not configured' }, { status: 503 });
  }

  const { searchParams } = req.nextUrl;
  const projectId = searchParams.get('projectId') || '';
  const taskId = searchParams.get('taskId') || '';

  // Pass the multipart body straight through; do not set Content-Type so fetch
  // regenerates the correct multipart boundary for the forwarded request.
  const body = await req.formData();

  const target =
    `${hubUrl}/api/public/client-uploads` +
    `?clientId=${encodeURIComponent(clientId)}` +
    `&projectId=${encodeURIComponent(projectId)}` +
    `&taskId=${encodeURIComponent(taskId)}`;

  const res = await hubFetch(target, { method: 'POST', body });
  const text = await res.text();

  return new NextResponse(text, {
    status: res.status,
    headers: { 'Content-Type': res.headers.get('content-type') || 'application/json' },
  });
}
