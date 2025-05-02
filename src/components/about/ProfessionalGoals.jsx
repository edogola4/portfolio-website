// src/components/about/ProfessionalGoals.jsx

export default function ProfessionalGoals() {
    return (
      <section id="goals">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Professional Growth
        </h2>
        <div className="mt-6 space-y-6 text-gray-600 dark:text-gray-300">
          <p>
            I'm constantly evolving as a developer, seeking out new challenges and learning opportunities. Here's what I'm currently focused on in my professional journey:
          </p>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Currently Learning</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                <span>Advanced TypeScript patterns for large-scale applications</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                <span>Rust for high-performance web backends</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-green-500 dark:bg-green-400"></div>
                <span>AI/ML integration in web applications</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Future Aspirations</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
                <span>Leading development teams on impactful projects</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-pink-500 dark:bg-pink-400"></div>
                <span>Contributing to East Africa's tech ecosystem growth</span>
              </li>
              <li className="flex items-center">
                <div className="mr-2 h-4 w-4 rounded-full bg-yellow-500 dark:bg-yellow-400"></div>
                <span>Mentoring the next generation of African developers</span>
              </li>
            </ul>
          </div>
          
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 border border-blue-100 dark:border-blue-800">
            <h3 className="font-medium text-blue-800 dark:text-blue-300">My Development Philosophy</h3>
            <p className="mt-2 text-blue-700 dark:text-blue-300">
              "I believe in creating software that not only solves technical challenges but also addresses real human needs. The most elegant code is meaningless if it doesn't improve people's lives."
            </p>
          </div>
        </div>
      </section>
    );
  }
  