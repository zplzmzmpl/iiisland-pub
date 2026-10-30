---
name: iiisland
description: "音乐，在抬眼之间。将播放控制与同步歌词放在 Mac 屏幕顶部的 macOS 应用官网。"
colors:
  drafting-paper: "#efede5"
  graphite: "#191a19"
  graphite-soft: "#3f443e"
  pencil-grey: "#5c605a"
  blueprint-blue: "#2253dc"
  blueprint-ink: "#1b3a9e"
  studio-sage: "#c7cfc0"
  index-blue: "#d7dfe6"
  notch-black: "#08090a"
  chalk: "#f2f2ec"
  dust: "#b3b8b1"
  island-rail: "#3a3e39"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", sans-serif"
    fontSize: "clamp(38px, 4.4vw, 64px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", sans-serif"
    fontSize: "clamp(44px, 5.2vw, 76px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.022em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", sans-serif"
    fontSize: "clamp(20px, 2.1vw, 28px)"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  none: "0"
  stamp: "2px"
  cover: "6px"
  icon: "7px"
  island: "18px"
  island-open: "28px"
  island-mobile: "24px"
  pill: "999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  gutter: "clamp(20px, 3.6vw, 56px)"
  section: "clamp(64px, 8vw, 118px)"
components:
  button-primary:
    backgroundColor: "{colors.blueprint-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.stamp}"
    padding: "0 18px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "#ffffff"
  header-download:
    backgroundColor: "{colors.blueprint-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.stamp}"
    padding: "0 16px"
    height: "44px"
  text-button:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "44px"
  island:
    backgroundColor: "{colors.notch-black}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.island-open}"
    width: "440px"
    height: "266px"
  player-panel:
    backgroundColor: "{colors.drafting-paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.none}"
    padding: "30px"
---

# Design System: iiisland

## Overview

**Creative North Star: "The Measured Elevation"**

iiisland's public page is a drawing sheet for the Mac's top edge. Warm paper (#f5efea) and a deep ink blue (#122e8a) carry the composition as two large colour blocks, with the black notch and the app icon as the only third colour. The live notch sits on the blue screen at 1:1 with paper-coloured dimension lines measuring it; a title block carries the headline, the deck, the download stamp and the platform specs; a pinned reference print of the app's ink illustration anchors the right margin. The page is not a product photograph and not a floating card stack — it is a measured drawing where one object is alive.

The system's voice is quiet and precise. Hairlines do the structural work that shadows do on other pages. Type is the native macOS voice (SF / PingFang), set at measured steps; the only soft, shadowed object is the product itself. The blue is a pencil mark, a dimension, an action and the mandated issue stamp, never a decorative wash. Sections read as sheets in a set: lyrics as a lyric index, size as a 1:1 detail, players as a schedule, installation as notes, the release as a stamped issue.

**Key Characteristics:**
- Warm drafting paper (#efede5) as the ground; graphite text; one blueprint blue; sage and pale-blue fields that own whole regions.
- A 24/48 drawing module, 1px hairlines, title block, sheet references A-01–A-07, crop ticks and 1:1 dimension lines.
- The island is the only soft, shadowed object and the only thing on the sheet that moves.
- Native system type, no webfont; the platform's own face is the brand voice.
- Square instruments (2px page controls, square toggles, 1px rules) against the one pill (the lyric capsule) and the one notch (the island).

## Colors

A warm paper ground with graphite ink and a single working blue; sage and pale blue are fields, not accents. The palette is deliberately close to a print shop's paper stock and a drafting-table pencil roll.

### Primary
- **Blueprint Blue** (#2253dc): the one accent. It draws dimension lines and labels, marks the active lyric and player, fills the primary download stamp and the header action, and supplies focus rings on paper. On the sage screen the text-grade version is **Blueprint Ink** (#1b3a9e) so small blue labels keep AA contrast.
- **Blueprint Ink** (#1b3a9e): the darker pencil used for blue text on sage or pale fields and for hover states; the same hue, one step down.

### Secondary
- **Studio Sage** (#c7cfc0): the screen field in the hero and the detail field in the size section. It is the desk/screen colour, never a card fill.
- **Index Blue** (#d7dfe6): the player-schedule field; a cooler paper stock that separates the schedule from the drawing sheets without adding a new accent.

### Neutral
- **Drafting Paper** (#efede5): the page ground, the player detail sheet and the 404 sheet. It is the largest surface in the system.
- **Graphite** (#191a19): body and display text, 1px rules at 16% alpha, strong rules at 46%.
- **Graphite Soft** (#3f443e): secondary annotations on paper and sage; the dimension notes; the scene labels.
- **Pencil Grey** (#5c605a): body-adjacent small copy, captions and credits; AA on paper (5.47:1).
- **Notch Black** (#08090a): the island body; the physical notch. The only near-black field.
- **Chalk** (#f2f2ec): text and control ink inside the island (18:1 on Notch Black).
- **Dust** (#b3b8b1): secondary island text (10:1 on Notch Black).
- **Island Rail** (#3a3e39): the unfilled seek/volume rail inside the island.

### Named Rules
**The Blue Pencil Rule.** Blue is a mark or an action: dimension lines, active indices, the download stamp, focus. It never becomes a decorative field except the mandated issue stamp. If blue is doing neither measuring nor acting, remove it.

**The Paper Field Rule.** Field colours own whole regions. Sage is the hero screen and the size detail; pale blue is the player schedule; paper is everything else. No coloured cards scattered over paper, no coloured border-left stripes.

**The Intentional Warmth Rule.** The warm paper ground and the two-axis drafting grid are the direction, not an AI-cream default; the 404 inherits the same paper. The functional barcode in the issue stamp is a print element, not decorative stripes. These are the three detector advisories the system owns and keeps.

## Typography

**Display Font:** the native system stack — `-apple-system`, `BlinkMacSystemFont`, `"SF Pro Text"`, `"PingFang SC"`, `"Hiragino Sans GB"`, `"Microsoft YaHei"`, `"Helvetica Neue"`, sans-serif.
**Body Font:** the same stack.
**Label Font:** the same stack at 11px with tracking.

**Character:** On the product's Mac audience this is the platform's own voice — SF for Latin and numerals, PingFang for Chinese — not a fallback face. A webfont would make the page sound like a website about a Mac app; the system face makes it sound like the Mac app's own surface. Chinese display type is tracked to −0.022em rather than crushed; Latin numerals are tabular wherever they measure something.

### Hierarchy
- **Headline** (600, `clamp(44px, 5.2vw, 76px)`, 1.04): the title block's two-line title, the largest type on the page. Mobile falls to 44px at ≤480.
- **Display** (600, `clamp(38px, 4.4vw, 64px)`, 1.08): section headings, set as sheet titles ("每一句，都跟得上"). They sit one clear step below the headline.
- **Title** (500, `clamp(20px, 2.1vw, 28px)`, 1.35): lyric rows, player names, FAQ questions; 18px island title; 15px deck lines.
- **Body** (400, 17px, 1.65; 14–15px in the title block and notes; max 65–75ch): explanation, FAQ answers, footer copy.
- **Label** (500, 11px, 0.12em, uppercase for Latin): sheet references, dimension values, field labels, eyebrow-free metadata rows. Small functional text never goes below 11px; only the plate caption and the size drawing’s technical labels live at 8–11px inside aria-hidden surfaces.

### Named Rules
**The Native Voice Rule.** Use the system stack everywhere, including display. It is a commitment to the product's platform, not an unresolved font choice; do not introduce a webfont.

**The Measured Label Rule.** Labels are 11px, tracked, and factual: A-02, SCALE 1:1, 440 × 266, 0.8.22, 版本. They sit in margins, title blocks and dimension lines; they never become a kicker above a heading.

**The One Clear Step Rule.** The headline is the largest text; displays step down once; titles step down again. Do not let a section heading meet or exceed the headline.

## Layout

The page is a sheet, not a container-and-cards layout. The body is capped at 1800px, the header is 64px with a 1px rule, and every section is a full-bleed field inside the page gutter (`clamp(20px, 3.6vw, 56px)`). Section padding is `clamp(64px, 8vw, 118px)`. The drawing module is 24px, doubled to a 48px screen grid; hairlines are 1px, structural rules 1.5px, crop ticks 1px.

The hero is a single sheet: a 26px elevation meta row, a full-width sage screen (`clamp(380px, 54svh, 540px)`) with a menu bar, the live island and blue dimension lines, then a horizontal title block (7fr / 3fr / 2.2fr) with the headline, deck, blue download stamp and specs. The title block sits below the elevation visually but first in the DOM so the h1 and the action lead the reading order; the grid places the elevation above it on desktop and the title block above the screen at ≤760 so the mobile first viewport still opens with the title and CTA. The pinned reference plate is a 2.4°-rotated paper print on the right; it is removed at ≤900 along with the DETAIL A reference so no label points at an absent plate.

Sections are sheets in a set: lyrics (paper, A-02), size detail (sage field with a paper drawing card, A-03), player schedule (pale blue, A-04), notes/FAQ (paper, A-05), the blue issue stamp (A-06) and the colophon (A-07). The lyric section is 5fr/7fr on desktop (detail left, index right), 1 column at ≤900; the player schedule is 7fr/5fr, 1 column at ≤900; the FAQ is 4fr/8fr, 1 column at ≤900. The size detail is a 1:1 drawing: 440 × 266 open and 280 × 44 closed, a CSS-only 4.8s alternate loop that starts from the static open state, and a fully static open state under `prefers-reduced-motion` or no JavaScript.

Breakpoints: 1100 (compress the title block columns), 900 (title block becomes two rows; lyric/player/FAQ grids stack; reference plate and DETAIL A hidden), 760 (single-column mobile; nav links collapse to the download; hero order title → elevation; the hero capsule hides; menu bar keeps Finder and the clock), 480 (44px headline, 36px section display, 280px open island, 7% side inset on the size drawing). The layout is checked from 320 to 1600; the document never scrolls horizontally.

## Elevation & Depth

The system is flat paper with physical objects placed on it. Paper, sage and pale fields have no shadow; depth comes from 1px rules, overlapping printed layers (the pinned plate over the screen), the blue dimension lines and the black solid of the island. The island, its capsule, the compact island, the full cover and the pinned plate are the only surfaces allowed to cast a shadow, and each shadow carries a y-offset and a soft blur. The blue issue stamp is flat with a 1px white inset border and crop-like ticks; it does not lift off the paper.

### Shadow Vocabulary
- **Island at rest** (`0 18px 38px rgba(9,10,9,.28), inset 0 1px 0 rgba(255,255,255,.1)`): only the open notch on the sage screen.
- **Capsule / compact island** (`0 8px 18px rgba(9,10,9,.18)` / `0 10px 20px rgba(9,10,9,.2)`): the detached lyric pill and the detail-B island.
- **Cover** (`0 6px 14px rgba(0,0,0,.22)`): the album cover inside the open island.
- **Pinned plate** (`0 16px 30px rgba(25,26,25,.16)`): the rotated paper print.
- **None** on title blocks, sections, player panels, the size card, the download stamp or the footer.

### Named Rules
**The Only Living Element Rule.** The island is the only object on the sheet that both casts a shadow and moves. Everything else is printed, ruled or flat. If a panel starts to float, it has stopped being part of the drawing.

## Shapes

The page's instruments are square: 2px corners on buttons and the issue stamp, 0 on title blocks, panels and the size card, square toggles and checkboxes. The exceptions are the product's own geometry: the island's bottom corners are 18px closed and 28px open (24px on mobile), the lyric capsule is a 999px pill, the cover is a 6px square and the brand icon is 7px. The island's top edge is flush with the screen edge; a 1.5px graphite rule is the screen's top edge. The notch is clipped by `overflow: clip`, not drawn as a rounded card. The blue issue stamp carries a 1px white inset border 10px in from the edge, plus CSS crop ticks and a functional barcode. The pinned plate is a paper rectangle with two tape strips at 2.4°; the reference print is multiplied onto the paper so its white ground disappears.

**The Square Instrument Rule.** Page controls inherit the drawing's square corners; only the product and its lyric pill are allowed to be soft. Adding a rounded card to a paper section is a shape violation, not a style preference.

## Components

### Buttons
The button family is a drafting stamp, not a pill.
- **Shape:** 2px corners; 54px primary, 44px header, 44px text-button hit area.
- **Primary:** Blueprint Blue field, white 15px/600 label, arrow SVG at 18px, `0 18px` horizontal padding; full-width in the title block.
- **Header:** the same blue, 44px tall, 14px label, 16px arrow; it is the persistent action.
- **Hover / Focus:** primary goes to Graphite with a 2px lift; the arrow translates 2px up-right; focus is a 2px blue ring, white on the blue stamp.
- **Text button:** transparent, 1px Graphite Soft bottom rule, 13px label, arrow; hover turns the rule and label Blueprint Ink.

### Navigation
A 64px paper strip with a 1px rule. The brand is the 32px ink icon plus 22px/600 lowercase `iiisland`; the centred metadata is 11px tracked; the three links are 14px, underlined on hover in Blueprint Ink; the download is the blue stamp. At ≤760 the links disappear and the brand plus the stamp remain. The nav does not stick; it is the top of the sheet.

### The Island (signature)
A black notch hanging from the sage screen's top edge, 440 × 266 open and 280 × 44 closed on desktop, 330 × 250 capped open panel on mobile. Bottom radii 18/28/24. It is the only shadowed, moving object. The closed state is a mini cover, the track title and an equalizer; the open state is a 10px source line with a chevron, an 80px app-icon cover on a track-tinted 6px square, the title/artist/lyric, a ruled seek bar with timecodes, a white circular play control and a 104px volume fader. The capsule sits to its left only while closed; it fades out when the island opens. Open/close is 640ms `cubic-bezier(.22,.9,.24,1)`; hover opens after 180ms, leaving closes after 280ms; Escape closes and returns focus to the closed trigger; opening from the trigger moves focus into the panel.

### Lyric Row
A four-row `ol`; each row is a 44px number, the lyric at `clamp(20px,2.1vw,28px)`, and a 40px circular play/pause control, separated by hairlines. The active row takes graphite text, a blue number and a filled blue control; hover darkens the text and fills the control with ink. There are no pill backgrounds; the active state is typographic and one blue mark.

### Player Schedule
A hairline-separated list of 76px rows: 44px number, 40px player name, a 21px arrow that appears on hover and stays on the active row. The active row is graphite, its number Blueprint Ink. The detail sheet is a paper panel with a 1px rule and no radius: a 58px multiply-treated icon, the player name, a live dot, a three-row capability table with 5px status squares (filled blue for supported, hollow for partial/unsupported), the authorization note, a 17px square checkbox and the detection note. QQ 音乐 and 网易云音乐 disable volume/mute and mark transport as system-media-focus dependent.

### Toggles
22px square checkboxes, 1px Graphite Soft border, 0 radius; checked is Blueprint Blue with a white check. The whole option row is a label so the target is the row, not the 22px square. The auto-detect checkbox follows the same geometry at 17px.

### FAQ Notes
Native `<details>` rows in a paper list: a 44px note number, the question at `clamp(18px,2vw,24px)`, a CSS plus that rotates to a cross, a 1px rule between rows, and answers indented under the question with a 65ch measure. Blue appears only on the "查看项目说明" link. The first row opens the answer without a card or a modal.

### Pinned Reference Plate
A paper print of the existing ink app icon, 9px padding, 1px border, 2.4° rotation, two tape strips and a multiplied image; caption "DETAIL A / 1024²". It is decorative but meaningful brand evidence; it is not a fake app screenshot. Hidden at ≤900 with its DETAIL A label.

### Size Drawing
A paper card on the sage field, 1:1: a 440 × 266 black notch and a 280 × 44 collapsed state, a 1.5px screen edge with end ticks, blue labels "收起 / CLOSED 280 × 44" and "展开 / OPEN 440 × 266", and a 4s CSS-only alternating morph that starts from the open state. Its layout box stays fixed while an inner clipped shape animates width, height and bottom radii; the expanded content clears before the shrink and the collapsed content appears only after the shape has closed, so no text is ever exposed mid-morph. It never clones the transport; it shows only the app-icon cover, title, artist and lyric. Static open under reduced motion or no JavaScript.

## Do's and Don'ts

### Do:
- **Do** keep the warm paper ground, graphite ink and the single Blueprint Blue; use Blueprint Ink for small blue text on sage or pale fields.
- **Do** draw with 1px hairlines, the 24/48 module, title blocks, sheet references, dimension lines and crop ticks; the drawing is the layout.
- **Do** keep the island as the only shadowed, soft, moving object, and the lyric capsule as the only pill.
- **Do** keep the native system stack as the display and body voice; the product is a Mac app and the page should sound like the Mac.
- **Do** keep the headline the largest type, displays one step down and labels at 11px/tracked.
- **Do** label the demo as a web interaction with no audio and the songs/lyrics/covers as original synthetic content.
- **Do** preserve keyboard focus, the skip link, reduced-motion static states, the no-JS reading path and the 44px+ controls.

### Don't:
- **Don't** turn paper sections into rounded cards, add icon tiles, gradient buttons, glass/blur, coloured left borders or hard offset shadows.
- **Don't** put a kicker or eyebrow above a heading; the title block field labels and sheet references belong in margins and title blocks, never as a generic eyebrow.
- **Don't** add a webfont, a second accent, a dark hero field, a fake app screenshot, invented testimonials or benchmark claims.
- **Don't** scatter blue as decoration or let it own a field other than the mandated issue stamp; blue must measure or act.
- **Don't** give every section the same entrance animation or a floating shadow; one authored moment (the sheet plotting in) is enough.
- **Don't** "fix" the intentional paper palette, the drafting grid or the functional barcode by replacing the world; they are the system.
- **Don't** use the island's rounded, shadowed language on ordinary panels; that language belongs to the product.
