# Brandon Ogola - Portfolio Website 

[![CI/CD Status](https://github.com/edogola4/portfolio-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/edogola4/portfolio-website/actions/workflows/ci-cd.yml)
[![Vercel](https://vercelbadge.vercel.app/api/edogola4/portfolio-website)](https://vercel.com/edogola4/portfolio-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/commits/main)
[![GitHub Issues](https://img.shields.io/github/issues/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/edogola4/portfolio-website/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://reactjs.org/)

## 🚀 Latest Updates

- **Design System Unified**: All pages now use a single consistent brand palette — Deep Forest Green (`#3A5A6B`), Warm Off-White (`#F8F5F0`), Charcoal (`#2B2D42`), Burnt Sienna (`#E07A5F`). Eliminated rogue `stone`, `amber`, `blue`, and `gray` Tailwind color usage across Skills, Blog, and SkillsOverview.
- **`container-custom` Defined**: Added `.container-custom` as a proper `@layer components` utility (`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`) — used consistently across all pages.
- **Locale-Aware Links Fixed**: All internal `<Link>` hrefs now use the `/${locale}/path` pattern. Fixed `AboutPreview`, `CallToAction`, `SkillsPageClient`, and `SkillsOverview`.
- **Layout Double-Padding Removed**: The `[locale]/layout.tsx` wrapper `div` with `container-custom py-8` was removed — pages now own their own spacing.
- **Enhanced Hero Component**: Completely revamped with smooth animations and interactive elements
- **SEO Optimized**: Added comprehensive metadata and structured data for better search visibility
- **Performance**: Optimized images and animations for faster load times
- **Accessibility**: Improved keyboard navigation and ARIA labels
- **Internationalization**: Full support for English (en) and Swahili (sw)

## Quick Links
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Internationalization (next-intl v3)](#-internationalization-next-intl-v3)
- [Images configuration](#-images-configuration)
- [Development notes](#-development-notes)
- [Troubleshooting (i18n)](#-troubleshooting-i18n)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

Welcome to my professional portfolio website! I'm Brandon Ogola, a Software Engineer passionate about building scalable web applications tailored for East African markets. This site showcases my skills, projects, and insights into the tech world.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark/Light Mode**: Seamless theme switching with `next-themes`
- **Interactive UI**: Smooth animations with Framer Motion and Typed.js
- **Form Handling**: Robust form validation with React Hook Form and Zod
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance**: Optimized images, code splitting, and lazy loading
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels
- **Internationalization**: Full support for English (en) and Swahili (sw)
- **Analytics**: Integrated with Vercel Analytics
- **Particle Effects**: Dynamic background with tsparticles
- **Contact Form**: Secure email functionality with Nodemailer and SendGrid
- **Google reCAPTCHA**: Spam protection for contact forms

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom themes
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [Typed.js](https://mattboldt.com/demos/typed-js/)
- **Icons**: [Lucide Icons](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/) v3.26.5
- **Form Handling**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Particles**: [tsparticles](https://particles.js.org/)

### Form Handling
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) for schema validation
- [Formik](https://formik.org/) (legacy forms)
- [Yup](https://github.com/jquense/yup) (legacy validation)

### UI Components
- [Headless UI](https://headlessui.com/)
- Custom accessible components
- Responsive layout components

### Deployment & CI/CD
- **Hosting**: [Vercel](https://vercel.com/)
- **CI/CD**: GitHub Actions
- **Dependency Updates**: Dependabot

## 🌍 Internationalization (next-intl v3)

This project uses `next-intl@^3.26.5` with App Router.

- Locales: `en`, `sw`
- All routes are prefixed: `/en`, `/sw` (see `next-intl.config.mjs` and `middleware.ts`)

Key files:
- `next-intl.config.mjs`
- `middleware.ts`
- `src/i18n/request.ts`
- `src/app/[locale]/layout.tsx`

Request config (no deprecated imports):
```ts
// src/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  if (!['en', 'sw'].includes(locale)) {
    notFound();
  }

  const messages = (await import(`./locales/${locale}.json`)).default;
  return {locale, messages};
});
```

Layout awaits route params (Next.js 15 requirement for layouts):
```tsx
// src/app/[locale]/layout.tsx
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'sw' }>
}) {
  const {locale} = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
```

Generate static params for localized routes:
```ts
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'sw'}];
}
```

Message files live in:
- `src/i18n/locales/en.json`
- `src/i18n/locales/sw.json`

## 🖼️ Images configuration

Next.js 15 deprecates `images.domains`. This project uses `images.remotePatterns` in `next.config.ts`:
```ts
// next.config.ts
images: {
  remotePatterns: [
    {protocol: 'https', hostname: 'placekitten.com'}
  ]
}
```

## 🧰 Development notes

- If you change i18n or routing config, clear the Next.js cache to avoid stale builds:
  - `rm -rf .next && npm run dev`
- Access localized routes with prefixes:
  - English: `http://localhost:3000/en`
  - Swahili: `http://localhost:3000/sw`
- If you see deprecation notices, ensure you’re using the patterns shown above for next-intl v3.
- All internal `<Link>` components must use locale-prefixed paths: `` href={`/${locale}/path`} `` — never bare `/path`.
- Use `container-custom` (defined in `globals.css` `@layer components`) for all page-level layout wrappers. Do not use `container mx-auto px-4` directly.
- The brand palette is defined in `tailwind.config.cjs` under `theme.extend.colors`. Do not introduce new Tailwind color scales (e.g. `stone`, `amber`, `slate`) for brand UI elements.

## 🧪 Troubleshooting (i18n)

- __Deprecated or missing request locale API__
  - Symptom: Attempted import error or TypeError for `requestLocale` from `next-intl/server`.
  - Fix: Don’t import `requestLocale`. Use the `requestLocale` provided by `getRequestConfig` callback and await it:
    ```ts
    export default getRequestConfig(async ({requestLocale}) => {
      const locale = await requestLocale;
      // ...
    });
    ```

- __“params should be awaited” in layouts__
  - Symptom: Error like: `Route "/[locale]" used params.locale. params should be awaited ...`.
  - Fix: In `src/app/[locale]/layout.tsx`, type `params` as a Promise and `await` it:
    ```tsx
    export default async function LocaleLayout({params}: {params: Promise<{locale: 'en' | 'sw'}>}) {
      const {locale} = await params;
      // ...
    }
    ```

- __Unexpected 404 for a locale__
  - Symptom: `notFound()` triggered or missing messages.
  - Checks:
    - Ensure the locale is in `locales` in `next-intl.config.mjs` and `middleware.ts`.
    - Ensure a messages file exists at `src/i18n/locales/<locale>.json`.

- __Routes not prefixed with locale__
  - Symptom: Hitting `/about` instead of `/en/about` or `/sw/about`.
  - Fix: Ensure `localePrefix: 'always'` is set in `next-intl.config.mjs` and `middleware.ts` matcher covers `/` and `/(en|sw)/:path*`.

- __Stale builds / odd runtime errors after i18n changes__
  - Fix: Clear cache: `rm -rf .next && npm run dev`.

- __Image domain config deprecation__
  - Symptom: Warning about `images.domains` being deprecated.
  - Fix: Use `images.remotePatterns` in `next.config.ts`.

## 📂 Project Structure

```
portfolio-website/
├── .github/               # GitHub configurations
│   ├── workflows/         # CI/CD workflows
│   └── dependabot.yml     # Dependency updates
├── public/                # Static assets
│   ├── files/             # PDFs and documents
│   └── images/            # Image assets
├── src/
│   ├── app/               # App router pages
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog section
│   │   ├── contact/       # Contact page
│   │   ├── projects/      # Projects showcase
│   │   ├── resume/        # Online resume
│   │   └── skills/        # Skills section
│   ├── components/        # Reusable components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions and configs
│   └── types/             # TypeScript type definitions
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/edogola4/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=your_contact@email.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint
- `type-check`: Check TypeScript types

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

- **Email**: [edwin.ogola@example.com](mailto:edwin.ogola@example.com)
- **LinkedIn**: [Brandon Ogola](https://linkedin.com/in/brandon-ogola-b77063232)
- **GitHub**: [edogola4](https://github.com/edogola4)
- **Portfolio**: [portfolio-website-five-sigma-91.vercel.app](https://portfolio-website-five-sigma-91.vercel.app)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
