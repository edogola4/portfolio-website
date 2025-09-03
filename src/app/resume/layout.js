// src/app/resume/layout.js

export const metadata = {
  title: 'Edwin Ogola - Full Stack Software Engineer | Professional Resume',
  description: 'Experienced Full Stack Software Engineer specializing in React, Node.js, and cloud solutions for East African fintech markets. View my professional experience, skills, and certifications.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Kenya', 'Fintech', 'M-Pesa'],
  authors: [{ name: 'Edwin Ogola' }],
  creator: 'Edwin Ogola',
  openGraph: {
    title: 'Edwin Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in modern web technologies and East African fintech solutions',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Edwin Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in modern web technologies'
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
