<p align="center"><img src="assets/app-icon.png" width="112" alt="iiisland app icon"></p>
<h1 align="center">iiisland</h1>
<p align="center">Your music, a glance away.<br>Playback controls and synced lyrics at the top of your Mac.</p>
<p align="center"><a href="README.md">简体中文</a> · <strong>English</strong></p>
<p align="center"><a href="https://iiisland.pages.dev">Website</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/releases/latest">Download for Mac</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/issues">Report an issue</a></p>

![Preview of the iiisland product page](assets/website-preview.jpg)

*The image shows an interactive website illustration with original demo songs and lyrics. It is not a screenshot of a connected music player.*

[Try the website](https://iiisland.pages.dev): expand or collapse the island, switch tracks, seek, select a lyric line, and preview appearance and size settings. The browser demo does not play audio.

## Keep your music within reach

See the cover, check a lyric, or skip a track without switching windows. iiisland keeps your music at the top of the screen, compact while you work and ready to expand on hover or click.

- **Follow what is playing.** Works with Apple Music, Spotify, QQ Music and NetEase Cloud Music. Automatically follows the player that most recently started playback, or stays with a player you choose.
- **One lyric, two places.** Lyrics sit beside the collapsed island and move into the expanded panel. Toggle menu bar and in-island lyrics separately, and optionally keep the last line visible when paused.
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

## Download and install

Current version: **0.8.16 · build 25**, with the installer updated on **October 20, 2026**.

Requires an **Apple Silicon (arm64) Mac running macOS 14 or later**. An Intel installer is not currently available. Native Liquid Glass requires macOS 26.

1. Download `iiisland-0.8.16-arm64.dmg` from [Releases](https://github.com/zplzmzmpl/iiisland-pub/releases/latest).
2. Open the DMG and drag `iiisland.app` into the adjacent `Applications` folder.
3. Launch iiisland from Applications and play a song in your music player.

To update, quit the previous version before replacing the app.

**First launch:** The installer uses an ad-hoc local signature and has not been Developer ID signed or notarized by Apple. macOS may block the first launch. Apple Music or Spotify may request Automation permission on first connection. Reading media information from QQ Music and NetEase Cloud Music does not require Accessibility or Screen Recording permission.

### Verify the download

Download both the DMG and its matching `.sha256` file, then run this in the download directory:

```sh
shasum -a 256 -c iiisland-0.8.16-arm64.dmg.sha256
```

SHA-256 for this installer:

```text
ad0afa649a5d2d7c3f97ddac8c9823e5ae9f25385dd77298b7d8e68231ce56b7
```

## What is new in 0.8.16

- Fixed long lyric lines being clipped too early at the right edge, keeping scrolling text continuous and the end of each line visible.
- Improved lyric capsule transitions during rapid line changes and fixed island corners.
- Added automatic detection and launch integration for all four supported players.
- Added a handwritten settings wordmark that adapts to day and night modes.

See the [release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.16) for details.

## Feedback and acknowledgements

Use [Issues](https://github.com/zplzmzmpl/iiisland-pub/issues) to report problems. Include your macOS, iiisland and player versions, reproduction steps and relevant screenshots. Hide personal information before sharing screenshots.

Built on work from [boring.notch](https://github.com/TheBoredTeam/boring.notch), [LyricsX](https://github.com/MxIris-LyricsX-Project/LyricsX) and related open-source projects. See [third-party notices](NOTICE.md) for component origins and licenses.

This repository contains product information, usage documentation, issue tracking and downloadable releases. Application source code is not included. Third-party rights and license terms continue to apply.
