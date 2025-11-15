# KSKHEALTHCARE

KSKHEALTHCARE is a web application built to support an integrated clinical practice. It provides a modern, responsive frontend for information, bookings, and clinical content — designed for clinics and healthcare teams.

## Quick Overview

- Single-page React app (Vite) with Tailwind CSS styles and small utility libraries.
- Focus: patient-first content, clinic services, blog & practitioner profiles.

## What changed recently

- chore(blog): removed the Trending Tags cloud, download CTAs, and the newsletter capture from the blog list to simplify the page.
- chore(blog): removed the green "Founder & Lead Practitioner" badge from the main doctor card to simplify profile visuals.
- fix: replaced an empty nutrition image (`src/assets/nutrition-diet.jpg`) with an existing `src/assets/nutrients.png` so the "Functional Nutrition" article shows a working cover image.

These edits were committed in the most recent commit on `main`.

## Features

- Patient & practitioner directory UI
- Blog & content hub with filters and featured articles
- Service pages and booking flows
- Responsive components and utility hooks

## Technologies

- React 18 + Vite
- Tailwind CSS
- Lucide icons, Framer Motion, Firebase (optional integrations)

## Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Start the dev server:

```bash
pnpm run dev
```

3. Open the site at `http://localhost:5173` (Vite prints the exact URL).

## Build for Production

```bash
pnpm run build
pnpm run preview   # serve the production build locally
```

Note: The build may show a chunk-size warning for large assets; consider code-splitting if you need to reduce initial bundle sizes.

## Testing & Linting

```bash
pnpm run lint
```

## Contributing

- Make changes on a feature branch and open a PR to `main`.
- Keep changes focused and include a short description of what the change does.

## Contact / Deployment Notes

- The repo includes `wrangler.toml` and Cloudflare Worker types if you deploy server-side functions.
- Deployment depends on your hosting choice (Vercel, Netlify, Cloudflare Pages, or a static host).

---

If you want, I can open a PR with this README change and push the branch, or I can revert any of the recent deletions (some docs and assets were removed in the last commit) — tell me which next step you prefer.
