'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogIndexPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/blog');
  }, [router]);
  
  return null;
}
