# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences matter to the public site, in this order of immediacy:

1. **Mac users who listen to music while they work.** They already run Apple Music, Spotify, QQ 音乐, or 网易云音乐 during focused work and dislike switching windows or losing the lyrics they were reading.
2. **Desktop-customization and efficiency-tool enthusiasts.** They care about the notch silhouette, independent collapsed/expanded sizing, native macOS materials, and whether the app feels like it belongs on the system.
3. **Music-curious visitors drawn in by the page itself.** They arrive without knowing the app and need a few seconds of demonstration before they understand why an island at the top of the screen is worth installing.

The site is Chinese-first. An English README exists, but the landing page speaks Simplified Chinese.

## Product Purpose

iiisland is a macOS menu-bar/notch app that puts playback controls and synced lyrics at the top of the screen, so the current song stays visible without leaving the work in front of you. The public site exists to make that experience legible in one visit and to send the visitor to the latest GitHub release. Success is a visitor who understands "收起时轻巧陪伴，展开时完整控制" and then downloads the app.

## Positioning

The product's own mechanism: the Mac's top edge becomes the music surface. Artwork, title, transport, seek, volume, and the current lyric share one island that is a small capsule when idle and a full player when opened; the lyric can sit beside the collapsed island and move into the panel when expanded. It follows whichever supported player started most recently and can be pinned to one source. A neighboring media controller can copy a floating mini-player; it cannot truthfully claim the notch, the two-position lyric, or the same macOS-native integration.

## Operating Context

- Requires Apple Silicon (arm64) and macOS 14 or later; native Liquid Glass only on macOS 26.
- Installed from a DMG: download → drag `iiisland.app` into Applications → launch → start a song in a supported player.
- The build is ad-hoc signed and not notarized, so first launch may be blocked by Gatekeeper; the release page ships SHA-256 checksums.
- Lyrics come from online services, embedded lyrics, and a local cache; availability and sync accuracy vary by track and source.
- QQ 音乐 and 网易云音乐 depend on the system media focus for transport; volume/shuffle/repeat are not available there.
- The landing page includes a no-audio interactive demo of opening, transport, seek, volume, lyric jumping, player switching, lyric toggles, and auto-detect.
- Visitors may arrive on a phone or a non-Mac to evaluate the product, even though the app itself is Mac-only.

## Capabilities and Constraints

Confirmed product facts the site may state: four supported players (Apple Music, Spotify, QQ 音乐, 网易云音乐); auto-follow of the most recently started source; independent collapsed/expanded width and height; lyrics hidden/shown and retained while paused; lyric offset calibration; two appearances (classic black, native Liquid Glass on macOS 26); day/night switching; launch-with-player; optional browser/video media sources; Apple Silicon + macOS 14+.

Site constraints:

- Pure static HTML, CSS, and JavaScript. No framework, no build step, no package manager. Cloudflare Pages serves `website/` directly from `main`.
- No external fonts, analytics, or third-party runtime. System font stacks only.
- The blue download block at the end of the page is retained.
- The page must keep working without JavaScript for reading, FAQ, and download links, and must respect `prefers-reduced-motion`.
- Demo songs, lyrics, and covers are original synthetic content; no audio is played. The page must not present itself as an app screenshot or fabricate app UI evidence.

## Brand Commitments

- Name: **iiisland** (lowercase, three i's). Chinese voice: quiet, precise, slightly poetic; short declarative lines rather than marketing hype.
- The existing app icon is a black-and-white ink illustration of a person listening with headphones; it is the only real brand artwork on hand and may be used at larger scale if it serves the page.
- The blue download panel is an explicit constraint.
- The app is open-source-adjacent but the application source is private; the site links to the public repository for releases, issues, and credits (boring.notch, LyricsX).
- No fabricated customers, testimonials, download counts, awards, or performance benchmarks.

## Evidence on Hand

- `website/assets/app-icon.png` — 1024×1024 ink illustration with transparency.
- `assets/website-preview.jpg` — a 1440×900 render of the current website, not a screenshot of the app.
- Real product copy in `README.md` and the existing `website/index.html`: feature descriptions, support matrix, FAQ, install steps, version `0.8.22 · build 31`.
- Interactive demo content: three original tracks and four lyric lines each, all authored for the page.
- No real app screenshots, customer quotes, or press coverage exist in the repository. Do not invent them; if an app-facing image is needed, author it as an explicitly synthetic interface illustration rather than a photo of the product.

## Product Principles

1. **Demonstrate the glance.** The page should let the visitor feel the top-edge music surface before it explains the feature list.
2. **Quiet by default, complete on demand.** The interface mirrors the product: a calm surface that opens into precise control.
3. **Native macOS manners.** Precision, keyboard access, restrained motion, and a sense of physical fit with the screen edge.
4. **Poetic, not fluffy.** Chinese copy stays short and concrete; no growth-hack claims, no filler superlatives.
5. **Truth is the proof.** Supported players, requirements, and limitations are stated plainly; synthetic demo material is labeled.

## Accessibility & Inclusion

Preserve keyboard operation, visible focus, semantic landmarks, and ARIA state on all demo controls. Maintain WCAG AA text contrast, including text over the colored fields. Support `prefers-reduced-motion` with a fully static, still-readable page, and keep the no-JavaScript fallback readable. Touch targets at least 44×44 px. The demo must work on touch as well as pointer devices.
