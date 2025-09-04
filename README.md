# Edwin Ogola Portfolio Website

[![CI/CD Status](https://github.com/edogola4/portfolio-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/edogola4/portfolio-website/actions/workflows/ci-cd.yml)
[![Vercel](https://vercelbadge.vercel.app/api/edogola4/portfolio-website)](https://vercel.com/edogola4/portfolio-website)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Last Commit](https://img.shields.io/github/last-commit/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/commits/main)
[![GitHub Issues](https://img.shields.io/github/issues/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/issues)
[![GitHub PRs](https://img.shields.io/github/issues-pr/edogola4/portfolio-website)](https://github.com/edogola4/portfolio-website/pulls)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/edogola4/portfolio-website/graphs/commit-activity)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=edogola4/portfolio-website)](https://dependabot.com)

Welcome to my professional portfolio website! I'm Edwin Ogola, a Full Stack Software Engineer passionate about building scalable web applications tailored for East African markets. This site showcases my skills, projects, and insights into the tech world.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React 19, and TypeScript
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Dark/Light Mode**: Seamless theme switching with `next-themes`
- **Interactive UI**: Smooth animations with Framer Motion
- **Form Handling**: Robust form validation with React Hook Form and Zod
- **Contact Form**: Secure email functionality with Nodemailer and SendGrid
- **Google reCAPTCHA**: Spam protection for contact forms
- **Analytics**: Integrated with Vercel Analytics
- **Particle Effects**: Dynamic background with tsparticles
- **Performance**: Optimized for fast loading and SEO

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom themes
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide Icons](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

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

- **Email**: [Your Email](mailto:your.email@example.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio](https://yourportfolio.com)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)