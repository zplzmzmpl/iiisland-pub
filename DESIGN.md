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

The system's voice is quiet and precise. Hairlines do the structural work that shadows do on other pages. Type is the native macOS voice (SF / PingFang), set at measured steps; the only soft, shadowed object is the product itself. The blue is a pencil mark, a dimension, an action and the download stamp, never a decorative wash. Sections read as sheets in a set: lyrics as a capsule specimen, size as a 1:1 detail, players as a schedule, installation as notes, the release as a download plate.

**Key Characteristics:**
- Warm drafting paper (#efede5) as the ground; graphite text; one blueprint blue; sage and pale-blue fields that own whole regions.
- A 24/48 drawing module, 1px hairlines, a title block, crop-like ticks and 1:1 dimension lines.
- The island and its lyric capsule are the only soft, shadowed objects, and the only things on the sheet that move.
- Native system type, no webfont; the platform's own face is the brand voice.
- Square instruments (2px page controls, square toggles, 1px rules) against the one pill (the lyric capsule) and the one notch (the island).

## Colors

A warm paper ground with graphite ink and a single working blue; sage and pale blue are fields, not accents. The palette is deliberately close to a print shop's paper stock and a drafting-table pencil roll.

### Primary
- **Blueprint Blue** (#2253dc): the one accent. It draws dimension lines and labels, marks the active player and the selected capsule preset, fills the primary download stamp and the header action, and supplies focus rings on paper. On the sage screen the text-grade version is **Blueprint Ink** (#1b3a9e) so small blue labels keep AA contrast.
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
**The Blue Pencil Rule.** Blue is a mark or an action: dimension lines, active indices, the download stamp, focus. It never becomes a decorative field except the download plate. If blue is doing neither measuring nor acting, remove it.

**The Paper Field Rule.** Field colours own whole regions. Sage is the hero screen and the size detail; pale blue is the player schedule; paper is everything else. No coloured cards scattered over paper, no coloured border-left stripes.

**The Intentional Warmth Rule.** The warm paper ground and the two-axis drafting grid are the direction, not an AI-cream default; the 404 inherits the same paper. The functional barcode in the download plate is a print element, not decorative stripes. These are the detector advisories the system owns and keeps. One more is deliberate: the island's single-overshoot spring in Motion. A notch that opens is a physical object, and its overshoot is the product's own behaviour, not a decorative bounce — it stays confined to the one object on the sheet that moves, never applied to panels, headings or page sections.

## Typography

**Display Font:** the native system stack — `-apple-system`, `BlinkMacSystemFont`, `"SF Pro Text"`, `"PingFang SC"`, `"Hiragino Sans GB"`, `"Microsoft YaHei"`, `"Helvetica Neue"`, sans-serif.
**Body Font:** the same stack.
**Label Font:** the same stack at 11px with tracking.

**Character:** On the product's Mac audience this is the platform's own voice — SF for Latin and numerals, PingFang for Chinese — not a fallback face. A webfont would make the page sound like a website about a Mac app; the system face makes it sound like the Mac app's own surface. Chinese display type is tracked to −0.022em rather than crushed; Latin numerals are tabular wherever they measure something.

### Hierarchy
- **Headline** (600, `clamp(44px, 5.2vw, 76px)`, 1.04): the title block's two-line title, the largest type on the page. Mobile falls to 44px at ≤480.
- **Display** (600, `clamp(38px, 4.4vw, 64px)`, 1.08): section headings, set as sheet titles ("胶囊歌词，你的样子"). They sit one clear step below the headline.
- **Title** (500, `clamp(20px, 2.1vw, 28px)`, 1.35): player names, FAQ questions; 18px island title; 15px deck lines.
- **Body** (400, 17px, 1.65; 14–15px in the title block and notes; max 65–75ch): explanation, FAQ answers, footer copy.
- **Label** (500, 11px, 0.12em, uppercase for Latin): dimension values, control labels and factual metadata rows. Small functional text never goes below 11px; only the size drawing’s technical labels live at 8–11px inside aria-hidden surfaces.

### Named Rules
**The Native Voice Rule.** Use the system stack everywhere, including display. It is a commitment to the product's platform, not an unresolved font choice; do not introduce a webfont.

**The Measured Label Rule.** Labels are 11px, tracked, and factual: 440 × 266, 280 × 44, 0.8.24, 版本, 芯片. They sit in margins, title blocks and dimension lines; they never become a kicker above a heading.

**The One Clear Step Rule.** The headline is the largest text; displays step down once; titles step down again. Do not let a section heading meet or exceed the headline.

## Layout

The page is a sheet, not a container-and-cards layout. The body is capped at 1800px, the header is 64px with a 1px rule, and every section is a full-bleed field inside the page gutter (`clamp(20px, 3.6vw, 56px)`). Section padding is `clamp(64px, 8vw, 118px)`. The drawing module is 24px, doubled to a 48px screen grid; hairlines are 1px, structural rules 1.5px, crop ticks 1px.

The hero is a single sheet: a full-width sage screen (`clamp(380px, 54svh, 540px)`) with a menu bar, the live island and blue dimension lines, then a horizontal title block (7fr / 3fr / 2.2fr) with the headline, deck, blue download stamp and specs. The title block sits below the elevation visually but first in the DOM so the h1 and the action lead the reading order; the grid places the elevation above it on desktop and the title block above the screen at ≤760 so the mobile first viewport still opens with the title and CTA. The pinned reference plate is a 2.4°-rotated paper print on the right; it is removed at ≤900.

Sections are sheets in a set: lyrics (paper), size detail (sage field with a paper drawing card), player schedule (pale blue), notes/FAQ (paper), the blue download plate and the footer. The capsule section is 5fr/7fr on desktop (specimen left, appearance controls right), 1 column at ≤900; the player schedule is 7fr/5fr, 1 column at ≤900; the FAQ is 4fr/8fr, 1 column at ≤900. The size detail is a 1:1 drawing: 440 × 266 open and 280 × 44 closed, a CSS-only 4.8s alternate loop that starts from the static open state, and a fully static open state under `prefers-reduced-motion` or no JavaScript.

Breakpoints: 1100 (compress the title block columns), 900 (title block becomes two rows; capsule/player/FAQ grids stack; reference plate hidden), 760 (single-column mobile; nav links collapse to the download; hero order title → elevation; the hero capsule hides; menu bar keeps Finder and the clock), 480 (44px headline, 36px section display, 280px open island, 7% side inset on the size drawing). The layout is checked from 320 to 1600; the document never scrolls horizontally.

## Elevation & Depth

The system is flat paper with physical objects placed on it. Paper, sage and pale fields have no shadow; depth comes from 1px rules, overlapping printed layers (the pinned plate over the screen), the blue dimension lines and the black solid of the island. The island, its capsule, the compact island, the full cover and the pinned plate are the only surfaces allowed to cast a shadow, and each shadow carries a y-offset and a soft blur. The blue download plate is flat with a 1px white inset border and crop-like ticks; it does not lift off the paper.

### Shadow Vocabulary
- **Island at rest** (`0 18px 38px rgba(9,10,9,.28), inset 0 1px 0 rgba(255,255,255,.1)`): only the open notch on the sage screen.
- **Capsule / compact island** (`0 8px 18px rgba(9,10,9,.18)` / `0 10px 20px rgba(9,10,9,.2)`): the detached lyric pill and the detail-B island.
- **Cover** (`0 6px 14px rgba(0,0,0,.22)`): the album cover inside the open island.
- **Pinned plate** (`0 16px 30px rgba(25,26,25,.16)`): the rotated paper print.
- **None** on title blocks, sections, player panels, the size card, the download stamp or the footer.

### Named Rules
**The Only Living Element Rule.** The island and its lyric capsule are the only objects on the sheet that both cast a shadow and move. Everything else is printed, ruled or flat. If a panel starts to float, it has stopped being part of the drawing.

## Shapes

The page's instruments are square: 2px corners on buttons and the download stamp, 0 on title blocks, panels and the size card, square toggles and checkboxes. The exceptions are the product's own geometry: the island's bottom corners are 18px closed and 28px open (24px on mobile), the lyric capsule is a 999px pill, the cover is a 6px square and the brand icon is 7px. The island's top edge is flush with the screen edge; a 1.5px graphite rule is the screen's top edge. The notch is clipped by `overflow: clip`, not drawn as a rounded card. The blue download plate carries a 1px white inset border 10px in from the edge, plus CSS crop ticks and a functional barcode. The pinned plate is a paper rectangle with two tape strips at 2.4°; the reference print is multiplied onto the paper so its white ground disappears.

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
A 64px paper strip with a 1px rule. The brand is the 32px ink icon plus 22px/600 lowercase `iiisland`; the three links are 14px, underlined on hover in Blueprint Ink; the download is the blue stamp. At ≤760 the links disappear and the brand plus the stamp remain. The nav does not stick; it is the top of the sheet.

### The Island (signature)
A black notch hanging from the sage screen's top edge, 440 × 266 open and 280 × 44 closed on desktop, 330 × 250 capped open panel on mobile. Bottom radii 18/28/24. It and its lyric capsule are the only shadowed, moving objects. The closed state is a mini cover, the track title and an equalizer; the desktop open state is a 10px source line with a chevron, an 80px app-icon cover on a track-tinted 6px square, the title/artist/lyric, a ruled seek bar with timecodes, a white circular play control and a 104px volume fader. On mobile the source line, lyric and volume are dropped; a 36px cover, one-line title/artist, 26px seek bar and 28px transport controls carry the same demo. The capsule sits to its left only while closed; it fades out when the island opens. Open/close runs on the spring described in Motion; hover opens after 140ms, leaving closes after 300ms; Escape closes and returns focus to the closed trigger; opening from the trigger moves focus into the panel.

### Capsule Detail
The lyric feature is a specimen plate, not an index. A blue capsule plate (5fr) shows the closed notch hanging from the plate's top rule, with the capsule centred beside it, an 11px paper label above the rule, the app-icon cover, a camera dot and a paper hint at the bottom. The plate carries the hero's 48px grid so it reads as the same screen. The island is 46px tall and the capsule 32px, 12px to its left. The capsule starts as `深底浅字` at 30% background — a translucent dark pill with chalk text on the blue screen, the default; `浅底深字` swaps to a paper pill with near-black text. The 0–100% ruled slider takes the dark preset down to transparent; low-contrast pairs are floored — the light preset keeps at least 60% background on the blue plate (the mobile floors the dark preset at 60%), and a 12px note explains the floor only when it applies. Both presets carry a 0.5px inset ring and a soft, alpha-scaled shadow. A real pointer hides the whole capsule (background and text) with a 0.18s blur and 0.26s retract; it floats back over 0.42–0.52s, and a fixed `.cap-hit` wrapper keeps the hover target from moving. A static curved dashed arrow runs from the lower-right up to just below the capsule, ending in a paper arrowhead; it is a drawing, not a simulation — no cursor, no motion, no fade and no hover state. The right column (7fr) is a ruled control sheet: a split `深底浅字 / 浅底深字` control with a blue-filled selected cell, a 2px ruled slider with a 12px square Blueprint thumb, and a 2×2 hairline grid of the four real auto-hide triggers (mouse over, pause, screenshot, app menu), each with a 20px line icon and a 12px note. A 12px caption below the plate records that the appearance persists and that lyric availability depends on the track and source. The scene is `aria-hidden`; the controls stay keyboard-operable, and hover hiding is limited to `(hover: hover) and (pointer: fine)`. The mobile layer uses its own 8s authored cursor loop for its hide demo; the desktop arrow is static.

### Player Schedule
A hairline-separated list of 76px rows: 44px number, 40px player name, a 21px arrow that appears on hover and stays on the active row. The active row is graphite, its number Blueprint Ink. The detail sheet is a paper panel with a 1px rule and no radius: a 58px multiply-treated icon, the player name, a live dot, a three-row capability table with 5px status squares (filled blue for supported, hollow for partial/unsupported), the authorization note, a 17px square checkbox and the detection note. QQ 音乐 and 网易云音乐 disable volume/mute and mark transport as system-media-focus dependent.

### Toggles
22px square checkboxes, 1px Graphite Soft border, 0 radius; checked is Blueprint Blue with a white check. The checkbox sits at the end of a label row so the whole row is the target. The auto-detect checkbox follows the same geometry at 17px.

### FAQ Notes
Native `<details>` rows in a paper list: the question at `clamp(18px,2vw,24px)`, a CSS plus that rotates to a cross, a 1px rule between rows, and answers under the question with a 65ch measure. Blue appears only on the "查看项目说明" link. The first row opens the answer without a card or a modal.

### Pinned Reference Plate
A paper print of the existing ink app icon, 9px padding, 1px border, 2.4° rotation, two tape strips and a multiplied image. It is decorative but meaningful brand evidence; it is not a fake app screenshot. Hidden at ≤900.

### Size Drawing
A paper card on the sage field, 1:1: a 440 × 266 black notch and a 280 × 44 collapsed state, a 1.5px screen edge with end ticks, blue labels "收起 / CLOSED 280 × 44" and "展开 / OPEN 440 × 266", and a 4s CSS-only alternating morph that starts from the open state. Its layout box stays fixed while an inner clipped shape animates width, height and bottom radii; the expanded content clears before the shrink and the collapsed content appears only after the shape has closed, so no text is ever exposed mid-morph. It never clones the transport; it shows only the app-icon cover, title, artist and lyric. The open state is a compact now-playing block centred in the shape: an 84px cover beside a text column that stacks the title, artist and a 14px lyric under the metadata; at ≤480 the cover is 64px and the lyric 13px. Static open under reduced motion or no JavaScript.

## Motion

Motion belongs to the living object, and it moves unhurried. Opening takes 660ms on `cubic-bezier(.4,.44,.2,1.16)`: a soft wind-up, one long glide, and 2% of overshoot — about 4px of width and 5px of height — that reads as a settle rather than a bounce before it comes back to rest. Closing takes 480ms on `cubic-bezier(.4,.3,.24,1)` and never overshoots: it withdraws, it does not snap. Hover opens after 140ms and closes 300ms after the pointer leaves, so the panel answers a deliberate glance rather than a passing cursor. The dimension lines ride the island's exact curve in both directions, because they measure it.

The reveal is staged, never simultaneous. The panel is laid out once at its open size and cropped by the growing island, so the morph resizes one box instead of reflowing the player on every frame. The closed state's cover, title and equaliser fade out over 300ms while the island is still opening; the player only materialises after 260ms, when the box is four-fifths open and no text can be caught mid-crop, and its contents rise 16px on a softer spring. The lyric capsule keeps its width and is carried left by the rail as the island widens, then lets go and fades over 300ms — it is never squeezed to zero, and the rail's grid never changes shape mid-morph. A track change re-uses the same spring at 580ms; the plotted-sheet entrance runs 1.05s. Under `prefers-reduced-motion` every transition and animation is off and the hero holds its open state.

## Do's and Don'ts

### Do:
- **Do** keep the warm paper ground, graphite ink and the single Blueprint Blue; use Blueprint Ink for small blue text on sage or pale fields.
- **Do** draw with 1px hairlines, the 24/48 module, title blocks, dimension lines and crop-like ticks; the drawing is the layout.
- **Do** keep the island and its lyric capsule as the only shadowed, soft, moving objects, and the capsule as the only pill.
- **Do** keep the native system stack as the display and body voice; the product is a Mac app and the page should sound like the Mac.
- **Do** keep the headline the largest type, displays one step down and labels at 11px/tracked.
- **Do** label the demo as a web interaction with no audio and the songs/lyrics/covers as original synthetic content.
- **Do** preserve keyboard focus, the skip link, reduced-motion static states, the no-JS reading path and the 44px+ controls.

### Don't:
- **Don't** turn paper sections into rounded cards, add icon tiles, gradient buttons, glass/blur, coloured left borders or hard offset shadows.
- **Don't** put a kicker or eyebrow above a heading; the heading carries its own weight and is never a generic eyebrow.
- **Don't** add a webfont, a second accent, a dark hero field, a fake app screenshot, invented testimonials or benchmark claims.
- **Don't** scatter blue as decoration or let it own a field other than the download plate; blue must measure or act.
- **Don't** give every section the same entrance animation or a floating shadow; one authored moment (the sheet plotting in) is enough.
- **Don't** "fix" the intentional paper palette, the drafting grid or the functional barcode by replacing the world; they are the system.
- **Don't** use the island's rounded, shadowed language on ordinary panels; that language belongs to the product.

---

# Mobile Layer (≤760px): "Cinema Black"

移动端与桌面端是两套并行的设计语言。桌面端保持上述「屏幕剖面图」体系不变；移动端在 `website/mobile.css` 中以独立设计层覆盖（`<link media="(max-width: 760px)">` + 文件内媒体查询双重限定），参考 apple.com 的产品页语式。移动端专属 DOM（`.mac-stage`、`.mac-caption` 与两个功能说明区 `.m-capsule-sec`、`.m-appear-sec`）以 `hidden` 属性挂载，桌面端不渲染。

移动端页面结构（v4，按产品负责人反馈精简）：黑 hero（标题 + 文字链接 CTA + MacBook 演示动画）→ 胶囊歌词（浅灰场，**可交互**）→ 灵动岛外观（黑场）→ 尺寸（浅灰场）→ 播放器（白场）→ FAQ（浅灰场）→ 页脚（保留原内容结构——大字标／标语／链接／致谢——以移动端语汇重排：白场居中、墨色字标）。移动端**隐藏**：顶部导航、交互演示（在线体验）、歌词演示区、蓝色下载块——四者均完整保留在桌面端。这是对 PRODUCT.md「蓝色下载块保留」与「落地页含交互演示」两条约束的移动端豁免，由产品负责人决定；下载入口在移动端为 hero 的文字链接。

## 移动端核心规则

- **色场节奏代替分隔线**：黑（hero、外观区）与白／浅灰 #f5f5f7（说明区）交替，分区之间不加 hairline。
- **唯一强调色**：#0071e3（状态点、选中态）、#0066cc（浅底链接）、#2997ff（深底链接与 hero CTA）。
- **排版**：系统字体不变；标题居中、600 字重、负字距（h1 clamp(40px,10.8vw,52px)/1.08；h2 clamp(28px,7.8vw,34px)）；次级文字 #6e6e73（浅底）/ #a1a1a6（深底），满足 AA。
- **CTA**：Apple 式文字链接（蓝色 + ›），无药丸按钮；18px 圆角卡片承载图示。
- **触达**：可交互控件 ≥44×44px（FAQ 行、播放器行、开关行、胶囊演示的分段控件与滑杆）。
- **节奏**：循环动效整体提速——MacBook 主循环 6.5 秒；尺寸往返单程移动端 2.4 秒（桌面保持 4 秒）；外观区岛体 7 秒弹出收起一轮；胶囊自动隐身演示 8 秒一轮（指针靠近 → 胶囊模糊隐去 → 指针离开 → 浮现）。

## MacBook 演示动画（`.mac-stage`，签名组件）

纯 CSS 6.5 秒主循环（v4 提速），无 JS 依赖，严格按真机比例：屏幕 16:10（1512×945），收起岛 = 屏宽 18.5%（280×33pt），展开岛 = 屏宽 29.1% × 屏高 19%（440×180pt）。面板内容抽象化（色块封面 + 两条信息条 + 单行控件：三个圆点 + 进度条），不含具体文字——该尺度下文字不可读，抽象化既诚实又干净。故事线：收起态（左耳封面、右耳 4 根频谱条、深底歌词胶囊贴左，对应应用默认「深底浅字」）→ 弹簧过冲展开 → 进度推进、封面换色示意切歌 → 收起 → 无缝循环。Dock 与抽象菜单栏刻度暗示「一台在用的 Mac」。`prefers-reduced-motion` 下定格为展开态静帧。

## 新增功能说明区（移动端专属）

- **胶囊歌词区**（`.m-capsule-sec`，浅灰场，可交互）：壁纸小景（140px 高卡片）上收起态小岛自顶缘垂下，真实胶囊在其左侧 12px 处**与小岛同轴居中**悬挂（top 16.5px + translateY(-50%)），随下方白色控件卡联动——iOS 式分段控件切换「深底浅字 / 浅底深字」预设（rgba(38,38,41,α) / rgba(250,250,252,α)，含随 α 缩放的描边），不透明度滑杆 0–100% 实时调节背景 α（0% 全透、100% 实色，文字强度不变，默认浅底深字 + 0% 背景（全透明，文字保留））；为保证可读，「深底浅字」在浅色壁纸上最低保留 60% 底色并显示说明，「浅底深字」仍可 0%。**演示区自绘一枚鼠标指针，以 8 秒循环从右下方靠近歌词：指针停在胶囊上时整枚胶囊（背景与文字）向右微收、模糊并隐去，指针离开后重新浮现**。动画由 `.m-cap-live`（隐去）与 `.m-cap-pointer`（位移）两条同周期关键帧组成，指针尖端对准胶囊中心；动画不依赖真实鼠标，触屏同样播放，循环在进入视口时播放、离开即冻结；减少动态效果时隐藏指针并定格胶囊。「自动隐身」沿用 2×2 图标卡列出四个真实触发条件（鼠标经过／播放暂停／系统截图／打开应用菜单）。控件逻辑在 `script.js`（`#m-cap-live` / `#m-cap-alpha` / `[data-cap-preset]`），无 JS 时静止展示默认预设。
- **灵动岛外观区**（`.m-appear-sec`，黑场）：两块并排壁纸瓷砖各垂下一枚小岛——经典黑（纯黑 + 投影）与液态玻璃（rgba(255,255,255,.18) + backdrop blur(14px) saturate(180%) + 白色内描边，对应 macOS 26 NSGlassEffectView 的观感）。小岛收起时仅占瓷砖宽 56%（不再横贯区域，接近真机收起的比例），以 7 秒循环从顶缘向下弹出（过冲至 74% × 52px，停留于 71% × 48px，封面与频谱同步放大）再收回略窄于收起态后复位；两块瓷砖同步播放，比较的是材质而非时序。循环由 `IntersectionObserver` 在进入视口时播放（`html.motion-ready` + `.is-live`），离开即冻结；减少动态效果时定格为 56% × 26px 的收起态。功能列表覆盖日夜模式与随播放器启动。
- 两区文案均取自 README 已确认的产品事实，无夸大表述。

## 滚动浮现

`script.js` 仅在 ≤760px 且允许动效时向 `<html>` 添加 `reveal-ready` 并观察 `.section/.download`（进入视口加 `.arrive`）。隐藏态由 `html.reveal-ready` 门控——无 JS 时类名不存在，内容全部可见；减少动态效果时不启用且显式复位。


## 0.8.24 胶囊演示同步（2026-11-05）

本节替代上文的深底浅字／浅底深字与最低底色规则。背景统一使用网页近似玻璃效果，只切换浅色／深色字体；透明度滑杆及手动输入支持 0–100%、一位小数，初始 4%，0% 保留完整玻璃、100% 隐去背景。桌面初始浅字，移动初始深字；不再按字体改变底色或强制最低不透明度。深色字体在原生应用的独立全屏空间临时变浅，固定浅色不检测，网页只说明该系统行为。保留现有桌面与移动设计体系、自动隐身演示；网页玻璃为效果示意，不冒充 NSGlassEffectView。

手机端不提供透明度滑杆、输入框或透明度调节说明，仅保留字体选择与固定玻璃预览；桌面透明度控件保留。
