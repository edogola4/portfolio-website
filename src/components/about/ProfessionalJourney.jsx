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
              I started my career building solutions for local startups and organisations in East Africa, learning early that great software must be both technically sound and contextually relevant to the people it serves. This foundation shaped how I approach engineering today.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I now specialise in enterprise backend systems, cloud-native SaaS, and full-stack TypeScript applications — building production-grade software using .NET, C#, Azure, and React with a focus on scalable architecture and measurable business outcomes.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              Currently architecting SmartSchedule Healthcare, an AI-powered appointment scheduling SaaS on .NET 10 and Azure targeting a $150B healthcare market. This project brings together enterprise-grade architecture with AI/ML integration, HIPAA-compliant security, and bidirectional EHR integration.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I started building software to solve problems I saw around me in East Africa. That instinct — to build things that actually matter to real people — is what drives every technical decision I make today, whether I'm designing a distributed system or a healthcare SaaS architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}