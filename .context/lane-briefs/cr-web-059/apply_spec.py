"""Apply an exact find/replace spec. Usage: python apply_spec.py <spec.json>. Fails loudly if a find is not unique.
Handles CRLF files: if the LF form of `find` isn't present, the CRLF form is tried and the replacement is written CRLF."""
import json, sys
spec = json.load(open(sys.argv[1], encoding="utf-8"))
bad = 0
for i, x in enumerate(spec):
    p = x["file"]; s = open(p, encoding="utf-8", newline="").read()
    f, r = x["find"], x["replace"]
    if s.count(f) != 1 and "\r\n" in s:
        f, r = f.replace("\r\n", "\n").replace("\n", "\r\n"), r.replace("\r\n", "\n").replace("\n", "\r\n")
    n = s.count(f)
    if n != 1:
        print(f"SKIP #{i} {p}: find occurs {n}x"); bad += 1; continue
    open(p, "w", encoding="utf-8", newline="").write(s.replace(f, r))
print(f"applied {len(spec)-bad}/{len(spec)}, skipped {bad}")
