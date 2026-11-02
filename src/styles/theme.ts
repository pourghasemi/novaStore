export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F8FAFC',
    primary: '#635BFF',
    secondary: '#8B85FF',
    text: '#171923',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    card: '#FFFFFF',
    header: '#FFFFFF',
    success: '#16A34A',
    danger: '#DC2626',
  },
};

export const darkTheme = {
  colors: {
    background: '#101218',
    surface: '#191D27',
    primary: '#8B85FF',
    secondary: '#A5A0FF',
    text: '#F8FAFC',
    textSecondary: '#A0AEC0',
    border: '#303644',
    card: '#191D27',
    header: '#151923',
    success: '#4ADE80',
    danger: '#F87171',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type AppTheme = typeof lightTheme;
