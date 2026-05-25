// src/components/about/AboutHeader.jsx

'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { useEffect } from 'react';

export default function AboutHeader() {
  useEffect(() => {
    // Load Buy Me A Coffee script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'BRAN.DON');
    script.setAttribute('data-color', '#E07A5F');
    script.setAttribute('data-emoji', '');
    script.setAttribute('data-font', 'Inter');
    script.setAttribute('data-text', 'Buy me a coffee');
    script.setAttribute('data-outline-color', '#2C5E4F');
    script.setAttribute('data-font-color', '#2B2D42');
    script.setAttribute('data-coffee-color', '#2B2D42');
    
    script.onload = () => {
      if (window.BMC) {
        window.BMC.init();
      }
    };
    
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[data-name="bmc-button"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className="relative bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-sm border border-neutral-100 dark:border-neutral-800/50">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Profile Image */}
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3">
          <div className="relative w-full aspect-square max-w-xs mx-auto group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
            <Image
              src="/images/profile.jpg"
              alt="Brandon Ogola"
              width={400}
              height={400}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
              priority
              unoptimized={true}
              key={Date.now()}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-100/50 group-hover:ring-primary-200/70 transition-all duration-300"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full lg:w-3/5 xl:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-800 dark:text-white text-center lg:text-left">
            About Me
          </h1>
          
          <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center lg:text-left">
            I&apos;m a Software Engineer based in Nairobi, Kenya, with 3+ years delivering full-stack applications across fintech, edtech, healthcare, and SaaS domains. I started my career building solutions for local startups and organisations — learning early that great software must be both technically sound and contextually relevant to the people it serves.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center lg:text-left">
            I specialise in enterprise backend systems, cloud-native SaaS, and full-stack TypeScript applications — shipping production-grade software using .NET, C#, Azure, and React with a focus on scalable architecture and measurable outcomes: 35% faster API response times, 40% reduction in manual processing, and consistently high test coverage.
          </p>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center lg:text-left">
            Currently architecting SmartSchedule Healthcare, an AI-powered appointment scheduling SaaS on .NET 10 and Azure targeting a $150B healthcare market — and building Riggs London Kenya, a mobile-first e-commerce platform with M-Pesa payments and a Claude-powered AI Scent Advisor.
          </p>
          
          {/* Social Links */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            {[
              { 
                href: 'https://github.com/edogola4', 
                icon: FaGithub, 
                label: 'GitHub Profile', 
                name: 'GitHub',
                bgColor: 'bg-gray-900 hover:bg-gray-800',
                textColor: 'text-white',
                iconColor: 'text-white',
                className: 'flex-1 sm:flex-none text-center'
              },
              { 
                href: 'https://www.linkedin.com/in/brandon-ogola-b77063232/', 
                icon: FaLinkedin, 
                label: 'LinkedIn Profile', 
                name: 'LinkedIn',
                bgColor: 'bg-[#0A66C2] hover:bg-[#004182]',
                textColor: 'text-white',
                iconColor: 'text-white',
                className: 'flex-1 sm:flex-none text-center'
              },
              { 
                href: 'https://x.com/BrandonOgola', 
                icon: SiX, 
                label: 'X Profile', 
                //name: '',
                bgColor: 'bg-gray-800 hover:bg-gray-700',
                textColor: 'text-white',
                iconColor: 'text-white',
                className: 'flex-1 sm:flex-none text-center'
              },
            ].map(({ href, icon: Icon, label, name, bgColor, textColor, iconColor, className }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={label}
                className={`inline-flex items-center justify-center sm:justify-start rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200 ${bgColor} ${textColor} hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${className}`}
              >
                <Icon className={`mr-2 h-4 w-4 ${iconColor}`} aria-hidden="true" />
                <span className="whitespace-nowrap">{name}</span>
              </a>
            ))}
          </div>
          
          {/* Buy Me A Coffee Button */}
          <div className="mt-6 sm:mt-8 text-center lg:text-left">
            <a 
              href="https://www.buymeacoffee.com/BRAN.DON" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              style={{
                backgroundColor: '#E07A5F',
                color: '#FFFFFF',
                border: '1px solid #d96b50',
                minWidth: '180px'
              }}
            >
              <span className="mr-2">☕</span>
              <span>Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}