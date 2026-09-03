# Raz Cohen — Portfolio

Personal portfolio site for [razcohen.com](https://razcohen.com) — built with [Astro](https://astro.build).

## Stack

- **Framework:** Astro 4 (static site generation)
- **Content:** Astro Content Collections (Markdown frontmatter)
- **Styling:** Global CSS with CSS custom properties
- **Fonts:** IBM Plex Sans via Google Fonts
- **Deployment:** GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```
src/
├── content/
│   └── projects/       # One .md file per project card
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro     # Home (featured + more projects grid)
│   ├── about.astro
│   ├── mixtapes.astro
│   └── projects/
│       └── [slug].astro  # Case study detail pages
└── styles/
    └── global.css
public/
├── images/             # Project images and assets
└── Raz-Cohen-CV.pdf
```

## Adding a project

Create a new `.md` file in `src/content/projects/`. The frontmatter fields that drive the cards and detail pages:

```yaml
title: "Project Name"
tagline: "One-line description."
type: "Industry"
role: "Your Role"
company: "Company Name"       # optional
year: "2024"                  # optional
order: 10                     # controls sort order; ≤5 = featured, >5 = more grid
bgColor: "#f0e6ff"
accentColor: "#7b2fff"
darkTheme: false              # true flips text to light
coverImage: "image.jpg"       # shown on detail page
teaserImage: "image.jpg"      # shown on card (falls back to coverImage)
imagePosition: "center 70%"  # optional object-position for card crop
externalLink: "https://..."   # optional — skips case study page
externalLinkLabel: "View"     # optional label for external link
externalOnly: true            # omits from prev/next case study navigation
description: "Short summary shown in the project info strip."
```

The markdown body below the frontmatter becomes the case study page content. Leave it empty (or set `externalOnly: true`) for link-out-only cards.
