# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Important:** Read `AGENTS.md` before writing code — this is Next.js 16 + React 19 + Tailwind v4, which differ significantly from older versions.

---

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (catches TypeScript + build errors)
npm run lint     # ESLint
```

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 16.2.6 (App Router) | Server Components by default |
| React | 19.2.4 | |
| Styling | Tailwind CSS v4 | Config via CSS `@theme`, NOT `tailwind.config.ts` |
| Fonts | `next/font/google` (Anton) | Impact system font + Anton fallback |
| Form | Formspree | `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` |
| Deployment | Vercel | |

## Tailwind v4 — Critical Difference

**No `tailwind.config.ts`.** All custom tokens live in `src/app/globals.css` inside `@theme {}`:

```css
@theme {
  --color-brand-magenta: #A30D88;   /* → text-brand-magenta, bg-brand-magenta */
  --color-brand-navy:    #000181;   /* → text-brand-navy,    bg-brand-navy    */
  --color-brand-lavender:#AAB4F7;
  --color-brand-pink:    #CE6ABF;
  --font-display: Impact, var(--font-anton), "Arial Black", sans-serif;  /* → font-display */
  --font-body:    Arial, "Helvetica Neue", Helvetica, sans-serif;        /* → font-body    */
}
```

Custom CSS helpers (not Tailwind utilities) defined at the bottom of `globals.css`:
- `.brand-gradient` — the `#A30D88 → #CE6ABF → #000181` linear gradient as `background-image`
- `.brand-gradient-text` — same gradient applied as text fill

## Architecture

```
src/
  app/
    layout.tsx              ← Root layout: Anton font, Header, Footer, skip-link
    page.tsx                ← Home (Hero + FeatureSection blocks)
    about-us/page.tsx
    contact-us/page.tsx     ← Uses <ContactForm> (Client Component)
    faq/page.tsx            ← Uses <AccordionItem> (Client Component)
    terms-of-use/page.tsx   ← Long-form text placeholder
    privacy-policy/page.tsx ← Long-form text placeholder
    not-found.tsx           ← 404 page
    globals.css             ← Tailwind v4 @theme + brand helpers
  components/
    layout/
      Header.tsx            ← Server Component; imports HamburgerMenu
      HamburgerMenu.tsx     ← 'use client' — open/close state, drawer animation
      Footer.tsx            ← Server Component
    ui/
      Button.tsx            ← Primary / secondary variants; accepts href or onClick
      AccordionItem.tsx     ← 'use client' — grid-rows animation trick for smooth open/close
      ContactForm.tsx       ← 'use client' — Formspree fetch, success/error states
    sections/
      HeroSection.tsx       ← Brand gradient hero with decorative circles
      FeatureSection.tsx    ← Reusable alternating feature block
  lib/
    constants.ts            ← NAV_LINKS, FOOTER_LINKS, SUPPORT_EMAIL, FAQ_ITEMS
public/
  logo/
    unimate-icon.png        ← Icon only (source: "Icon Unimate color.png")
    unimate-full.png        ← Full lockup (source: "unimate transparent.png")
```

**Client Components** (only 3): `HamburgerMenu`, `AccordionItem`, `ContactForm`. Everything else is a Server Component.

## Content Placeholders

Search for `[CONTENT PLACEHOLDER]` or `REPLACE:` to find all gaps. Main ones:

| File | Gap |
|---|---|
| `src/lib/constants.ts` | `FAQ_ITEMS` — paste real Q&As from unimate.ge/faq |
| `src/app/page.tsx` | Feature section titles/body — replace with live site copy |
| `src/app/about-us/page.tsx` | Sections below core mission paragraph |
| `src/app/contact-us/page.tsx` | Sidebar instructional text |
| `src/app/terms-of-use/page.tsx` | Full legal text |
| `src/app/privacy-policy/page.tsx` | Full legal text |

## Brand Rules (non-negotiable)

- **No auth UI** anywhere — no sign in, sign up, login, register
- Logo: never stretch, recolor, or add shadows
- Only use palette colors: `brand-magenta`, `brand-navy`, `brand-lavender`, `brand-pink`, white, black
- Headings: `font-display` (Impact). Body: `font-body` (Arial)

## Formspree Setup

1. Register at [formspree.io](https://formspree.io), create a form
2. Set recipient to `[email protected]`
3. Copy the form ID and add to `.env.local`:  
   `NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx`
4. Add same var in Vercel dashboard → Settings → Environment Variables
