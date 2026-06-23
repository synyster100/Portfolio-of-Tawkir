# Implementation Plan - Tawkir Arifin Portfolio Website Revamp

Revamp Tawkir Arifin's developer portfolio into a sharp, editorial, grid-based personal site. The website will have a premium one-person studio feel: minimal, structured, bold typography, off-white background, black panels, orange accent highlights, and smooth micro-animations.

## User Review Required

> [!IMPORTANT]
> - **Fonts**: Since `Neue Haas Grotesk` or `Satoshi` requires licensing, we will default to `Geist` or `Space Grotesk` paired with `Inter` via `next/font/google`.
> - **Direct Links & Downloadable Resume**: We will configure direct contact links (mailto, WhatsApp, LinkedIn, GitHub). A placeholder file `public/Tawkir-Arifin-Resume.pdf` will be created, which you can replace with your actual resume.
> - **Work Mockups & Avatar**: We will generate premium placeholders using the `generate_image` tool for the project mockups and the profile avatar to achieve a cohesive style (off-white, black, orange highlights, grid elements).

## Open Questions

1. **Testimonials vs. Proof**: The specification lists 4 proof points rather than custom clients' text. Do you prefer we proceed with the "Proof over noise" grid layout using these 4 points, or do you want to provide real client testimonials? (We will default to the "Proof over noise" grid).
2. **Contact Form**: Should the contact form be connected to a service (e.g., Formspree, Resend), or should it use direct `mailto` and WhatsApp links? (We will implement direct links first, with an optional visual form that uses direct actions).

---

## Proposed Changes

### Setup & Infrastructure

We will initialize a new Next.js project with App Router, TypeScript, and Tailwind CSS in the root directory.

#### [NEW] [package.json](file:///f:/Portfolio%20of%20Tawkir/package.json)
Initial dependencies to be installed:
- `framer-motion` (smooth animations)
- `lucide-react` (icons)
- `clsx` and `tailwind-merge` (conditional styles)

#### [NEW] [profile.ts](file:///f:/Portfolio%20of%20Tawkir/src/data/profile.ts)
A single data file containing all copy, credentials, experience, projects, skills, education, and services.

---

### Global Design & Grid System

#### [NEW] [globals.css](file:///f:/Portfolio%20of%20Tawkir/src/app/globals.css)
- Implement CSS variables for colors:
  - `--background`: `#f2efe6` (off-white)
  - `--background-soft`: `#ebe7dc`
  - `--foreground`: `#111111`
  - `--muted`: `#6f6a61`
  - `--line`: `#d6d0c4`
  - `--accent`: `#ff4b1f` (orange)
  - `--panel`: `#101010`
  - `--panel-text`: `#f7f2e8`
- Setup custom grid borders: thin grid lines across sections (`border-line`).
- Setup custom background grid lines (using linear-gradient grid background).

#### [NEW] [layout.tsx](file:///f:/Portfolio%20of%20Tawkir/src/app/layout.tsx)
- Embed Geist Sans and Space Grotesk fonts.
- Implement full SEO metadata config (page title, description, openGraph, keywords, robots, sitemap structure).

---

### UI Components (`src/components/`)

We will implement the page layout in a modular way:

1. **[NEW] [Header.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Header.tsx)**: Thin technical navbar (sticky, transparent background blur, navigation links, and "Get in touch" button).
2. **[NEW] [Hero.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Hero.tsx)**: Massive typography title "Tawkir.", description, orange dot, 4-column tag row, and clean CTA actions.
3. **[NEW] [Marquee.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Marquee.tsx)**: Infinite CSS-based horizontal marquee of skills on a dark background.
4. **[NEW] [About.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/About.tsx)**: Grayscale-to-color portrait image or abstract developer collage on hover, beside a bold two-column description.
5. **[NEW] [Metrics.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Metrics.tsx)**: Clean 4-card layout mapping quantitative milestones (experience, AQI dataset scale, degree years).
6. **[NEW] [ExperienceGrid.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/ExperienceGrid.tsx)**: List of career milestones (Skarion, NerdLab, BCSIR, NeuroChip, BUMONON) formatted as a professional layout with hover-revealed details and tech tags.
7. **[NEW] [WorkGrid.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/WorkGrid.tsx)**: 2-column project grid with image zoom transitions, bold project categories, and result highlights.
8. **[NEW] [Process.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Process.tsx)**: Four-step layout illustrating how the work gets built (Understand, Structure, Build, Ship).
9. **[NEW] [Services.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Services.tsx)**: Interactive accordion listing services with detailed features when expanded.
10. **[NEW] [Testimonials.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Testimonials.tsx)**: A "Proof over noise" layout displaying high-contrast bulletproof metric-based cards.
11. **[NEW] [ContactCTA.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/ContactCTA.tsx)**: Full-width panel with huge "Ready to build something useful?" title, social buttons, and email/WhatsApp direct links.
12. **[NEW] [Footer.tsx](file:///f:/Portfolio%20of%20Tawkir/src/components/Footer.tsx)**: Structured footer in deep black color, holding pages navigation, external links, and the copyright statement.

---

### Image Assets

We will generate realistic assets for the projects using the `generate_image` tool:
- `/public/work/skarion-web.jpg`
- `/public/work/ai-chatbot.jpg`
- `/public/work/aqi-forecast.jpg`
- `/public/work/mern-apps.jpg`
- `/public/images/profile.jpg`
- `/public/images/og-image.jpg`

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify there are no compilation or typescript errors.
- Run `npm run lint` to check for code structure issues.

### Manual Verification
- Launch local development server (`npm run dev`) and interact with the site in the browser.
- Verify sticky header states, accordion toggles, infinite marquee hover-pausing, grid alignment, and typography scales on both desktop and mobile viewports.
- Confirm all social and action buttons (email, WhatsApp, LinkedIn, GitHub) lead to the correct destination links.
