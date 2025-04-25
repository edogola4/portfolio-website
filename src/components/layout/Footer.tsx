// src/components/layout/Footer.tsx
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Edwin Ogola</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Software Engineer building scalable web applications focused on East African markets.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/edogola4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://x.com/BrandonOgola"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/about"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                About Me
              </Link>
              <Link 
                href="/projects"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Projects
              </Link>
              <Link 
                href="/blog"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Blog
              </Link>
              <Link 
                href="/resume"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                Resume
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:hello@edwinogola.com"
                className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FiMail className="mr-2" /> hello@edwinogola.com
              </a>
              <a 
                href="tel:+254712345678"
                className="flex items-center text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              >
                <FiPhone className="mr-2" /> +254 712 345 678
              </a>
              <Link 
                href="/contact"
                className="btn btn-primary mt-2 inline-block w-fit"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Edwin Ogola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;