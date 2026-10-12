# 黑大帅的知识库 (Black Marshal's Knowledge Base)

> Building a personal knowledge base while sharing what I learn, gain, and feel. Welcome to read, guide, and discuss!

A personal blog built with [Hexo](https://hexo.io/) and the [Redefine](https://redefine.ohevan.com/) theme, deployed on GitHub Pages.

🌐 **Live Site**: https://small-5954.github.io/

## ✨ Tech Stack

- **Framework**: Hexo 8.x
- **Theme**: [hexo-theme-redefine](https://github.com/EvanNotFound/hexo-theme-redefine) v2.9.0
- **Deployment**: GitHub Pages + GitHub Actions (automatic build & deploy)

## 📁 Project Structure

```
My_Blog/
├── source/            # Blog source content
│   ├── _posts/        # Posts (Markdown)
│   ├── about/         # About page
│   ├── tags/          # Tags page
│   └── categories/    # Categories page
├── themes/
│   └── redefine/      # Redefine theme
├── scaffolds/         # Post templates
├── _config.yml        # Site configuration
└── .github/workflows/ # GitHub Actions deployment
```

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Local preview (default: http://localhost:4000)
npm run server

# Generate static files
npm run build
```

## ✍️ Writing Posts

```bash
# Create a new post (automatically creates a same-name asset folder for images)
hexo new "Post Title"

# Post front-matter example
# ---
# title: Post Title
# date: 2026-10-12 11:00:00
# categories:
#   - Tech Notes
# tags:
#   - Hexo
# ---
```

Posts live in the `source/_posts/` directory. To embed images, use:

```markdown
{% asset_img image-name.png Image description %}
```

## 📤 Publishing

After pushing code, GitHub Actions automatically builds and deploys to GitHub Pages — no manual steps required:

```bash
git add -A
git commit -m "message"
git push origin main
```

The site updates at https://small-5954.github.io/ within 1-2 minutes after pushing.

## 📄 License

Blog content is copyrighted by the author. The Redefine theme is licensed under [GPL-3.0](https://github.com/EvanNotFound/hexo-theme-redefine/blob/main/LICENSE).
