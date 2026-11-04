
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';

import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { routing } from '@/i18n/routing';
import type { ThemeMode } from '@/types/theme';
import MainLayout from '@/components/layout/MainLayout';
import { getMetadata } from '@/config/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return getMetadata(locale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

const vazirmatn = localFont({
  src: [
    {
      path: '../../assets/fonts/Vazirmatn/static/Vazirmatn-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Vazirmatn/static/Vazirmatn-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-vazirmatn',
});

const inter = localFont({
  src: '../../assets/fonts/Inter/static/Inter_18pt-Light.ttf',
  weight: '100 900',
  variable: '--font-inter',
});

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
      className={`${vazirmatn.variable} ${inter.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider initialTheme={initialTheme}>
            <NextIntlClientProvider messages={messages}>
              <MainLayout>
                {children}
              </MainLayout>
            </NextIntlClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
