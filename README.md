# Salezot — Next.js marketing site

Next.js 14 (Pages Router) port of the Salezot neo-brutalist marketing site, with the four requested changes applied.

## Run

```bash
npm install
npm run dev
```

## File map

```
pages/
  _app.js          global styles + fonts
  index.js         homepage (Hero, Product, WhoItsFor, Partners, BuildLog, FAQ, Founders, final CTA)
  apply.js         CHANGE 2 — qualified Design Partner application form
  privacy.js       CHANGE 4 — placeholder legal page
  terms.js         CHANGE 4 — placeholder legal page
components/
  Nav.js           CHANGE 1 — "Apply →" button links to /apply
  Hero.js          CHANGE 1 — new headline/subhead/primary CTA, "Explore the Platform" secondary kept
  Founders.js      CHANGE 3 — new founders section (placed above the final CTA in index.js)
  Footer.js        CHANGE 4 — /privacy and /terms links; "Security" removed; "DPDPA aligned" text; "SOC 2 (roadmap)" text
  Product.js
  WhoItsFor.js
  Partners.js
  BuildLog.js
  FAQ.js
  Marquee.js
  Stickers.js
hooks/
  useReveal.js     scroll-reveal hook with safety fallbacks
styles/
  globals.css      design tokens + tactile primitives (buttons, cards, chips, highlights, marquee)
```

## The four changes

### CHANGE 1 — Hero
`components/Hero.js` — headline, subhead, primary CTA updated to the new copy. Secondary CTA "Explore the Platform" retained, pointing at `#product`.

### CHANGE 2 — Application form
`pages/apply.js` — 8 fields in order (full name, work email + free-email soft warning, company, role, call-volume dropdown, CRM dropdown, current-tool optional, why-textarea with 500-char limit). Submission body is a `// TODO` stub — wire it to whatever backend `/contact` previously used.

### CHANGE 3 — Founders section
`components/Founders.js`, imported into `pages/index.js` directly above the final "Ready to see what's actually happening…" CTA. Two columns, circular photo placeholders, bracketed `[Founder Name]` / `[CTO Name]` / `[2-line bio placeholder]` tokens marked with `TODO` comments. Closing paragraph with `mailto:founder@salezot.com` link — also marked with a `TODO` comment.

### CHANGE 4 — Footer legal links
`components/Footer.js` — Privacy Policy → `/privacy`, Terms of Service → `/terms`. "Security" removed. "DPDPA Compliance" replaced with plain-text "DPDPA aligned". "SOC 2 (roadmap)" remains plain text. Placeholder pages live at `pages/privacy.js` and `pages/terms.js`.

## Placeholders to replace before shipping

Search for `TODO` across the repo:

- `components/Founders.js` — 2× founder photos, 2× names, 2× bios, founder email
- `pages/apply.js` — wire `handleSubmit` to your existing form backend
- `pages/privacy.js`, `pages/terms.js` — swap placeholder copy for Termly-generated content
