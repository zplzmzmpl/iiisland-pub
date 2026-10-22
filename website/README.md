# iiisland 宣传网页

官网：https://iiisland-pub.pages.dev。旧网址 https://iiisland.pages.dev 跳转到新官网。

纯静态 HTML/CSS/JavaScript，无需安装依赖或构建。公开网站源码在本仓库的 `website/` 中维护，应用源码仍保留在私有仓库。

页面保持暖灰、浅绿、灰蓝与蓝色主操作配色，蓝色下载区保留既定设计。播放控制与歌词共享状态。“调成你的样子”改为独立的尺寸动效：进入视野后自动播放一次（4.8 秒），说明应用中收起与展开的宽高可独立调整，结束后保留展开示意。该区域不包含尺寸滑块、外观／屏幕选项、展开／收起或日夜操作，不克隆播放组件，不使用 JavaScript 测量或缩放。

## 本地预览

直接在浏览器打开 `index.html`，或用静态文件服务器将 `website/` 作为网站根目录。网页演示不播放音频或连接实际播放器；曲目、歌词和封面为原创演示内容。尺寸示意在关闭 JavaScript 或启用系统“减少动态效果”时保持静态展开，说明文字始终可读。

## Cloudflare Git 部署

连接 GitHub 仓库 `zplzmzmpl/iiisland-pub`，使用以下设置：

| 设置 | 值 |
| --- | --- |
| 生产分支 | `main` |
| 框架 | None |
| 根目录 | 仓库根目录 |
| 构建命令 | 留空 |
| 构建输出目录 | `website` |

提交并推送 `website/` 中的更新后，Cloudflare 自动部署，无需手动上传文件夹。可将构建监视路径限定为 `website/**`，避免仅更新宣传 README 时触发部署。

网站输出包含 `index.html`、`style.css`、`script.js` 、`404.html` 与 `assets/app-icon.png`；本目录 README 是维护文档。临时 TXT 验证文件只在本地保留，由 `.gitignore` 排除，不提交、不部署。

关闭 JavaScript 后仍可阅读说明、FAQ 和下载链接；遵循系统减少动态效果。无外部字体、统计脚本或第三方运行时。
