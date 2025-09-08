"use client";

// src/components/layout/Footer.tsx
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();
  const locale = useLocale();
  const withLocale = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-primary-50 dark:bg-primary-950/50 border-t border-primary-100 dark:border-primary-800/50 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">Edwin Ogola</h3>
            <p className="text-text/80 dark:text-text-light/80 mb-6">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/edogola4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary-600 dark:text-text-light/60 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary-600 dark:text-text-light/60 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://x.com/BrandonOgola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary-600 dark:text-text-light/60 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href={withLocale('/about')}
                className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors hover:pl-2"
              >
                {t('nav.about')}
              </Link>
              <Link 
                href={withLocale('/projects')}
                className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors hover:pl-2"
              >
                {t('nav.projects')}
              </Link>
              <Link 
                href={withLocale('/blog')}
                className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors hover:pl-2"
              >
                {t('nav.blog')}
              </Link>
              <Link 
                href={withLocale('/resume')}
                className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors hover:pl-2"
              >
                {t('nav.resume')}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-800 dark:text-primary-200 mb-4">{t('footer.getInTouch')}</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hello@edwinogola.com"
                className="flex items-center text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors group"
              >
                <FiMail className="mr-3 group-hover:scale-110 transition-transform" /> hello@edwinogola.com
              </a>
              <a 
                href="tel:+254712345678"
                className="flex items-center text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors group"
              >
                <FiPhone className="mr-3 group-hover:scale-110 transition-transform" /> +254 712 345 678
              </a>
              <Link 
                href={withLocale('/contact')}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600 transition-colors w-fit"
              >
                {t('footer.contactCta')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-100 dark:border-primary-800/30 mt-12 pt-8 text-center text-text/60 dark:text-text-light/60 text-sm">
          <p> {currentYear} Edwin Ogola. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
