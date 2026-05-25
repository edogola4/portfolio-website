// src/components/about/ProfessionalJourney.jsx

export default function ProfessionalJourney() {
  return (
    <section id="professional-journey" className="relative">
      <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-primary-200 to-accent-200 dark:from-primary-900 dark:to-accent-900"></div>
      <div className="pl-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary-800 dark:text-white">
          Professional Journey
        </h2>
        <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-300">
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I started my career as a Software Developer Intern at REAL BIZ Digital in 2023, building React and Node.js applications across three client projects. That early experience — shipping real features under real deadlines — shaped how I approach engineering: with a bias for measurable outcomes over theoretical perfection.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I moved into freelance work, building Riggs London Kenya — a mobile-first e-commerce platform with M-Pesa payments, Anthropic Claude AI, and semantic search via pgvector — and a real-time collaborative coding platform. Simultaneously, I interned at Alliance Bioversity CIAT, automating data workflows with Python and Flask.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I joined Cognativ Technology Limited as a Software Engineer, shipping RESTful APIs and Blazor Server components for the SmartSaaS™ enterprise platform — cutting API response times by 35% and driving test coverage to 80%.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              Today I&apos;m architecting SmartSchedule Healthcare — an enterprise AI scheduling SaaS on .NET 10 and Azure targeting a $150B market. The same instinct that drove me to build solutions for East African organisations now drives every architectural decision I make at enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}