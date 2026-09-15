export type ProblemVideo = {
  youtubeId: string;
  title: string;
  closeLine: string;
  app: 'Decoded Works' | 'Decoded Proof';
  durationSec: number;
  uploadDate: string;
  playlistUrl: string;
};

export const problemVideos: Record<string, ProblemVideo> = {
  // Filled by u30 once Craig has uploaded. Shape mirrors hub content_items.data on the linkedin_video row.
  // 'systems-dont-talk': {
  //   youtubeId: '…',
  //   title: 'How Do I Know Which Suppliers Actually Updated Today?',
  //   closeLine: '…',
  //   app: 'Decoded Works',
  //   durationSec: 72,
  //   uploadDate: '2026-09-…',
  //   playlistUrl: 'https://www.youtube.com/playlist?list=…',
  // },
};
