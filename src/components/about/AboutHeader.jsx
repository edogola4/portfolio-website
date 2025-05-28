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
            <a
              href="https://github.com/edogola4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="h-5 w-5 mr-2" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="h-5 w-5 mr-2" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href="https://x.com/BrandonOgola"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="X Profile"
            >
              <SiX className="h-5 w-5 mr-2" aria-hidden="true" />
              
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-800"></div>
    </section>
  );
}