# EzzyGo Removals

A premium marketing + booking site for **EzzyGo Removals**, a Queensland-based moving company.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🔥 **Glassmorphic design** — black/orange/yellow palette, aurora glows, grain overlay
- 📱 **Mobile-first responsive** — looks great on any device
- ⚡ **Animations** — Framer Motion staggered reveals, hover micro-interactions
- 🧮 **Interactive quote calculator** — live pricing based on move type, movers, distance, add-ons
- 📨 **Contact form** — wired to an API route, ready for Resend/SendGrid integration
- 🔐 **Login portal** — `/login` with sign-in / sign-up toggle (UI only, ready to connect to auth)
- 🎨 **Typography** — Fraunces (display), Plus Jakarta Sans (body), JetBrains Mono (accents)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
# Option 1: from the CLI
npm i -g vercel
vercel

# Option 2: push to GitHub then import on vercel.com
git init && git add . && git commit -m "init"
git remote add origin git@github.com:YOU/ezzygo-removals.git
git push -u origin main
```

Vercel auto-detects Next.js — no config needed.

## Production wiring (next steps)

1. **Email**: drop a Resend API key into `.env.local` as `RESEND_API_KEY` and uncomment the send call in `app/api/contact/route.ts`.
2. **Auth**: hook `/login` up to Clerk, Auth.js, or Supabase Auth.
3. **Analytics**: add `@vercel/analytics` (one-liner).
4. **CMS**: testimonials/services can move to Sanity or Contentful if the client wants to edit.

## Structure

```
app/
  layout.tsx         # Root layout, fonts, metadata
  page.tsx           # Home — composes all sections
  globals.css        # Glassmorphism utilities, aurora effects
  login/page.tsx     # Customer portal
  api/contact/       # Quote form endpoint
components/
  Navbar.tsx         # Sticky glass nav
  Hero.tsx           # Editorial hero with floating cards
  Services.tsx       # 8-card grid + city marquee
  QuoteCalculator.tsx# Live-pricing configurator
  Pricing.tsx        # 3-tier pricing
  About.tsx          # Bento feature grid
  Reviews.tsx        # Masonry testimonials
  Contact.tsx        # Full booking form
  Footer.tsx         # CTA + giant wordmark
```
