// src/app/page.tsx
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsOverview from '@/components/home/SkillsOverview';
import ContactForm from '@/components/home/ContactForm';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsOverview />
      <ContactForm />
    </div>
  );
}