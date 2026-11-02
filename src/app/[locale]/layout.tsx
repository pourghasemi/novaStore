
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';

import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { routing } from '@/i18n/routing';
import type { ThemeMode } from '@/types/theme';


export const metadata: Metadata = {
  title: 'NOVA | Online Store',
  description: 'Discover and shop your favorite products at NOVA.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  const cookieStore = await cookies();
  const savedTheme = cookieStore.get('nova-theme')?.value;

  const initialTheme: ThemeMode =
    savedTheme === 'dark' ? 'dark' : 'light';

  return (
    <html
      lang={locale}
      dir={locale === 'fa' ? 'rtl' : 'ltr'}
    >
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider initialTheme={initialTheme}>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
