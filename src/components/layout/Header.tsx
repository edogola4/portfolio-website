"use client";

// src/components/layout/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-background/80 dark:bg-primary-950/80 backdrop-blur-md border-b border-primary-100 dark:border-primary-800">
      <div className="container-custom flex justify-between items-center py-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="font-bold text-2xl text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
            Edwin<span className="text-text dark:text-text-light">Ogola</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-text/80 hover:text-primary-600 dark:text-text-light/80 dark:hover:text-primary-400 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {item.name}
            </Link>
          ))}
          
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
                key={item.name}
                href={item.path}
                className="block py-3 px-4 text-text/90 hover:bg-primary-50 dark:text-text-light/90 dark:hover:bg-primary-900/50 rounded-md transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;