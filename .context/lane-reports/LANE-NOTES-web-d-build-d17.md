# Lane notes: web-d-build-d17

## What was done
All 9 sector pages updated with D17 artwork pieces and CR-WEB-051 copy edits.

### D17 artwork per page

| Page | Hero | Inline | Notes |
|---|---|---|---|
| awards-engraving | DO-ART-921 (photo-led, documents over trophy shelf) | DO-ART-922 (drawn, fifty proofs) | Schematic section removed |
| garment-decoration | DO-ART-923 (photo-led, thread spools + run logics) | DO-ART-924 (journey poster, order route) | Schematic section removed |
| labels-packaging | DO-ART-925 (drawn, SKU revision history) | DO-ART-926 (photo, spec sheet + variable-data proof) | Schematic section removed |
| print-promotional | DO-ART-927 (photo-led, press hall + run sheet) | DO-ART-928 (drawn, four systems + press week) | Schematic section removed; CR-WEB-051 applied |
| promotional-merchandise | DO-ART-929 (photo-led, documents over product) | DO-ART-930 (product screen, supplier matching) | Converted from SectorPageDS to inline JSX |
| schoolwear | DO-ART-931 (drawn, term-start surge) | DO-ART-932 (photo, badge spec + parent order) | Converted from SectorPageDS; CR-WEB-051 applied; features section restored |
| signs-graphics | DO-ART-933 (photo-led, site survey + dimensions) | DO-ART-934 (product screen, production board) | Schematic section removed |
| teamwear-clubwear | DO-ART-935 (product screen, supplier feeds) | DO-ART-936 (photo, squad sheet + sponsor spec) | Converted from SectorPageDS to inline JSX |
| workwear | DO-ART-937 (photo-led, garment + decoration tags) | DO-ART-938 (drawn, catalogue → production → portal) | Converted from SectorPageDS to inline JSX |

### CR-WEB-051 copy edits applied
- **print-promotional**: Removed "typically cuts/reduces delays by 20-40%" from artwork approval challenge. Sentence now reads "cuts production delays with no change to the print process."
- **schoolwear**: "teamwear-and-schoolwear retailer" → "a teamwear business"; "a projected saving of 20 to 40 hours a week" kept as "a projected 20 to 40 hours a week". Features section restored with corrected copy.
- **All pages**: No TackleBag/Tackle Bag, no craig-blackman, no "volume triples", no "named with permission".

### CSS
- `d17-sectors.css` ported as `app/d17-sectors.module.css` (473 lines)
- Imported alongside `d17-art.module.css` in all 9 sector pages

### Technical notes
- 4 SectorPageDS pages (schoolwear, promotional-merchandise, teamwear-clubwear, workwear) converted to inline JSX to allow D17 hero/inline artwork insertion
- D17Motion component added to all 9 pages for scroll-triggered animation
- Hero layout uses `display: grid; gridTemplateColumns: 1fr 1fr` with D17 figure in right column
- All D17 HTML inserted via `dangerouslySetInnerHTML` (static artwork, no user input)
- tsc clean, all grep checks pass
