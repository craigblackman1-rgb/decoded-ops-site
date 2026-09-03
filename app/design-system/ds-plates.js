/* ══════════════════════════════════════════════════════════════════════
   DECODED OPS — PLATE FRAME COMPONENT
   Extracted 31 Jul 2026 from artwork-plates.html. Pair with ds-plates.css.

   The frame is injected, never copied. It reads five data attributes and
   REFUSES to render without a drawing number — you cannot issue an
   unnumbered plate.

     <svg class="pl" data-tone="dark" data-p="ev" viewBox="0 0 1600 900"
          data-title="…" data-sub="…" data-no="DO-ART-902" data-rev="01"
          data-class="DECODED OPS · ISSUED"           <!-- optional -->
          role="img" aria-label="…">
       …content area, 1000 × 380 nominal, the only part that varies…
     </svg>

   Seven fixed elements, every drawing:
     1 amber spine tab (8 × 64)   2 title      3 subtitle
     4 drawing no. + revision     5 classification
     6 title block                7 corner ticks, four sides

   PL-03: this file writes no colour. Every gradient stop and pattern
   fill is a class defined in ds-plates.css.

   Authoring artboard is 1600 × 900 (the master). The four derived
   artboards are cut from it; the frame never changes, the content does.
   ══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* Public register — PL-08. Every plate that renders logs itself here,
     so plate-register.html can be checked against reality rather than
     maintained by hand. */
  var REGISTER = (window.DO_PLATES = window.DO_PLATES || []);

  function frame(id, m) {
    return ''
    + '<defs>'
    +   '<linearGradient id="' + id + '-ground" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-bg0"/><stop offset="1" class="p-bg1"/>'
    +   '</linearGradient>'
    +   '<pattern id="' + id + '-g20" width="20" height="20" patternUnits="userSpaceOnUse">'
    +     '<path d="M20 0 L0 0 0 20" fill="none" class="p-grid" stroke-width="0.35" opacity="0.10"/>'
    +   '</pattern>'
    +   '<pattern id="' + id + '-g100" width="100" height="100" patternUnits="userSpaceOnUse">'
    +     '<rect width="100" height="100" fill="url(#' + id + '-g20)"/>'
    +     '<path d="M100 0 L0 0 0 100" fill="none" class="p-grid" stroke-width="0.6" opacity="0.15"/>'
    +   '</pattern>'
    +   '<radialGradient id="' + id + '-glow" cx="0.82" cy="0.12" r="0.55">'
    +     '<stop offset="0" class="p-glow0"/><stop offset="1" class="p-glow1"/>'
    +   '</radialGradient>'
    +   '<linearGradient id="' + id + '-node" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-n0"/><stop offset="1" class="p-n1"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="' + id + '-amber" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-a0"/><stop offset="1" class="p-a1"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="' + id + '-amber-n" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-an0"/><stop offset="1" class="p-an1"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="' + id + '-bar" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-bar0"/><stop offset="1" class="p-bar1"/>'
    +   '</linearGradient>'
    +   '<linearGradient id="' + id + '-amber-b" x1="0" y1="0" x2="0" y2="1">'
    +     '<stop offset="0" class="p-ab0"/><stop offset="1" class="p-ab1"/>'
    +   '</linearGradient>'
    +   '<pattern id="' + id + '-scan" width="4" height="3" patternUnits="userSpaceOnUse">'
    +     '<rect width="4" height="1" class="p-scan"/>'
    +   '</pattern>'
    +   '<filter id="' + id + '-shadow" class="p-shadow" x="-30%" y="-30%" width="170%" height="170%">'
    +     '<feDropShadow dx="0" dy="2" stdDeviation="4"/>'
    +   '</filter>'
    +   '<marker id="' + id + '-ah" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">'
    +     '<path d="M0 0 L6 3 L0 6 Z" class="p-amber"/>'
    +   '</marker>'
    + '</defs>'

    /* ground */
    + '<rect width="1600" height="900" fill="url(#' + id + '-ground)"/>'
    + '<rect width="1600" height="900" fill="url(#' + id + '-g100)"/>'
    + '<rect width="1600" height="900" fill="url(#' + id + '-glow)"/>'

    /* 7 · corner ticks, four sides, plus the double rule */
    + '<rect x="14" y="14" width="1572" height="872" rx="18" fill="none" class="p-scyan" stroke-width="1.4" stroke-opacity="0.32"/>'
    + '<rect x="24" y="24" width="1552" height="852" rx="14" fill="none" class="p-scyan" stroke-width="0.6" stroke-opacity="0.12"/>'
    + '<g class="p-scyan" stroke-width="1.2" stroke-opacity="0.5" fill="none">'
    +   '<path d="M36 58 V36 H58"/><path d="M1564 58 V36 H1542"/>'
    +   '<path d="M36 842 V864 H58"/><path d="M1564 842 V864 H1542"/>'
    + '</g>'

    /* 1 · amber spine tab, fixed 8 × 64 */
    + '<rect x="44" y="46" width="8" height="64" rx="2" class="p-amber"/>'
    /* 2 · title  ·  3 · subtitle */
    + '<text x="70" y="82" class="p-ink" font-family="Outfit,sans-serif" font-weight="800" font-size="34" letter-spacing="-0.4">' + esc(m.title) + '</text>'
    + '<text x="72" y="112" class="p-mono" font-size="19" opacity="0.75">' + esc(m.sub) + '</text>'
    /* 4 · drawing no. + revision  ·  5 · classification */
    + '<text x="1548" y="74" text-anchor="end" class="p-mono" font-size="17" letter-spacing="1.4" opacity="0.55">' + esc(m.no) + ' · REV ' + esc(m.rev) + '</text>'
    /* 5 · classification — .p-mono, never .p-cyan. Cerulean is 4.41:1 on
       Prussian Blue and fails AA (D11); .p-mono is Sky Blue at 7.74:1. */
    + '<text x="1548" y="100" text-anchor="end" class="p-mono" font-size="15" letter-spacing="2.4" opacity="0.6">' + esc(m.cls) + '</text>'
    + '<line x1="44" y1="140" x2="1556" y2="140" class="p-scyan" stroke-width="0.6" stroke-opacity="0.2"/>';
  }

  /* 6 · title block */
  function titleBlock(id, m) {
    return ''
    + '<g class="sk-fade sk-s1">'
    +   '<rect x="44" y="790" width="1512" height="64" rx="8" class="p-block" opacity="0.7"/>'
    +   '<rect x="44" y="790" width="1512" height="64" rx="8" fill="none" class="p-scyan" stroke-width="0.7" stroke-opacity="0.5"/>'
    +   '<line x1="1080" y1="790" x2="1080" y2="854" class="p-scyan" stroke-width="0.5" stroke-opacity="0.25"/>'
    +   '<line x1="1340" y1="790" x2="1340" y2="854" class="p-scyan" stroke-width="0.5" stroke-opacity="0.25"/>'
    +   '<text x="68" y="815" class="p-mono" font-size="13" letter-spacing="2" opacity="0.4">TITLE</text>'
    +   '<text x="68" y="841" class="p-mono" font-size="18" letter-spacing="0.8" opacity="0.75">' + esc(m.title.toUpperCase()) + '</text>'
    +   '<text x="1104" y="815" class="p-mono" font-size="13" letter-spacing="2" opacity="0.4">DRAWING NO.</text>'
    +   '<text x="1104" y="841" class="p-mono" font-size="18" opacity="0.75">' + esc(m.no) + '</text>'
    +   '<text x="1364" y="815" class="p-mono" font-size="13" letter-spacing="2" opacity="0.4">REV</text>'
    +   '<text x="1364" y="841" class="p-amber" font-size="18" font-weight="600" opacity="0.9">' + esc(m.rev) + '</text>'
    + '</g>';
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var plates = Array.prototype.slice.call(document.querySelectorAll('svg.pl'));
  if (!plates.length) return;

  var issued = [];

  plates.forEach(function (svg) {
    var d = svg.dataset;

    /* The refusal. A drawing without a number is not a plate. */
    if (!d.no) {
      console.warn('Plate refused: no drawing number', svg);
      svg.setAttribute('data-refused', 'true');
      return;
    }

    var m = {
      title: d.title || '',
      sub:   d.sub   || '',
      no:    d.no,
      rev:   d.rev   || '01',
      cls:   d.class_ || d.cls || svg.getAttribute('data-class') || 'DECODED OPS · ISSUED'
    };

    svg.insertAdjacentHTML('afterbegin', frame(d.p || d.no.toLowerCase(), m));
    svg.insertAdjacentHTML('beforeend', titleBlock(d.p || d.no.toLowerCase(), m));

    issued.push({ no: m.no, rev: m.rev, title: m.title, page: location.pathname });
    try { svg.pauseAnimations(); } catch (e) {}
  });

  REGISTER.push.apply(REGISTER, issued);

  /* Duplicate-number guard — two drawings sharing a number is the failure
     the register exists to catch. */
  var seen = {};
  issued.forEach(function (p) {
    if (seen[p.no]) console.warn('Plate number issued twice on this page:', p.no);
    seen[p.no] = true;
  });

  /* Animate on intersection, not on load. Paused SMIL parks its element
     at t=0, which reads as a stray dot in the corner. */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!('IntersectionObserver' in window)) {
    plates.forEach(function (p) { p.classList.add('sk-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('sk-in');
      if (!reduced.matches) { try { e.target.unpauseAnimations(); } catch (err) {} }
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });

  plates.forEach(function (p) { io.observe(p); });

  /* SMIL ignores prefers-reduced-motion, so gate it here too. */
  reduced.addEventListener('change', function () {
    plates.forEach(function (p) {
      try { reduced.matches ? p.pauseAnimations() : p.unpauseAnimations(); } catch (e) {}
    });
  });
})();
