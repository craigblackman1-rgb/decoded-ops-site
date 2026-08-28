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

export function QuestionnaireForm({ docNumber }: QuestionnaireFormProps) {
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

  if (loading) {
    return (
      <div style={{ padding: "0 24px 16px" }}>
        <div
          style={{
            padding: "10px 16px",
            fontSize: 13,
            color: "#5a7d8f",
          }}
        >
          Loading questionnaire…
        </div>
      </div>
    );
  }

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
          <span>Your answers have been saved.</span>
        </div>
      </div>
    );
  }

  const sections = questions.reduce<Record<string, Question[]>>((acc, q) => {
    (acc[q.section] ??= []).push(q);
    return acc;
  }, {});

  return (
    <div style={{ padding: "0 24px 16px" }}>
      <div
        style={{
          border: "1px solid #d4e8f0",
          borderRadius: 12,
          background: "#fff",
          padding: "20px 24px",
        }}
      >
        {Object.entries(sections).map(([section, qs]) => (
          <div key={section} style={{ marginBottom: 24 }}>
            <h3
              style={{
                fontFamily: "'Outfit', Arial, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: "#023047",
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: "1px solid #d4e8f0",
              }}
            >
              {section}
            </h3>
            {qs.map((q) => (
              <div key={q.id} style={{ marginBottom: 16 }}>
                <label
                  htmlFor={`q-${q.id}`}
                  style={{
                    display: "block",
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#023047",
                    marginBottom: 2,
                  }}
                >
                  {q.label}
                </label>
                {q.hint && (
                  <p
                    style={{
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "#5a7d8f",
                      margin: "0 0 6px",
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
                    padding: "8px 12px",
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: 13,
                    color: "#023047",
                    background: "#fff",
                    border: "1px solid rgba(142,202,230,.3)",
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
            {submitting ? "Saving\u2026" : "Save answers"}
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
