import SkillsPageClient from '../../../components/skills/SkillsPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Services | Brandon Ogola',
  description: 'Explore my technical skills and services focused on building scalable web applications for East African markets.',
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
