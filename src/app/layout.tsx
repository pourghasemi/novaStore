
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import { ThemeProvider } from '@/contexts/ThemeContext';
import type { ThemeMode } from '@/types/theme';

export const metadata: Metadata = {
  title: 'NOVA | Online Store',
  description: 'Discover and shop your favorite products at NOVA.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const savedTheme = cookieStore.get('nova-theme')?.value;

  const initialTheme: ThemeMode =
    savedTheme === 'dark' ? 'dark' : 'light';

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider initialTheme={initialTheme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
