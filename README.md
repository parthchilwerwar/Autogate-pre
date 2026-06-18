# Autogate-pre

Landing site for **Autogate** — a 100% local, privacy-first finance tracker. The
marketing site is a Next.js 16 (App Router) rebuild of the original HTML/CSS/JS
landing page, preserving the exact lime-on-dark design while adding GSAP scroll
animations and Aceternity UI effects.

## Tech stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **Tailwind CSS v4** (CSS-first `@theme`, no `tailwind.config`)
- **TypeScript**
- **GSAP** + ScrollTrigger (scroll & loop animations)
- **Lenis** smooth scroll (synced to GSAP ticker)
- **Aceternity UI** — Spotlight, Hover Border Gradient, Meteors, Glowing card
- **TextureButton** (21st.dev) for the primary CTA

## Project layout

The deployable app lives in [`autogate-next/`](./autogate-next):

```
autogate-next/
├─ app/                 # layout, page, globals.css (@theme tokens), /privacy, /terms
├─ components/          # Navbar, Hero, PhoneDemo, HowItWorks, AnalyticsFeature, CTA, Footer
│  └─ ui/               # spotlight, hover-border-gradient, meteors, glowing-card, texture-button
├─ lib/                 # gsap.ts (plugin registration), utils.ts (cn)
└─ public/              # autogate.png
```

## Run locally

```bash
cd autogate-next
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the build
```

> When deploying (e.g. Vercel), set the project **root directory** to `autogate-next`.
