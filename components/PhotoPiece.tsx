'use client';

import { useEffect } from 'react';

interface PhotoPieceProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  no: string;
  rev?: string;
  eyebrow?: string;
  caption?: string;
  focus?: string;
  cls?: string;
}

declare global {
  interface Window {
    DO_ARTWORK?: Array<{ no: string; rev: string; title: string; page: string }>;
  }
}

export function PhotoPiece({
  src,
  width,
  height,
  alt,
  no,
  rev = '01',
  eyebrow = '',
  caption = '',
  focus = '50% 50%',
  cls = '',
}: PhotoPieceProps) {
  useEffect(() => {
    const register = (window.DO_ARTWORK = window.DO_ARTWORK || []);
    if (register.some((item) => item.no === no)) {
      console.warn('Artwork number issued twice on this page:', no);
    } else {
      register.push({
        no,
        rev,
        title: caption,
        page: typeof window !== 'undefined' ? window.location.pathname : '',
      });
    }
  }, [no, rev, caption]);

  return (
    <figure
      className={`art tx-photo ev-piece ${cls}`}
      data-tx="photo"
      data-artboard="ls"
      data-no={no}
      data-rev={rev}
      data-title={caption}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <img
        className="tx-photo__shot"
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: focus,
        }}
      />
      <div className="tx-photo__tint" style={{ opacity: 0.56 }} />
      <div className="tx-photo__scanline" />
      <div className="tx-photo__scrim-b" />
      <figcaption className="tx-photo__content" style={{ position: 'absolute', inset: 0, zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3.5cqw' }}>
        {eyebrow ? (
          <span style={{
            display: 'block',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            fontSize: 'var(--do-text-xs)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--do-sky-blue)',
            marginBottom: '0.5em',
          }}>{eyebrow}</span>
        ) : null}
        {caption ? (
          <span style={{
            display: 'block',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            lineHeight: 1.1,
            color: 'var(--do-off-white)',
            maxWidth: '18ch',
          }}>{caption}</span>
        ) : null}
      </figcaption>
      <div className="mark" style={{
        position: 'absolute',
        left: 14,
        bottom: 14,
        zIndex: 10,
        background: 'color-mix(in srgb, var(--do-prussian-blue) 82%, transparent)',
        color: 'var(--do-amber)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: '22px',
        letterSpacing: '.14em',
        padding: '7px 12px',
        borderRadius: '4px',
      }}>
        DECODEDOPS.CO.UK &middot; <b>{no}</b> &middot; REV {rev}
      </div>
    </figure>
  );
}
