import { JsonLd } from './JsonLd';

interface VideoSchemaProps {
  name: string;
  description: string;
  youtubeId: string;
  uploadDate: string;
  durationSec: number;
}

function toISO8601Duration(sec: number): string {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  if (h > 0) return `PT${h}H${m}M${s}S`;
  return `PT${m}M${s}S`;
}

export function VideoSchema({ name, description, youtubeId, uploadDate, durationSec }: VideoSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl: `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
        uploadDate,
        duration: toISO8601Duration(durationSec),
        embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
        publisher: {
          '@type': 'Organization',
          name: 'Decoded Ops',
          url: 'https://decodedops.co.uk',
          logo: {
            '@type': 'ImageObject',
            url: 'https://decodedops.co.uk/logo.png',
            width: 512,
            height: 512,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Worthing',
            addressRegion: 'West Sussex',
            addressCountry: 'GB',
          },
        },
      },
    ],
  };

  return <JsonLd data={data} />;
}
