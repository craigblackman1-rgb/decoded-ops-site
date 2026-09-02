"use client";

import { useState, useEffect } from "react";

interface Question {
  id: string;
  section: string;
  label: string;
  hint?: string;
  lines?: number;
}

interface QuestionnaireFormProps {
  docNumber: string;
  title?: string;
}

const PRUSSIAN = "#023047";
const CERULEAN = "#219EBC";
const SKY = "#8ECAE6";
const AMBER = "#FFB703";
const OFFWHITE = "#F8F9FA";
const MUTED = "#5a7d8f";
const BORDER = "rgba(142,202,230,.4)";

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

export function QuestionnaireForm({ docNumber, title }: QuestionnaireFormProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `/api/clients/documents/${encodeURIComponent(docNumber)}/questionnaire`
        );
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `Failed to load questionnaire (${res.status})`);
        }
        const data = await res.json();
        setQuestions(data.questions ?? []);
        setAnswers(data.answers ?? {});
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load questionnaire");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [docNumber]);

  const save = async () => {
    setError(null);
    setSubmitting(true);
    try {
      const payload = Object.entries(answers).map(([questionId, answer]) => ({
        questionId,
        answer,
      }));
      const res = await fetch(
        `/api/clients/documents/${encodeURIComponent(docNumber)}/questionnaire`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: payload }),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save");
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const hero = (
    <div style={{ background: PRUSSIAN, padding: "2.5rem 24px 2rem" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-flex",
            padding: ".3rem .85rem",
            borderRadius: 9999,
            background: "rgba(255,183,3,0.15)",
            border: "1px solid rgba(255,183,3,0.3)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: AMBER,
            marginBottom: 12,
          }}
        >
          Discovery Questionnaire · {docNumber}
        </span>
        <h1
          style={{
            fontFamily: "'Outfit', Arial, sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: 0,
          }}
        >
          {title || "Before the Clarity Audit"}
        </h1>
        <p
          style={{
            maxWidth: "38rem",
            marginTop: 12,
            fontSize: 14,
            color: SKY,
            lineHeight: 1.6,
          }}
        >
          The more of this is filled in before the on-site audit, the more of those two days
          goes to production floor and platform detail rather than fact-finding. Answer what you
          can now — &ldquo;don&apos;t know yet&rdquo; or &ldquo;need to check with X&rdquo; are
          valid answers, and gaps get closed on-site.
        </p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div>
        {hero}
        <div style={{ padding: "2rem 24px", maxWidth: "52rem", margin: "0 auto" }}>
          <p style={{ fontSize: 13, color: MUTED }}>Loading questionnaire…</p>
        </div>
      </div>
    );
  }

  if (done) {
    return (
      <div>
        {hero}
        <div style={{ padding: "2rem 24px", maxWidth: "52rem", margin: "0 auto" }}>
          <div
            style={{
              padding: "10px 16px",
              border: `1px solid ${BORDER}`,
              borderRadius: 8,
              background: "#fff",
              fontSize: 13,
              color: PRUSSIAN,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <CheckIcon />
            <span>Your answers have been saved.</span>
          </div>
        </div>
      </div>
    );
  }

  const sections = questions.reduce<Record<string, Question[]>>((acc, q) => {
    (acc[q.section] ??= []).push(q);
    return acc;
  }, {});

  return (
    <div style={{ background: OFFWHITE }}>
      {hero}
      <div style={{ maxWidth: "52rem", margin: "0 auto", padding: "2rem 24px 4rem" }}>
        {Object.entries(sections).map(([section, qs]) => (
          <div
            key={section}
            style={{
              background: "#fff",
              border: `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: "1.75rem 2rem",
              marginBottom: "1.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', Arial, sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: PRUSSIAN,
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: CERULEAN,
                  color: "#fff",
                  fontFamily: "'Outfit', Arial, sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  flexShrink: 0,
                }}
              >
                {section}
              </span>
            </h2>
            {qs.map((q, i) => (
              <div
                key={q.id}
                style={{
                  marginBottom: i === qs.length - 1 ? 0 : 20,
                  paddingBottom: i === qs.length - 1 ? 0 : 20,
                  borderBottom: i === qs.length - 1 ? "none" : `1px dashed ${BORDER}`,
                }}
              >
                <label
                  htmlFor={`q-${q.id}`}
                  style={{
                    display: "block",
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    color: PRUSSIAN,
                    marginBottom: 4,
                  }}
                >
                  {q.label}
                </label>
                {q.hint && (
                  <p
                    style={{
                      fontSize: 12.5,
                      color: MUTED,
                      margin: "0 0 8px",
                      lineHeight: 1.5,
                    }}
                  >
                    {q.hint}
                  </p>
                )}
                <textarea
                  id={`q-${q.id}`}
                  rows={q.lines ?? 3}
                  value={answers[q.id] ?? ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: 13.5,
                    color: PRUSSIAN,
                    background: "rgba(142,202,230,0.06)",
                    border: `1.5px solid ${SKY}`,
                    borderRadius: 8,
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>
            ))}
          </div>
        ))}

        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={save}
            disabled={submitting}
            style={{
              padding: "10px 22px",
              fontFamily: "'Outfit', Arial, sans-serif",
              fontSize: 13.5,
              fontWeight: 600,
              color: PRUSSIAN,
              background: submitting ? "#e5a903" : AMBER,
              border: "none",
              borderRadius: 999,
              cursor: submitting ? "not-allowed" : "pointer",
              opacity: submitting ? 0.7 : 1,
              whiteSpace: "nowrap",
            }}
          >
            {submitting ? "Saving…" : "Save answers"}
          </button>
        </div>

        {error && (
          <div
            role="alert"
            style={{
              marginTop: 12,
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

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: 12,
            color: MUTED,
          }}
        >
          Decoded Ops · craig@decodedops.co.uk · 07735 620 603 · {docNumber} · Confidential
        </p>
      </div>
    </div>
  );
}
