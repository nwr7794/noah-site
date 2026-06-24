# Noah's Notes

A simple personal writing site built with [Astro](https://astro.build). Supports daily writing and longer essays, written in Markdown.

Live at: **https://nwr7794.github.io/noah-site/**

---

## Local development

**Prerequisites:** Node.js 18 or later.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build the site
npm run build

# Preview the production build locally
npm run preview
```

---

## Adding a post

### Daily post

Create a new Markdown file in `src/content/daily/`:

```
src/content/daily/my-post-slug.md
```

Add frontmatter at the top:

```markdown
---
title: "Your post title"
date: 2024-06-24
description: "A short summary (optional)."
draft: false
---

Write your content here in Markdown.
```

The filename (minus `.md`) becomes the URL slug. For example, `my-post-slug.md` is published at `/noah-site/daily/my-post-slug/`.

### Long-form essay

Create a new Markdown file in `src/content/long-form/`:

```
src/content/long-form/my-essay-slug.md
```

Use the same frontmatter format:

```markdown
---
title: "Your essay title"
date: 2024-06-24
description: "A short summary (optional)."
draft: false
---

Write your essay content here.
```

Published at `/noah-site/long-form/my-essay-slug/`.

### Draft posts

Set `draft: true` in frontmatter to prevent a post from appearing on the site:

```markdown
---
title: "Work in progress"
date: 2024-06-24
draft: true
---
```

Draft posts are excluded from the homepage, listing pages, and RSS feed.

---

## Frontmatter reference

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | yes | Post title |
| `date` | date (YYYY-MM-DD) | yes | Publication date |
| `description` | string | no | Short summary shown in listings and RSS |
| `draft` | boolean | no | If `true`, post is hidden. Defaults to `false`. |

---

## Routes

| Path | Description |
|---|---|
| `/noah-site/` | Homepage with recent posts from both sections |
| `/noah-site/daily/` | All daily posts |
| `/noah-site/daily/[slug]/` | Individual daily post |
| `/noah-site/long-form/` | All long-form essays |
| `/noah-site/long-form/[slug]/` | Individual long-form essay |
| `/noah-site/rss.xml` | RSS feed |

---

## Deployment

The site deploys automatically to [GitHub Pages](https://pages.github.com/) when you push to `main`. The workflow is defined in `.github/workflows/deploy.yml`.

**To deploy:**

1. Push your changes to the `main` branch.
2. GitHub Actions builds the site and publishes it automatically.
3. The live site updates at `https://nwr7794.github.io/noah-site/`.

### Moving to another host

The site is a standard static build. To deploy elsewhere:

- **Vercel or Netlify:** Run `npm run build`. The output is in `./dist`. Point your host at that directory. Remove or update the `base` setting in `astro.config.mjs` if your new host serves the site from the root domain.
- **Any static host:** Upload the contents of `./dist` to your host.

The only GitHub Pages–specific configuration is the `base: '/noah-site'` and `site` values in `astro.config.mjs`. Update those to match your new host.

---

## Project structure

```
src/
  content/
    config.ts           # Content collection schema
    daily/              # Daily post Markdown files
    long-form/          # Long-form essay Markdown files
  layouts/
    BaseLayout.astro    # Page shell (header, footer, nav)
    PostLayout.astro    # Individual post layout
  pages/
    index.astro         # Homepage
    daily/
      index.astro       # Daily listing
      [slug].astro      # Individual daily post
    long-form/
      index.astro       # Long-form listing
      [slug].astro      # Individual long-form post
    rss.xml.ts          # RSS feed
  styles/
    global.css          # Site-wide styles
public/
  favicon.svg
.github/
  workflows/
    deploy.yml          # GitHub Pages deployment
astro.config.mjs
package.json
```
