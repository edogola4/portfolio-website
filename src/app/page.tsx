// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect root path to default locale to ensure NextIntl provider wraps the page
  redirect('/en');
}