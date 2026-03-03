# Ayyah Saleh Portfolio — Rebuild Spec

## Who
Ayyah Saleh — J.D. Candidate at University of Nebraska-Lincoln College of Law (graduating May 2026).
Multilingual: Arabic, Spanish, Dari, Farsi.
Background in immigration law, corporate litigation, grant management, debate.
Henry Foster Scholarship recipient.

## Current State
Ancient React 15 + jQuery site. Needs a complete modern rebuild.

## Goal
A stunning, modern, single-page portfolio that would impress law firms and legal employers.
Think: clean, elegant, professional — not flashy tech-bro. This is for the legal profession.

## Data Source
All content comes from portfolio/build/resumeData.json (already exists). Read it and use all the data.
Images are in portfolio/public/images/ and portfolio/build/images/ — reuse the profile pic (pfp.jpg or profilepic.jpg) and any portfolio project images that exist.

## Tech Stack
- Vite + React + TypeScript
- CSS modules or Tailwind — dealer's choice, but make it look premium
- Smooth scroll navigation
- No backend needed
- Mobile responsive (law firms review on phones too)

## Sections (single page, smooth scroll)
1. **Hero** — Full viewport. Name, title "J.D. Candidate | UNL College of Law", subtle background. Professional headshot. LinkedIn link.
2. **About** — Bio text from resumeData.json. Highlight the multilingual skills and scholarship.
3. **Experience** — Timeline layout showing work history. Clean, readable.
4. **Education** — Schools, degrees, activities.
5. **Research & Projects** — Portfolio items from resumeData.json. Card layout with images.
6. **Skills** — Visual representation of skills (not cheesy progress bars — something tasteful).
7. **Contact** — LinkedIn link, clean footer.

## Design Direction
- Color palette: Deep navy/slate + gold/amber accent (legal profession vibes)
- Typography: Serif for headings (gravitas), clean sans-serif for body
- Animations: Subtle fade-ins on scroll. Nothing bouncy or playful.
- Whitespace: Generous. Let the content breathe.
- Overall feel: Like a premium law firm's website, not a developer portfolio.

## Important
- Copy images from portfolio/public/images/ to the new public/ directory
- Keep the resumeData.json as the data source (or inline the data — up to you)
- Must build successfully with npm run build
- Configure vite for allowedHosts: true (for Tailscale preview)

## DO NOT
- Use progress bars for skills (tacky)
- Use dark mode toggle (keep it clean and singular)
- Add a blog section
- Use stock photos — only use the existing images
