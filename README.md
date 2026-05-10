# Irshan Khan — Portfolio Website

A bespoke product portfolio site for **Irshan Khan**, Product, Program & Project Manager | Innovator. Built as a static site ready for zero-config deployment on **GitHub Pages**.

---

## 🗂 Repository Structure

```
irshan-github-pages/
├── index.html          ← Main portfolio (entry point)
├── 404.html            ← Custom "page not found" page
├── css/
│   └── style.css       ← All styles (design system, layout, responsive)
├── js/
│   └── main.js         ← Scroll-reveal, mobile nav, active link tracking
├── _config.yml         ← GitHub Pages configuration
├── .nojekyll           ← Bypasses Jekyll, serves files directly
└── README.md           ← This file
```

---

## 🚀 Deploy to GitHub Pages — Step by Step

### Option A — New repository (recommended)

1. **Create a GitHub account** at github.com if you don't have one.

2. **Create a new repository** named exactly:
   ```
   irshankhan.github.io
   ```
   *(Replace `irshankhan` with your GitHub username. This special name makes it your root site.)*

3. **Upload the files.** Two ways:

   **Via GitHub website (easiest):**
   - Open the new repo → click **Add file → Upload files**
   - Drag and drop all files and folders from this zip
   - Commit directly to `main`

   **Via Git CLI:**
   ```bash
   git clone https://github.com/irshankhan/irshankhan.github.io.git
   cd irshankhan.github.io
   # Copy all files from this zip into the folder
   git add .
   git commit -m "Initial portfolio deployment"
   git push origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repo → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Click **Save**

5. **Your site goes live** at:
   ```
   https://irshankhan.github.io
   ```
   *(Takes 1–3 minutes on first deploy)*

---

### Option B — Existing repository (subdirectory)

If you already have a GitHub repo and want this in a subfolder (e.g. `/portfolio`):

1. Push all files into a `portfolio/` subdirectory of your repo
2. In **Settings → Pages**, set Source to `main` branch, folder `/portfolio`
3. Your URL will be `https://yourusername.github.io/portfolio/`
4. Update the `baseurl` in `_config.yml` to `/portfolio`

---

## 🌐 Custom Domain (Optional)

To use `irshankhan.com` instead of `irshankhan.github.io`:

1. Add a `CNAME` file to the root with your domain:
   ```
   irshankhan.com
   ```
2. Point your domain's DNS to GitHub Pages (add a CNAME record `www → irshankhan.github.io`)
3. In **Settings → Pages → Custom domain**, enter your domain
4. Enable **Enforce HTTPS**

---

## ✏️ Customisation

| What to change | Where |
|---|---|
| Your photo | `index.html` → `<img class="hero-photo">` src |
| Colors | `css/style.css` → `:root {}` CSS variables |
| Content / text | `index.html` — all sections are clearly commented |
| Product cards | `index.html` → `.products-grid` section |
| Social/nav links | `index.html` footer + nav |
| OG / Twitter preview image | `index.html` `<head>` meta tags |
| Site URL (for SEO) | `_config.yml` → `url:` field |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Paper (background) | `#f5f3ee` |
| Ink (text) | `#0a0a0f` |
| Terracotta (accent) | `#c8410a` |
| Serif | Cormorant Garamond 300/400 |
| Mono | DM Mono 400 |
| Display | Syne 700/800 |

---

## ✅ GitHub Pages Checklist

- [x] `index.html` at the root (GitHub Pages entry point)
- [x] `404.html` for graceful 404 handling
- [x] `.nojekyll` to bypass Jekyll processing
- [x] `_config.yml` with site metadata
- [x] All assets under `css/` and `js/` (relative paths, no server needed)
- [x] All images served from external CDN (no local images to commit)
- [x] `loading="lazy"` on below-fold images for performance
- [x] `rel="noopener noreferrer"` on all external links (security)
- [x] Semantic HTML with ARIA labels (accessibility)
- [x] Responsive down to 375px mobile

---

*Built for Irshan Khan — irshankhan.wordpress.com · linkedin.com/in/irshankhan*
