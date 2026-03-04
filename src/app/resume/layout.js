// src/app/resume/layout.js

export const metadata = {
  title: 'Resume | Brandon Ogola',
  description: 'Experienced Full Stack Software Engineer specializing in .NET, React, Node.js, and cloud solutions. View my professional experience, skills, and certifications.',
  keywords: ['Full Stack Developer', 'Software Engineer', '.NET', 'C#', 'React', 'Node.js', 'Kenya', 'Azure'],
  authors: [{ name: 'Brandon Ogola' }],
  creator: 'Brandon Ogola',
  openGraph: {
    title: 'Brandon Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in .NET, modern web technologies and cloud solutions',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Brandon Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in .NET and modern web technologies'
  },
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

export default function ResumeLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
