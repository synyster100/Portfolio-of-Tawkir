# Tawkir Arifin Portfolio Website Revamp

A complete build specification for revamping Tawkir Arifin's developer portfolio into a sharp, editorial, grid-based personal site inspired by the provided reference screenshot. The website should feel like a premium one-person studio portfolio: minimal, structured, bold typography, off-white background, black panels, orange accent highlights, and motion used only where it supports clarity.

> Important: use the reference image for layout direction, spacing rhythm, typography mood, and interaction style. Do **not** copy the Lequon/Akira branding, exact text, icons, client logos, or proprietary visuals. The final site must be Tawkir Arifin's own portfolio.

---

## 1. Project Goal

Build a modern portfolio website for **Tawkir Arifin**, a Frontend Developer with experience in frontend development, AI-driven applications, full-stack web apps, research/data forecasting, SCORM/course content, and software engineering.

The portfolio should communicate three things quickly:

1. Tawkir builds clean, responsive, production-ready frontend experiences.
2. Tawkir can work across modern web stacks, including React, Next.js, Node.js, Flask, Django, Streamlit, and databases.
3. Tawkir has practical experience across Skarion, NerdLab, BCSIR, NeuroChip Industries, and BRAC University MONON.

The site should look like a **high-end independent developer studio**, not a generic resume page from 2014 that somehow survived the internet apocalypse.

---

## 2. Recommended Tech Stack

Use this stack for the build:

- **Framework:** Next.js with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Content Source:** Local TypeScript data file first, optional CMS later
- **Image Optimization:** Next.js `Image` component
- **SEO:** Next.js Metadata API

Optional additions:

- **MDX** for case studies or blog posts
- **next-themes** only if dark mode is added later
- **Resend / EmailJS / Formspree** for contact form submission

---

## 3. Setup Commands

Create the project:

```bash
npx create-next-app@latest tawkir-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd tawkir-portfolio
```

Install required packages:

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

Run locally:

```bash
npm run dev
```

Build before deployment:

```bash
npm run build
```

---

## 4. Visual Direction From Reference Image

The provided screenshot has a very specific design language. Recreate the **system**, not the exact page.

### Core style traits

- Off-white editorial background
- Thin grid lines across sections
- Big black typography
- Orange accent words and dots
- Large hero title
- Horizontal skill/service marquee
- Modular boxed sections
- Portfolio cards in a 2-column grid
- Numbered process steps
- Accordion-style service section
- Testimonial cards
- Oversized final CTA
- Black footer

### Mood keywords

- Editorial
- Studio-like
- Minimal
- Sharp
- Structured
- Technical
- Slightly brutalist
- Premium but not decorative

### Colors

Use these as CSS variables:

```css
:root {
  --background: #f2efe6;
  --background-soft: #ebe7dc;
  --foreground: #111111;
  --muted: #6f6a61;
  --line: #d6d0c4;
  --line-dark: #2a2a2a;
  --accent: #ff4b1f;
  --accent-soft: #ffe1d6;
  --panel: #101010;
  --panel-text: #f7f2e8;
}
```

### Typography

Recommended font pairing:

- Primary sans: `Geist`, `Inter`, or `Satoshi`
- Display sans: `Neue Haas Grotesk` if licensed, otherwise use `Geist Sans`, `Inter Tight`, or `Space Grotesk`
- Optional italic serif for small CTA text: `Playfair Display` or `Cormorant Garamond`

Use heavy display typography for hero and section titles:

```css
.hero-title {
  font-size: clamp(4.5rem, 16vw, 13rem);
  line-height: 0.82;
  letter-spacing: -0.08em;
  font-weight: 900;
}

.section-title {
  font-size: clamp(2.5rem, 7vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  font-weight: 850;
}
```

---

## 5. Site Structure

The site should be a single-page portfolio with anchored navigation.

Recommended sections:

1. Header / Top Bar
2. Hero
3. Skill Marquee
4. Intro / About
5. Metrics Strip
6. Experience / Collaborators
7. Selected Work
8. Process
9. Services / What I Offer
10. Testimonials or Proof Section
11. Contact CTA
12. Footer

Suggested route:

```txt
/
```

Optional future routes:

```txt
/work/[slug]
/blog/[slug]
```

---

## 6. Content Architecture

Create a single source of truth for all portfolio content.

File:

```txt
src/data/profile.ts
```

Use this structure:

```ts
export const profile = {
  name: "Tawkir Arifin",
  role: "Frontend Developer",
  location: "Dhaka, Bangladesh",
  email: "tawkirarifin200@gmail.com",
  phone: "+8801946282670",
  linkedin: "https://www.linkedin.com/in/tawkir-arifin-310a00230/",
  github: "https://www.github.com/synyster100",
  currentPortfolio: "https://arifin-portfolio.vercel.app/",
  whatsapp: "http://wa.me/+8801946282670",
  headline:
    "Frontend developer building fast, responsive web products with AI, full-stack, and research-backed engineering experience.",
  shortBio:
    "I design and build modern web interfaces, AI-driven applications, full-stack products, and research-oriented data solutions. My work sits between clean frontend execution and practical engineering systems.",
};
```

---

## 7. Resume-Based Content To Use

Use the following real content from the resume. Keep wording polished, but do not invent fake roles, dates, companies, or awards.

### Experience

```ts
export const experiences = [
  {
    company: "Skarion",
    type: "Full Time",
    title: "Mid-Level Frontend Developer",
    location: "Fairfax, VA, USA",
    mode: "Remote",
    date: "Nov 2024 - Present",
    bullets: [
      "Planned and designed the revamp of the organization’s official website and sister-concern web properties.",
      "Developed SCORM packages and course content for multiple niche industries in the US market.",
      "Built a fully responsive, cross-platform website based on a new design system.",
      "Improved website usability, structure, and performance during the redevelopment process."
    ]
  },
  {
    company: "NerdLab",
    type: "Contractual",
    title: "Frontend Developer",
    location: "California, USA",
    mode: "Remote",
    date: "Dec 2024 - May 2025",
    bullets: [
      "Developed and deployed AI-driven applications and chatbots using LLM APIs and Next.js.",
      "Built full-stack web applications using Flask and Streamlit.",
      "Developed web solutions using React, Node.js, and modern JavaScript frameworks.",
      "Implemented end-to-end MERN stack applications from backend logic to frontend interfaces."
    ]
  },
  {
    company: "BCSIR",
    type: "Part-time",
    title: "Research Assistant",
    location: "Dr. Qudrat-E-Khuda Road, Dhaka",
    mode: "On-Site",
    date: "Feb 2025 - Apr 2025",
    bullets: [
      "Conducted research on comparative AQI prediction in Bangladesh using time-series forecasting methods.",
      "Implemented ARIMA, SARIMA, LSTM, and Transformer models using Python, TensorFlow/Keras, and statsmodels.",
      "Developed and curated an AQI dataset containing over 500,000 data points for training and evaluation.",
      "Applied data-driven forecasting insights to support environmental policy analysis and public health planning."
    ]
  },
  {
    company: "NeuroChip Industries LTD",
    type: "Full-time",
    title: "Software Engineer Intern",
    location: "London, UK",
    mode: "Remote",
    date: "Feb 2024 - Apr 2024",
    bullets: [
      "Contributed to the development of an enterprise application in a collaborative team environment.",
      "Gained hands-on experience with the .NET Framework and C#.",
      "Applied software development best practices in a professional project setting.",
      "Participated in debugging, team discussions, and feature implementation."
    ]
  }
];
```

### Skills

```ts
export const skills = {
  languages: ["Python", "JavaScript", "Java", "C", "C++"],
  tools: ["Git & GitHub", "Swagger", "Figma MCP", "Storybook"],
  frontend: ["HTML", "CSS", "React", "Next.js", "React Native", "Flutter", "Three.js"],
  backend: ["Flask", "Django", "Node.js", "Streamlit"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
};
```

### Education

```ts
export const education = [
  {
    school: "BRAC University",
    degree: "Bachelor of Science in Computer Science & Engineering",
    location: "Dhaka, Bangladesh",
    date: "2021 - 2025"
  }
];
```

### Extracurricular

```ts
export const extracurricular = [
  {
    organization: "BRAC University MONON (BUMONON)",
    role: "President",
    location: "Dhaka, Bangladesh",
    date: "Jan 2024 - Apr 2025",
    bullets: [
      "Led and organized internal cultural events and collaborative shows, managing planning, coordination, and execution.",
      "Performed as a keyboardist, guitarist, and vocalist in university and inter-university musical events."
    ]
  }
];
```

---

## 8. Suggested Project / Work Cards

Create a `works` array. If final project names are unavailable, use clean working titles and replace them later.

```ts
export const works = [
  {
    title: "Skarion Website Revamp",
    category: "Frontend / Design System",
    year: "2024 - Present",
    description:
      "A responsive organizational website rebuild focused on clearer structure, improved usability, and scalable frontend components.",
    tags: ["Next.js", "React", "Responsive UI", "Design System"],
    image: "/work/skarion-web.jpg",
    link: "#"
  },
  {
    title: "AI Chatbot Applications",
    category: "AI Product Development",
    year: "2024 - 2025",
    description:
      "AI-driven applications and chatbots built with LLM APIs, Next.js, and full-stack deployment workflows.",
    tags: ["LLM APIs", "Next.js", "Node.js", "AI Apps"],
    image: "/work/ai-chatbot.jpg",
    link: "#"
  },
  {
    title: "AQI Forecasting Research",
    category: "Machine Learning / Research",
    year: "2025",
    description:
      "Comparative air quality prediction research using ARIMA, SARIMA, LSTM, and Transformer models on a 500,000+ point dataset.",
    tags: ["Python", "TensorFlow", "Time Series", "Research"],
    image: "/work/aqi-forecast.jpg",
    link: "#"
  },
  {
    title: "MERN Stack Web Apps",
    category: "Full-Stack Development",
    year: "2024 - 2025",
    description:
      "End-to-end web applications covering backend logic, frontend interfaces, and database-connected product workflows.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "/work/mern-apps.jpg",
    link: "#"
  }
];
```

Use realistic mockup images until real screenshots are ready. Every card should clearly say what Tawkir did, what tools were used, and what outcome was created.

---

## 9. Folder Structure

Recommended structure:

```txt
tawkir-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── og-image.jpg
│   └── work/
│       ├── skarion-web.jpg
│       ├── ai-chatbot.jpg
│       ├── aqi-forecast.jpg
│       └── mern-apps.jpg
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── About.tsx
│   │   ├── Metrics.tsx
│   │   ├── ExperienceGrid.tsx
│   │   ├── WorkGrid.tsx
│   │   ├── Process.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ContactCTA.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── profile.ts
│   └── lib/
│       └── utils.ts
├── package.json
└── README.md
```

---

## 10. Global CSS Foundation

In `src/app/globals.css`, create the visual base.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f2efe6;
  --background-soft: #ebe7dc;
  --foreground: #111111;
  --muted: #6f6a61;
  --line: #d6d0c4;
  --accent: #ff4b1f;
  --panel: #101010;
  --panel-text: #f7f2e8;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background:
    linear-gradient(to right, rgba(17, 17, 17, 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(17, 17, 17, 0.04) 1px, transparent 1px),
    var(--background);
  background-size: 96px 96px, 96px 96px, auto;
  color: var(--foreground);
  font-family: var(--font-geist-sans), Inter, system-ui, sans-serif;
}

::selection {
  background: var(--accent);
  color: white;
}

.container-grid {
  width: min(100% - 32px, 1440px);
  margin-inline: auto;
  border-left: 1px solid var(--line);
  border-right: 1px solid var(--line);
}

.section-border {
  border-top: 1px solid var(--line);
}

.accent {
  color: var(--accent);
}
```

Do not overuse gradients, shadows, glassmorphism, neon borders, or random floating blobs. This design should look intentional, not like a template marketplace had a migraine.

---

## 11. Page Layout Implementation

In `src/app/page.tsx`:

```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import ExperienceGrid from "@/components/ExperienceGrid";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Metrics />
      <ExperienceGrid />
      <WorkGrid />
      <Process />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
```

---

## 12. Header Requirements

The header should be thin, technical, and compact, similar to the reference screenshot.

### Desktop layout

Left:

```txt
TAWKIR.ARIFIN ● FRONTEND.DEVELOPER
```

Center:

```txt
PORTFOLIO / SYSTEM / 2026
```

Right:

```txt
GET IN TOUCH ↗
```

### Links

- About
- Work
- Experience
- Services
- Contact

### Behavior

- Sticky at top
- Thin bottom border
- Off-white background with slight transparency
- Contact button with black border and hover orange background
- On mobile, collapse into a simple menu button

---

## 13. Hero Section

The hero should be visually dominant and use the name as the main identity element.

### Content

Title:

```txt
Tawkir.
```

Subtitle:

```txt
Frontend developer building fast, responsive web products with AI, full-stack, and research-backed engineering experience.
```

Small metadata row:

```txt
[01] Frontend Development
[02] AI Applications
[03] Full-Stack Systems
[04] Research & Data
```

Hero CTA buttons:

- View Work
- Get in Touch

### Visual details

- Large black title
- Orange dot after name
- Thin horizontal line aligned with subtitle
- Optional small abstract logo mark based on initials `TA`
- No clutter

### Layout

On desktop:

- Use 12-column grid
- Hero title spans 8-10 columns
- Subtitle sits below title, aligned to the left edge of the text block
- Metadata row sits at the bottom of the hero

On mobile:

- Title should wrap cleanly
- Metadata becomes 2-column grid
- CTA buttons stack

---

## 14. Skill Marquee

Create a black horizontal marquee after the hero.

Text items:

```txt
React ● Next.js ● TypeScript ● AI Apps ● LLM APIs ● Flask ● Streamlit ● MERN Stack ● Node.js ● PostgreSQL ● MongoDB ● Storybook ● SCORM ● Research ● Time-Series Forecasting
```

Requirements:

- Black background
- White text
- Orange dot separators
- Smooth infinite horizontal movement
- Pause animation on hover
- Duplicate the item list twice for seamless looping

Use CSS animation, not heavy JavaScript.

---

## 15. About Section

Headline:

```txt
A developer of one. Built around systems, interfaces, and useful products.
```

Accent orange words:

- systems
- interfaces
- useful products

Body:

```txt
I work across frontend development, AI-driven applications, full-stack web products, and research-oriented data solutions. My background combines production web development, LLM-powered tools, SCORM content systems, and forecasting research.
```

Image panel:

- Use Tawkir's professional photo if available
- If no photo is available, use a black panel with an abstract `TA` mark or a code/interface collage
- Convert photo to grayscale by default
- On hover, slightly reveal color or orange overlay

---

## 16. Metrics Strip

Use resume-backed metrics only.

Suggested metrics:

```txt
04+ Organizations
500K+ AQI Data Points
2021-2025 CSE Degree
Full-Stack + AI Experience
```

Design:

- Four equal cards
- Top border and bottom border
- Number in orange
- Label in black
- Small descriptor in muted text

---

## 17. Experience / Collaborators Section

Use the section title pattern from the reference:

```txt
Selected collaborators.
```

But for Tawkir, this section can work as a professional experience grid.

Cards:

1. Skarion
2. NerdLab
3. BCSIR
4. NeuroChip Industries LTD
5. BRAC University MONON

Each card should include:

- Company / organization
- Role
- Date
- Location
- 2-3 short bullets
- Tech or work tags

Layout:

- Desktop: 2-column grid for detailed experience cards
- Mobile: 1-column grid
- Add thin borders between cards
- Use orange numbering: `01`, `02`, `03`, etc.

---

## 18. Selected Work Section

Title:

```txt
Selected work.
```

Use a 2-column grid like the screenshot.

### Work card design

Each card needs:

- Large image/mockup
- Project title
- Category
- Year
- Short result statement
- Tags
- External link if available

### Suggested projects

1. **Skarion Website Revamp**
2. **AI Chatbot Applications**
3. **AQI Forecasting Research**
4. **MERN Stack Web Applications**
5. **SCORM Course Packages**
6. **Enterprise App Contribution**

### Image direction

Use custom mockup visuals:

- Browser mockup for Skarion website
- Chat interface mockup for AI chatbot
- Data chart/map visual for AQI forecasting
- Dashboard mockup for MERN app
- LMS/course player mockup for SCORM package
- Clean enterprise UI screenshot placeholder for .NET app

Keep images neutral, high contrast, and consistent. Avoid random Unsplash photos unless they genuinely support the project.

---

## 19. Process Section

Use the reference's four-step process structure.

Title:

```txt
How the work gets made.
```

Steps:

```ts
export const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the product goal, users, core flows, technical constraints, and success criteria before touching the interface. Revolutionary behavior, apparently."
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Turn requirements into architecture, user flows, components, and data models that make the build easier to scale."
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop responsive interfaces, integrate APIs, handle state, test key flows, and keep performance in check."
  },
  {
    number: "04",
    title: "Ship",
    description:
      "Deploy, review, optimize, document, and improve based on real usage instead of pretending launch day is the finish line."
  }
];
```

Design:

- Four columns on desktop
- Two columns on tablet
- One column on mobile
- Orange step number
- Thin vertical separators

---

## 20. Services / What I Offer Section

Title:

```txt
What I offer.
```

Intro:

```txt
A focused mix of frontend development, AI application development, full-stack implementation, and research-backed technical execution.
```

Use accordion rows on the right side.

### Services

```ts
export const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive websites and web applications using React, Next.js, HTML, CSS, and modern component systems.",
    includes: ["Landing pages", "Portfolio sites", "Dashboards", "Design systems", "Responsive UI"]
  },
  {
    title: "AI-Driven Web Apps",
    description:
      "LLM-powered tools, chatbot interfaces, and AI application frontends connected to practical backend workflows.",
    includes: ["Chatbots", "LLM APIs", "Prompt flows", "AI interfaces", "Deployment support"]
  },
  {
    title: "Full-Stack Development",
    description:
      "End-to-end applications using React, Node.js, Flask, Django, Streamlit, and database-backed systems.",
    includes: ["MERN apps", "REST APIs", "Database integration", "Admin panels", "MVP builds"]
  },
  {
    title: "Research & Data Prototypes",
    description:
      "Technical prototypes for forecasting, data workflows, and research-backed analysis using Python and ML tools.",
    includes: ["Time-series models", "Data cleaning", "Forecasting dashboards", "Model comparison", "Research support"]
  },
  {
    title: "SCORM & Learning Systems",
    description:
      "SCORM packages, course interfaces, and structured learning content for niche training programs.",
    includes: ["SCORM packages", "Course UI", "LMS-ready content", "Training pages", "Content structure"]
  }
];
```

---

## 21. Testimonials / Proof Section

Do not fabricate testimonials.

If real testimonials are not available, use a proof-based section instead.

Recommended title:

```txt
Proof over noise.
```

Cards:

```txt
Built responsive websites for organizational and sister-concern brands.
```

```txt
Developed AI-driven applications and chatbots using LLM APIs and Next.js.
```

```txt
Curated and worked with a 500,000+ point AQI dataset for forecasting research.
```

```txt
Contributed across frontend, backend, research, and enterprise application environments.
```

If real testimonials are added later, each card should include:

- Quote
- Person name
- Role/company
- Project context
- Permission confirmed

---

## 22. Contact CTA Section

Large headline:

```txt
Ready to build something useful?
```

Orange accent word:

```txt
useful
```

Subtext:

```txt
Available for frontend development, AI web apps, full-stack MVPs, and technical product builds.
```

Buttons:

- Email Me
- WhatsApp
- GitHub
- LinkedIn

Contact links:

```txt
Email: tawkirarifin200@gmail.com
Phone/WhatsApp: +8801946282670
LinkedIn: https://www.linkedin.com/in/tawkir-arifin-310a00230/
GitHub: https://www.github.com/synyster100
```

---

## 23. Footer

Black footer with compact columns.

Left:

```txt
Tawkir.
Frontend Developer
Dhaka, Bangladesh
```

Middle:

```txt
Pages
Home
Work
Experience
Services
Contact
```

Right:

```txt
Elsewhere
LinkedIn
GitHub
Email
WhatsApp
```

Bottom row:

```txt
© 2026 Tawkir Arifin. Built with Next.js.
```

---

## 24. Animation Rules

Use animation carefully. The goal is premium movement, not a circus audition.

### Use

- Fade-up on section entrance
- Slight blur-to-clear entrance
- Smooth marquee loop
- Work card image scale on hover
- Orange accent line reveal
- Accordion expand/collapse

### Avoid

- Random bouncing
- Excessive parallax
- Cursor trails
- Overcomplicated loading screens
- Animations that delay reading content

Framer Motion reveal example:

```tsx
import { motion } from "framer-motion";

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 25. Responsive Rules

### Desktop

- Max width: 1440px
- 12-column grid
- Large hero typography
- 2-column work grid
- 4-column process section

### Tablet

- 6-column grid
- Hero title reduced
- Work grid can stay 2 columns
- Process becomes 2 columns

### Mobile

- 1-column layout
- Header simplified
- Hero title should not overflow
- Marquee remains horizontal
- Work cards stack vertically
- Contact CTA buttons stack

Use CSS clamps for large typography:

```css
font-size: clamp(4rem, 18vw, 13rem);
```

---

## 26. Accessibility Requirements

- Use semantic HTML sections
- Every image must have descriptive `alt` text
- Maintain visible focus states
- Color contrast must be readable
- Buttons and links must be keyboard accessible
- Accordion must use real buttons
- Do not rely on color alone to communicate state
- Respect reduced motion preferences

Reduced motion CSS:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 27. SEO Requirements

In `src/app/layout.tsx`, add metadata:

```tsx
export const metadata = {
  title: "Tawkir Arifin | Frontend Developer",
  description:
    "Portfolio of Tawkir Arifin, a frontend developer building responsive web products, AI-driven applications, full-stack systems, and research-backed technical solutions.",
  keywords: [
    "Tawkir Arifin",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "AI Applications",
    "Full-Stack Developer",
    "Bangladesh Developer"
  ],
  openGraph: {
    title: "Tawkir Arifin | Frontend Developer",
    description:
      "Frontend developer building fast, responsive web products with AI and full-stack engineering experience.",
    url: "https://arifin-portfolio.vercel.app/",
    siteName: "Tawkir Arifin Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tawkir Arifin Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};
```

Also add:

- `robots.txt`
- `sitemap.xml`
- Proper `og-image.jpg`
- Descriptive page title
- Descriptive project links

---

## 28. Performance Requirements

- Use optimized images through Next.js `Image`
- Keep work mockups compressed
- Avoid huge animation libraries beyond Framer Motion
- Lazy-load non-critical images
- Keep first screen fast
- Use local content data instead of fetching everything at runtime
- Run Lighthouse before final delivery

Target scores:

```txt
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

---

## 29. Deployment Instructions

### Vercel deployment

1. Push the project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Keep default Next.js settings.
5. Add environment variables only if contact form or external services are used.
6. Deploy.
7. Test all links, responsive layouts, and metadata.
8. Connect custom domain if available.

### Pre-deployment checklist

```txt
[ ] All resume content checked
[ ] All links working
[ ] Contact email opens correctly
[ ] WhatsApp link works
[ ] GitHub link works
[ ] LinkedIn link works
[ ] Mobile layout tested
[ ] Tablet layout tested
[ ] Desktop layout tested
[ ] Images optimized
[ ] No fake testimonials
[ ] No copied reference branding
[ ] Lighthouse test complete
[ ] Resume download added if needed
```

---

## 30. Optional Features

Add these only after the main website is complete:

### Resume Download

Add a button:

```txt
Download Resume ↗
```

Place Tawkir's PDF resume at:

```txt
public/Tawkir-Arifin-Resume.pdf
```

### Case Study Pages

Add dynamic pages:

```txt
src/app/work/[slug]/page.tsx
```

Each case study should include:

- Project overview
- Role
- Tech stack
- Problem
- Process
- Screenshots
- Outcome
- Link

### Contact Form

Fields:

- Name
- Email
- Project type
- Budget range, optional
- Message

Keep direct email visible even if a form exists.

---

## 31. Final Build Checklist For Developer

The finished website must have:

```txt
[ ] Editorial off-white grid background
[ ] Bold black typography
[ ] Orange accent system
[ ] Sticky top header
[ ] Large hero with Tawkir name
[ ] Skill marquee
[ ] About section
[ ] Metrics strip
[ ] Experience section based on resume
[ ] Selected work section
[ ] Process section
[ ] Services accordion
[ ] Proof/testimonial section
[ ] Large CTA
[ ] Black footer
[ ] Fully responsive layout
[ ] SEO metadata
[ ] Accessibility basics
[ ] Vercel-ready build
```

---

## 32. Suggested Homepage Copy

Use this as the first draft of the site's visible text.

### Hero

```txt
Tawkir.
Frontend developer building fast, responsive web products with AI, full-stack, and research-backed engineering experience.
```

### About title

```txt
A developer of one. Built around systems, interfaces, and useful products.
```

### About body

```txt
I work across frontend development, AI-driven applications, full-stack web products, and research-oriented data solutions. My experience includes responsive website development, LLM-powered tools, SCORM packages, MERN applications, and AQI forecasting research using modern machine learning methods.
```

### Work section title

```txt
Selected work.
```

### Experience section title

```txt
Selected collaborators.
```

### Process title

```txt
How the work gets made.
```

### Services title

```txt
What I offer.
```

### CTA title

```txt
Ready to build something useful?
```

### CTA body

```txt
Available for frontend development, AI web apps, full-stack MVPs, research prototypes, and learning-system builds.
```

---

## 33. Design Notes For Matching The Reference

To get close to the reference image:

- Keep sections boxed inside one central container.
- Use thin borders everywhere.
- Let typography do most of the visual work.
- Use orange only for emphasis, not decoration everywhere.
- Build image cards with strong contrast.
- Give every section a small metadata label like `[ 03 / 10 ] WORK`.
- Keep footer black and heavy.
- Use lots of structured whitespace.
- Make the site feel like a system, not a pile of components thrown together by a caffeinated raccoon.

---

## 34. Final Delivery Standard

The portfolio is complete when a visitor can understand Tawkir's profile in under 15 seconds:

- Who he is
- What he builds
- What tools he uses
- Where he has worked
- What projects he has done
- How to contact him

The final website should feel precise, confident, and engineered. It should not look like a copied template, a resume PDF pasted into HTML, or a LinkedIn profile wearing a beige trench coat.
