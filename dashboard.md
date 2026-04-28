# PETROTANK Admin Dashboard Documentation

## 1. Project Purpose

The PETROTANK website will remain as a public corporate website for visitors, clients, and partners.

The Admin Dashboard will be a separate hidden control panel used only by authorized admins to manage the website content, SEO, media, contact messages, and analytics.

The dashboard must not appear anywhere on the public website.

---

## 2. Main Requirement

Build the dashboard inside the same Next.js project, but keep it completely isolated from the public website.

### Public Website
Accessible normally from:

```txt
/
```

### Hidden Admin Dashboard
Accessible only from a private route:

```txt
/admin-ptk-2026
```

### Login Page
Accessible from:

```txt
/login
```

Important:
- Do not add dashboard links to the navbar.
- Do not add dashboard links to the footer.
- The dashboard route should only be accessed manually by admins.
- The dashboard must be protected by authentication.

---

## 3. Recommended Project Structure

Use Next.js App Router route groups:

```txt
app/
  (site)/
    page.tsx
    about/
    services/
    capabilities/
    certifications/
    contact/

  (dashboard)/
    admin-ptk-2026/
      page.tsx
      content/
      services/
      certifications/
      media/
      messages/
      analytics/
      seo/
      settings/

  login/
    page.tsx
```

Notes:
- `(site)` is for the public website.
- `(dashboard)` is for the hidden dashboard.
- Route groups should not affect the final URL.
- The public site and dashboard should have separate layouts.

---

## 4. Authentication & Security

The dashboard must be protected.

### Requirements
- Admin login using email and password.
- Unauthenticated users must be redirected to `/login`.
- Authenticated users can access `/admin-ptk-2026`.
- Public users should never access dashboard routes.

### Middleware Protection

Protect all routes that start with:

```txt
/admin-ptk-2026
```

If user is not authenticated:

```txt
redirect to /login
```

### Roles
Initial version can support one admin role.

Future-ready roles:
- Admin
- Editor
- Viewer

---

## 5. Dashboard UI Direction

The dashboard should follow a modern SaaS admin style.

### Visual Style
- Clean light UI
- White cards
- Soft gray background
- Rounded corners
- Subtle shadows
- Clear typography
- Modern spacing
- Professional data layout

### Suggested Stack
- Tailwind CSS
- shadcn/ui
- Lucide React icons
- Recharts for charts
- React Hook Form
- Zod validation

### Layout
- Sidebar navigation
- Topbar with search/profile
- Main content area
- Responsive layout
- Collapsible sidebar on mobile

---

## 6. Dashboard Navigation

Sidebar items:

```txt
Dashboard Overview
Pages Content
Services
Certifications
Media Library
Contact Messages
Analytics
SEO Settings
Settings
```

Each section should have a clear page and clean UI.

---

## 7. Dashboard Overview

The overview page should summarize the website performance and content status.

### Top Cards
- Total Visitors
- Page Views
- Contact Messages
- New Leads
- Conversion Rate
- Bounce Rate

### Charts
- Traffic Over Time
- Visitors by Device
- Top Pages
- Traffic Sources

### Quick Actions
- Edit Homepage
- Add Service
- Upload Media
- View Messages
- Update SEO

---

## 8. Pages Content Management

Admins should be able to edit public website text without touching code.

### Editable Pages
- Home
- About Us
- Services
- Capabilities
- Certifications
- Contact

### Editable Section Fields
Each page section may include:

```txt
title
subtitle
description
button text
button link
image/video
stats
cards
order
visibility
```

### Home Page Sections
- Hero
- Metrics
- About Snapshot
- Services Preview
- Strategic Growth
- Certifications Preview
- CTA

### About Page Sections
- Our Story
- Mission
- Vision
- Core Values
- Milestones
- Facilities
- Leadership
- Commitment

### Services Page Sections
- Service tabs
- Service details
- Features
- Technical specifications
- CTA

### Capabilities Page Sections
- Infrastructure
- Marine Infrastructure
- Land-Side Logistics
- Technology & Automation
- SHEQ
- Operational Performance
- Expansion
- Competitive Advantages

### Certifications Page Sections
- International Standards
- Saudi Regulatory Approvals
- Occupational Safety
- Compliance Commitment

### Contact Page Sections
- Contact Form Intro
- Contact Information
- Google Map Embed
- Business Hours

---

## 9. Services Management

The dashboard should include a full CRUD system for services.

### Service Fields
```txt
id
title
slug
shortDescription
fullDescription
category
image
icon
features[]
technicalSpecs[]
order
isActive
createdAt
updatedAt
```

### Required Features
- Add service
- Edit service
- Delete service
- Reorder services
- Activate/deactivate service
- Upload image
- Manage features list
- Manage technical specs list

---

## 10. Certifications Management

The dashboard should manage certifications and approvals.

### Certification Fields
```txt
id
title
category
description
image
organization
scope
status
order
isActive
createdAt
updatedAt
```

### Categories
- International Standards
- Saudi Regulatory Approvals
- Occupational Safety
- Compliance Commitment

### Required Features
- Add certification
- Edit certification
- Delete certification
- Upload certificate image
- Filter by category
- Activate/deactivate certification
- Reorder certificates

Important:
- Certificate images may be uploaded later by the client.
- Until then, use clean placeholders in the dashboard and website.

---

## 11. Media Library

The dashboard should include a media library.

### Supported Media
- Images
- Videos
- PDFs if needed

### Media Fields
```txt
id
filename
url
type
size
altText
tag
createdAt
```

### Required Features
- Upload media
- Preview media
- Delete media
- Copy URL
- Add alt text
- Filter by type
- Use media inside website content

### Recommended Storage
Use Cloudinary for production media hosting.

---

## 12. Contact Messages / Leads

All contact form submissions from the website should appear in the dashboard.

### Message Fields
```txt
id
fullName
email
company
subject
message
status
createdAt
```

### Status
- New
- Read
- Archived

### Required Features
- View messages
- Mark as read/unread
- Archive
- Delete
- Search
- Filter by status
- Export CSV

Important:
- Contact form submissions should be saved to the database.
- No message should be lost.

---

## 13. Analytics System

The dashboard should show website traffic and visitor behavior.

### Metrics to Track
- Unique visitors
- Page views
- Sessions
- Returning visitors
- Bounce rate
- Average session duration
- Top pages
- Traffic sources
- Device types
- Countries if available

### Analytics Events
Track:

```txt
page_view
button_click
form_submit
service_view
contact_open
```

### Charts
- Line chart: traffic over time
- Pie chart: devices
- Bar chart: top pages
- Table: recent visits

### Analytics Options
Initial version can use:
- Vercel Analytics
- or custom AnalyticsEvent model

Future-ready:
- Plausible
- Google Analytics
- custom database tracking

---

## 14. SEO Management System

SEO must be editable from the dashboard.

### SEO Fields Per Page
```txt
pageSlug
metaTitle
metaDescription
keywords
openGraphTitle
openGraphDescription
openGraphImage
canonicalUrl
robotsIndex
robotsFollow
updatedAt
```

### Required SEO Features
- Edit page title
- Edit meta description
- Edit keywords
- Upload OG image
- Control indexing
- Generate sitemap
- Generate robots.txt
- Add canonical URL

### Pages with SEO Control
- Home
- About Us
- Services
- Capabilities
- Certifications
- Contact

Important:
- Website metadata should be dynamic.
- SEO data should come from database or structured content source.
- Dashboard should control SEO without code changes.

---

## 15. Settings Panel

The dashboard should allow editing global website settings.

### Editable Settings
```txt
siteName
companyName
email
phone
address
businessHours
googleMapEmbed
socialLinks
footerText
defaultSeoTitle
defaultSeoDescription
```

### Required Features
- Edit global contact info
- Edit footer info
- Edit Google Map embed
- Edit social links
- Edit default SEO values

---

## 16. Database Plan

Use PostgreSQL with Prisma.

Recommended providers:
- Supabase PostgreSQL
- Neon PostgreSQL

### Prisma Models

Suggested models:

```txt
User
Page
Section
Service
Certification
Media
Message
AnalyticsEvent
SeoSetting
SiteSetting
ActivityLog
```

### Notes
- In the first version, mock data can be used temporarily.
- Final production version should connect to PostgreSQL.
- Content should not remain hardcoded long-term.

---

## 17. Future-Ready Database Models

### User
Admin users and roles.

### Page
Website pages.

### Section
Editable page sections.

### Service
Services content.

### Certification
Certifications and approvals.

### Media
Images, videos, and documents.

### Message
Contact form submissions.

### AnalyticsEvent
Visitor and interaction tracking.

### SeoSetting
SEO fields for every page.

### SiteSetting
Global website settings.

### ActivityLog
Admin activity tracking.

---

## 18. Public Website Integration

The public website should eventually read dynamic data from:

- Page content
- Services
- Certifications
- Media
- SEO settings
- Site settings

### Important
The dashboard controls data.
The public website displays data.

The dashboard should never appear publicly.

---

## 19. Implementation Phases

### Phase 1 — Dashboard UI Skeleton
- Create hidden route `/admin-ptk-2026`
- Create `/login`
- Create protected dashboard layout
- Sidebar
- Topbar
- Overview page

### Phase 2 — Mock Data Dashboard
- Build all dashboard pages with mock data
- Pages Content
- Services
- Certifications
- Media
- Messages
- Analytics
- SEO
- Settings

### Phase 3 — Database Setup
- Add Prisma
- Configure PostgreSQL
- Create schema
- Run migrations
- Seed initial data

### Phase 4 — CRUD Integration
- Services CRUD
- Certifications CRUD
- Messages
- SEO settings
- Site settings

### Phase 5 — Public Website Dynamic Integration
- Replace hardcoded public content with database-driven content
- Connect SEO metadata to dashboard settings

### Phase 6 — Analytics Integration
- Track page views
- Track events
- Display analytics charts

### Phase 7 — Production Hardening
- Auth security
- Validation
- Error states
- Loading states
- Build testing
- Deployment

---

## 20. Important Development Rules

- Do not break the existing public website.
- Do not show dashboard links anywhere publicly.
- Keep dashboard isolated.
- Use reusable components.
- Use TypeScript properly.
- Use Zod validation for forms.
- Use shadcn/ui where suitable.
- Keep UI clean and professional.
- Avoid overengineering in the first version.
- Prepare for database connection even if mock data is used first.

---

## 21. Claude Code Implementation Prompt

Use this prompt when asking Claude Code to implement:

```txt
You are working on the PETROTANK Next.js App Router project.

Read dashboard.md carefully and implement the Admin Dashboard system based on it.

Main requirements:
- The public website must remain unchanged.
- The dashboard must be hidden from the public UI.
- Dashboard route: /admin-ptk-2026
- Login route: /login
- Protect dashboard routes with authentication.
- Do not add any dashboard link to navbar or footer.
- Build a professional SaaS-style admin dashboard.
- Use Tailwind CSS and shadcn/ui.
- Prepare the system for Prisma + PostgreSQL.
- Use mock data temporarily if database credentials are not available.
- Include dashboard pages for:
  - Overview
  - Pages Content
  - Services
  - Certifications
  - Media Library
  - Contact Messages
  - Analytics
  - SEO Settings
  - Settings

Important:
- Do not break existing website pages.
- Keep dashboard isolated.
- Make the structure future-ready for real database integration.
- SEO settings must be editable from the dashboard later.
- Contact form submissions must be stored and visible in dashboard later.

Start with Phase 1 and Phase 2:
1. Dashboard UI skeleton
2. Mock data pages
3. Protected route structure
4. Clean sidebar/topbar layout

After finishing, run npm run build and summarize what was created.
```

---

## 22. End Goal

The final system should allow PETROTANK admins to:

- Edit website content
- Update services
- Manage certifications
- Upload media
- Read contact form submissions
- Track visitors
- Manage SEO
- Update site settings

All from a hidden professional dashboard without editing code.
