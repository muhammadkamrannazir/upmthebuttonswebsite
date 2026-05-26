## UPM Group — The Buttons | Website Plan

A premium, fashion-magazine style brand site for UPM Group, Lahore. v1 is a showcase; structure is built so v2 can drop in a cart/checkout without rebuilding.

### Design direction

- **Palette (drawn from the logo's rainbow on dark base):**
  - Background: deep ink black `#0B0B0C`
  - Surface: charcoal `#161618`
  - Foreground: warm off-white `#F5F1EA`
  - Primary accent: gold `#D4A84B` (luxury, like top fashion houses)
  - Secondary accents (used sparingly as gradient pulls from logo): magenta `#E5347D`, amber `#F5A623`, teal `#1FB6A8`, indigo `#5B5BD6`
  - Muted: `#6B6B70`
- **Typography:** Cormorant Garamond (display, headings) + Inter (body/UI). Pairs luxury serif with clean modern sans — used by premium fashion brands (Net-a-Porter, Mytheresa style). Loaded via `@fontsource/cormorant-garamond` and `@fontsource/inter`.
- **Layout language:** editorial magazine — oversized serif headlines, generous whitespace, asymmetric grids, large cinematic macro photography of buttons, subtle gold hairlines, restrained scroll-reveal motion (no over-animation).
- **Logo:** circular logo from uploads used in header + footer + favicon.

### Pages (5)

1. **Home `/`** — full-bleed hero with macro button photo + serif headline ("Pakistan's Modern Button House"), brand intro, featured categories grid (Metal, Fancy, Shirt, Coat, Bridal & Luxury, Kids), "Our Craft" editorial band, wholesale teaser, Instagram/TikTok reel-style grid, footer CTA.
2. **Collections `/collections`** — category showcase: Metal Buttons, Fancy Buttons, Shirt Buttons, Coat Buttons, Bridal & Luxury, Kids Collection, Custom Logo Buttons. Each card has a hero image + short description + "Inquire" CTA. Built as a list of category objects so v2 can swap CTA → "Shop".
3. **About `/about`** — brand story (Anarkali/Dhani Ram heritage), values, manufacturing capability, timeline, team/founder note, "why UPM" pillars.
4. **Wholesale `/wholesale`** — MOQ info, bulk order form (name, business, category, quantity, message), custom logo button service, export inquiry, designer collaboration callout. Form posts to a simple endpoint stub (WhatsApp deep-link + mailto fallback in v1).
5. **Contact `/contact`** — address (with embedded Google Map iframe to the shared map link), phone, WhatsApp button, email, social links (Facebook x2, Instagram, TikTok), business hours, contact form.

Shared: sticky transparent-to-solid header with logo + nav + "WhatsApp Us" CTA; rich editorial footer with sitemap, socials, address, newsletter capture (visual only in v1).

### V2-ready architecture

- Categories defined once in `src/data/categories.ts` (id, name, slug, description, hero image, sample products array stub) — collections page and home both read from it. v2 swaps stub product arrays for DB-backed queries.
- Pages are clean route files under `src/routes/` (TanStack Start file-based routing) so adding `/shop`, `/product/$slug`, `/cart`, `/checkout` later is additive.
- CTAs use a single `<ActionButton>` component with a `mode` prop (`inquire` now, `add-to-cart` later) so the swap is one prop change.
- Wholesale form scaffolded around a `submitInquiry()` function — v2 wires it to Lovable Cloud + email.

### Imagery

- Real, professional button macro shots generated via `imagegen` (premium tier where text isn't involved, standard for product hero shots): one hero macro, one per category (6), one craft/manufacturing shot, one bridal styling shot. Stored under `src/assets/`.
- User-uploaded circular logo copied to `src/assets/logo.png` and used in header/footer.

### SEO

- Distinct `head()` meta per route (title, description, og:title, og:description, og:type, og:url).
- Root: Organization JSON-LD (UPM Group, Lahore address, phone, social profiles, logo).
- Contact: LocalBusiness JSON-LD with geo + opening hours.
- Canonical only on leaf routes.

### File map (new/changed)

```text
src/
  assets/                 logo + 9 generated button images
  components/
    layout/Header.tsx     sticky nav, logo, WhatsApp CTA
    layout/Footer.tsx     editorial footer
    ActionButton.tsx      v1=inquire, v2=cart
    CategoryCard.tsx
    SectionHeading.tsx    serif display headings
    InquiryForm.tsx
  data/
    categories.ts         single source of truth, v2-ready
    brand.ts              phone, address, social URLs
  routes/
    __root.tsx            add Header/Footer, Org JSON-LD, sitewide meta
    index.tsx             homepage (replace placeholder)
    collections.tsx
    about.tsx
    wholesale.tsx
    contact.tsx           embedded map + LocalBusiness JSON-LD
  styles.css              new oklch tokens (ink, gold, accents), font setup
  main.tsx (or start.ts)  @fontsource imports
```

### Build steps

1. Install fonts: `bun add @fontsource/cormorant-garamond @fontsource/inter`.
2. Copy uploaded circular logo into `src/assets/logo.png`.
3. Rewrite `src/styles.css` design tokens to the dark editorial palette + serif/sans pairing.
4. Generate 9 button photography assets via `imagegen`.
5. Build shared `Header`, `Footer`, `ActionButton`, `CategoryCard`, `SectionHeading`, `InquiryForm`.
6. Create `src/data/categories.ts` and `src/data/brand.ts`.
7. Replace placeholder `index.tsx` + add 4 new route files, each with its own `head()` meta.
8. Add Organization + LocalBusiness JSON-LD; verify nav/layout/Outlet integrity.
9. Visual QA in preview, fix any layout issues.

### Out of scope (v1)

- Real cart, payments, product database (deferred to v2 — architecture supports it).
- Newsletter backend (UI only).
- Auth, user accounts.
- Multi-language (English only for now).
