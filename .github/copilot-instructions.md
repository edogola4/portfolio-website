# Copilot Instructions for Portfolio Website

This is a senior-level software engineering portfolio built with modern web technologies. Focus on enterprise-grade architecture, clean design, and production-ready code.

## Build, Test & Lint Commands

### Development
```bash
npm run dev              # Start Next.js dev server (http://localhost:3000)
npm run build            # Production build
npm run start            # Run production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
```

### Running Tests
This project doesn't include a test runner yet. All validation is done through:
- ESLint for code quality
- TypeScript for type safety
- Manual testing via dev server

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom theme configuration
- **Animations**: Framer Motion, Typed.js, tsparticles
- **Form Handling**: React Hook Form + Zod validation
- **Internationalization**: next-intl (v3) - English & Swahili
- **Deployment**: Vercel with GitHub Actions CI/CD

### Directory Structure
```
src/
├── app/[locale]/        # Localized routes (all pages prefixed with /en or /sw)
│   ├── page.tsx         # Home page (hero, about, projects, skills, contact)
│   ├── about/           # About page
│   ├── projects/        # Full projects showcase
│   ├── skills/          # Skills deep dive
│   ├── resume/          # Online resume
│   ├── blog/            # Blog posts with dynamic routing
│   └── contact/         # Contact page
├── components/
│   └── home/            # Home page component sections
│       ├── Hero.tsx     # Hero section with typed text, animations
│       ├── AboutPreview.tsx
│       ├── FeaturedProjects.tsx
│       ├── SkillsOverview.tsx
│       └── ContactForm.tsx
├── data/                # Static data (testimonials, projects, skills)
├── lib/                 # Utilities, API helpers, configs
├── hooks/               # Custom React hooks
├── context/             # React context (ThemeContext for dark mode)
└── types/               # TypeScript definitions
```

### Key Files
- **next-intl.config.mjs**: i18n routing configuration (locales: en, sw)
- **middleware.ts**: Locale detection and routing
- **src/i18n/request.ts**: Message loading for translations
- **src/i18n/locales/**: JSON message files for each language
- **tailwind.config.cjs**: Custom theme colors and extensions
- **src/data/testimonials.ts**: Testimonial data (easily extensible for other data)

## Important Conventions

### Internationalization (next-intl)
- All user-facing routes are localized: `/en/about`, `/sw/projects`, etc.
- Use `useTranslations()` hook in client components to access messages
- Message keys follow pattern: `home.hero.title`, `about.section.description`
- Always generate static params in page.tsx files with `generateStaticParams()`

### Component Structure
- Home page sections are modular components in `src/components/home/`
- Client components marked with `'use client'`
- Server components by default (Next.js 15 App Router)
- Use `useLocale()` to get current locale when needed

### Styling Approach
- Tailwind CSS with custom theme colors (greens, oranges, grays)
- Dark mode support via `next-themes`
- Custom gradient overlays using Tailwind's color utilities
- Responsive breakpoints: sm, md, lg, xl, 2xl (Tailwind defaults)

### Form Handling
- Use React Hook Form + Zod for client-side validation
- Contact form uses SendGrid for email delivery
- reCAPTCHA v3 for spam protection
- Environment variables for API keys (SENDGRID_API_KEY, RECAPTCHA_SITE_KEY)

### Animations & Interactions
- Framer Motion for component animations (fadeInUp, staggering, viewport triggers)
- Typed.js for hero typing effect
- tsparticles for dynamic background particles
- React Tilt for card hover effects
- Use `motion.div`, `AnimatePresence` for controlled animations

## Design Principles

- **Senior-level positioning**: Focus on architecture, scalability, cloud expertise
- **Clean aesthetics**: Minimal design with professional spacing and typography
- **Enterprise SaaS look**: Modern, polished, trustworthy appearance
- **Mobile-first responsive**: Optimize for all screen sizes
- **Accessibility**: WCAG 2.1 compliance, ARIA labels, keyboard navigation
- **Performance**: Lazy load images, code splitting, optimized animations

## Environment Variables

Create `.env.local` with:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key
SENDGRID_API_KEY=your_key
CONTACT_EMAIL=your_email
```

## Debugging Tips

- **i18n not working?** Clear cache: `rm -rf .next && npm run dev`
- **Locale routes failing?** Verify locale in middleware.ts and next-intl.config.mjs
- **Type errors on params?** Params must be typed as `Promise<{locale: 'en' | 'sw'}>` and awaited
- **Animations stuttering?** Check if heavy JS operations block main thread; use `useTransition()`

## Adding New Features

### New Section on Home Page
1. Create component in `src/components/home/ComponentName.tsx`
2. Import in `src/app/[locale]/page.tsx`
3. Add to JSX render (typically before ContactForm)
4. Add i18n keys to `src/i18n/locales/{en,sw}.json`
5. Use `useTranslations()` in component

### New Full Page
1. Create directory `src/app/[locale]/pagename/`
2. Add `page.tsx` and `layout.tsx` if needed
3. Include `generateStaticParams()` for SSG
4. Add route to navigation if applicable
5. Update i18n messages

### New Project in Portfolio
1. Add to project data source (TBD: may add projects.ts)
2. Use `FeaturedProjects.tsx` component for display
3. Ensure project has: title, description, tech stack, links, metrics
4. Keep consistent with senior-level project presentation

## CI/CD

- GitHub Actions workflow in `.github/workflows/` (build, lint, type-check)
- Deployed to Vercel on push to main
- Dependabot for dependency updates
- Preview deployments on PRs
