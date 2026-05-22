// src/app/[locale]/page.tsx
import Hero from '@/components/home/Hero';
import AboutPreview from '@/components/home/AboutPreview';
import TrustMarquee from '@/components/ui/TrustMarquee';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsOverview from '@/components/home/SkillsOverview';
import ContactForm from '@/components/home/ContactForm';

export default function LocalizedHomePage() {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <TrustMarquee />
      <FeaturedProjects />
      <SkillsOverview />
      <ContactForm />
    </div>
  );
}
