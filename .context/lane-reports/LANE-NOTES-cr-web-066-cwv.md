# Lane notes: cr-web-066-cwv

## What was done

Added `prefetch={false}` to the logo `<Link href="/">` in `components/Header.tsx` (line 223). This prevents Next.js from prefetching the homepage document on every page load across the site, which was competing with each page's own LCP resource.

## What was NOT done — and why

The brief's second fix (changing `thread-spools.jpg` `sizes="1200px"` to responsive sizes in `app/page.tsx`) is **no longer applicable**. The `<figure className="band">` containing `<Image src="/images/sectors/thread-spools.jpg" fill sizes="1200px">` was removed in a previous lane (LANE-NOTES-web-content-060.md) and replaced with the DO-ART-1008 route poster rendered via `dangerouslySetInnerHTML`. The current `app/page.tsx` has no `<Image>` with `sizes="1200px"`.

## Diff

```diff
-          <Link className="logo" href="/">Decoded<span>Ops</span></Link>
+          <Link className="logo" href="/" prefetch={false}>Decoded<span>Ops</span></Link>
```

## Verification

- `npx tsc --noEmit` — clean, zero errors
- `npm run build` — succeeded (173 static pages, 0 errors)
- `git diff --stat` — only `components/Header.tsx` changed (1 file, 1 insertion, 1 deletion)
