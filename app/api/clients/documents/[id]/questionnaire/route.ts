import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { hubFetch } from "@/lib/hub-fetch";

async function requireSession() {
  const session = await auth();
  if (!session?.user) return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }), session: null };
  const clientId = (session.user as { clientId?: string }).clientId;
  if (!clientId) return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }), session: null };
  return { session: { clientId }, error: null };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { session, error } = await requireSession();
  if (error) return error;

  const { id } = await params;
  const docNumber = decodeURIComponent(id);

  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) {
    return NextResponse.json({ error: "Hub not configured" }, { status: 500 });
  }

  try {
    const res = await hubFetch(
      `${hubUrl}/api/public/client-docs/${encodeURIComponent(docNumber)}/questionnaire?clientId=${encodeURIComponent(session!.clientId)}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Hub fetch failed" }));
      return NextResponse.json(
        { error: err.error || `Hub returned ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to reach hub" },
      { status: 502 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { session, error } = await requireSession();
  if (error) return error;

  const { id } = await params;
  const docNumber = decodeURIComponent(id);

  const body = await request.json();
  const { answers } = body;

  if (!Array.isArray(answers)) {
    return NextResponse.json(
      { error: "answers array is required" },
      { status: 400 }
    );
  }

  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) {
    return NextResponse.json({ error: "Hub not configured" }, { status: 500 });
  }

  try {
    const res = await hubFetch(
      `${hubUrl}/api/public/client-docs/${encodeURIComponent(docNumber)}/questionnaire`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientId: session!.clientId, answers }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Hub save failed" }));
      return NextResponse.json(
        { error: err.error || `Hub returned ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Failed to reach hub" },
      { status: 502 }
    );
  }
}
