# Noetic Landing Page

A polished landing page for Noetic — an iOS debate and critical thinking training app. The site is designed to communicate clarity, calm intelligence, and premium educational value through clean typography, muted interaction, and focused content.

## What this project includes

- Responsive landing page built with Next.js and TypeScript
- Hero section with headline, CTA, and feature panel
- Animated and static app preview sections
- Company and association logo slider
- Waitlist signup and review submission UI
- Multi-language support using `next-intl`
- Footer contacts with email and LinkedIn links

## Tech stack

- `next` 16.2.4
- `react` 19.2.4 / `react-dom` 19.2.4
- `typescript` 5
- `tailwindcss` 4 + `@tailwindcss/postcss`
- `framer-motion` for subtle motion
- `next-intl` for localization
- `@supabase/supabase-js` for backend data integration
- `zod` for client-side validation
- `lucide-react` for iconography

## Project structure

- `app/` — Next.js App Router pages and layout
- `components/` — reusable UI components
- `public/` — static assets such as logos and videos
- `messages/` — localized copy for supported languages
- `lib/` — utility and integration helpers

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Lint the codebase:

```bash
npm run lint
```

## Notes

- The app uses `next-intl` to render localized content for English and Chinese variants.
- The footer and hero styling are tuned for desktop and mobile responsiveness.
- The contact links support email and LinkedIn in the footer.
- The video preview section plays a screen recording from `public/videos`.

## Deployment

This project is compatible with Vercel, Netlify, and similar static-ready hosting providers that support Next.js App Router deployments.

For deployment guidance, refer to the official [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
