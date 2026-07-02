#!/usr/bin/env bash
# Render the resource playbook pages to branded PDFs with headless Chrome.
# The pages' @media print rules hide nav/header/footer, so the PDF is clean.
# Usage: ./scripts/generate-playbook-pdfs.sh [BASE_URL]
#   BASE_URL defaults to the live site. Pass http://localhost:8765 to render
#   local (unpushed) changes before deploying.
set -euo pipefail

BASE_URL="${1:-https://decodedops.co.uk}"
OUT_DIR="$(cd "$(dirname "$0")/.." && pwd)/public/downloads"
SLUGS=(decoded-method six-sigma)

CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || true)"
[ -n "$CHROME" ] || { echo "No Chrome/Chromium found"; exit 1; }

mkdir -p "$OUT_DIR"
for slug in "${SLUGS[@]}"; do
  "$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
    --print-to-pdf="$OUT_DIR/$slug.pdf" "$BASE_URL/resources/$slug" >/dev/null 2>&1
  echo "$slug.pdf <- $BASE_URL/resources/$slug"
done
echo "Done -> $OUT_DIR"
