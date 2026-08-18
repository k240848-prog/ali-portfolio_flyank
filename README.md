# Ali Safdar Portfolio

This is a simple Next.js portfolio for the FlyRank AI Fluency internship assignment, Week 5: “Ship the Ugly Version.”

The goal is a complete, understandable portfolio with working navigation and real project case studies. It is intentionally not over-polished.

## Routes

- `/`
- `/projects`
- `/projects/task-api`
- `/projects/polite-scraper`
- `/projects/gemini-ai-workflow`
- `/about`
- `/contact`

## Project structure

- `app/` contains the pages and layouts.
- `components/` contains reusable page components like the header, footer, and project cards.
- `data/projects.ts` contains the project case-study content.
- `app/contact/page.tsx` contains the editable contact details.

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Deployment

Deploy after confirming the final contact details and any project links/screenshots that should be public.
