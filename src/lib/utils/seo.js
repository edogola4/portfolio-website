// src/lib/utils/seo.js
export function generateMetadata(page = 'resume') {
  const baseMetadata = {
    title: 'Brandon Ogola - Software Engineer',
    description: 'Experienced Software Engineer specializing in .NET, Azure, TypeScript, and cloud-native enterprise systems.',
    keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Kenya', 'Fintech'],
    authors: [{ name: 'Brandon Ogola' }],
    creator: 'Brandon Ogola',
  };

  const pageSpecificMetadata = {
    resume: {
      title: `${baseMetadata.title} | Professional Resume`,
      description: `${baseMetadata.description} View my professional experience, skills, and certifications.`,
      openGraph: {
        title: 'Brandon Ogola - Professional Resume',
        description: baseMetadata.description,
        type: 'profile',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary',
        title: 'Brandon Ogola - Professional Resume',
        description: baseMetadata.description
      }
    }
  };

  return {
    ...baseMetadata,
    ...pageSpecificMetadata[page],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}