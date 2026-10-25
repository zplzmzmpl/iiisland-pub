# iiisland 宣传网页

官网：https://iiisland.pages.dev。通过 Cloudflare Pages 的 Git 连接自动部署。

页面使用 HTML/CSS/JavaScript，无需安装依赖或构建。Cloudflare Pages 的 `_worker.js` 仅为旧域名处理回迁跳转，其余请求交给静态资源服务。公开网站源码在本仓库的 `website/` 中维护，应用源码仍保留在私有仓库。

页面保持暖灰、浅绿、灰蓝与蓝色主操作配色，蓝色下载区保留既定设计。播放控制与歌词共享状态。“调成你的样子”使用独立的尺寸动效：进入视野后自动往返循环播放（单程 4.8 秒），说明应用中收起与展开的宽高可独立调整。该区域不包含尺寸滑块、外观／屏幕选项、展开／收起或日夜操作，不克隆播放组件，不使用 JavaScript 测量或缩放。

岛体轮廓通过 CSS 裁切变化，收起态底部保持 18px 圆角，展开后自然过渡至 30px，避免非等比缩放将圆角压扁。封面与歌词放在同一裁切轮廓内，展开空间足够后再淡入，避免过渡帧露出岛体。

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

网站输出包含 `index.html`、`style.css`、`script.js`、`404.html`、`assets/app-icon.png`，以及部署配置 `_worker.js` 和 `_routes.json`；本目录 README 是维护文档。临时 TXT 验证文件只在本地保留，由 `.gitignore` 排除，不提交、不部署。

关闭 JavaScript 后仍可阅读说明、FAQ 和下载链接；遵循系统减少动态效果。无外部字体、统计脚本或第三方运行时。

## 旧域名与历史跳转缓存

正式地址为 `https://iiisland.pages.dev`。保留 `iiisland-pub` Pages 项目作为回迁入口，并连接本仓库的 main，以便部署 `_worker.js`。旧域名请求使用 `302` 和 `Cache-Control: no-store` 返回正式域名，附带专用回迁参数，绕过曾被手机浏览器永久缓存的旧 `iiisland → iiisland-pub` 301；不能直接反向跳到无参数首页，否则可能循环。路径和原有查询参数保持，片段由浏览器继承。

正式页面加载后用 `history.replaceState` 移除回迁参数，地址恢复简洁；关闭 JavaScript 时仍能通过服务端跳转访问页面。预览域名继续提供预览。样式、脚本与图片通过 `_routes.json` 排除在函数调用之外。

验证跳转逻辑：`node --test tests/website-redirect.test.mjs`（在仓库根目录运行，Node 22+）。
