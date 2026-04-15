'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company must be at least 2 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

type ContactFormInput = z.infer<typeof contactFormSchema>;

// Initialize transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function submitContactForm(formData: unknown) {
  try {
    // Validate input
    const validatedData = contactFormSchema.parse(formData);

    // Check environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration missing');
      return {
        success: false,
        error: 'Email service is not configured. Please try again later.',
      };
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'craig@decodedops.co.uk';
    const fromEmail = process.env.SMTP_FROM || 'noreply@decodedops.co.uk';

    // Send email to site owner
    await transporter.sendMail({
      from: fromEmail,
      to: contactEmail,
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023047; margin-bottom: 24px;">New Contact Form Submission</h2>

          <div style="background-color: #F8F9FA; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Name:</strong><br />
              ${escapeHtml(validatedData.name)}
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Email:</strong><br />
              <a href="mailto:${escapeHtml(validatedData.email)}">${escapeHtml(validatedData.email)}</a>
            </p>
            <p style="margin: 0 0 12px 0;">
              <strong style="color: #023047;">Company:</strong><br />
              ${escapeHtml(validatedData.company)}
            </p>
            <p style="margin: 0;">
              <strong style="color: #023047;">Message:</strong><br />
              ${escapeHtml(validatedData.message).replace(/\n/g, '<br />')}
            </p>
          </div>

          <p style="color: #8ECAE6; font-size: 12px; margin: 0;">
            Reply to this email to respond to the inquiry.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company}

Message:
${validatedData.message}

---
Reply to this email to respond to the inquiry.
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: fromEmail,
      to: validatedData.email,
      subject: 'We received your message — Decoded Ops',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #023047; margin-bottom: 16px;">Thanks for reaching out</h2>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 16px;">
            Hi ${escapeHtml(validatedData.name)},
          </p>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 16px;">
            We received your message and Craig will get back to you shortly. He typically responds within 24 hours.
          </p>

          <p style="color: #023047; line-height: 1.6; margin-bottom: 24px;">
            In the meantime, feel free to call on <a href="tel:+447735620603" style="color: #219EBC; text-decoration: none;">07735 620 603</a> if you'd like to discuss anything immediately.
          </p>

          <p style="color: #023047; line-height: 1.6;">
            Best regards,<br />
            <strong>Craig Blackman</strong><br />
            <em style="color: #8ECAE6;">Decoded Ops</em>
          </p>

          <hr style="border: none; border-top: 1px solid #8ECAE6; margin: 32px 0;" />

          <p style="color: #8ECAE6; font-size: 12px; margin: 0;">
            <strong>Decoded Ops</strong> — Systems Operations & Implementation<br />
            <a href="https://decodedops.co.uk" style="color: #219EBC; text-decoration: none;">decodedops.co.uk</a>
          </p>
        </div>
      `,
      text: `
Thanks for reaching out

Hi ${validatedData.name},

We received your message and Craig will get back to you shortly. He typically responds within 24 hours.

In the meantime, feel free to call on 07735 620 603 if you'd like to discuss anything immediately.

Best regards,
Craig Blackman
Decoded Ops

---
Decoded Ops — Systems Operations & Implementation
https://decodedops.co.uk
      `,
    });

    return {
      success: true,
      message: 'Message sent successfully! We\'ll be in touch shortly.',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      return {
        success: false,
        error: firstError?.message || 'Validation failed',
      };
    }

    console.error('Contact form error:', error);
    return {
      success: false,
      error: 'Something went wrong. Please try again later.',
    };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
