'use client';

import { useState, FormEvent } from 'react';
import { Download, Check, AlertCircle } from 'lucide-react';
import s from './DownloadOptIn.module.css';

interface DownloadOptInProps {
  resource: string;
  title: string;
  meta: string;
  fileHref: string;
  fileLabel?: string;
  coverTitle?: string;
  buttonLabel?: string;
  thing?: string;
  compact?: boolean;
}

export function DownloadOptIn({
  resource,
  title,
  meta,
  fileHref,
  fileLabel = '.docx',
  coverTitle = 'SOP template for decorated goods businesses',
  buttonLabel = 'Download the template',
  thing = 'the template',
  compact = false,
}: DownloadOptInProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setEmailInvalid(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailInvalid(true);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/tools/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tool: resource,
          name,
          email,
          company: company || undefined,
          resultSummary: `Requested resource: ${resource}`,
          answers: {},
          _honey: honey,
        }),
      });

      if (!res.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (compact) {
    return (
      <section className={`${s.mini} g-off`}>
        <div className="wrap">
          <div className={s.miniRow}>
            <p><b>{title}</b> <span>&middot; Word document, 11 pages, free, no email needed</span></p>
            <a
              className={`btn btn--outline ${s.dlBtn}`}
              href={fileHref}
              download
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--do-font-body)' }}
            >
              <Download size={18} />
              {buttonLabel} ({fileLabel})
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${s.band} g-off`} id="sop-download">
      <div className="wrap">
        <div className={s.card}>
          {/* Left column — the file */}
          <div className={s.file}>
            <figure className={s.doc} aria-hidden="true">
              <div className={s.formPage}>
                <div className={s.field}><span className={s.fieldLine} /><span className={s.fieldLineShort} /></div>
                <div className={s.field}><span className={s.fieldLineShort} /></div>
                <div className={s.field}><span className={s.fieldLine} /><span className={s.fieldLine} /><span className={s.fieldLineShort} /></div>
                <div className={s.field}><span className={s.fieldLine} /><span className={s.fieldLine} /><span className={s.fieldLine} /><span className={s.fieldLineShort} /></div>
                <div className={s.field}><span className={s.fieldLineShort} /></div>
              </div>
              <div className={s.cover}>
                <span className={s.wm}>Decoded<span>Ops</span></span>
                <b className={s.coverTitle}>{coverTitle}</b>
              </div>
              <figcaption className={s.stamp}>{fileLabel} &middot; free</figcaption>
            </figure>
            <div className={s.copy}>
              <span className="dl-ey">Free download</span>
              <h2>{title}</h2>
              <p className={s.meta}><b>{meta}</b></p>
              <a
                className={`btn btn--primary ${s.dlBtn}`}
                href={fileHref}
                download
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--do-font-body)' }}
              >
                <Download size={18} />
                {buttonLabel} ({fileLabel})
              </a>
              <p className={s.note}>No email needed.</p>
            </div>
          </div>

          {/* Right column — opt-in form */}
          <div className={s.opt}>
            {status === 'success' ? (
              <div className={`${s.msg} ${s.msgOk}`} role="status">
                <Check size={18} />
                <p>Sent. Check your inbox (and spam, just in case).</p>
              </div>
            ) : (
              <>
                <h3>Prefer it in your inbox?</h3>
                <p>I&apos;ll send {thing} and the occasional Ops Briefing: practical notes on running a decoration business. Unsubscribe any time.</p>
                <form onSubmit={handleSubmit} noValidate>
                  <label className={s.field2}>
                    <span className={s.field2Label}>Name</span>
                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={s.field2Input}
                      placeholder="Your name"
                    />
                  </label>
                  <label className={s.field2}>
                    <span className={s.field2Label}>Email</span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      aria-describedby="optin-email-hint"
                      aria-invalid={emailInvalid || undefined}
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailInvalid(false); }}
                      className={`${s.field2Input} ${emailInvalid ? s.field2InputInvalid : ''}`}
                      placeholder="you@company.com"
                    />
                    <em className={s.hint} id="optin-email-hint">That needs to be an email address.</em>
                  </label>
                  <label className={s.field2}>
                    <span className={s.field2Label}>Company <em className={s.field2LabelOptional}>(optional)</em></span>
                    <input
                      type="text"
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className={s.field2Input}
                      placeholder="Your company (optional)"
                    />
                  </label>

                  {/* Honeypot */}
                  <div className="absolute opacity-0 w-0 h-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor={`dl-honey-${resource}`}>Leave this empty</label>
                    <input
                      id={`dl-honey-${resource}`}
                      type="text"
                      value={honey}
                      onChange={(e) => setHoney(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === 'error' && (
                    <div className={`${s.msg} ${s.msgErr}`}>
                      <AlertCircle size={18} />
                      <p>That didn&apos;t go through. You can still download it above.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn--outline"
                    style={{ width: '100%', marginTop: 4, fontFamily: 'var(--do-font-body)', cursor: 'pointer' }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Email it to me'}
                  </button>
                </form>
                <p className={s.privacy}>
                  Your details are used only to send this and the Ops Briefing. See the{' '}
                  <a href="/privacy">privacy notice</a>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
