import SkillsPageClient from '../../../components/skills/SkillsPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Expertise | Brandon Ogola',
  description: 'Technical skills across .NET, TypeScript, Azure, AI integrations, and cloud-native development. 2+ years of production experience in fintech, healthcare, and SaaS.',
};

export default function SkillsPage() {
  return <SkillsPageClient />;
}
