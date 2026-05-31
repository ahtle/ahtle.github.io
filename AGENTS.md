<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Portfolio React — Agent Guide

Single-page portfolio site built with Next.js App Router. Four scroll-triggered sections with retro styling, Chart.js radar chart, and interactive stage picker. No backend, no data fetching, no test framework.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.4 (App Router, `output: "standalone"`) |
| UI | React 19.2.4 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + CSS Modules + global `@layer components` |
| Charts | Chart.js + react-chartjs-2 |
| Icons | Font Awesome (`@fortawesome/react-fontawesome`) |
| Quality | ESLint 9 (flat config), Prettier + `prettier-plugin-tailwindcss` |
| Deploy | Docker multi-stage build + Nginx (port 8080) |

## Commands

```bash
npm run dev          # Local dev → http://localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier write
npm run format:check # Prettier check
docker compose up --build  # Production check → http://localhost:8080
```

Testing: **not configured**. Do not add Jest, Vitest, or Playwright without explicit approval.

## Directory Map

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Home page — composes sections
├── globals.css             # Tailwind import + global styles
├── page.module.css         # Shared section/page CSS Modules
└── _components/            # Page/route-specific UI (private folder)
    ├── sections/           # section-one.tsx … section-four.tsx
    └── stage/              # stage-list.tsx, stage-card.tsx

components/                 # Shared UI (reusable across routes)
└── chart/                  # radar-chart.tsx, radar-chart-options.ts

hooks/                      # Shared React hooks
└── use-decode-text.ts

lib/                        # Pure TS, no React
└── decode-text.ts

public/images/              # Static assets (PNG, SVG)
```

Path alias: `@/*` → project root (see `tsconfig.json`).

## Architecture

- **Routing:** App Router only. Single route `/` via `app/page.tsx`. No dynamic routes or client navigation.
- **Server vs client:** Default to Server Components. Add `"use client"` only for hooks, browser APIs, or client-only libraries (Chart.js, scroll listeners, interactive Font Awesome).
- **State:** Local `useState` only. No Context, Redux, Zustand, SWR, or React Query.
- **Data:** Content is hardcoded in components. No `fetch`, Server Actions, or API routes.
- **Shared logic:** Reusable React hooks → `hooks/`. Pure functions → `lib/`.

## Folder Placement

| Scope | Location | Example |
|-------|----------|---------|
| Page/route-specific UI | `app/_components/` | `sections/`, `stage/` |
| Shared UI (reusable) | `components/` | `RadarChart` |
| Shared React hooks | `hooks/` | `useDecodeText` |
| Pure TS utilities | `lib/` | `decode-text.ts` |
| Future route-specific UI | `app/<route>/_components/` | blog-only widgets |
| Page composition | `app/page.tsx` | imports from `@/app/_components/` |

## Conventions

- Default export function components; PascalCase filenames (`section-three.tsx`, `StageCard`)
- Props: `interface XProps { ... }` by default; use `type` for unions, mapped types, and other type-level utilities
- Utility functions (`lib/`, `hooks/`): short docstring (up to 3 lines), with `@param` / `@returns` examples — not required on React components
- Config constants: `UPPER_SNAKE` + `as const` + derived union types
- Imports: `@/` for cross-folder code (components, hooks, lib, app, public)
- Images: `next/image` with `@/public/images/` imports or `/images/` paths

## Do

- Read neighboring files before adding new patterns
- Keep diffs minimal and focused on the requested change
- Run `npm run lint` after substantive edits
- Combine CSS Module classes with global Tailwind component classes (e.g. `` `${styles.sectionThree} section-container` ``)
- Preserve `output: "standalone"` in `next.config.ts` for Docker deployment
- Promote reusable UI to root `components/` when shared across routes; keep page-specific UI in `app/_components/`

## Don't

- Add global state libraries, API routes, or test frameworks without approval
- Use `"use client"` on components that don't need interactivity
- Put shared hooks in `lib/` or shared utilities in `hooks/`
- Create a separate `tailwind.config.js` (Tailwind v4 uses PostCSS)
- Commit `.env` files or secrets
- Refactor unrelated code while fixing a targeted issue
- Create git commits unless explicitly asked

## Links

- [README.md](README.md) — getting started
- [README.Docker.md](README.Docker.md) — Docker deployment
- `.cursor/rules/` — scoped Cursor rules for React, TypeScript, styling, Next.js
