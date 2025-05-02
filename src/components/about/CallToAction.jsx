// src/components/about/CallToAction.jsx
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section 
      className="mt-20" 
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-12 sm:py-16 lg:flex lg:items-center lg:py-20">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:flex-shrink-0 lg:pr-8">
          <h2 
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to collaborate?
          </h2>
          <p className="mt-6 text-lg leading-7 text-indigo-100">
            I'm currently available for new projects and collaborations. Whether you're looking for a full-stack developer to join your team or need help with a specific project, I'd love to hear from you.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link 
              href="/contact" 
              className="rounded-md bg-white px-5 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get in Touch
            </Link>
            <Link 
              href="/projects" 
              className="text-lg font-semibold leading-6 text-white group transition-all duration-200 ease-in-out"
            >
              <span className="flex items-center">
                View My Projects 
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}