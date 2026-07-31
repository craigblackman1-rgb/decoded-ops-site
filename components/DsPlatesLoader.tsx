'use client';

import { useEffect } from 'react';

/**
 * ds-plates.js (design-system source, copied verbatim into
 * app/design-system/) is a plain, non-module browser script: it runs
 * `document.querySelectorAll('svg.pl')` at the top level with no
 * SSR/DOMContentLoaded guard, and injects plate frame markup into any
 * `<svg class="pl">` it finds.
 *
 * A static `import '../app/design-system/ds-plates.js'` from a Server
 * Component (app/layout.tsx) would be evaluated during server rendering
 * (Node has no `document`) and crash `next build`. Loading it via a
 * dynamic `import()` inside a client-only `useEffect` guarantees it only
 * ever executes in the browser, after the initial DOM (including any
 * `svg.pl` plates already on the page) has been committed.
 *
 * Do not edit ds-plates.js itself to add an SSR guard — per the DS repo's
 * own rules, that file is not to be forked/edited here; this loader is the
 * work-around.
 */
export function DsPlatesLoader() {
  useEffect(() => {
    // ds-plates.js has no import/export statements (it's a plain script,
    // not an ES module) so TypeScript's isolatedModules check refuses to
    // treat it as an importable module. It works fine at runtime — this
    // is purely a type-checker objection.
    // @ts-expect-error -- ds-plates.js is a non-module script by design, see comment above.
    import('@/app/design-system/ds-plates.js');
  }, []);

  return null;
}
