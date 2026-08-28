/**
 * Server-to-server fetch wrapper for calls to the Decoded Ops Hub API.
 *
 * Cloudflare's bot protection in front of hub.decodedops.co.uk intercepts
 * requests that don't look like they came from a browser (Node's default
 * fetch sends no User-Agent) and returns an HTML challenge page instead of
 * the real response. Every server-side call to the hub needs this header
 * or it silently gets a "Just a moment..." page instead of JSON.
 *
 * Found 2026-08-28: the David Sharp questionnaire feature's document list
 * came back empty in production despite the hub API returning correct data
 * when called externally (e.g. via curl) — the only difference was this
 * missing header.
 */
export function hubFetch(input: string, init: RequestInit = {}): Promise<Response> {
  return fetch(input, {
    ...init,
    headers: {
      'User-Agent': 'DecodedOpsSite/1.0 (+https://decodedops.co.uk)',
      ...init.headers,
    },
  });
}
