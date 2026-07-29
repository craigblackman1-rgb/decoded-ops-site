/**
 * Reusable email send layer. Same shape as eternal-fitness-website's lib/email.ts.
 *
 * Two backends, auto-selected in priority order:
 *   1. Resend (preferred) — set RESEND_API_KEY.
 *   2. SMTP relay (fallback) — set SMTP_HOST / SMTP_USER / SMTP_PASS.
 * If neither is set, send() is a graceful dry run (nothing leaves the app).
 *
 * From address (all backends): MAIL_FROM or RESEND_FROM or SMTP_FROM,
 * accepting either "email@x.com" or "Name <email@x.com>".
 *
 * Env vars:
 *   RESEND_API_KEY — Resend API key (enables the Resend backend)
 *   MAIL_FROM      — From address, e.g. "Decoded Ops <noreply@decodedops.co.uk>"
 *   SMTP_HOST/PORT/USER/PASS/FROM — SMTP relay fallback
 */

export interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  /** true when no email backend is configured — nothing was actually sent */
  dryRun?: boolean;
}

type Backend = "resend" | "smtp" | "none";

function selectBackend(): Backend {
  if (process.env.RESEND_API_KEY) return "resend";
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) return "smtp";
  return "none";
}

const DEFAULT_FROM = "Decoded Ops <noreply@decodedops.co.uk>";

function getFromRaw(): string {
  return process.env.MAIL_FROM || process.env.RESEND_FROM || process.env.SMTP_FROM || DEFAULT_FROM;
}

// --- Resend ------------------------------------------------------------

async function sendResend(input: SendEmailInput): Promise<SendEmailResult> {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: getFromRaw(),
    to: input.to,
    subject: input.subject,
    html: input.html,
    text: input.text,
    replyTo: input.replyTo,
  });

  if (error) {
    console.error("[email:resend] send failed:", error);
    return { success: false, error: error.message || JSON.stringify(error) };
  }

  return { success: true, messageId: data?.id || "resend-accepted" };
}

// --- SMTP relay (fallback) -------------------------------------------------

async function sendSmtp(input: SendEmailInput): Promise<SendEmailResult> {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: (process.env.SMTP_PORT || "587") === "465",
    auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
  });

  try {
    const info = await transporter.sendMail({
      from: getFromRaw(),
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      replyTo: input.replyTo,
    });
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error("[email:smtp] send failed:", err);
    return { success: false, error: String(err) };
  }
}

export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const backend = selectBackend();
  if (backend === "resend") return sendResend(input);
  if (backend === "smtp") return sendSmtp(input);

  console.warn(`[email:dry-run] TO=${input.to} SUBJECT="${input.subject}" (no backend configured)`);
  return { success: true, messageId: "dry-run-no-email-backend", dryRun: true };
}

export function getEmailStatus(): { configured: boolean; backend: Backend; from: string } {
  const backend = selectBackend();
  return { configured: backend !== "none", backend, from: getFromRaw() };
}
