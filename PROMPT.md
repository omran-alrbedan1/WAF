# WAF Website — Rebuild Prompt

Rebuild the **WAF (واف لخدمات الأعمال)** website on this Next.js base, replacing the
existing "Red Power" brand content. Reference: https://waf-sa.com/

## Brand & Business

- **Name:** WAF — واف لخدمات الأعمال (WAF for Business Services)
- **Tagline:** شركة تنفيذ وتجهيز مشاريع — "ننفّذ ونجهّز المشاريع التجارية، المعارض،
  والفعاليات — من التصنيع إلى التركيب"
- **Positioning:** Execution & fit-out company for commercial projects, exhibitions,
  and events — manufacturing → installation → handover.
- **Values (3 cards on home):**
  1. السعر المناسب — competitive pricing through R&D investment
  2. الالتزام — client trust, loyalty, continuous communication
  3. الجودة — exceeding client expectations as the core differentiator
- **About:** حلول التصنيع، التنفيذ، والتركيب للمشاريع التجارية والفعاليات، من خلال فريق
  متخصص يركز على جودة التنفيذ والالتزام وتحويل الأفكار إلى واقع عملي. Link to company
  profile PDF (`/WAF-Company-Profile.pdf` in `public/`).
- **Contact:** phone 0530063630 · Instagram @waf4adv1 · X @waf4adv1 ·
  LinkedIn /company/waf4adv1
- **Clients:** بن لادن، نيوم، روشن، جبل عمر، ساس، بارنيز، leica, Hajj Security,
  اوتو زون، نمكو، king's, BRILLO, Daret Alqahwa, بيق دش، هتان، ديار الحرم, شارك,
  شهم القابضة، وهج، التحول الرياضي, ياه برجر, over dose, كوكو نت, بانانا جوس,
  اكاديمية مهد, ريل اب, زيني, كافا بوم, يو بي تي, ام تي سي, lilly, دو تشوكلت,
  النادي البرازيلي, عام, blooming, chocolate corner, الديار العربية (logo marquee/grid).

## Services (7 — each gets a detail page)

| Slug | Arabic title |
|---|---|
| creative-sculptures | تنفيذ المجسمات الإبداعية وأعمال التجهيز الداخلي |
| graffiti-murals | أعمال الجرافيتي والرسومات الجدارية الفنية |
| signage-branding | تنفيذ الهوية البصرية، الساينج، واللوحات الإرشادية |
| event-sites | تجهيز وتنفيذ مواقع الفعاليات |
| large-format-printing | الطباعة والإنتاج بالمقاسات الكبيرة |
| fabrication-installation | التصنيع، التركيب، وتسليم المشاريع |
| packaging-giveaways | حلول التغليف والهدايا الترويجية للشركات |

## Required pages / routes

- `/[locale]` — home: hero (tagline + "اطلب عرض تنفيذ" CTA), values, about teaser,
  services grid, clients grid, contact CTA + form
- `/[locale]/about` — عن واف
- `/[locale]/services` + `/[locale]/services/[slug]` — خدمات واف (7 above)
- `/[locale]/contact` — اتصل بنا (form: name, phone, email, message + location/socials)
- Keep `services/[slug]`, `api/service-request`, `api/health` patterns.

## Architecture to KEEP (do not remove)

- `src/app/[locale]` i18n routing + `middleware.ts` locale redirect (ar default, RTL)
- `next-intl` setup: `src/i18n`, `src/messages/{ar,en}`
- SEO infra: `src/app/{sitemap.ts,robots.ts,manifest.ts,icon.png,apple-icon.png}`,
  `src/components/seo/json-ld.tsx`, per-page `generateMetadata`
- Layout system: `src/components/layout/*`, `container.tsx`, `section.tsx`,
  `site-header/footer`, `website-layout.tsx`
- UI primitives: `components/ui/{button,optimized-image,reveal-panel,motion-presets}`,
  `components/forms/*`, `components/sections/hero-section.tsx`
- Config layer: `src/config/{site,navigation,design-system,env,services}.ts`,
  `src/lib`, `src/hooks`, `src/types`, `src/constants`
- Tooling: Tailwind v4, prettier, eslint, `scripts/`, tsconfig paths

## Files to DELETE (Red Power leftovers — safe removals)

- `src/app/[locale]/gallery/`, `src/app/[locale]/reviews/`, `src/app/[locale]/specials/`
  (whole directories — WAF has no such pages; fold gallery into a clients/projects
  section on home if desired)
- `src/features/gallery/`, `src/features/reviews/`, `src/features/specials/`
- `src/features/home/components/why-red-power-section.tsx`,
  `performance-section.tsx`, `brand-introduction-section.tsx` — rewrite as WAF
  equivalents (values / about / services-overview)
- `public/futurex-logo.svg` and any Red Power imagery in `public/images`, `public/icons`
- Red Power content inside `src/config/services.ts`, `src/config/navigation.ts`,
  `src/config/site.ts`, `src/messages/*/`, `README.md` — rewrite, don't delete files
- Check `src/lib/api`, `src/features/{about,contact,services}` for Red Power copy and
  rewrite to WAF content

After deletion: update `navigation.ts` (الرئيسية / عن واف / اتصل بنا), `site.ts`
(name, domain waf-sa.com, socials), `sitemap.ts` routes, and messages files.

## SEO requirements

- Arabic-first (`ar` default locale, `dir="rtl"`, lang alternates en/ar)
- `metadata` + `generateMetadata` per page: title, description, OG image, canonical
- JSON-LD: `Organization`/`LocalBusiness` on home, `Service` on service pages,
  `BreadcrumbList` on detail pages
- `sitemap.ts` covering all routes × locales; `robots.ts` allowing crawl + sitemap URL
- Semantic HTML, single h1 per page, Arabic slugs kept as readable English slugs
  with `hreflang` alternates
- Optimize images via `OptimizedImage`/next/image; descriptive Arabic alt text

## Design direction

- Clean corporate B2B look: bold Arabic typography (e.g. IBM Plex Sans Arabic or
  similar via next/font), strong hero with project imagery, dark/neutral palette with
  one accent color, generous whitespace, subtle framer-motion reveals
- Footer: quick links, socials (Instagram/X/LinkedIn), phone, "المكتب الرئيسي"
- Floating contact/WhatsApp-style CTA like the old site's "💬 تواصل معنا" popup form
