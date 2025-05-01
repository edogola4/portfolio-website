// src/app/skills/page.js
import SkillsPageClient from '@/components/skills/SkillsPageClient';

export const metadata = {
  title: 'Skills & Services | Edwin Ogola',
  description: 'Explore my technical skills and services focused on building scalable web applications for East African markets.',
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}