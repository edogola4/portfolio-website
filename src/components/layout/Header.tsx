"use client";

// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/about' },
    { key: 'nav.projects', path: '/projects' },
    { key: 'nav.skills', path: '/skills' },
    { key: 'nav.blog', path: '/blog' },
    { key: 'nav.resume', path: '/resume' },
    { key: 'nav.contact', path: '/contact' },
  ];

  const withLocale = (path: string) => `/${locale}${path}`;

  const switchLocale = (nextLocale: 'en' | 'sw') => {
    if (nextLocale === locale) return;
    // Replace leading locale segment
    const parts = pathname.split('/');
    if (parts[1] === 'en' || parts[1] === 'sw') {
      parts[1] = nextLocale;
    } else {
      // If no locale prefix (should not happen with localePrefix: 'always'), prefix it
      parts.splice(1, 0, nextLocale);
    }
    const target = parts.join('/') || `/${nextLocale}`;
    router.replace(target);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-background/80 dark:bg-primary-950/80 backdrop-blur-md border-b border-primary-100 dark:border-primary-800">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href={withLocale('/')} className="flex items-center space-x-2 group">
          <span className="font-bold text-2xl text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
            Brandon<span className="text-text dark:text-text-light">Ogola</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={withLocale(item.path)}
              className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {t(item.key)}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 pl-2 border-l border-primary-200 dark:border-primary-700 ml-2">
            <button
              type="button"
              onClick={() => switchLocale('en')}
              className={`px-2 py-1 text-xs font-semibold rounded ${locale === 'en' ? 'bg-primary-600 text-white' : 'text-text/70 hover:text-primary-600 dark:text-text-light/70 dark:hover:text-primary-400'}`}
              aria-pressed={locale === 'en'}
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => switchLocale('sw')}
              className={`px-2 py-1 text-xs font-semibold rounded ${locale === 'sw' ? 'bg-primary-600 text-white' : 'text-text/70 hover:text-primary-600 dark:text-text-light/70 dark:hover:text-primary-400'}`}
              aria-pressed={locale === 'sw'}
              aria-label="Badilisha lugha kuwa Kiswahili"
            >
              SW
            </button>
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-text/80 hover:bg-primary-100 dark:text-text-light/80 dark:hover:bg-primary-800 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 bg-background dark:bg-primary-950/95 backdrop-blur-sm shadow-lg border-b border-primary-100 dark:border-primary-800 py-2 px-4`}
        >
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={withLocale(item.path)}
                className="block py-3 px-4 text-text/90 hover:bg-primary-50 dark:text-text-light/90 dark:hover:bg-primary-900/50 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;