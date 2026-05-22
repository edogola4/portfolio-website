// src/app/[locale]/page.tsx
import Hero from '@/components/home/Hero';
import TrustMarquee from '@/components/ui/TrustMarquee';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SkillsOverview from '@/components/home/SkillsOverview';
import ContactForm from '@/components/home/ContactForm';

export default function LocalizedHomePage() {
  return (
    <div>
      <Hero />
      <TrustMarquee />
      <AboutPreview />
      <FeaturedProjects />
      <SkillsOverview />
      <ContactForm />
    </div>
  );
}
