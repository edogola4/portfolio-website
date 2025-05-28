// src/components/about/AboutHeader.jsx

'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function AboutHeader() {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/3">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <Image
              src="/images/profile.jpg"
              alt="Edwin Ogola"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            I'm Edwin Ogola, a Full Stack Software Engineer passionate about building scalable web applications focused on East African markets. With expertise in modern web technologies, I create innovative solutions that address local challenges and opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { href: 'https://github.com/edogola4', icon: FaGithub, label: 'GitHub Profile', name: 'GitHub' },
              { href: 'https://www.linkedin.com/in/brandon-ogola-b77063232/', icon: FaLinkedin, label: 'LinkedIn Profile', name: 'LinkedIn' },
              { href: 'https://x.com/BrandonOgola', icon: SiX, label: 'X Profile', name: '' },
            ].map(({ href, icon: Icon, label, name }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={label}
                className="inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:border-current focus:bg-canvas focus:text-canvas-text dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-canvas dark:focus:text-canvas-text"
              >
                <Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800"></div>
    </section>
  );
}