'use client';

import { useState, useCallback } from 'react';

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  closeLine: string;
  app: 'Decoded Works' | 'Decoded Proof';
  durationSec: number;
  playlistUrl: string;
}

function formatDuration(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function VideoEmbed({ youtubeId, title, closeLine, app, durationSec, playlistUrl }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const posterSrc = imgError
    ? `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;

  const handlePlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  }, [handlePlay]);

  return (
    <div className="vid">
      <span className="eyebrow">One fix, one screen</span>
      <h2>{title}</h2>
      <div className="vid-frame">
        <div className="vid-chrome">
          <div className="vid-dots"><i /><i /><i /></div>
          <div className="vid-app">{app}</div>
          <span className="vid-len">{formatDuration(durationSec)}</span>
        </div>
        {playing ? (
          <div className="vid-embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1`}
              title={title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            className="vid-poster"
            type="button"
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
            aria-label={`Play: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterSrc}
              alt=""
              className="vid-poster-img"
              onError={() => setImgError(true)}
              loading="lazy"
            />
            <span className="vid-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <p className="vid-close">{closeLine}</p>
      <div className="vid-cta">
        <a className="btn btn--primary" href="/contact">Book a discovery call</a>
        <a
          className="yt"
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the series on YouTube ↗
        </a>
      </div>
      {app === 'Decoded Proof' && (
        <p className="vid-pre">Decoded Proof is pre-release. Founding-client terms apply.</p>
      )}
    </div>
  );
}
