// src/context/ThemeContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

// No need to re-export useTheme if you're using it directly from next-themes
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // To prevent hydration mismatch, only render the provider after mounting
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return <>{children}</>;
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider;