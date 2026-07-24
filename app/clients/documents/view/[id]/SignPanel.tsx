"use client";

import { useState } from "react";

interface SignPanelProps {
  docNumber: string;
  clientName?: string;
}

function CheckIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22c55e"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SignPanel({ docNumber, clientName }: SignPanelProps) {
  const [name, setName] = useState(clientName ?? "");
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
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
    if (!signature.trim()) {
      setError("Please type your name as your signature.");
      return;
    }
    if (!agreed) {
      setError("Please confirm you have read and agree to this document.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/clients/documents/${encodeURIComponent(docNumber)}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), signature: signature.trim(), date }),
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
      <div
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "32px 24px",
            border: "1px solid #d4e8f0",
            borderRadius: 12,
            background: "#fff",
          }}
        >
          <div style={{ marginBottom: 12 }}>
            <CheckIcon />
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', Arial, sans-serif",
              fontSize: 18,
              fontWeight: 600,
              color: "#023047",
              margin: "0 0 8px",
            }}
          >
            Signed — thank you
          </h2>
          <p style={{ fontSize: 14, color: "#5a7d8f", margin: 0 }}>
            Your signature has been recorded.
          </p>
        </div>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    fontSize: 14,
    fontFamily: "'DM Sans', Arial, sans-serif",
    color: "#023047",
    background: "#fff",
    border: "1px solid rgba(142,202,230,.3)",
    borderRadius: 8,
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 500,
    color: "#3e6274",
    marginBottom: 6,
  };

  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      <div
        style={{
          border: "1px solid #d4e8f0",
          borderRadius: 12,
          background: "#fff",
          padding: "24px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Outfit', Arial, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#023047",
            margin: "0 0 4px",
          }}
        >
          Sign this document
        </h2>
        <p style={{ fontSize: 13, color: "#5a7d8f", margin: "0 0 20px" }}>
          Please check your details below, then confirm you have read and agree to this document.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="doc-sign-name">
              Name
            </label>
            <input
              id="doc-sign-name"
              style={inputStyle}
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="doc-sign-date">
              Date
            </label>
            <input
              id="doc-sign-date"
              style={inputStyle}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="doc-sign-sig">
              Type your full name as your signature
            </label>
            <input
              id="doc-sign-sig"
              style={inputStyle}
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Type your full name"
            />
          </div>
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 20,
            fontSize: 13,
            color: "#023047",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            style={{ accentColor: "#219EBC" }}
          />
          <span>I confirm I have read and agree to this document.</span>
        </label>

        {error && (
          <div
            role="alert"
            style={{
              marginTop: 16,
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

        <div style={{ marginTop: 20 }}>
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            style={{
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'DM Sans', Arial, sans-serif",
              color: "#023047",
              background: submitting ? "#e5a903" : "#FFB703",
              border: "none",
              borderRadius: 6,
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Signing…" : "Sign & submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
