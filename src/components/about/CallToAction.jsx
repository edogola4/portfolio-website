// src/components/about/CallToAction.jsx
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CallToAction() {
  const locale = useLocale();
  return (
    <section 
      className="mt-16 sm:mt-20 md:mt-24 mb-12 sm:mb-16 md:mb-20" 
      aria-labelledby="cta-heading"
    >
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 shadow-xl lg:flex lg:items-center">
        {/* Decorative elements */}
        <div className="absolute -top-1/2 right-0 -z-0 h-[200%] w-3/4 sm:w-1/2 -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-r from-accent-500/20 to-transparent" />
        <div className="absolute -bottom-1/2 left-0 -z-0 h-[200%] w-3/4 sm:w-1/2 translate-y-1/4 -translate-x-1/4 rounded-full bg-gradient-to-l from-accent-400/20 to-transparent" />
        
        <div className="relative z-10 mx-auto w-full max-w-4xl lg:mx-0 lg:flex-shrink-0 lg:pr-8">
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center lg:text-left"
          >
            Ready to collaborate?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed sm:leading-7 text-primary-100 text-center lg:text-left">
            I'm currently available for new projects and collaborations. Whether you're looking for a full-stack developer to join your team or need help with a specific project, I'd love to hear from you.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Link 
              href={`/${locale}/contact`} 
              className="group relative inline-flex items-center justify-center rounded-lg bg-white px-5 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-semibold text-primary-700 shadow-sm transition-all duration-200 hover:bg-white/95 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 w-full xs:w-auto text-center"
            >
              Get in Touch
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link 
              href={`/${locale}/projects`} 
              className="group relative inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/15 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400 w-full xs:w-auto text-center"
            >
              <span className="flex items-center">
                View My Projects
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
          
          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-primary-100/80">
            <div className="flex items-center">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-1.5 sm:ml-2">Available for freelance work</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="ml-1.5 sm:ml-2">Open to full-time opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}