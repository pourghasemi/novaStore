
'use client';

import {
  createContext,
  useContext,
  useState,
} from 'react';

import {
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import {
  themes,
} from '@/styles/theme';

import type { ThemeMode } from '@/types/theme';

import GlobalStyles from '@/styles/GlobalStyles';

import { ThemeContextType, ThemeProviderProps } from '@/types/theme'


const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  initialTheme,
}: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] =
    useState<ThemeMode>(initialTheme);

  const toggleTheme = () => {
    const nextTheme =
      currentTheme === 'light' ? 'dark' : 'light';

    setCurrentTheme(nextTheme);

    document.cookie = `nova-theme=${nextTheme}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={themes[currentTheme]}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme must be used within ThemeProvider'
    );
  }

  return context;
}
