import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const docNumber = decodeURIComponent(id);

  const body = await request.json();
  const { name, signature, date } = body;

  if (!name?.trim() || !signature?.trim()) {
    return NextResponse.json(
      { error: "Name and signature are required" },
      { status: 400 }
    );
  }

  const hubUrl = process.env.HUB_API_URL;
  if (!hubUrl) {
    return NextResponse.json(
      { error: "Hub not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `${hubUrl}/api/public/client-docs/${encodeURIComponent(docNumber)}/sign`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, signature, date }),
      }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: "Hub sign failed" }));
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
