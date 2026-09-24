# web-content-056 fix1
Run `python .context/lane-briefs/cr-web-056/apply_spec.py .context/lane-briefs/cr-web-056/copy-spec-2.json` from the
repo root; it must print `applied 3/3, skipped 0`. Then `git grep -n "Shopify\|WooCommerce" -- app components data lib ':!app/blog' ':!app/clients'`
must print nothing. `npx tsc --noEmit`, commit `content(web): remove remaining platform names (CR-WEB-056)`.
No dev servers, builds, browsers, databases or .env files. Do not push.
