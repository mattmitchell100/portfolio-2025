# Matt Portfolio (React + Vite + Tailwind)

A minimal starter that matches the mockup you discussed. Includes:
- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide icons
- Simple `Card` and `Button` components

## Quickstart

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Open new terminal, start API
npx vercel dev

# 4) Build for production
npm run build
npm run preview
```

You can customize `src/App.jsx` and replace placeholder project cards with real case studies.


## Routing & Case Studies
This starter uses **react-router-dom v6** with these routes:
- `/` Home (hero + featured work)
- `/work` All case studies (grid)
- `/case/:slug` Case study detail

Add/edit case studies in `src/data/caseStudies.js`.
