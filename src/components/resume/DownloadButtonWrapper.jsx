'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamic import for DownloadButton with SSR disabled
const DownloadButton = dynamic(() => import('@/components/resume/DownloadButton'), {
  loading: () => <div className="w-32 h-10 bg-gray-200 animate-pulse rounded" />,
  ssr: false,
});

export default function DownloadButtonWrapper() {
  return <DownloadButton />;
}