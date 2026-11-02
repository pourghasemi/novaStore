
'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { ActionButton } from '../Header.styles';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ActionButton
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </ActionButton>
  );
}
