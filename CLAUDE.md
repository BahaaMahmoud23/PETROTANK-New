# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**PETROTANK** is a professional corporate website for a Saudi Arabian petroleum and petrochemical terminal operator at King Fahd Industrial Port in Yanbu. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion, the site showcases storage capacity, marine operations, and energy logistics services across 6 public pages and a hidden admin dashboard.

The codebase is a **single Next.js monolith** (App Router) with bilingual support (English/Arabic), using context-based content management via LanguageContext.

---

## Quick Start Commands

\\\ash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Run production server

# Linting
npm run lint         # Run ESLint (Next.js core-web-vitals + TypeScript)
\\\

**No test runner is configured.** The project uses TypeScript for compile-time safety instead.

---

## Project Structure

\\\
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout — minimal (html/body/fonts only, NO Header/Footer)
│   ├── globals.css              # Tailwind theme + custom animations + i18n font rules
│   ├── (site)/                  # Public website route group
│   │   ├── layout.tsx           # Site layout with Providers, Header, Footer
│   │   ├── page.tsx             # Home (/)
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── capabilities/page.tsx
│   │   ├── certifications/page.tsx
│   │   └── contact/page.tsx
│   ├── (dashboard)/             # Hidden admin dashboard route group
│   │   └── admin-ptk-2026/
│   │       ├── layout.tsx       # Dashboard shell (Sidebar + Topbar)
│   │       ├── page.tsx         # Overview with stats + charts
│   │       ├── content/page.tsx # Page content management
│   │       ├── services/page.tsx # Services CRUD
│   │       ├── certifications/page.tsx
│   │       ├── media/page.tsx   # Media library
│   │       ├── messages/page.tsx # Contact messages inbox
│   │       ├── analytics/page.tsx # Traffic charts
│   │       ├── seo/page.tsx     # Per-page SEO settings
│   │       └── settings/page.tsx # Global site settings
│   ├── login/page.tsx           # Admin login (no Header/Footer)
│   └── api/auth/
│       ├── login/route.ts       # POST — validates creds, sets JWT cookie
│       └── logout/route.ts      # POST — clears JWT cookie
│
├── proxy.ts                     # Next.js 16 route protection (was middleware.ts)
│                                # Protects /admin-ptk-2026/* — redirects to /login
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Client-side navbar (scroll-aware, mobile menu, lang toggle)
│   │   └── Footer.tsx
│   ├── dashboard/               # Dashboard-only components (no LanguageContext dependency)
│   │   ├── Sidebar.tsx          # Collapsible sidebar navigation
│   │   ├── Topbar.tsx           # Top bar with profile + logout
│   │   ├── StatsCard.tsx        # Metric card component
│   │   └── PageHeader.tsx       # Page title + action slot
│   ├── sections/                # Page-specific section components
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── AboutSnapshot.tsx
│   │   ├── FacilityMetrics.tsx
│   │   ├── CoreValues.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   ├── GrowthInitiatives.tsx
│   │   ├── StatsSection.tsx
│   │   └── ContactCTA.tsx
│   ├── ui/                      # Reusable UI components
│   │   ├── AnimatedCounter.tsx  # Framer Motion number counters
│   │   ├── PageHero.tsx         # Generic page hero wrapper
│   │   └── SectionHeader.tsx    # Section eyebrow + title
│   ├── Providers.tsx            # Client-side wrapper (LanguageProvider)
│
├── contexts/
│   └── LanguageContext.tsx      # Bilingual context (en/ar) + localStorage persistence
│
├── lib/
│   ├── utils.ts                 # cn() utility (clsx + tailwind-merge)
│   └── animations.ts            # Framer Motion variant presets
│
└── [public images in /public/images]
\\\

---

## Core Architectural Patterns

### 1. Bilingual Content Management
**No database or API.** Content lives entirely in LanguageContext.tsx as a large TypeScript constant (content.en / content.ar).

- LanguageContext exposes useLanguage() hook returning { locale, setLocale, t, isRTL }
- 	 is a type-safe reference to content[locale]
- Changes persist to localStorage ("pt-locale")
- All components import useLanguage() to access translations

**To update content:** Edit the content object in /src/contexts/LanguageContext.tsx. No rebuild required for hot reload during dev.

### 2. Styling & Theme
**Tailwind CSS v4 with inline @theme** (not a separate config file).

Colors, fonts defined in /src/app/globals.css:
- Primary blue: --color-primary: #355486
- Teal accent: --color-teal: #5EABB3
- Light canvas: --color-canvas: #F7FAFC
- Custom CSS variables exposed to Tailwind utilities

**Font switching by language:**
- English: Montserrat (via --font-en, --font-sans)
- Arabic: Cairo (via --font-ar), with RTL direction, slightly tighter headings

**No component-scoped CSS.** All styling is Tailwind classes + global rules.

### 3. Animation Strategy
Framer Motion is used **sparingly** for premium effect:
- Page sections fade up on scroll (via adeUp variant in nimations.ts)
- Card lists stagger reveal (via stagger / staggerSm)
- Animated counters for stats (using AnimatedCounter.tsx component)
- Soft hover states and transitions

**Accessibility:** Respects prefers-reduced-motion media query in globals.css.

### 4. Header Behavior
The Header component (client-side) implements scroll-aware hiding:
- On homepage: stays visible until 82% viewport height scrolled
- On other pages: stays visible until 36% scrolled
- Mobile menu closes automatically on route change

Language toggle in header updates HTML lang attribute and dir for proper i18n DOM handling.

### 5. Page Composition
Each public page is a composition of imported section components:

\\\	ypescript
// Example: /about/page.tsx
export default function AboutPage() {
  return (
    <>
      <PageHero ... />
      <StorySection />
      <MilestonesSection />
      <ValuesSection />
      <FacilitiesSection />
      <CommitmentSection />
    </>
  );
}
\\\

Sections are **reusable across pages** where content overlaps (e.g., CoreValues appears on home and about).

### 6. Metadata & SEO
Each page exports a metadata object (Next.js static metadata API):
\\\	ypescript
export const metadata: Metadata = {
  title: "...",
  description: "...",
  openGraph: { ... }
};
\\\

Root layout defines defaults; page-level exports override.

---

## Development Workflow

### Adding a New Page
1. Create /src/app/[route]/page.tsx
2. Import section components
3. Export metadata for SEO
4. Compose sections in the page component
5. Add nav link to Header.tsx navLinks array

### Adding Content
1. Open /src/contexts/LanguageContext.tsx
2. Update content.en or content.ar (matching structure in both locales)
3. Update TypeScript type T if adding new top-level keys
4. Hot reload during dev; no rebuild needed

### Styling a Component
1. Use Tailwind utility classes directly in JSX
2. Reference CSS variables from globals.css (e.g., g-canvas, 	ext-ink, 	ext-primary)
3. For motion: import Framer Motion variants from lib/animations.ts
4. Avoid inline styles; use Tailwind + global CSS only

### Adding a New Component
- **Layout components** → src/components/layout/
- **Page sections** → src/components/sections/
- **Reusable UI** → src/components/ui/
- Keep props minimal; destructure from useLanguage() hook inside components when possible

---

## Tech Stack & Dependencies

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js | 16.2.4 | App Router, Server Components by default |
| UI Library | React | 19.2.4 | Server + Client components |
| Styling | Tailwind CSS | 4 | PostCSS via @tailwindcss/postcss |
| Animation | Framer Motion | 12.38.0 | Scroll-triggered + interaction variants |
| Icons | Lucide React | 1.8.0 | For nav, social, etc. |
| Utilities | clsx, tailwind-merge | Latest | cn() function in lib/utils.ts |
| Linting | ESLint | 9 | Next.js config + TypeScript rules |
| Language | TypeScript | 5 | Strict mode, no implicit any |

**No database, API framework, or backend.** Content is static; contact forms (if added) would need serverless or external service.

---

## Important Design Decisions

### Single Context for Translations
Using React Context instead of i18n library (next-intl, react-i18next) keeps bundle small and avoids routing complexity. Trade-off: no automatic locale routing (/en, /ar paths). Locale is stored in localStorage and read from HTML lang attribute.

### Inline Tailwind Theme
Using @theme inside globals.css instead of a 	ailwind.config.ts keeps theme colocation with CSS resets. Simpler for single-file theme maintenance.

### No Component Library
Building all UI from scratch with Tailwind (not using shadcn/ui or other component libraries). Keeps full design control and minimal dependencies.

### Static Sections, Reusable Components
Section components are reused across pages where content semantically matches (e.g., CoreValues appears on homepage and About page). Reduces duplication; centralize changes in one component.

---

## Known Patterns & Conventions

### Component Naming
- Page-level sections: [Feature]Section.tsx (e.g., CoreValuesSection.tsx)
- Layout containers: Header.tsx, Footer.tsx
- Reusable UI: [Name].tsx (e.g., AnimatedCounter.tsx, PageHero.tsx)

### Content Structure
All translatable content is in LanguageContext.tsx. Structure mirrors page hierarchy:
- content.en.nav → navigation labels
- content.en.aboutPage → about page content
- content.en.servicesPage → services page content
- Each locale has matching keys

### Props Pattern
Components accept minimal props; prefer using the useLanguage() hook inside components to access 	. This keeps prop drilling flat.

### Scroll & Responsive
- No custom breakpoint system; Tailwind defaults (sm, md, lg, xl, 2xl)
- Scroll events use passive: true for performance
- Mobile-first Tailwind patterns

---

## Admin Dashboard

Dashboard is live at `/admin-ptk-2026` (Phase 1 + Phase 2 complete). Default credentials in `.env.local`:
- Email: `admin@petrotank.com`
- Password: `PetroAdmin2026!`

**Auth:** JWT stored in `ptk-admin-session` HttpOnly cookie. `src/proxy.ts` (Next.js 16 convention, was `middleware.ts`) protects all `/admin-ptk-2026/*` routes — redirects unauthenticated users to `/login`. API routes at `/api/auth/login` and `/api/auth/logout`.

**Dashboard components** in `src/components/dashboard/` do NOT use `LanguageContext` — dashboard is English-only and fully isolated from the public site.

**Mock data** in `src/lib/mock-data.ts` — replace with Prisma + PostgreSQL queries in Phase 3.

**Next phases:**
- Phase 3: Add Prisma + PostgreSQL, replace mock data
- Phase 4: CRUD API routes for each module
- Phase 5: Drive public site metadata from database
- Phase 6: Real analytics integration

## Future Roadmap

1. **Phase 1 Expansion**: SAR 350M+ infrastructure upgrade (content already in context, awaiting dashboard UI).
2. **South Africa Hub & Suez Corridor**: Strategic growth initiatives (content ready).

---

## Linting & Code Quality

\\\ash
npm run lint
\\\

Configured with ESLint 9 + Next.js core-web-vitals + TypeScript strict mode.

**No Prettier configured.** Use your editor's built-in formatting (VS Code: 
pm install -D prettier && npx prettier --write .).

---

## Performance Notes

- **Next.js Image Optimization**: Used for all product/logo images; remote patterns configured for Unsplash in 
ext.config.ts
- **Turbopack**: Enabled in next.config.ts for faster builds
- **Font Optimization**: Using Next.js 
ext/font with display: swap for Montserrat and Cairo
- **Framer Motion**: Motion library is only loaded on pages that use it (dynamic imports possible if needed)

---

## Common Pitfalls

1. **Forgetting Arabic content:** Always update both content.en and content.ar when adding content
2. **Hardcoding text:** Never hardcode English text in components; always pull from 	 via useLanguage()
3. **Breaking TypeScript:** The content object is typed; adding new top-level keys requires updating the T type
4. **Tailwind not building:** Make sure globals.css has @import "tailwindcss" at the top; PostCSS config is in postcss.config.mjs
5. **RTL layout issues:** Test with lang="ar" in HTML; RTL direction is set in globals.css and Header component handles dir attribute

---

## Useful Files for Reference

- /src/contexts/LanguageContext.tsx — All content and i18n logic
- /src/app/globals.css — Theme colors, fonts, animations, RTL rules
- /src/lib/animations.ts — Framer Motion presets
- /PETROTANK_rebuild_brief.md — Design direction and brand guidelines
- /dashboard.md — Future admin dashboard specification

---

## Questions or Blockers

Refer to the rebuild brief for design rationale, color usage, motion guidelines, and competitive inspiration notes.
