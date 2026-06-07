# Unimate.ge — Public Website PRD
### Product Requirements Document · Version 1.0

---

| Field | Value |
|---|---|
| **Document Title** | Unimate.ge Public Website — Product Requirements Document |
| **Version** | 1.0 |
| **Date** | 2026-05-24 |
| **Status** | Draft — Pending Content Fill-in (see Open Items) |
| **Audience** | AI-assisted frontend developer / development agent |
| **Owner** | Unimate Product Team |
| **Contact** | [email protected] |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Design System](#2-design-system)
3. [Site Architecture](#3-site-architecture)
4. [Global Components](#4-global-components)
5. [Page Specifications](#5-page-specifications)
6. [Technical Specification](#6-technical-specification)
7. [Functional Requirements](#7-functional-requirements)
8. [Responsive Behavior](#8-responsive-behavior)
9. [Accessibility Requirements](#9-accessibility-requirements)
10. [Performance Requirements](#10-performance-requirements)
11. [Deployment](#11-deployment)
12. [Design Constraints](#12-design-constraints)
13. [Out of Scope](#13-out-of-scope)
14. [Open Items](#14-open-items)

---

## 1. Executive Summary

Unimate.ge is a student-focused community platform operating in Georgia with the tagline *"Where Students Meet Opportunities."* This PRD specifies the complete build requirements for the **public-facing marketing and informational website** — a faithful recreation of the existing unimate.ge public site, preserving established visual identity and content while applying modern frontend best practices.

This document is a **self-contained build specification**. A developer reading only this document must be able to implement the full site — all 6 pages, all components, all interactions — without consulting any other source. Every layout, content block, component hierarchy, design token, and behavioral requirement is defined herein.

**This website is NOT the Unimate platform application.** It contains no authentication, no user feeds, no communities feature, and no platform UI. It is a marketing/informational site only.

---

## 2. Design System

### 2.1 Color Palette

All colors below are the authoritative brand values. Do not use any other colors.

| Role | Token Name | Hex | Usage |
|---|---|---|---|
| Primary | `brand-magenta` | `#A30D88` | CTAs, accents, gradient start |
| Primary | `brand-navy` | `#000181` | Footer bg, gradient end, dark sections |
| Primary | `white` | `#FFFFFF` | Backgrounds, text on dark |
| Primary | `black` | `#000000` | Body text, wordmark |
| Secondary | `brand-lavender` | `#AAB4F7` | Subtle accents, hover states |
| Secondary | `brand-pink` | `#CE6ABF` | Gradient midpoint, decorative accents |

**Brand Gradient:**
```
linear-gradient(to right, #A30D88, #CE6ABF, #000181)
```
Used on: logo icon, hero accent elements, section dividers, CTA buttons (optional).

### 2.2 Typography

| Role | Font Family | Weight | Usage |
|---|---|---|---|
| Display / Headings | `Impact` | Heavy (900) | All `h1`–`h3`, hero headline, section titles |
| Body / UI | `Arial` | Bold (700) | Paragraphs, nav links, labels, captions |

**Modernization note:** If `Impact` renders poorly on certain devices, substitute `'Anton'` (Google Font) as it is visually equivalent — same compressed, heavy display feel. For body, `Arial` may fall back to `Helvetica Neue` or `sans-serif`.

**Type Scale (minimum — developer may add intermediate steps):**

| Element | Size (desktop) | Size (mobile) | Weight | Font |
|---|---|---|---|---|
| `h1` / Hero Headline | 56px–72px | 36px–44px | 900 | Impact |
| `h2` / Section Title | 36px–48px | 28px–36px | 900 | Impact |
| `h3` / Card/Sub-Title | 24px–30px | 20px–24px | 900 | Impact |
| Body Paragraph | 16px–18px | 15px–16px | 700 | Arial |
| Nav Links | 15px–16px | 16px | 700 | Arial |
| Caption / Fine Print | 13px–14px | 13px | 700 | Arial |
| Button Text | 14px–16px | 15px–16px | 700 | Arial |

**Line height:** Body text — `1.6`; headings — `1.1`–`1.2`.

**Letter spacing:** Display headings — `-0.01em` to `0`; body — `0`.

### 2.3 Logo Specifications

**Logo composition (horizontal lockup — primary usage):**
- **Icon:** Custom organic shape forming a stylized "U" composed of two connected node-and-circle forms (network/unity symbolism). Gradient fill from `#A30D88` (left) through `#CE6ABF` (mid) to `#000181` (right).
- **Wordmark:** "unimate" in lowercase, Impact-style heavy display typeface, color `#000000`.
- **Tagline:** *"Where Students Meet Opportunities"* — positioned beneath the wordmark, smaller size, regular weight, `#000000` or near-black.

**Clearspace rule:** Maintain a minimum clearspace equal to the height of the icon on all four sides of the full lockup.

**Usage contexts:**

| Context | Variant |
|---|---|
| Header / Navbar | Horizontal lockup (icon + wordmark) |
| Favicon | Icon only (32×32, 16×16) |
| Mobile navbar (collapsed) | Icon only or full lockup if space permits |
| Open Graph / Social | Full lockup on white background |

**Logo asset files (available in project root):**
- `Icon Unimate color.png` — Icon only, color gradient version
- `unimate transparent.png` — Logo on transparent background

**Prohibited:**
- Do not stretch or distort the logo
- Do not recolor the gradient icon
- Do not apply drop shadows, glows, or effects
- Do not place on busy backgrounds without sufficient contrast

### 2.4 Tailwind CSS Configuration

Add the following to `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-magenta': '#A30D88',
        'brand-navy':    '#000181',
        'brand-lavender':'#AAB4F7',
        'brand-pink':    '#CE6ABF',
      },
      fontFamily: {
        display: ['Impact', 'Anton', 'Arial Black', 'sans-serif'],
        body:    ['Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #A30D88, #CE6ABF, #000181)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 3. Site Architecture

### 3.1 Pages

| # | Page | Route | Purpose |
|---|---|---|---|
| 1 | Home | `/` | Primary landing — value proposition |
| 2 | About Us | `/about-us` | Mission, story, platform values |
| 3 | Contact Us | `/contact-us` | Contact form + support info |
| 4 | FAQ | `/faq` | Common questions and answers |
| 5 | Terms of Use | `/terms-of-use` | Legal — usage terms |
| 6 | Privacy Policy | `/privacy-policy` | Legal — data & privacy |

### 3.2 Navigation Map

**Header navigation (visible links):**
```
Home  |  About Us  |  Contact Us  |  FAQ
```

**Footer navigation (visible links):**
```
About Us  |  Contact Us  |  FAQ  |  Terms of Use  |  Privacy Policy
```

**Logo** (header) links to `/` from every page.

**Authentication links:** None. No Sign In, Sign Up, Login, Register, or Account elements appear anywhere on the site. This is an absolute constraint.

---

## 4. Global Components

### 4.1 Header / Navigation Bar

**Component file:** `src/components/layout/Header.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo: icon + wordmark]       Home  About Us  Contact  FAQ  │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**

| Property | Value |
|---|---|
| Background | White (`#FFFFFF`) or very light gray (`#F8F8F8`) |
| Height | 64px–72px desktop; 56px–64px mobile |
| Position | `sticky top-0 z-50` |
| Shadow | Subtle — `shadow-sm` on scroll (add via JS scroll listener or CSS `@supports`) |
| Logo | Left-aligned, links to `/`, minimum 40px height icon |
| Nav links | Right-aligned, horizontal, `font-body font-bold text-[15px]` |
| Nav link color | `#000000` default; `#A30D88` on hover / active page |
| Nav active state | Current page link underlined or colored `#A30D88` |
| Divider | Optional `|` separator between links or spacing gap of `24px–32px` |

**Mobile behavior (< 768px):**
- Nav links collapse; hamburger icon (`☰`) appears on the right
- Clicking hamburger opens a full-width dropdown or slide-in drawer
- Drawer shows nav links stacked vertically, centered
- Close button (`✕`) or tap-outside dismisses the menu
- Component: `src/components/layout/HamburgerMenu.tsx`

**Markup structure (semantic):**
```html
<header>
  <nav aria-label="Main navigation">
    <a href="/" aria-label="Unimate home">
      <img src="/logo/unimate-full.png" alt="Unimate — Where Students Meet Opportunities" />
    </a>
    <ul role="list">
      <li><a href="/">Home</a></li>
      <li><a href="/about-us">About Us</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
      <li><a href="/faq">FAQ</a></li>
    </ul>
    <button aria-label="Open menu" aria-expanded="false"><!-- hamburger icon --></button>
  </nav>
</header>
```

---

### 4.2 Footer

**Component file:** `src/components/layout/Footer.tsx`

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│         About Us  Contact Us  FAQ  Terms of Use  Privacy     │
│                  All rights reserved © Unimate               │
└─────────────────────────────────────────────────────────────┘
```
*(or split: nav links left / copyright right on desktop)*

**Specifications:**

| Property | Value |
|---|---|
| Background | Deep Navy `#000181` (preferred) or Black `#000000` |
| Text color | White `#FFFFFF` |
| Padding | `48px 24px` desktop; `32px 16px` mobile |
| Nav links | Inline horizontal, `font-body font-bold text-sm`, white, hover: `#AAB4F7` |
| Link spacing | `16px–24px` gap between links |
| Copyright | `font-body text-sm text-white/80` or `text-gray-300` |
| Copyright text | `All rights reserved © Unimate` |
| Social icons | None (unless confirmed present on original site) |

**Markup structure (semantic):**
```html
<footer>
  <nav aria-label="Footer navigation">
    <ul role="list">
      <li><a href="/about-us">About Us</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
      <li><a href="/faq">FAQ</a></li>
      <li><a href="/terms-of-use">Terms of Use</a></li>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
    </ul>
  </nav>
  <p>All rights reserved © Unimate</p>
</footer>
```

---

## 5. Page Specifications

---

### 5.1 Page: Home (`/`)

**File:** `src/app/page.tsx`
**Purpose:** Primary landing page. Communicates Unimate's value proposition to prospective student users and drives platform adoption.

---

#### Section 1 — Hero

**Component:** `src/components/sections/HeroSection.tsx`

**Layout:**
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   The platform where students meet opportunities               │
│                                                                │
│   Discover friends and communities based on                    │
│   your interests and hobbies                                   │
│                                                                │
│                  [ CTA Button ]                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Content:**

| Element | Text | Style |
|---|---|---|
| Headline | `The platform where students meet opportunities` | `font-display text-5xl md:text-6xl lg:text-7xl text-white` (or black depending on bg) |
| Sub-headline | `Discover friends and communities based on your interests and hobbies` | `font-body font-bold text-lg md:text-xl` |
| CTA Button | *(see note below)* | Primary button style — see Button spec |

> ⚠️ **[CONTENT PLACEHOLDER — OI-05]**
> *The CTA button text and link target on the hero require confirmation from the live site. Replace this note with the actual button label and href (e.g., "Join the Community" → `https://app.unimate.ge` or similar). No Sign In / Sign Up buttons are permitted.*

**Visual treatment:**
- Hero section uses the brand gradient (`#A30D88 → #CE6ABF → #000181`) as a background, OR a large abstract pattern based on the logo icon motif (nodes/circles), OR a combination of gradient + imagery.
- Text is white (`#FFFFFF`) when on gradient/dark background; adjust contrast to ensure WCAG AA compliance.
- Full viewport width (`w-full`). Height: `min-h-[500px] md:min-h-[600px] lg:min-h-[700px]`.
- Content centered or left-aligned depending on original site layout.

**Button component spec (`src/components/ui/Button.tsx`):**

```tsx
// Primary button
className="bg-brand-gradient text-white font-body font-bold 
           px-8 py-3 rounded-full hover:opacity-90 
           transition-opacity duration-200 focus-visible:ring-2 
           focus-visible:ring-brand-magenta"

// Secondary button (if needed)
className="border-2 border-brand-magenta text-brand-magenta font-body font-bold 
           px-8 py-3 rounded-full hover:bg-brand-magenta hover:text-white 
           transition-colors duration-200"
```

---

#### Section 2 — Features / Value Propositions

**Component:** `src/components/sections/FeatureSection.tsx`

> ⚠️ **[CONTENT PLACEHOLDER — OI-05]**
> *The feature/value-proposition sections below the hero on the Home page require content from the live unimate.ge website. The live site returned 403 errors during content extraction.*
>
> **Developer instruction:** Reproduce all sections that appear on the original site in their original order. Each section should be faithfully recreated from the live site once access is available.
>
> **Expected section types** (based on platform description — verify against live site):
> - **Feature 1 — Community Discovery:** How students find communities by interest/hobby
> - **Feature 2 — Connect with Peers:** Friend discovery and social connection
> - **Feature 3 — Activities & Events:** Participation in platform activities
> - **Feature 4 — Platform benefits / stats** (if present — e.g., number of users, communities)
> - **App download CTA section** (if the platform has a mobile app)
>
> **Placeholder layout pattern for each feature section:**
> ```
> ┌──────────────────────────────────────────────────────────┐
> │  [Icon/Illustration]    Section Title (Impact)           │
> │                         Body description (Arial Bold)    │
> │                         [Optional CTA link]              │
> └──────────────────────────────────────────────────────────┘
> ```
> Alternate left/right layout on desktop (image left + text right, then flip).
> Stack vertically on mobile.

**General layout rules for all Home sections:**
- Full-width sections (`w-full`)
- Max content width: `max-w-6xl mx-auto px-4 md:px-8`
- Alternating white and very light backgrounds for visual rhythm
- Section padding: `py-16 md:py-24`
- Brand gradient accent elements (borders, underlines, icon fills) are permitted

---

### 5.2 Page: About Us (`/about-us`)

**File:** `src/app/about-us/page.tsx`
**Purpose:** Communicates the mission, story, and values of Unimate to prospective users, partners, and stakeholders.

---

#### Section 1 — Page Header

| Element | Content |
|---|---|
| Page Title | `About Us` (Impact, large) |
| Optional sub-heading | Brand gradient accent bar beneath title |

---

#### Section 2 — Core Mission Statement

| Element | Content |
|---|---|
| Body copy | *"Unimate is a community-driven platform designed for students to connect, build communities, and participate in various activities."* |
| Style | `font-body font-bold text-lg md:text-xl leading-relaxed` |

---

#### Section 3 — Additional Content

> ⚠️ **[CONTENT PLACEHOLDER — OI-05]**
> *The remaining sections of the About Us page require verbatim content from the live unimate.ge/about-us page.*
>
> **Replace this block with:**
> - Any additional mission/vision paragraphs
> - The founding story or background narrative
> - Team section (if present) — names, roles, photos or avatar placeholders
> - Values or principles section (if present)
> - Any statistics or milestones (e.g., "X students joined", "X communities created")
> - Any illustrations or imagery used on the original page
>
> **Layout guidance:**
> - Section-based layout: `<section>` per content block
> - Image/illustration: if visuals exist on the original page, use `next/image` with appropriate `alt` text; use placeholder box `bg-gray-200 aspect-video` if image file not available
> - Max content width: `max-w-4xl mx-auto px-4 md:px-8`
> - Body text line length: `max-w-prose`

---

### 5.3 Page: Contact Us (`/contact-us`)

**File:** `src/app/contact-us/page.tsx`
**Purpose:** Provides a direct communication channel for students, users, and potential partners.

---

#### Section 1 — Page Header

| Element | Content |
|---|---|
| Section heading | *"Let's Talk! We'd Love to Hear From You."* |
| Style | `font-display text-3xl md:text-4xl lg:text-5xl` |

---

#### Section 2 — Contact Form

**Component:** `src/components/ui/ContactForm.tsx`
**Mark as Client Component:** `'use client'` (uses state for form submission)

**Form fields:**

| Field | Type | Required | Validation |
|---|---|---|---|
| Name | `text` input | Yes | Non-empty, min 2 chars |
| Email | `email` input | Yes | Valid email format |
| Message | `textarea` | Yes | Non-empty, min 10 chars |
| Submit | `button[type=submit]` | — | Disabled while submitting |

**Field styling (Tailwind):**
```tsx
// Input / Textarea base classes
className="w-full border border-gray-300 rounded-md px-4 py-3 
           font-body text-base focus:outline-none 
           focus:ring-2 focus:ring-brand-magenta 
           focus:border-transparent transition"

// Label
className="block font-body font-bold text-sm mb-1 text-gray-700"

// Submit button — use primary Button component
```

**Formspree Integration:**

```tsx
// .env.local
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here

// ContactForm.tsx
'use client'
import { useState } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* fields */}
      {status === 'success' && <SuccessMessage />}
      {status === 'error'   && <ErrorMessage />}
    </form>
  )
}
```

**Success state:**
```
┌──────────────────────────────────────────┐
│  ✓  Thank you! Your message has been     │
│     sent. We'll get back to you soon.    │
└──────────────────────────────────────────┘
```
Style: `bg-green-50 border border-green-300 text-green-800 rounded-md p-4`

**Error state:**
```
┌──────────────────────────────────────────┐
│  ✕  Something went wrong. Please try     │
│     again or email us directly.          │
└──────────────────────────────────────────┘
```
Style: `bg-red-50 border border-red-300 text-red-800 rounded-md p-4`

---

#### Section 3 — Support Email Reference

| Element | Content |
|---|---|
| Body copy | Replicate any instructional text from the original page |
| Support email | `[email protected]` — rendered as a `mailto:` link |

> ⚠️ **[CONTENT PLACEHOLDER]**
> *Replicate any additional instructional text or context that appears on the original `/contact-us` page above or below the form.*

---

### 5.4 Page: FAQ (`/faq`)

**File:** `src/app/faq/page.tsx`
**Purpose:** Answers common questions about the Unimate platform, reducing support load.

---

#### Section 1 — Page Header

| Element | Content |
|---|---|
| Page Title | `Frequently Asked Questions` (or `FAQ`) |
| Sub-text | *"Have questions? We have answers."* *(or replicate original sub-text if different)* |
| Support note | *"Users can also contact support via the chat window at the bottom of the website or via email at [email protected]."* |

---

#### Section 2 — FAQ Accordion

**Component:** `src/components/ui/AccordionItem.tsx`
**Mark as Client Component:** `'use client'`

**Interaction behavior:**
- Each FAQ item shows the question as a clickable row with a `+` / `−` or `▼` / `▲` chevron icon on the right
- Clicking a row toggles the answer open/closed with a smooth height transition
- Only one item open at a time is optional (developer's choice; both patterns are acceptable)
- Keyboard accessible: `Enter` and `Space` toggle; `Tab` moves between items

**Animation:** Use CSS `transition-all duration-300 ease-in-out` or `max-height` transition.

**Component structure:**
```tsx
// AccordionItem.tsx
interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}
```

**Data source:** `src/lib/constants.ts` — export a `FAQ_ITEMS` array:
```typescript
export const FAQ_ITEMS = [
  { id: 1, question: '...', answer: '...' },
  // ...
]
```

**FAQ Content:**

> ⚠️ **[CONTENT PLACEHOLDER — OI-02]**
> *The complete list of FAQ questions and answers must be populated from the live unimate.ge/faq page. Replace the sample items below with the verbatim Q&A pairs from the original site.*
>
> **Sample structure (replace with real content):**
> ```typescript
> export const FAQ_ITEMS = [
>   {
>     id: 1,
>     question: '[REPLACE: FAQ Question 1 from live site]',
>     answer: '[REPLACE: Full answer text for Question 1]',
>   },
>   {
>     id: 2,
>     question: '[REPLACE: FAQ Question 2 from live site]',
>     answer: '[REPLACE: Full answer text for Question 2]',
>   },
>   // Continue for all Q&A pairs from the original FAQ page
> ]
> ```

**Accordion item styling:**
```tsx
// Closed question row
className="flex justify-between items-center w-full py-5 px-1 
           font-body font-bold text-left text-base md:text-lg 
           border-b border-gray-200 hover:text-brand-magenta 
           transition-colors cursor-pointer"

// Answer panel
className="overflow-hidden transition-all duration-300 ease-in-out"

// Answer text
className="font-body text-base text-gray-700 leading-relaxed pb-5 px-1"
```

---

### 5.5 Page: Terms of Use (`/terms-of-use`)

**File:** `src/app/terms-of-use/page.tsx`
**Purpose:** Legal page outlining the rules and conditions governing use of the Unimate platform.

---

#### Layout

- Long-form text layout
- Max width: `max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16`
- Clear section headers (`h2` in Impact, colored `#000181` or black)
- Body text: Arial Bold, `text-base md:text-lg`, line-height `1.7`
- Comfortable spacing between sections: `mb-8 md:mb-12` between `<section>` blocks

---

#### Content

> ⚠️ **[CONTENT PLACEHOLDER — OI-01]**
> *The complete Terms of Use text must be sourced from the live unimate.ge/terms-of-use page and placed verbatim here.*
>
> **Developer instruction:** Replace this block with the full Terms of Use document structured as follows:
>
> ```tsx
> <article className="max-w-3xl mx-auto px-4 py-12">
>   <h1 className="font-display text-4xl mb-8">Terms of Use</h1>
>   
>   <section>
>     <h2 className="font-display text-2xl mb-4">[Section Title]</h2>
>     <p className="font-body text-base leading-relaxed mb-4">[Clause text]</p>
>   </section>
>
>   {/* Repeat <section> for each clause/section */}
> </article>
> ```
>
> Preserve all original section titles, clause numbering, and legal language exactly as written on the original page.

---

### 5.6 Page: Privacy Policy (`/privacy-policy`)

**File:** `src/app/privacy-policy/page.tsx`
**Purpose:** Legal page covering data collection practices, usage of personal information, and user rights.

---

#### Layout

Identical layout to Terms of Use (`/terms-of-use`). See Section 5.5 for layout specifications.

---

#### Content

> ⚠️ **[CONTENT PLACEHOLDER — OI-01]**
> *The complete Privacy Policy text must be sourced from the live unimate.ge/privacy-policy page and placed verbatim here.*
>
> **Developer instruction:** Replace this block with the full Privacy Policy document using the same article/section structure defined in the Terms of Use spec (Section 5.5). Preserve all original section structure and legal language.

---

## 6. Technical Specification

### 6.1 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 14+ (latest stable) |
| Language | TypeScript | 5+ |
| Styling | Tailwind CSS | 3.4+ |
| Form Handler | Formspree | `@formspree/react` or plain fetch |
| Linting | ESLint | Next.js default config |
| Package Manager | npm or pnpm | Latest |
| Node.js | Node.js | 18+ |
| Deployment | Vercel | — |

### 6.2 Project Initialization

Run the following command to scaffold the project:

```bash
npx create-next-app@latest unimate-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-experimental-app
```

### 6.3 Project Structure

```
unimate-website/
├── public/
│   ├── logo/
│   │   ├── unimate-full.png          # Horizontal lockup (icon + wordmark)
│   │   ├── unimate-icon.png          # Icon only (for favicon, mobile)
│   │   └── unimate-icon-white.png    # Icon only, white version (if needed)
│   ├── favicon.ico
│   └── og-image.png                  # Open Graph image for social sharing
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout — wraps Header + Footer
│   │   ├── page.tsx                  # Home (/)
│   │   ├── about-us/
│   │   │   └── page.tsx              # About Us (/about-us)
│   │   ├── contact-us/
│   │   │   └── page.tsx              # Contact Us (/contact-us)
│   │   ├── faq/
│   │   │   └── page.tsx              # FAQ (/faq)
│   │   ├── terms-of-use/
│   │   │   └── page.tsx              # Terms of Use (/terms-of-use)
│   │   ├── privacy-policy/
│   │   │   └── page.tsx              # Privacy Policy (/privacy-policy)
│   │   ├── globals.css               # Global styles + Tailwind directives
│   │   └── not-found.tsx             # 404 page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Sticky navbar with logo + nav links
│   │   │   ├── Footer.tsx            # Dark footer with links + copyright
│   │   │   └── HamburgerMenu.tsx     # Mobile nav drawer
│   │   ├── ui/
│   │   │   ├── Button.tsx            # Reusable button (primary/secondary)
│   │   │   ├── AccordionItem.tsx     # FAQ accordion toggle item
│   │   │   └── ContactForm.tsx       # Formspree-connected contact form
│   │   └── sections/
│   │       ├── HeroSection.tsx       # Home page hero
│   │       └── FeatureSection.tsx    # Reusable feature/content section block
│   │
│   └── lib/
│       └── constants.ts              # FAQ_ITEMS, NAV_LINKS, FOOTER_LINKS, brand config
│
├── .env.local                        # NEXT_PUBLIC_FORMSPREE_ID=xxxx
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

### 6.4 Root Layout (`src/app/layout.tsx`)

```tsx
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Unimate — Where Students Meet Opportunities',
  description: 'A community-driven platform designed for students to connect, build communities, and participate in various activities.',
  openGraph: {
    title: 'Unimate — Where Students Meet Opportunities',
    description: 'Discover friends and communities based on your interests and hobbies.',
    url: 'https://unimate.ge',
    siteName: 'Unimate',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 6.5 Constants (`src/lib/constants.ts`)

```typescript
export const NAV_LINKS = [
  { label: 'Home',       href: '/'           },
  { label: 'About Us',   href: '/about-us'   },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ',        href: '/faq'        },
]

export const FOOTER_LINKS = [
  { label: 'About Us',      href: '/about-us'      },
  { label: 'Contact Us',    href: '/contact-us'    },
  { label: 'FAQ',           href: '/faq'           },
  { label: 'Terms of Use',  href: '/terms-of-use'  },
  { label: 'Privacy Policy',href: '/privacy-policy'},
]

export const SUPPORT_EMAIL = '[email protected]'

export const FAQ_ITEMS = [
  // ⚠️ PLACEHOLDER — replace with real Q&A pairs from live site
  { id: 1, question: '[REPLACE: FAQ Question 1]', answer: '[REPLACE: Answer 1]' },
  { id: 2, question: '[REPLACE: FAQ Question 2]', answer: '[REPLACE: Answer 2]' },
]
```

### 6.6 Formspree Setup

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form — set the recipient email to `[email protected]`
3. Copy the form ID (alphanumeric string from the form endpoint URL)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xxxxxxxx
   ```
5. Add the same variable in the Vercel dashboard under **Project → Settings → Environment Variables**

**Optional:** Install the React helper for cleaner integration:
```bash
npm install @formspree/react
```

### 6.7 Static Assets — Logo Files

Copy the following from the project root into `public/logo/`:

| Source file | Destination | Usage |
|---|---|---|
| `Icon Unimate color.png` | `public/logo/unimate-icon.png` | Favicon, mobile nav, icon-only contexts |
| `unimate transparent.png` | `public/logo/unimate-full.png` | Header navbar horizontal lockup |

Generate `favicon.ico` from `unimate-icon.png` at 32×32 and 16×16. Place in `public/favicon.ico`.

### 6.8 `globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: import Anton as display font fallback */
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-body text-black bg-white;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
  /* Skip-to-content link for accessibility */
  .skip-link {
    @apply sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
           focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded;
  }
}
```

---

## 7. Functional Requirements

| ID | Requirement | Priority | Acceptance Criteria |
|---|---|---|---|
| F-01 | All 6 pages render correctly on desktop (1280px+), tablet (768px), and mobile (375px) | **Must Have** | Visual review at each breakpoint; no overflow, no layout breaks |
| F-02 | Navigation header is sticky and collapses to hamburger on mobile | **Must Have** | Header stays fixed on scroll; hamburger appears at `md` breakpoint; menu opens/closes |
| F-03 | Contact form submits successfully and displays confirmation state | **Must Have** | Successful POST to Formspree; success message rendered; email received at `[email protected]` |
| F-04 | FAQ accordion opens/closes on click with smooth animation | **Must Have** | Click toggles open state; height animates smoothly; answer is readable when open |
| F-05 | Footer links route correctly to their respective pages | **Must Have** | All 5 footer links navigate to correct routes with no 404s |
| F-06 | No Sign In / Sign Up UI elements appear anywhere on the site | **Must Have** | Audit all 6 pages — zero auth-related UI elements present |
| F-07 | Logo links back to Home (`/`) from all pages | **Must Have** | Click logo on any page → navigates to `/` |
| F-08 | All internal navigation links function correctly | **Must Have** | All header + footer links navigate to correct pages; no dead links |
| F-09 | Site passes basic accessibility check (WCAG 2.1 AA) | **Should Have** | Lighthouse accessibility score ≥ 90; all images have alt text; keyboard navigation works |
| F-10 | Page load performance: LCP under 2.5s on standard connection | **Should Have** | Lighthouse LCP ≤ 2.5s; `next/image` used for all images |

---

## 8. Responsive Behavior

### 8.1 Breakpoints

| Name | Width | Tailwind Prefix |
|---|---|---|
| Mobile | 375px (min) | *(default / no prefix)* |
| Tablet | 768px | `md:` |
| Desktop | 1280px+ | `xl:` |

### 8.2 Component Behavior by Breakpoint

| Component | Mobile (375px) | Tablet (768px) | Desktop (1280px+) |
|---|---|---|---|
| **Header** | Logo left, hamburger right | Same as mobile | Logo left, nav links right (inline) |
| **Hero Section** | Single column, stacked, text centered | Single column, text left or centered | Two-column or full-width centered, larger type |
| **Feature Sections** | Single column, image above text | Single column | Two-column, alternating image/text |
| **Contact Form** | Full-width inputs, stacked | Full-width, centered | Max-width container, centered |
| **FAQ Accordion** | Full-width items | Full-width items | Max `max-w-3xl`, centered |
| **Footer** | Links wrap, centered | Links horizontal, centered | Split or centered |

### 8.3 Container Width Strategy

```tsx
// Page section wrapper pattern
<section className="w-full py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>

// Narrow content (legal pages, forms)
<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
  {/* content */}
</div>
```

---

## 9. Accessibility Requirements

All requirements target **WCAG 2.1 Level AA**.

| Area | Requirement | Implementation |
|---|---|---|
| **Images** | All `<img>` and `next/image` elements must have descriptive `alt` text | Add `alt` to every image; use `alt=""` only for purely decorative images |
| **Color Contrast** | Text on background must meet 4.5:1 (normal text) or 3:1 (large text) | White on `#000181` ✓; White on `#A30D88` ✓; verify `#AAB4F7` on white |
| **Keyboard Navigation** | All interactive elements reachable and operable via keyboard | `Tab` to all links, buttons, form fields; `Enter`/`Space` for buttons and accordion |
| **Focus Indicators** | Visible focus ring on all interactive elements | Use `focus-visible:ring-2 focus-visible:ring-brand-magenta` |
| **Skip Link** | Skip-to-main-content link as first focusable element | Implement `.skip-link` in `layout.tsx` (see globals.css) |
| **Semantic HTML** | Proper landmark elements | `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>` |
| **Heading Hierarchy** | One `h1` per page; logical `h1 → h2 → h3` order | No skipped heading levels |
| **ARIA Labels** | Navigation elements labeled | `aria-label="Main navigation"`, `aria-label="Footer navigation"`, `aria-label="Open menu"` |
| **Form Labels** | All form inputs have visible labels | `<label htmlFor="...">` paired with `id` on input |
| **Accordion** | State communicated to screen readers | `aria-expanded="true/false"` on trigger; `aria-controls` linking to panel |
| **Mobile Menu** | Menu state communicated | `aria-expanded` on hamburger button; `aria-hidden` on nav when closed |

---

## 10. Performance Requirements

| Metric | Target | Method |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.5s | `next/image` with `priority` on hero image; preload hero font |
| FID / INP | ≤ 200ms | Minimal client-side JS; server components by default |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | Explicit `width`/`height` on all images; no late-loading layout shifts |
| First Byte (TTFB) | ≤ 800ms | Static generation (`generateStaticParams`, no unnecessary SSR) |
| Bundle Size | Minimize | No unnecessary npm packages; only `@formspree/react` (or plain fetch) as extra dep |

**Next.js optimization checklist:**
- [ ] Use `next/image` for all images — set explicit `width` and `height`
- [ ] Use `next/font` for Google Fonts (Anton) — eliminates layout shift from font load
- [ ] Hero image: add `priority` prop on `<Image>` to preload
- [ ] All pages are Server Components by default — only `ContactForm` and `AccordionItem` use `'use client'`
- [ ] `next/link` for all internal navigation — enables client-side transitions

---

## 11. Deployment

### 11.1 Platform: Vercel

1. **Push to GitHub:** Create a repository (e.g., `unimate-website`) and push the project
2. **Connect Vercel:** Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub → select `unimate-website`
3. **Framework:** Vercel auto-detects Next.js — no configuration needed
4. **Environment Variables:** In Vercel dashboard → Project → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_FORMSPREE_ID = [your Formspree form ID]
   ```
5. **Custom Domain:** In Vercel → Domains → add `unimate.ge` and follow DNS instructions

### 11.2 Environment Files

```
.env.local          # Local development — git-ignored
.env.production     # Vercel reads from dashboard, not this file
```

`.env.local` contents:
```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
```

### 11.3 Build Command

Vercel default — no override needed:
```bash
npm run build   # or: next build
```

---

## 12. Design Constraints

These are absolute rules. No exceptions.

1. **Brand fidelity is mandatory.** Use only the approved color palette and typefaces from Section 2. Do not introduce new colors, fonts, or visual styles.

2. **No authentication UI.** Zero instances of Sign In, Sign Up, Log In, Register, Create Account, or any account-related UI anywhere on the site — in any page, component, or hidden element.

3. **Content preservation.** All text content must be carried over from the original pages exactly as written. No paraphrasing, editing, or AI-generated replacement of copy.

4. **Logo clearspace.** Maintain minimum clearspace equal to the height of the logo icon on all sides at all times.

5. **No logo modification.** Do not stretch, recolor, rotate, add drop shadows, or alter the logo in any way.

6. **No external brand assets.** Do not introduce stock photography, third-party icon libraries (Font Awesome, Heroicons, etc.), or any visual assets not already present on the original site — unless the original site uses them.

7. **Modernization is permitted within limits.** Minor improvements to spacing, responsiveness, and micro-interactions (hover states, transitions) are acceptable. The overall layout structure and visual character must remain faithful to the original.

---

## 13. Out of Scope

The following are explicitly **not** part of this project:

- User authentication (login, registration, sessions, JWT, OAuth)
- Platform app features (feeds, profiles, communities, friends, marketplace)
- Backend API development beyond the Formspree contact form handler
- Admin dashboard or CMS integration
- Multi-language / i18n support
- Blog or news section
- Push notifications
- Analytics integration (unless already present on original site)
- SEO beyond basic meta tags defined in root layout

---

## 14. Open Items

Items marked ✅ are resolved. Items marked ⚠️ require action before the site can be considered complete.

| ID | Item | Status | Resolution |
|---|---|---|---|
| OI-01 | Full content of Terms of Use and Privacy Policy pages | ⚠️ **Open** | Content must be sourced from live site. Replace `[CONTENT PLACEHOLDER]` blocks in Sections 5.5 and 5.6. |
| OI-02 | Full FAQ question and answer list | ⚠️ **Open** | All Q&A pairs must be sourced from live site. Replace placeholder entries in `src/lib/constants.ts → FAQ_ITEMS`. |
| OI-03 | Contact form backend handler | ✅ **Resolved** | **Formspree.** Register form at formspree.io, set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` and Vercel dashboard. |
| OI-04 | Hosting & deployment target | ✅ **Resolved** | **Vercel.** See Section 11. |
| OI-05 | Home page sections below the hero + About Us additional content | ⚠️ **Open** | Content not accessible via automated scraping (403). Replace `[CONTENT PLACEHOLDER]` blocks in Sections 5.1 and 5.2 with verbatim copy from live site. |
| OI-06 | Hero CTA button text and link target | ⚠️ **Open** | Confirm button label and destination URL. Must not link to auth flows. |
| OI-07 | Formspree form ID | ⚠️ **Open** | Register at formspree.io, copy form ID, add to env vars. |

---

## Appendix A — Placeholder Finder

To locate all placeholder blocks in the codebase after implementation begins, search for:

```bash
grep -r "CONTENT PLACEHOLDER\|REPLACE:" src/
```

All `[CONTENT PLACEHOLDER]` blocks in this document correspond to real pages on the live unimate.ge site. The site blocks automated access (HTTP 403). Access the pages directly in a browser and paste the verbatim content to replace each placeholder.

---

## Appendix B — Checklist for Developer Handoff

Before marking the project as complete, verify:

- [ ] All 6 pages render without errors on desktop, tablet, and mobile
- [ ] Header is sticky; hamburger menu works on mobile
- [ ] Logo navigates to `/` from all pages
- [ ] No auth UI exists anywhere
- [ ] Contact form submits to Formspree; confirmation message shows
- [ ] FAQ accordion opens/closes smoothly; keyboard accessible
- [ ] All footer links route correctly
- [ ] All `[CONTENT PLACEHOLDER]` blocks replaced with real content
- [ ] All `[REPLACE: ...]` entries in `FAQ_ITEMS` replaced with real Q&As
- [ ] `NEXT_PUBLIC_FORMSPREE_ID` set in Vercel dashboard
- [ ] Custom domain `unimate.ge` connected in Vercel
- [ ] Lighthouse score: Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90
- [ ] All images have `alt` text
- [ ] No console errors in production build

---

*Document version: 1.0 · Generated: 2026-05-24 · Unimate Product Team · [email protected]*
