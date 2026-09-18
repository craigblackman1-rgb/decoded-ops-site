'use client';

import { useEffect } from 'react';
import styles from './PhotoPiece.module.css';

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
    <figure className={`${styles.evPiece} ${cls}`}>
      <div
        className="art tx-photo"
        data-tx="photo"
        data-artboard="ls"
        data-no={no}
        data-rev={rev}
        data-title={caption}
        style={{ '--ev-focus': focus } as React.CSSProperties}
      >
        <img
          className="tx-photo__shot"
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
        />
        <div className="tx-photo__tint" />
        <div className="tx-photo__scanline" />
        <div className="tx-photo__scrim-b" />
        <div className="tx-photo__content">
          <figcaption className={styles.evCap}>
            {eyebrow ? (
              <p className={styles.evEyebrow}>{eyebrow}</p>
            ) : null}
            {caption ? (
              <p className={styles.evLine}>{caption}</p>
            ) : null}
          </figcaption>
        </div>
        <div className="mark">
          DECODEDOPS.CO.UK &middot; <b>{no}</b> &middot; REV {rev}
        </div>
      </div>
    </figure>
  );
}
