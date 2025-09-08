# Matt Portfolio (React + Vite + Tailwind)

A minimal starter that matches the mockup you discussed. Includes:
- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide icons
- Simple `Card` and `Button` components

## Quickstart

```bash
# Install deps
npm install

# Run frontend + serverless API together (recommended)
npm run dev:full

# Or run separately in two terminals
npm run dev      # Vite (frontend on :5173)
npm run api      # Vercel functions (API on :3000)

# Production build & local preview
npm run build
npm run preview
```

### Scripts
- `dev` – Vite dev server only.
- `api` – Runs `vercel dev` on port 3000 (forced with `--listen 3000`).
- `dev:full` – Runs both in parallel with colored output (uses `concurrently`).

The Vite dev server proxies `/api/*` to `http://localhost:3000` (see `vite.config.js`) so the frontend can fetch `/api/contact` without changing code between local and deployed environments.

You can customize `src/App.jsx` and replace placeholder project cards with real case studies.


## Routing & Case Studies
This starter uses **react-router-dom v6** with these routes:
- `/` Home (hero + featured work)
- `/work` All case studies (grid)
- `/case/:slug` Case study detail

Add/edit case studies in `src/data/caseStudies.js`.
