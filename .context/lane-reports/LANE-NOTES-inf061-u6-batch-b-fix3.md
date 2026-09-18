# Lane notes — inf061-u6-batch-b-fix3

## What ds-artwork.css lines 77-79 pin

```css
html, body {
  margin: 0; padding: 0; overflow: hidden;
  background: var(--do-prussian-blue);
}
```

Plus `html[data-artboard], body[data-artboard]` at lines 82-84 (same pin, no background) and artboard-specific `width`/`height` at lines 86-91 — only active when `data-artboard` attribute is present, so no conflict with normal app pages.

## Release block applied

```css
@layer ds {
  html, body { overflow: visible; width: auto; height: auto; }
}
```

Properties released: `overflow`, `width`, `height`.  
Properties NOT overridden: `margin` (harmless reset, same as browser default), `padding` (harmless reset), `background` (globals.css owns page background per brief — confirmed globals.css:300 `overflow-x: auto` is on `.do-blog-prose pre`, not body).

## Verification

- `npm run build` green (174 static pages generated, 0 errors).
- `git diff --stat HEAD` = only `ds-layer.css` changed (7 lines added).
