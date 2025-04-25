import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';  // Use your custom provider
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
//import '@/styles/globals.css';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata = {
  title: 'Edwin Ogola | Full Stack Software Engineer',
  description: 'Building scalable web applications focused on East African markets',
  keywords: 'software engineer, web developer, east africa, full stack, react, next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}