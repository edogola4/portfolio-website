// src/context/ThemeContext.tsx
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

// Define the type for the context value
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
};

// Create a custom ThemeContext with the correct type
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {}
});

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Main provider component
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps & { children: ReactNode }) => {
  const { theme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  
  const contextValue: ThemeContextType = {
    theme: theme || 'light',
    setTheme,
    toggleTheme
  };
  
  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <NextThemesProvider {...props}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </NextThemesProvider>
  );
};

export default ThemeContext;