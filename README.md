This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Live site:** [https://ahtle.github.io/](https://ahtle.github.io/)

AI agents: see [AGENTS.md](AGENTS.md).

## Getting Started

Local dev with hot-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check production mode:

```bash
docker compose up --build
```

Open [http://localhost:8080](http://localhost:8080)

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment (GitHub Pages)

The live site is published automatically by [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

**How updates go live:**

1. Push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow** manually).
2. The workflow runs `npm run build:pages`, which static-exports the app to `out/`.
3. The artifact is deployed to GitHub Pages.

**Preview the static export locally:**

```bash
npm run build:pages
npx serve out
```

**One-time repo setup:** In GitHub **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions** (not “Deploy from a branch”). Otherwise GitHub may serve `README.md` instead of the built site.

For Docker-based production checks, see [README.Docker.md](README.Docker.md).
