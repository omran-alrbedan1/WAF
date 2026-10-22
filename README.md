# WAF Website

Public-facing Next.js website for **WAF — واف لخدمات الأعمال** (WAF for Business
Services), a Saudi project execution and fit-out company for commercial projects,
exhibitions, and events. Reference: https://waf-sa.com/

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- `next/font` for optimized typography
- `next-intl` locale routing with Arabic RTL as the default locale

## Structure

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx            (home)
      about/  services/   (services + [slug])  contact/
    api/
      health/  service-request/
    globals.css  not-found.tsx  sitemap.ts  robots.ts  manifest.ts
  components/   (layout, sections, seo, forms, ui)
  config/       (site, navigation, services, design-system, env)
  features/     (home, about, services, contact)
  i18n/  messages/{ar,en}/  lib/  types/  constants/
public/
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` to override the canonical site URL (on Vercel it
defaults to `https://$VERCEL_PROJECT_PRODUCTION_URL`, otherwise
`https://waf-sa.com`) and `SERVICE_REQUEST_WEBHOOK_URL` for lead delivery.

## Commands

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run format`

## Notes

- `PROMPT.md` documents the rebuild spec and the WAF brand/content source data.
- Images under `public/images/waf/` are placeholders to be replaced with real
  project photography and the WAF logo.
- `public/WAF-Company-Profile.pdf` should hold the company profile linked from
  the About section.
