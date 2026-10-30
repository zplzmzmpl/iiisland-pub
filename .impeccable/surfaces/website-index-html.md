---
version: 1
slug: "website-index-html"
primary_target: "website/index.html"
related_targets: ["website/style.css","website/script.js"]
---

# iiisland landing page

Scope: the public landing page at `website/index.html` and the surfaces users reach from it. Visitor mode: **Persuade**.

## Audience and job

Mac users who listen while working, desktop-customization enthusiasts, and music-curious visitors who arrive cold. The page has to make the top-edge music surface legible in seconds, prove the two-position lyric and open/close behavior with a working demo, and send the visitor to the GitHub release. Secondary job: state the Apple Silicon / macOS 14+ requirement and the non-notarized install caveat without frightening the visitor away.

## Action and proof

Primary action: download the latest Mac build. Proof on hand: a fully interactive island demo (open, transport, seek, volume, lyric jump, player switching, lyric toggles), the real support matrix, install requirements, FAQ, and the app's ink illustration. No app screenshots, testimonials, or benchmarks exist; do not invent them. Demo songs, lyrics, and covers stay labeled as original synthetic content.

## Constraints

- Static HTML/CSS/JS only; Cloudflare Pages serves `website/` with no build step.
- No external fonts, analytics, or third-party runtime; system font stacks only.
- The blue download panel is retained.
- No-JavaScript reading path, keyboard operation, WCAG AA contrast, 44px touch targets, and `prefers-reduced-motion` all hold.
- Do not use JavaScript measurement for the size illustration; it remains a CSS-only loop.
- The existing interaction contract in `script.js` (IDs, data attributes, state) stays intact.

## Chosen direction

**屏幕剖面图 / The Measured Elevation.** The page is a drawing sheet for the Mac's top edge. Warm drafting paper, graphite ink, blue-pencil dimensions, a title block, crop marks, sheet references, and a pinned reference plate carry the composition; the live island is the only element on the sheet that moves and can be operated. The memorable moment: opening the island pulls the drawing's dimension lines and height annotation with it, so the product demo and the measured drawing are the same object.

## Unresolved decisions

None for this pass. Re-roll and a warmer album-sleeve alternate remain available if the direction underperforms in review.

## Direction contract

THESIS: The landing page is a measured architectural elevation of the Mac's top edge, with the live island as the only living element on the sheet; it refuses the copy-left/device-right hero and the equal-card section stack.

OWN-WORLD: Warm drafting paper (#efede5), graphite ink, blue-pencil (#2253dc) dimensions, sage and pale-blue screen fields; 1px rules on a 24px module, title block, crop marks, sheet references, pinned halftone plate; square controls with hairline borders, ruled sliders, and a blue issue stamp.

STORY: Within one viewport the visitor sees a Mac menu bar, the notch at work, and dimension lines measuring it; scrolling walks the drawing set from the lyric section to the size detail, the player schedule, the notes, and the issue stamp, ending with a download.

FIRST VIEWPORT: A 64px sheet header, then a full-width elevation field with the live island centered on a sage desktop, menu bar, dimension lines, and the pinned ink plate; below it a horizontal title block carrying a clamp(44–76px) two-line headline, the deck, the blue download stamp, and the platform specs. No copy/product split, no badge row, no floating cards.

FORM: Measured elevation / 屏幕剖面图, position 6 of 7 in the ordered direction list; seed:9487f7ecd57230ed.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
