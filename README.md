<p align="center"><img src="assets/app-icon.png" width="112" alt="iiisland 应用图标"></p>
<h1 align="center">iiisland</h1>
<p align="center">音乐，在抬眼之间。<br>把播放控制与同步歌词，留在 Mac 屏幕顶部。</p>
<p align="center"><strong>简体中文</strong> · <a href="README.en.md">English</a></p>
<p align="center"><a href="https://iiisland.pages.dev">访问官网</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/releases/latest">下载 Mac 版</a> · <a href="https://github.com/zplzmzmpl/iiisland-pub/issues">反馈问题</a></p>

![iiisland 产品页面预览](assets/website-preview.jpg)

*画面为网页交互示意，歌曲与歌词均为原创演示内容，不是真实播放器截图。*

[在官网试用](https://iiisland.pages.dev)：展开与收起、切歌、调节进度与音量、点选歌词跳转；还可切换播放器查看支持能力。尺寸展示以自动循环动效说明收起与展开的宽高可自由调整，无需操作。播放演示支持手机与电脑，不播放音频。

## 抬眼看歌词，伸手控音乐

不用来回切换播放器。iiisland 将封面、歌曲信息、播放控制和歌词放在屏幕顶部：收起时轻巧陪伴，悬停或点击即可展开。

- **跟上你正在听的。** 支持 Apple Music、Spotify、QQ 音乐与网易云音乐；自动跟随最近开始播放的来源，也可固定常用播放器。
- **一句歌词，两种位置。** 收起时，歌词贴在灵动岛左侧；展开时，回到播放面板。胶囊可在鼠标经过、暂停、截图或打开应用菜单时自动隐藏，条件解除后恢复；岛内歌词可单独开关。
- **自己校准歌词。** 在歌词设置或菜单中的「歌词偏移」输入数值、按 100 毫秒微调或重置；校准小窗可连续操作，方便切回播放器试听。
- **适合你的屏幕。** 分别调整收起与展开的宽高，支持有刘海与无刘海屏幕布局。
- **两种外观。** 经典黑融入屏幕顶部；macOS 26 上可选择原生液态玻璃。日间与夜间模式可以手动切换并记忆。
- **随播放器启动。** 开启后，启动支持的播放器即可打开 iiisland。

## 播放器支持

| 播放器 | 歌曲、封面与歌词 | 播放、切歌与进度 | 音量、随机与循环 |
| --- | --- | --- | --- |
| Apple Music | 支持 | 支持 | 支持 |
| Spotify | 支持 | 支持 | 支持 |
| QQ 音乐 | 支持 | 取决于系统媒体焦点与可用能力 | 暂不支持 |
| 网易云音乐 | 支持 | 取决于系统媒体焦点与可用能力 | 暂不支持 |

歌词来自在线服务、可用的内嵌歌词与本地缓存；是否能取得歌词及同步精度取决于歌曲和来源。QQ 音乐与网易云音乐首次使用时，请先在播放器中播放歌曲。

也可在「播放器 → 接入其他媒体应用」中开启浏览器、视频播放器等系统媒体来源，默认关闭。应用或网页需发布系统媒体会话；播放中的音乐优先，其他媒体不查询歌词，控制能力随来源与系统版本而异。

## 下载与安装

当前版本：**0.8.22 · build 31**，安装包更新于 **2026-10-29**。

要求 **Apple Silicon（arm64）Mac、macOS 14 或更高版本**。当前不提供 Intel 安装包；原生液态玻璃需要 macOS 26。

1. 在 [Releases](https://github.com/zplzmzmpl/iiisland-pub/releases/latest) 下载 `iiisland-0.8.22-arm64.dmg`。
2. 打开 DMG，将 `iiisland.app` 拖入旁边的 `Applications` 文件夹。
3. 从“应用程序”启动 iiisland，并在音乐播放器中播放一首歌。

更新时，先退出旧版本，再替换应用。

**首次打开：** 当前安装包使用 ad-hoc 本地签名，未经 Developer ID 签名或 Apple 公证，macOS 可能阻止首次打开。首次连接 Apple Music 或 Spotify 时，系统可能请求自动化授权；QQ 音乐与网易云音乐的媒体读取不需要辅助功能或屏幕录制权限。

### 校验安装包

同时下载 DMG 与同名 `.sha256` 文件，在下载目录运行：

```sh
shasum -a 256 -c iiisland-0.8.22-arm64.dmg.sha256
```

本次安装包 SHA-256：

```text
d7d2a5f10a25726d06dfc2da159c1605b2c6fb7c79a934aa5d33f2d01bcd1269
```

## 0.8.22 有什么更新

- 修复灵动岛悬停偶发不能展开、快速移动时控件旧高亮残留，以及灵动岛和状态栏菜单高亮随设置开关变迟钝的问题。
- 打开菜单时等待实际激活，取消菜单后按需返回原应用；从菜单打开设置时设置正常获得焦点。
- 缩小播放时的界面刷新范围，移除无效动画；快速切歌时串行解码封面并丢弃过期请求，减少额外工作。
- 优化设置关闭后的资源释放，将播放器启动偏好同步移至后台，连续切换时保留最终选择。
- 20 组回归脚本通过，含 332 项完整应用宿主检查、60 次实际设置窗口释放及 333 项原生悬停/菜单检查；优化构建已由用户确认运行正常。

首次打开设置会加载系统控件与进程缓存，关闭后内存不必回到此前从未打开设置时的数值；本版不承诺固定的内存降幅。歌词偏移、自动显隐、播放器与系统媒体支持继续保留。

截图隐藏检测 ⌘⇧ 组合键与系统截图工具；其他 ⌘⇧ 快捷键也会暂时隐藏，极快按键、重映射快捷键及第三方截图／录屏可能无法隐藏。浏览器和视频播放器兼容性仍随系统媒体会话能力而异。

详见 [版本发布说明](https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v0.8.22)。

## 反馈与致谢

请通过 [Issues](https://github.com/zplzmzmpl/iiisland-pub/issues) 提交问题，附上 macOS、iiisland 与播放器版本、复现步骤及必要截图。截图前请遮盖个人信息。

感谢 [boring.notch](https://github.com/TheBoredTeam/boring.notch)、[LyricsX](https://github.com/MxIris-LyricsX-Project/LyricsX) 及相关开源项目。组件来源与许可证见 [第三方致谢](NOTICE.md)。

本仓库用于产品介绍、使用说明、问题反馈、安装包发布与官网源码维护，不包含 macOS 应用源码。第三方组件的权利与许可证继续适用。

## 网页源码与自动部署

官网源码位于 [website/](website/)，使用纯静态 HTML、CSS 和 JavaScript。Cloudflare Pages 连接本仓库的 `main` 分支，构建输出目录为 `website`，无需构建命令。推送网页更新即可自动部署，具体设置见 [网页维护说明](website/README.md)。
