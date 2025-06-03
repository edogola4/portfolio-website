// src/lib/utils/seo.js
export function generateMetadata(page = 'resume') {
  const baseMetadata = {
    title: 'Edwin Ogola - Full Stack Software Engineer',
    description: 'Experienced Full Stack Software Engineer specializing in React, Node.js, and cloud solutions for East African fintech markets.',
    keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Kenya', 'Fintech'],
    authors: [{ name: 'Edwin Ogola' }],
    creator: 'Edwin Ogola',
  };

  const pageSpecificMetadata = {
    resume: {
      title: `${baseMetadata.title} | Professional Resume`,
      description: `${baseMetadata.description} View my professional experience, skills, and certifications.`,
      openGraph: {
        title: 'Edwin Ogola - Professional Resume',
        description: baseMetadata.description,
        type: 'profile',
        locale: 'en_US',
      },
      twitter: {
        card: 'summary',
        title: 'Edwin Ogola - Professional Resume',
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