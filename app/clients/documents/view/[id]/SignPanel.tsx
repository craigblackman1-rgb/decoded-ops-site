"use client";

import { useState } from "react";

interface SignPanelProps {
  docNumber: string;
  clientName?: string;
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22c55e"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SignPanel({ docNumber, clientName }: SignPanelProps) {
  const [name, setName] = useState(clientName ?? "");
  const [date] = useState(new Date().toISOString().slice(0, 10));
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async () => {
    setError(null);
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!agreed) {
      setError("Please confirm you have read and agree to this document.");
      return;
    }
    setSubmitting(true);
    try {
      const trimmed = name.trim();
      const res = await fetch(`/api/clients/documents/${encodeURIComponent(docNumber)}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmed, signature: trimmed, date }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to sign");
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div style={{ padding: "0 24px 16px" }}>
        <div
          style={{
            padding: "10px 16px",
            border: "1px solid #d4e8f0",
            borderRadius: 8,
            background: "#fff",
            fontSize: 13,
            color: "#023047",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <CheckIcon />
          <span>
            Signed by <strong>{name.trim()}</strong>
            {date && <> on {date}</>}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "0 24px 16px" }}>
      <div
        style={{
          border: "1px solid #d4e8f0",
          borderRadius: 12,
          background: "#fff",
          padding: "16px 20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        <div style={{ flex: 1, minWidth: 200 }}>
          <p
            style={{
              fontFamily: "'Outfit', Arial, sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#023047",
              marginBottom: 2,
            }}
          >
            Sign this document
          </p>
          <p style={{ fontSize: 12, color: "#5a7d8f", margin: 0 }}>
            Confirm you have read and agree to this document.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Type your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "8px 12px",
              fontFamily: "'DM Sans', Arial, sans-serif",
              fontSize: 13,
              color: "#023047",
              background: "#fff",
              border: "1px solid rgba(142,202,230,.3)",
              borderRadius: 8,
              outline: "none",
              width: 200,
            }}
          />

          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "#023047",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ accentColor: "#219EBC" }}
            />
            I agree
          </label>

          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            style={{
              padding: "8px 18px",
              fontFamily: "'DM Sans', Arial, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#023047",
              background: submitting ? "#e5a903" : "#FFB703",
              border: "none",
              borderRadius: 6,
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {submitting ? "Signing\u2026" : "Sign & submit"}
          </button>
        </div>
      </div>

      {error && (
        <div
          role="alert"
          style={{
            marginTop: 8,
            padding: "10px 14px",
            fontSize: 13,
            color: "#DC2626",
            background: "rgba(239,68,68,.06)",
            border: "1px solid rgba(239,68,68,.15)",
            borderRadius: 8,
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
