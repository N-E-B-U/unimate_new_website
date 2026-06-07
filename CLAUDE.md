# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

This is the **project workspace for Unimate.ge** — a student-focused community platform in Georgia ("Where Students Meet Opportunities"). The public-facing marketing website is now implemented inside `unimate-website/`. This top-level directory holds documentation and brand assets.

**To work on the website code, open `unimate-website/` — it has its own `CLAUDE.md`.**

---

## Key Files

| File | Role |
|---|---|
| `Unimate_PRD.md` | **Primary deliverable.** The complete Product Requirements Document for the public website. This is the authoritative build spec — all design decisions, page specs, component architecture, and technical requirements live here. |
| `Unimate_PRD_Prompt.md` | The original brief used to generate the PRD. Contains the brand identity reference, page architecture, and open items as originally captured. Treat as a secondary reference — `Unimate_PRD.md` supersedes it. |
| `Unimate Brandbook .pdf` | Brand identity PDF with logo clearspace rules, color palette, and typography guidelines. Consistent with the Design System section of the PRD. |
| `Icon Unimate color.png` | Logo icon, gradient color version. Maps to `public/logo/unimate-icon.png` in the future Next.js project. |
| `unimate transparent.png` | Full logo lockup on transparent background. Maps to `public/logo/unimate-full.png`. |

---

## PRD Status — Open Placeholders

`Unimate_PRD.md` is complete for all structural/technical specs but contains content placeholders for sections that could not be scraped from the live site (unimate.ge returns HTTP 403 for all automated requests). 

To find all placeholders:
```
Search for: CONTENT PLACEHOLDER
Search for: REPLACE:
```

The 7 open items are tracked in **Section 14 (Open Items)** of the PRD. The main gaps requiring real content from the live site:
- Home page sections below the hero (OI-05)
- About Us additional content (OI-05)
- FAQ questions and answers — all Q&A pairs (OI-02)
- Terms of Use full legal text (OI-01)
- Privacy Policy full legal text (OI-01)
- Hero CTA button text and link (OI-06)
- Formspree form ID to be registered (OI-07)

To fill these: open each page in a browser at unimate.ge and paste the text into the corresponding placeholder block in the PRD.

---

## Tech Stack (implemented)

- **Next.js 16.2.6 (App Router)** + TypeScript + React 19
- **Tailwind CSS v4** — config via `@theme` in `globals.css`, not `tailwind.config.ts`
- **Formspree** for the contact form (`NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`)
- **Vercel** for deployment with custom domain `unimate.ge`

See `unimate-website/CLAUDE.md` for commands, architecture, and placeholder locations.

---

## Brand Quick Reference

| Token | Hex |
|---|---|
| `brand-magenta` | `#A30D88` |
| `brand-navy` | `#000181` |
| `brand-lavender` | `#AAB4F7` |
| `brand-pink` | `#CE6ABF` |

Gradient: `linear-gradient(to right, #A30D88, #CE6ABF, #000181)`

Display font: **Impact** (fallback: Anton via Google Fonts). Body font: **Arial Bold**.

Support email: `[email protected]`
