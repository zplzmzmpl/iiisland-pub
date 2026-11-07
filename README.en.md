<p align="center"><img src="assets/app-icon.png" width="112" alt="iiisland app icon"></p>
<h1 align="center">iiisland</h1>
<p align="center">Your music, a glance away.<br>Playback controls and synced lyrics at the top of your Mac.</p>
<p align="center"><a href="README.md">简体中文</a> · <strong>English</strong></p>
<p align="center"><a href="https://iiisland.pages.dev">Website</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/releases/latest">Download for Mac</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/issues">Report an issue</a></p>

![Preview of the iiisland product page](assets/website-preview.jpg)

*The image shows an interactive website illustration with original demo songs and lyrics. It is not a screenshot of a connected music player.*

[Try the website](https://iiisland.pages.dev): expand or collapse the island, switch tracks, adjust progress and volume, choose the capsule's text color, adjust transparency on desktop and hover the lyric to see it hide, and choose a player to see its supported features. An automatically looping size animation shows that collapsed and expanded width and height can be adjusted in the app, with no controls to operate. Desktop visitors can use playback and transparency controls; phones retain capsule text-color choices. The website does not play audio.

## Keep your music within reach

See the cover, check a lyric, or skip a track without switching windows. iiisland keeps your music at the top of the screen, compact while you work and ready to expand on hover or click.

- **Follow what is playing.** Works with Apple Music, Spotify, QQ Music and NetEase Cloud Music. Automatically follows the player that most recently started playback, or stays with a player you choose.
- **One lyric, two places.** Lyrics sit beside the collapsed island and move into the expanded panel. All four automatic capsule hiding options default to off and can be enabled individually. In-island lyrics default to on and follow the island switch, with a separate setting available.
- **Fine-tune lyric timing.** Enter an offset, adjust it in 100 ms steps or reset it under Lyrics → Time Sync, within the same Settings window.
- **Fit your screen.** Adjust collapsed and expanded width and height separately, with layouts for displays with or without a notch.
- **Choose your look.** Use classic black or native Liquid Glass on macOS 26. Switch between day and night modes, with your choice remembered.
- **Launch with your player.** Enable the option to open iiisland when a supported music player starts.

## Player support

| Player | Track, artwork and lyrics | Playback, skipping and seeking | Volume, shuffle and repeat |
| --- | --- | --- | --- |
| Apple Music | Supported | Supported | Supported |
| Spotify | Supported | Supported | Supported |
| QQ Music | Supported | Depends on system media focus and available capabilities | Not yet supported |
| NetEase Cloud Music | Supported | Depends on system media focus and available capabilities | Not yet supported |

Lyrics use online services, available embedded lyrics and a local cache. Availability and sync accuracy vary by track and provider. Start a song in QQ Music or NetEase Cloud Music before connecting for the first time.

An optional setting under Player connects browsers, video players and other apps that publish a macOS media session. It is off by default. Playing music takes priority; other media does not request lyrics, and available controls depend on the source and macOS version.

## Download and install

Current version: **0.8.27 · build 36**, with the installer updated on **November 7, 2026**.

Requires an **Apple Silicon (arm64) Mac running macOS 14 or later**. An Intel installer is not currently available. Native Liquid Glass requires macOS 26.

1. Download `iiisland-0.8.27-arm64.dmg` from [Releases](https://github.com/zplzmzmpl/iiisland-pub/releases/latest).
2. Open the DMG and drag `iiisland.app` into the adjacent `Applications` folder.
3. Launch iiisland from Applications and play a song in your music player.

To update, quit the previous version before replacing the app.

**First launch:** The installer uses an ad-hoc local signature and has not been Developer ID signed or notarized by Apple. macOS may block the first launch. Apple Music or Spotify may request Automation permission on first connection. Reading media information from QQ Music and NetEase Cloud Music does not require Accessibility or Screen Recording permission.

### Verify the download

Download both the DMG and its matching `.sha256` file, then run this in the download directory:

```sh
shasum -a 256 -c iiisland-0.8.27-arm64.dmg.sha256
```

SHA-256 for this installer:

```text
d4fe9e1dbc9faaaa00f3f43b435bc885598abd832f02490d4c6a54a09ae885b7
```

## What is new in 0.8.27

- Menus now contain only Settings and Quit. Adjust lyric timing, day/night mode and text colors in one Settings window.
- Choose text colors with inline swatches or a six-digit HEX value. The chosen color stays fixed across fullscreen, desktops and appearance changes.
- In-island lyrics are enabled by default and turn off/on with the island.
- All four capsule auto-hide options now default to off: pointer hover, pause, screenshots and the app menu. Enable them individually in Settings; saved choices are preserved.
- Migrated to Swift 6, with explicit concurrency boundaries for lyric loading and caching, shared background events and improved cancellation and resource lifetimes.

See the [0.8.27 release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.27).

### Previously released: 0.8.24

- The capsule now uses one clear Liquid Glass background with light or dark text. Systems below macOS 26 use a frosted-glass fallback.
- Dark text temporarily becomes light only in the current display's native fullscreen Space, then returns on exit. Filling or maximizing a window on a regular desktop, or adding ordinary desktops, does not trigger it. Fixed light text never starts detection.
- Adjust transparency with the slider or enter 0%–100% to one decimal place. At 0% the full glass effect remains; at 100% only the background disappears. Defaults to light text and 4% transparency.
- Removed automatic background sampling and its permission path. No Screen Recording or Accessibility permission is requested for font switching. Font cards now stay on one line; layout choices are limited to with or without a notch, with a corrected illustration.
- Idle titles now read “is that u ?”. Passed 1,734 capsule checks, 334 full-app host checks and fullscreen lifecycle checks, including release of 60 Settings windows.

Fullscreen switching uses a non-public system Space API. If reading fails, the selected dark text remains. Native fullscreen was verified on this host; other OS versions and display combinations still require testing.

See the [0.8.24 release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.24).

### Previously released: 0.8.23

- Lyrics → Capsule Background offers two fixed presets: a dark background with light text, or a light background with dark text. The capsule no longer follows the app's day/night mode.
- Adjust background transparency from 0% to 100%, with a live preview and reset to defaults. At 0% the background is opaque; at 100% the background and outline are transparent. Text strength is unaffected.
- The preset and transparency persist across restarts. Appearance changes preserve visible lyric windows and line transitions without searching for lyrics again.
- Passed 1,549 capsule checks and 332 full-app host checks, including release checks for 60 actual Settings windows. Native UI checks also verified preset selection, transparency, persistence after restarting and reset.

See the [0.8.23 release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.23) for details.

### Previously released: 0.8.22

- Fix intermittent hover expansion, stale control highlights during rapid pointer movement, and delayed island/status-bar menu highlighting after opening or closing Settings.
- Wait for actual activation before opening a menu. Return focus to the previous app when dismissed, and keep Settings focused when opened from the menu.
- Narrow playback-driven view updates and remove unused animations. Serialize artwork decoding and discard outdated requests during rapid track changes.
- Improve resource release when Settings closes. Synchronize player-launch preferences in the background and retain the final choice during rapid changes.
- All 20 regression scripts passed, including 332 full-app host checks, release checks for 60 actual Settings windows and 333 native hover/menu checks. The user confirmed normal operation of the optimized build.

The first Settings visit loads system controls and process caches. Memory need not return to the baseline from before that first visit; this version does not promise a fixed reduction. Lyric calibration, automatic hiding, player support and optional system media remain available.

Screenshot hiding detects the Command-Shift chord and the system Screenshot tool. Other Command-Shift shortcuts also hide briefly; very fast or remapped shortcuts and third-party capture or recording may still show the capsule. Browser and video-player compatibility depends on their system media-session support.

See the [release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.22) for details.

## Feedback and acknowledgements

Use [Issues](https://github.com/zplzmzmpl/iiisland-pub/issues) to report problems. Include your macOS, iiisland and player versions, reproduction steps and relevant screenshots. Hide personal information before sharing screenshots.

Built on work from [boring.notch](https://github.com/TheBoredTeam/boring.notch), [LyricsX](https://github.com/MxIris-LyricsX-Project/LyricsX) and related open-source projects. See [third-party notices](NOTICE.md) for component origins and licenses.

This repository contains product information, usage documentation, issue tracking, downloadable releases and the website source. The macOS application source is not included. Third-party rights and license terms continue to apply.

## Website source and automatic deployment

The website source lives in [website/](website/) and uses plain HTML, CSS and JavaScript. Cloudflare Pages connects to this repository's `main` branch with `website` as the build output directory and no build command. Pushing website changes triggers an automatic deployment. See the [website maintenance guide](website/README.md) for configuration details.
