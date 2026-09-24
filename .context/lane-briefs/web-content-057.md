# web-content-057 (CR-WEB-057 public app rename + CR-WEB-056 ERP playbook remainder)

Craig 24 Sep: the site uses Decoded Works (the ERP) and Decoded Proof instead of Decoded Data App / Decoded Artwork
Manager; Commerce repositioned alongside. All wording is written and checked. Your job is mechanical.
Files: `.context/lane-briefs/cr-web-057/` (list with the shell; your glob tool may skip dot-folders).

1. From the repo root run
   `python .context/lane-briefs/cr-web-057/apply_spec.py .context/lane-briefs/cr-web-057/copy-spec.json`
   -> must print `applied 96/96, skipped 0`. Then
   `python .context/lane-briefs/cr-web-057/apply_spec.py .context/lane-briefs/cr-web-057/copy-spec-resources-later.json`
   -> must print `applied 3/3, skipped 0`. Do not reword anything the specs change.
   Commit: `content(web): Decoded Works + Proof naming and ERP positioning (CR-WEB-057, CR-WEB-056)`.
2. Follow `.context/lane-briefs/cr-web-057/structural.md` sections 1-3 exactly: the two `git mv` route moves,
   canonical/openGraph url updates in the moved pages, every internal href listed (line numbers may have shifted by a
   line or two, find them with `git grep -n "/apps/data-app\|/apps/artwork-manager"`), sitemap entries, the existing
   /decoded-data-app redirect destination, and the two new permanent redirects in next.config.ts
   (/apps/data-app -> /apps/works, /apps/artwork-manager -> /apps/proof). Ignore its note about the other lane, that
   work is already merged. Leave CSS class names and image filenames alone.
   After this, `git grep -n "/apps/data-app\|/apps/artwork-manager" -- app components data lib` may only show the
   redirect sources in next.config.ts.
   Commit: `feat(web): /apps/works and /apps/proof routes with 301s from old URLs (CR-WEB-057)`.
3. Final sweep: `git grep -n "Data App\|Artwork Manager" -- app components data lib ':!app/blog' ':!app/clients'`
   must return nothing user-visible. If something remains, rename it (Works / Proof, "Decoded Works" / "Decoded Proof"
   where the full name is used) and list it in your report.
`npx tsc --noEmit`. No dev servers, browsers, builds, databases or .env files. Do not push.
Report the commit hashes and anything left.
