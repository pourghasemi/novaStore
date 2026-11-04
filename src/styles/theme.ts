
export const lightTheme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F7F7F5',
    primary: '#F47B35',
    secondary: '#E96725',
    text: '#292929',
    textSecondary: '#777777',
    border: '#E8E5E1',
    card: '#FFFFFF',
    header: '#FFFFFF',
    success: '#16A34A',
    danger: '#DC2626',
  },
};


export const darkTheme = {
  colors: {
    background: '#0E1621',
    surface: '#23364F',
    primary: '#F47B35',
    secondary: '#FF985C',
    text: '#F5F6F8',
    textSecondary: '#C4CFDC',
    border: '#40516A',
    card: '#23364F',
    header: '#142238',
    success: '#4ADE80',
    danger: '#F87171',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export type AppTheme = typeof lightTheme;
