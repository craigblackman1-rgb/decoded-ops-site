# web-content-057 fix1
Run `python .context/lane-briefs/cr-web-057/apply_spec.py .context/lane-briefs/cr-web-057/copy-spec-3.json` from the repo
root; it must print `applied 1/1, skipped 0`. Then `git grep -n "Data App\|Artwork Manager" -- app components data lib ':!app/blog' ':!app/clients'`
must print nothing. `npx tsc --noEmit`, commit `content(web): last Data App label (CR-WEB-057)`.
No dev servers, builds, browsers, databases or .env files. Do not push.
