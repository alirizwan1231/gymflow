# GymFlow — Gym & Fitness Studio Management SaaS

GymFlow is a complete management system for gyms and fitness studios:
members, trainers, class schedules, QR-code attendance, payments and
revenue analytics in one dark, fast, data-dense dashboard.

This build is a **frontend demo** — every page runs on realistic local
demo data (`src/data/*.ts`), no backend or API keys required. Backend
scaffolding for Supabase is included for a later go-live
(see `BACKEND-SETUP.md`).

## Design

Dribbble-inspired fitness SaaS direction: near-black base (`#08090B`),
a single volt-lime accent (`#C8FF2E`), oversized kinetic display type,
glassy data cards, SVG revenue charts, a peak-hour heatmap, horizontal
scrolling trainer/class rails, scroll-reveal storytelling on the landing
page — and zero emojis (inline SVG icons only). All visuals are CSS
gradients, SVG patterns and typography; no external images or paid APIs.

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Landing page — hero with live revenue chart, marquee ticker, problem story, features bento, trainers & classes side-scroll rail, QR spotlight, how-it-works, demo stories, pricing, CTA |
| `/dashboard` | Owner dashboard — stat cards, animated SVG revenue chart, weekly check-in bars, peak-hour heatmap, expiring members, today's classes, latest check-ins |
| `/members` | Searchable/filterable member directory (12 demo members) — click any row for a full profile modal with workout plan, diet plan and progress history |
| `/classes` | Trainers strip + full weekly class schedule grid with capacity bars and intensity levels |
| `/attendance` | Member QR pass with scan animation, a "try a scan" simulator (try an overdue member) and today's live check-in log |
| `/payments` | Fee records with paid/pending/overdue filters, collection health, and a receipt-upload placeholder UI |

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- Local demo data in `src/data/` — no env vars needed
- Backend scaffolding (not wired): `supabase/schema.sql`,
  `src/lib/supabase.ts`, `BACKEND-SETUP.md`

## Backend (later)

`supabase/schema.sql` defines `gyms`, `plans`, `trainers`, `members`,
`member_progress`, `classes`, `class_bookings`, `attendance` and
`payments` with indexes and starter RLS policies. Follow
`BACKEND-SETUP.md` step by step when going live — free tiers only.
