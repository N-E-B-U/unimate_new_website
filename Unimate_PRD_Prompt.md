# Unimate.ge — PRD Generation Prompt

---

## ROLE / PERSONA

You are a Senior Product Manager and Technical Documentation Specialist with 12+ years of experience writing Production-Ready PRDs for web platforms, specifically consumer-facing marketing/informational sites for early-stage tech startups. You produce PRDs that are precise enough for a development team to build from without requiring back-and-forth, and visually expressive enough that a designer can reference them without an existing Figma file. Your writing is structured, unambiguous, and actionable — every line earns its place.

---

## CONTEXT / BACKGROUND

**Product:** Unimate.ge — a student-focused community platform operating in Georgia.
**Tagline:** *"Where Students Meet Opportunities"*
**Platform Description:** Unimate is a community-driven platform designed for students to connect, build communities, and participate in various activities. It serves as a social discovery space where students find friends and communities based on shared interests and hobbies.

**Project:** The client requires a new **customer-facing (public) website** — a faithful recreation of the current Unimate.ge public website, preserving the existing visual identity and content, with minor allowances for modernization. This is NOT the platform app itself — it is the public-facing marketing/informational site only.

**Audience for this PRD:** An AI-assisted frontend development workflow (e.g., Claude or similar LLM-based dev agent). The PRD must be explicit enough to serve as a self-contained build spec — no assumptions, no ambiguity.

---

## OBJECTIVE / GOAL

Produce a complete, structured PRD (Product Requirements Document) in English for the new Unimate.ge public website, covering all pages, components, content, design system, and behavioral specifications, such that:

1. A developer reading only this document can implement the full site without needing to view the original website.
2. Every page's layout, content, and component hierarchy is defined with zero ambiguity.
3. Brand identity (colors, typography, logo usage) is fully encoded as implementation-ready specifications.

---

## BRAND IDENTITY REFERENCE (Embed in PRD Design System Section)

Use the following as the ground truth for all design decisions. Do not deviate.

### Logo
- **Icon:** Custom organic shape forming a stylized "U," composed of two connected node-and-circle forms representing network and unity. Gradient fills from magenta-purple (`#A30D88`) on the left to deep navy (`#000181`) on the right, passing through mid-purple.
- **Wordmark:** "unimate" in lowercase, bold, black (`#000000`), serif-adjacent heavy display typeface (Impact-style).
- **Tagline beneath wordmark:** *"Where Students Meet Opportunities"* — smaller, regular weight.
- **Clearspace:** Minimum clearspace equal to the height of the icon on all four sides.
- **Usage:** Horizontal lockup (icon + wordmark) for header/navbar. Icon-only permitted for favicon and mobile contexts.
- **Prohibited:** Do not stretch, recolor, or apply drop shadows to the logo.

### Color Palette

| Role | Name | Hex |
|---|---|---|
| Primary | Deep Magenta | `#A30D88` |
| Primary | Deep Navy | `#000181` |
| Primary | White | `#FFFFFF` |
| Primary | Black | `#000000` |
| Secondary | Soft Lavender Blue | `#AAB4F7` |
| Secondary | Pink | `#CE6ABF` |

**Gradient (logo + accent use):** Linear gradient from `#A30D88` → `#CE6ABF` → `#000181`

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / Headings | Impact | Bold / Heavy |
| Body / UI | Arial | Bold |

> **Modernization note:** Arial Bold may be substituted with a web-safe equivalent or Google Font with visually equivalent weight and character if needed for rendering consistency — preserve the no-frills, bold legibility feel.

---

## SITE ARCHITECTURE

The public website consists of exactly **6 pages**:

1. Home (index / `/`)
2. About Us (`/about-us`)
3. Contact Us (`/contact-us`)
4. FAQ (`/faq`)
5. Terms of Use (`/terms-of-use`)
6. Privacy Policy (`/privacy-policy`)

**Navigation (Header):** Links to Home, About Us, Contact Us, FAQ.
**No authentication elements:** The header must NOT include Sign In or Sign Up buttons, links, or any login-related UI. These are explicitly excluded.

---

## GLOBAL COMPONENTS

### Header / Navigation Bar
- **Left:** Unimate logo (horizontal lockup — icon + wordmark).
- **Right:** Navigation links — `Home` | `About Us` | `Contact Us` | `FAQ`
- **Style:** Clean, minimal. White or light background. No dropdowns. No authentication CTAs.
- **Behavior:** Sticky on scroll. Mobile: collapses to hamburger menu.

### Footer
- **Copyright line:** `All rights reserved © Unimate`
- **Footer navigation links (inline, horizontal):**
  - About Us
  - Contact Us
  - FAQ
  - Terms of Use
  - Privacy Policy
- **Style:** Dark background (navy `#000181` or black `#000000`). White text. Centered or split layout. No social icons unless already present on the original site.

---

## PAGE SPECIFICATIONS

---

### PAGE 1 — Home (`/`)

**Purpose:** Primary landing page. Communicates Unimate's value proposition to prospective student users.

**Content (replicate from existing site):**

- **Hero Section:**
  - Headline: *"The platform where students meet opportunities"*
  - Sub-headline / descriptor: *"Discover friends and communities based on your interests and hobbies"*
  - CTA: Present any existing CTA button(s) from the current site EXCEPT any Sign In / Sign Up triggers.
  - Visual treatment: Hero may use brand gradient, background imagery, or abstract pattern consistent with the brand icon motif.

- **Feature / Value Sections:**
  - Replicate all existing content sections from the current home page with their original text, structure, and visual hierarchy.
  - Preserve section order as they appear on the original site.

**Layout notes:**
- Full-width sections.
- Strong typographic hierarchy using Impact for headlines, Arial Bold for supporting text.
- Brand gradient accent elements permitted.

---

### PAGE 2 — About Us (`/about-us`)

**Purpose:** Communicates the mission, story, and values of Unimate.

**Content (replicate from existing site):**
- Core description: *"Unimate is a community-driven platform designed for students to connect, build communities, and participate in various activities."*
- Replicate all remaining existing text blocks, sections, and visual elements from the current About Us page in their original order and wording.

**Layout notes:**
- Section-based layout.
- May include image/illustration placeholders if visuals exist on the original page.

---

### PAGE 3 — Contact Us (`/contact-us`)

**Purpose:** Provides a direct communication channel for users and potential partners.

**Content (replicate from existing site):**
- Section heading: *"Let's Talk! We'd Love to Hear From You."*
- **Contact Form** with the following fields (minimum):
  - Name
  - Email
  - Message
  - Submit button
- **Support email reference:** `[email protected]`
- Replicate any additional instructional text or elements from the original page.

**Behavior:**
- Form submission should be functional (connect to backend endpoint or third-party form handler such as Formspree, EmailJS, or equivalent).
- Display success/error state after submission.

---

### PAGE 4 — FAQ (`/faq`)

**Purpose:** Answers common questions about the Unimate platform.

**Content (replicate from existing site):**
- Replicate all existing FAQ questions and answers verbatim from the current `/faq` page.
- Note from site: Users can also contact support via the chat window at the bottom of the website or via email at `[email protected]`.

**Layout notes:**
- Accordion or expandable Q&A pattern recommended.
- Each question as a clickable toggle revealing the answer.

---

### PAGE 5 — Terms of Use (`/terms-of-use`)

**Purpose:** Legal page outlining platform usage terms.

**Content:** Replicate existing content from the current Unimate.ge Terms of Use page verbatim, preserving all sections, clauses, and formatting.

**Layout notes:**
- Long-form text layout. Clear section headers. High readability — body font, comfortable line spacing.

---

### PAGE 6 — Privacy Policy (`/privacy-policy`)

**Purpose:** Legal page covering data collection, usage, and user rights.

**Content:** Replicate existing content from the current Unimate.ge Privacy Policy page verbatim, preserving all sections and structure.

**Layout notes:**
- Same as Terms of Use. Long-form, high-readability layout.

---

## FUNCTIONAL REQUIREMENTS

| # | Requirement | Priority |
|---|---|---|
| F-01 | All 6 pages render correctly on desktop (1280px+), tablet (768px), and mobile (375px) | Must Have |
| F-02 | Navigation header is sticky and collapses to hamburger on mobile | Must Have |
| F-03 | Contact form submits successfully and displays confirmation state | Must Have |
| F-04 | FAQ accordion opens/closes on click with smooth animation | Must Have |
| F-05 | Footer links route correctly to their respective pages | Must Have |
| F-06 | No Sign In / Sign Up UI elements appear anywhere on the site | Must Have |
| F-07 | Logo links back to Home (`/`) from all pages | Must Have |
| F-08 | All internal navigation links function correctly | Must Have |
| F-09 | Site passes basic accessibility check (WCAG 2.1 AA: contrast, alt text, keyboard nav) | Should Have |
| F-10 | Page load performance: LCP under 2.5s on standard connection | Should Have |

---

## DESIGN CONSTRAINTS & RULES

1. **Brand fidelity is mandatory.** Use only the approved color palette and typefaces defined in the Design System section.
2. **No authentication UI** anywhere on the site — no sign in, sign up, login, register, or account elements.
3. **Content preservation** — all text content must be carried over from the original pages exactly as written. No paraphrasing, no content generation.
4. **Logo clearspace** — maintain minimum clearspace around the logo at all times.
5. **Modernization is permitted** within the spirit of the brand — subtle improvements to spacing, responsiveness, and micro-interactions are acceptable, but layout structure and visual character must remain faithful.
6. **No external brand assets** may be introduced (no stock imagery, no third-party icons) unless already present on the original site.

---

## OUT OF SCOPE

- User authentication (login, registration, sessions)
- Platform app features (feeds, profiles, communities, marketplace)
- Backend API development beyond the contact form handler
- Admin dashboard or CMS
- Multi-language support

---

## OPEN ITEMS (Flag for Client Confirmation)

| # | Item | Notes |
|---|---|---|
| OI-01 | Full content of Terms of Use and Privacy Policy pages | Client to confirm if these pages exist on the current site or require new content to be drafted |
| OI-02 | Full FAQ question list | Search results show partial content only — client to provide complete Q&A list or confirm it can be scraped from the live site |
| OI-03 | Contact form backend handler preference | Formspree / EmailJS / custom endpoint — client to specify |
| OI-04 | Hosting & deployment target | Vercel / Netlify / custom server — client to specify |
| OI-05 | Home page sections below the hero | Full section list and copy required — site returned 403 errors during content extraction |

---

*Document version: 1.0 — Ready for developer handoff pending resolution of Open Items above.*
