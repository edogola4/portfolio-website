// src/app/about/page.js

import AboutHeader from '@/components/about/AboutHeader';
import ProfessionalJourney from '@/components/about/ProfessionalJourney';
import Education from '@/components/about/Education';
import PersonalSection from '@/components/about/PersonalSection';
import ProfessionalGoals from '@/components/about/ProfessionalGoals';
import TechStack from '@/components/about/TechStack';
import CallToAction from '@/components/about/CallToAction';

export const metadata = {
  title: 'About Me | Edwin Ogola - Full Stack Software Engineer',
  description: 'Learn about Edwin Ogola\'s journey as a Full Stack Software Engineer specializing in building scalable web applications for East African markets.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <AboutHeader />
      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-16">
          <ProfessionalJourney />
          <Education />
          <TechStack />
        </div>
        <div className="lg:col-span-4 space-y-16">
          <PersonalSection />
          <ProfessionalGoals />
        </div>
      </div>
      <CallToAction />
    </main>
  );
}