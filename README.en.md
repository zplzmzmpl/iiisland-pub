<p align="center"><img src="assets/app-icon.png" width="112" alt="iiisland app icon"></p>
<h1 align="center">iiisland</h1>
<p align="center">Your music, a glance away.<br>Playback controls and synced lyrics at the top of your Mac.</p>
<p align="center"><a href="README.md">简体中文</a> · <strong>English</strong></p>
<p align="center"><a href="https://iiisland.pages.dev">Website</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/releases/latest">Download for Mac</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/issues">Report an issue</a></p>

![Preview of the iiisland product page](assets/website-preview.jpg)

*The image shows an interactive website illustration with original demo songs and lyrics. It is not a screenshot of a connected music player.*

[Try the website](https://iiisland.pages.dev): expand or collapse the island, switch tracks, adjust progress and volume, select a lyric line to seek, and choose a player to see its supported features. An automatically looping size animation shows that collapsed and expanded width and height can be adjusted in the app, with no controls to operate. The playback demo works on phones and computers and does not play audio.

## Keep your music within reach

See the cover, check a lyric, or skip a track without switching windows. iiisland keeps your music at the top of the screen, compact while you work and ready to expand on hover or click.

- **Follow what is playing.** Works with Apple Music, Spotify, QQ Music and NetEase Cloud Music. Automatically follows the player that most recently started playback, or stays with a player you choose.
- **One lyric, two places.** Lyrics sit beside the collapsed island and move into the expanded panel. Choose automatic capsule hiding for pointer hover, pause, screenshots or the app menu; lyrics return when the condition clears. In-island lyrics have a separate switch.
- **Fine-tune lyric timing.** Enter an offset, adjust it in 100 ms steps or reset it from Lyrics settings or the menu's lyric-offset entry. The calibration window stays open while you adjust and listen in your player.
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

Current version: **0.8.21 · build 30**, with the installer updated on **October 26, 2026**.

Requires an **Apple Silicon (arm64) Mac running macOS 14 or later**. An Intel installer is not currently available. Native Liquid Glass requires macOS 26.

1. Download `iiisland-0.8.21-arm64.dmg` from [Releases](https://github.com/zplzmzmpl/iiisland-pub/releases/latest).
2. Open the DMG and drag `iiisland.app` into the adjacent `Applications` folder.
3. Launch iiisland from Applications and play a song in your music player.

To update, quit the previous version before replacing the app.

**First launch:** The installer uses an ad-hoc local signature and has not been Developer ID signed or notarized by Apple. macOS may block the first launch. Apple Music or Spotify may request Automation permission on first connection. Reading media information from QQ Music and NetEase Cloud Music does not require Accessibility or Screen Recording permission.

### Verify the download

Download both the DMG and its matching `.sha256` file, then run this in the download directory:

```sh
shasum -a 256 -c iiisland-0.8.21-arm64.dmg.sha256
```

SHA-256 for this installer:

```text
df1ccdfb328f6477f7ef044faa4aedf2f7f22789abb3cd133f970cd328272402
```

## What is new in 0.8.21

- Add a per-track lyric offset with a native number field and stepper in Lyrics settings. Adjust in 100 ms steps, type a value or reset it. Positive values show lyrics earlier; negative values delay them, within ±60 seconds.
- Open a persistent native calibration window from the status-bar or island menu. Keep adjusting while switching to your player to listen. Use native system tooltips and remove the ellipsis from the menu entry.
- Fix missing artwork in Spotify and Apple Music waiting for a later playback event to recover. Retry a limited number of times, and retain Spotify artwork when its URL briefly disappears for the same track.
- Fix the first hover failing to expand after switching apps. Recheck the pointer position and cancel stale delayed expansion tasks.
- Pass 67 lyric-timing, 42 artwork-recovery, 21 image-processing and 119 playback-position regression checks. Feature code completed external Open Code Review and a follow-up on the fix; build and signature checks passed.

The island and capsule share the offset without changing playback position. It survives pause, seeking and lyric refetching, and resets when the track or player changes. Plain-text lyrics cannot be adjusted. Artwork retries are limited; persistent source or network failures can still leave artwork unavailable.

Screenshot hiding detects the Command-Shift chord and the system Screenshot tool. Other Command-Shift shortcuts also hide briefly; very fast or remapped shortcuts and third-party capture or recording may still show the capsule. Browser and video-player compatibility depends on their system media-session support.

See the [release notes](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.21) for details.

## Feedback and acknowledgements

Use [Issues](https://github.com/zplzmzmpl/iiisland-pub/issues) to report problems. Include your macOS, iiisland and player versions, reproduction steps and relevant screenshots. Hide personal information before sharing screenshots.

Built on work from [boring.notch](https://github.com/TheBoredTeam/boring.notch), [LyricsX](https://github.com/MxIris-LyricsX-Project/LyricsX) and related open-source projects. See [third-party notices](NOTICE.md) for component origins and licenses.

This repository contains product information, usage documentation, issue tracking, downloadable releases and the website source. The macOS application source is not included. Third-party rights and license terms continue to apply.

## Website source and automatic deployment

The website source lives in [website/](website/) and uses plain HTML, CSS and JavaScript. Cloudflare Pages connects to this repository's `main` branch with `website` as the build output directory and no build command. Pushing website changes triggers an automatic deployment. See the [website maintenance guide](website/README.md) for configuration details.
