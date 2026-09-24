"""Apply an exact find/replace spec. Usage: python apply_spec.py <spec.json>. Fails loudly if a find is not unique."""
import json, sys
spec = json.load(open(sys.argv[1], encoding="utf-8"))
bad = 0
for i, x in enumerate(spec):
    p = x["file"]; s = open(p, encoding="utf-8", newline="").read()
    n = s.count(x["find"])
    if n != 1:
        print(f"SKIP #{i} {p}: find occurs {n}x"); bad += 1; continue
    open(p, "w", encoding="utf-8", newline="").write(s.replace(x["find"], x["replace"]))
print(f"applied {len(spec)-bad}/{len(spec)}, skipped {bad}")
