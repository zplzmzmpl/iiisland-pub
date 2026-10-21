# Third-party notices / 第三方致谢

iiisland incorporates or adapts work from the projects below. It runs as its own application and does not require separate boringNotch or LyricsX apps. This public distribution repository does not replace or alter the licenses of those components.

iiisland 使用或改编了以下项目的成果，以独立应用运行，无需另外启动 boringNotch 或 LyricsX。本公开发布仓库不改变这些组件的许可证。

| Project | License / source basis | Contribution |
| --- | --- | --- |
| [TheBoredTeam / boring.notch](https://github.com/TheBoredTeam/boring.notch) | [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html) | Trimmed notch interface, island geometry, hover interactions, music activity and playback UI |
| [MxIris-LyricsX-Project / LyricsX](https://github.com/MxIris-LyricsX-Project/LyricsX) | [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/), v1.9.0-beta.13, commit 372997c | Menu bar lyric timing and pause-persistence behavior |
| [MxIris-LyricsX-Project / MarqueeLabel](https://github.com/MxIris-LyricsX-Project/MarqueeLabel) | v0.1.0, commit 83f13dc; see upstream license notices | Adapted lyric reveal and scrolling component |
| [sindresorhus / Defaults](https://github.com/sindresorhus/Defaults) | MIT | Preference storage |
| [MxIris-LyricsX-Project / LyricsKit](https://github.com/MxIris-LyricsX-Project/LyricsKit) | MPL-2.0, 1.8.3, commit 6f071990d0c9c6f48d29284db805990bffb912ed | Lyric parsing, provider access and adapted provider logic |
| [MxIris-LyricsX-Project / MusicPlayer](https://github.com/MxIris-LyricsX-Project/MusicPlayer) | MPL-2.0, 1.8.5; source reference only | Apple Music and Spotify scripting definitions; the MusicPlayer product is not linked |
| [Innei / YohakuCompanion](https://github.com/Innei/YohakuCompanion) | MIT, copyright © 2025 Innei; reference commit 470bc72ae78b2465c1ddfb8fcb48f1fff63040b1 | Reference for the JXA MediaRemote bridge; its MIT notice is retained in the bundled resource |

QQ Music and NetEase Cloud Music integration uses a private macOS system media interface through the system script host. Compatibility depends on macOS and the player publishing a media session. The animated playback indicator is a visual animation and does not analyze audio.

QQ 音乐与网易云音乐接入使用 macOS 系统私有媒体接口，兼容性取决于系统版本及播放器媒体会话。播放频谱为视觉动画，不读取或分析音频。

Upstream source links are provided for attribution. They are not a substitute for the corresponding source of the modified iiisland application. License notices alone do not satisfy any applicable corresponding-source distribution obligations under GPL or MPL.

上游链接用于注明来源，不能替代 iiisland 修改版本的对应源码；保留许可证致谢也不能替代 GPL 或 MPL 下可能适用的对应源码提供义务。
