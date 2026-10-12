# 黑大帅的知识库

> 建立个人知识库的同时，分享自己的所学所得所感，欢迎大家来阅读、指导和交流。

这是一个基于 [Hexo](https://hexo.io/) 搭建的个人博客，采用 [Redefine](https://redefine.ohevan.com/) 主题，部署在 GitHub Pages 上。

🌐 **访问地址**：https://small-5954.github.io/

## ✨ 技术栈

- **框架**：Hexo 8.x
- **主题**：[hexo-theme-redefine](https://github.com/EvanNotFound/hexo-theme-redefine) v2.9.0
- **部署**：GitHub Pages + GitHub Actions（自动构建部署）

## 📁 目录结构

```
My_Blog/
├── source/            # 博客内容源文件
│   ├── _posts/        # 文章（Markdown）
│   ├── about/         # 关于页
│   ├── tags/          # 标签页
│   └── categories/    # 分类页
├── themes/
│   └── redefine/      # Redefine 主题
├── scaffolds/         # 文章模板
├── _config.yml        # 站点配置
└── .github/workflows/ # GitHub Actions 自动部署
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 本地预览（默认 http://localhost:4000）
npm run server

# 生成静态文件
npm run build
```

## ✍️ 写文章

```bash
# 新建文章（会自动生成同名资源文件夹，用于存放图片）
hexo new "文章标题"

# 文章 front-matter 示例
# ---
# title: 文章标题
# date: 2026-10-12 11:00:00
# categories:
#   - 技术笔记
# tags:
#   - Hexo
# ---
```

文章写在 `source/_posts/` 目录下，引用图片使用：

```markdown
{% asset_img 图片名.png 图片说明 %}
```

## 📤 发布

推送代码后，GitHub Actions 会自动构建并部署到 GitHub Pages，无需手动操作：

```bash
git add -A
git commit -m "说明文字"
git push origin main
```

推送后约 1-2 分钟，访问 https://small-5954.github.io/ 即可看到更新。

## 📄 许可证

博客文章版权归作者所有。主题 Redefine 采用 [GPL-3.0](https://github.com/EvanNotFound/hexo-theme-redefine/blob/main/LICENSE) 许可证。
