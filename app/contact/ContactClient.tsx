'use client';

import { ArrowRight, Mail, Phone, Clock, MessageSquare, CheckCircle, AlertCircle, Loader, Calendar } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from './actions';
import { BOOKING_URL } from '@/lib/constants';

export function ContactClient() {
  const [formState, setFormState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message?: string;
  }>({ status: 'idle' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: 'loading' });

    const result = await submitContactForm(formData);

    if (result.success) {
      if (typeof window !== 'undefined') {
        const w = window as { gtag?: (...args: unknown[]) => void };
        w.gtag?.('event', 'conversion', { send_to: 'G-SN2Z3J31CZ', event_category: 'contact', event_label: 'contact_form_submission' });
      }
      setFormState({
        status: 'success',
        message: result.message,
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } else {
      setFormState({
        status: 'error',
        message: result.error,
      });
    }
  };

  const inputClass = {
    width: '100%' as const,
    padding: '12px 16px',
    borderRadius: 'var(--do-radius-lg)',
    border: '1px solid var(--do-border-subtle)',
    background: 'var(--do-white)',
    color: 'var(--do-text-primary)',
    fontSize: 'var(--do-text-sm)',
    fontFamily: 'var(--do-font-body)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const inputDisabled = { ...inputClass, opacity: 0.5, cursor: 'not-allowed' };

  return (
    <>
      {/* HERO */}
      <section className="g-off">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 8vw, 64px)', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: 22 }}>— Get in touch</span>
              <h1 className="h1">Start with a free <em>60-minute call.</em></h1>
              <p className="lede">
                No sales pitch. No obligation. A direct conversation about your business, what&apos;s frustrating you, and whether there&apos;s something I can help with.
              </p>
              <div style={{ marginTop: 24, marginBottom: 24 }}>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ width: '100%' }}
                >
                  <Calendar size={16} />
                  Book a call directly <ArrowRight size={16} />
                </a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <a href="mailto:craig@decodedops.co.uk" style={{ display: 'flex', gap: 16, alignItems: 'center', textDecoration: 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-muted)', marginBottom: 2 }}>Email</div>
                    <div style={{ fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)' }}>craig@decodedops.co.uk</div>
                  </div>
                </a>
                <a href="tel:+447735620603" style={{ display: 'flex', gap: 16, alignItems: 'center', textDecoration: 'none' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 10%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-text-muted)', marginBottom: 2 }}>Phone</div>
                    <div style={{ fontWeight: 'var(--do-weight-semibold)', color: 'var(--do-text-primary)' }}>07735 620 603</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--do-white)', borderRadius: 'var(--do-radius-2xl)', border: '1px solid var(--do-border-subtle)', boxShadow: 'var(--do-shadow-sm)', padding: 32 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 'var(--do-radius-full)', background: 'color-mix(in srgb, var(--do-prussian-blue) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-prussian-blue) 20%, transparent)', marginBottom: 24 }}>
                <MessageSquare size={12} style={{ color: 'var(--do-text-primary)' }} />
                <span style={{ fontSize: 'var(--do-text-xs)', fontWeight: 'var(--do-weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--do-tracking-wider)', color: 'var(--do-text-primary)' }}>Send a message</span>
              </div>

              {formState.status === 'success' && (
                <div style={{ marginBottom: 24, padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'color-mix(in srgb, var(--do-status-success) 12%, transparent)', border: '1px solid color-mix(in srgb, var(--do-status-success) 20%, transparent)', display: 'flex', gap: 12 }}>
                  <CheckCircle size={20} style={{ color: 'var(--do-success-text)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-success-text)', marginBottom: 0 }}>{formState.message}</p>
                    <p style={{ fontSize: 'var(--do-text-xs)', color: 'var(--do-success-text)', marginTop: 4 }}>Check your email for confirmation.</p>
                  </div>
                </div>
              )}

              {formState.status === 'error' && (
                <div style={{ marginBottom: 24, padding: 16, borderRadius: 'var(--do-radius-lg)', background: 'color-mix(in srgb, var(--do-status-danger) 10%, transparent)', border: '1px solid color-mix(in srgb, var(--do-status-danger) 20%, transparent)', display: 'flex', gap: 12 }}>
                  <AlertCircle size={20} style={{ color: 'var(--do-danger-text)', flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-danger-text)', marginBottom: 0 }}>{formState.message}</p>
                </div>
              )}

              <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Your name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                      disabled={formState.status === 'loading'}
                      style={formState.status === 'loading' ? inputDisabled : inputClass}
                      onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                      onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Email address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@yourcompany.co.uk"
                      required
                      disabled={formState.status === 'loading'}
                      style={formState.status === 'loading' ? inputDisabled : inputClass}
                      onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                      onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>Your business</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="What you do, roughly how big you are"
                    required
                    disabled={formState.status === 'loading'}
                    style={formState.status === 'loading' ? inputDisabled : inputClass}
                    onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--do-text-sm)', fontWeight: 'var(--do-weight-medium)', color: 'var(--do-text-primary)', marginBottom: 6 }}>What&apos;s going on</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the situation — the system problems, the operational pain, the decision you're trying to make."
                    required
                    disabled={formState.status === 'loading'}
                    style={{
                      ...(formState.status === 'loading' ? inputDisabled : inputClass),
                      resize: 'none' as const,
                    }}
                    onFocus={(e) => { const s = e.target.style; s.borderColor = 'var(--do-cerulean)'; s.boxShadow = '0 0 0 3px color-mix(in srgb, var(--do-cerulean) 12%, transparent)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; e.target.style.boxShadow = ''; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="btn btn--primary"
                  style={{ width: '100%', opacity: formState.status === 'loading' ? 0.5 : 1, cursor: formState.status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {formState.status === 'loading' ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT — dark */}
      <section className="g-navy">
        <div className="wrap">
          <div style={{ maxWidth: '42ch', marginBottom: 64 }}>
            <span className="eyebrow" style={{ marginBottom: 22 }}>— What to expect</span>
            <h2 className="h2">How the first call works</h2>
            <p className="lede">No preparation needed. Just turn up and tell me what&apos;s happening.</p>
          </div>
          <div className="grid grid--3">
            {[
              { icon: Clock, title: '60 minutes', desc: "That's all it takes to get a clear view of what's happening and whether I can help. No extended discovery process, no homework to complete." },
              { icon: MessageSquare, title: 'Direct questions', desc: "I'll ask direct questions about your operation, your systems, and the things that are frustrating you. You'll get direct answers back — not a follow-up proposal." },
              { icon: ArrowRight, title: 'A clear next step', desc: "At the end of the call, you'll know whether an audit makes sense, what it would involve, and what it would cost. No pressure. You decide what happens next." },
            ].map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card">
                  <div style={{ width: 40, height: 40, borderRadius: 'var(--do-radius-xl)', background: 'color-mix(in srgb, var(--do-cerulean) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={20} style={{ color: 'var(--do-cerulean)' }} />
                  </div>
                  <h3 style={{ fontSize: 'var(--do-text-lg)', fontWeight: 'var(--do-weight-bold)', color: 'var(--do-text-on-dark)', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--do-text-sm)', color: 'var(--do-text-on-dark)', opacity: 0.72, lineHeight: 1.75, marginBottom: 0 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
