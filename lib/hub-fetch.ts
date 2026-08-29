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
 *
 * It also attaches the shared secret (`x-hub-key`) that the hub's public API
 * requires. The hub gates /api/public/* on this header so client documents,
 * quotes, contracts and invoices can no longer be read by anyone who guesses
 * a clientId. This is SERVER-ONLY: HUB_PUBLIC_API_KEY is never exposed to the
 * browser (no NEXT_PUBLIC_ prefix), so hubFetch must only be called from
 * server components, route handlers, or server actions — never client code.
 */
export function hubFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const key = process.env.HUB_PUBLIC_API_KEY;
  return fetch(input, {
    ...init,
    headers: {
      'User-Agent': 'DecodedOpsSite/1.0 (+https://decodedops.co.uk)',
      ...(key ? { 'x-hub-key': key } : {}),
      ...init.headers,
    },
  });
}
