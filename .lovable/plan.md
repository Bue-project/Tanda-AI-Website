## Tanda AI — Clean & Smooth Website Rebuild

Rebuild the existing Tanda AI website as a polished React app, using the **Landio Framer template** as the UX/animation reference while keeping all of Tanda AI's content, branding (dark navy bg `#04070d`, gold accent `#D4A843`, Instrument Serif + Inter fonts), and structure.

### Design System Updates

- Update CSS variables to match Tanda AI brand: dark navy background, gold accent, blue-tinted cards/borders
- Import Google Fonts (Instrument Serif, Inter, Plus Jakarta Sans)
- Add smooth animation keyframes: fade-in-up on scroll, staggered reveals, scale hover effects, smooth accordion transitions

### Pages & Sections to Build

**Homepage (`/`)** — single-page with smooth scroll:

1. **Navbar** — Fixed, glassmorphism blur background, logo + nav links (Services, FAQ, Contact) + gold "Book A Free Call" CTA button. Mobile hamburger with full-screen overlay drawer
2. **Hero** — Full-viewport with background video (`hero-video_3.mp4`), gradient overlay, animated blobs. Badge pill ("VOICE AI AGENCY"), large serif heading ("Your Customers Call. *Your AI Answers.*"), subtitle, gold CTA button, scroll-down chevron bounce
3. **What We Do** — Editorial text section with italic highlights
4. **Benefits** — 3-card grid (Always Available, Human-Like Conversations, Fast to Deploy) with icon boxes and hover effects
5. **Services** — Bento grid layout: 2 small cards + 1 wide card (with code block widget) + 1 full-width card. Smooth hover lifts
6. **Features** — 6-card grid with icons (NLU, Custom Voice, Smart Routing, Lead Qualification, Call Analytics, CRM Sync)
7. **Comparison** — Side-by-side cards (Tanda AI ✓ vs Others ✗)
8. **FAQ** — Accordion with smooth expand/collapse animations, plus "Still Have Questions?" CTA card
9. **CTA Section** — Final call-to-action with email + booking button
10. **Footer** — Minimal footer with links

**Contact Page (**`/contact`**)** — Booking-focused page with same nav/footer, centered content with Google Calendar booking link and email info

### Animations & Interactions (Landio-inspired)

- **Scroll-triggered fade-in-up** using Intersection Observer on all sections
- **Staggered reveals** for card grids (each card delays slightly)
- **Smooth hover states** — cards lift with shadow, buttons scale with glow
- **Navbar** transitions to more opaque on scroll
- **Hero elements** stagger in on load (badge → heading → subtitle → CTA)
- **FAQ accordion** with height + opacity animation
- **Process tabs** with crossfade panel transitions
- **Pricing toggle** with sliding pill indicator
- **Marquee/ticker** infinite CSS scroll animations
- **Particle canvas** or animated gradient blobs in hero background

### Assets to Copy

- `logo.png` → project assets (gold triangle logo)
- `hero-video_3.mp4` → public folder for hero background
- `favicon.svg` → public folder