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
              My journey into software development began with a fascination for solving real-world problems. Growing up in East Africa, I witnessed firsthand the transformative power of technology in addressing local challenges. This inspired me to pursue a career where I could contribute to this positive change.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              I started my career working with local startups, developing solutions that addressed specific needs in the East African market. This early experience taught me the importance of building applications that are not only technically sound but also contextually relevant to the users they serve.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              As a full-stack developer, I've cultivated a holistic approach to software development. I believe in understanding both the technical architecture and the user experience deeply. This philosophy guides me to create solutions that are not only functionally robust but also intuitive and accessible to users with varying levels of technical expertise.
            </p>
          </div>
          
          <div className="relative pl-6 before:absolute before:left-0 before:top-3 before:h-3 before:w-3 before:rounded-full before:bg-accent-500 before:ring-4 before:ring-accent-100 dark:before:ring-accent-900/30">
            <p className="text-lg leading-relaxed">
              What drives me technically is the constant evolution of web technologies and the opportunity to leverage these advancements to create more efficient, scalable, and impactful applications. I'm particularly passionate about performance optimization and creating seamless experiences across different devices and connection speeds—a critical consideration for applications serving the East African market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}