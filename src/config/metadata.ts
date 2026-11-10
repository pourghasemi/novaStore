
import type { Metadata } from 'next';

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export function getMetadata(locale: string): Metadata {
  const isPersian = locale === 'fa';

  const title = isPersian
    ? 'نووا | فروشگاه آنلاین'
    : 'NOVA | Online Store';

  const description = isPersian
    ? 'در فروشگاه آنلاین نووا، محصولات مورد علاقه خود را پیدا و خریداری کنید.'
    : 'Discover and shop your favorite products at NOVA.';

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: title,
      template: isPersian ? '%s | نووا' : '%s | NOVA',
    },

    description,

    applicationName: 'NOVA',

    keywords: isPersian
      ? ['نووا', 'فروشگاه آنلاین', 'خرید آنلاین', 'محصولات']
      : ['NOVA', 'online store', 'online shopping', 'products'],

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fa: '/fa',
        en: '/en',
      },
    },

    openGraph: {
      title,
      description,
      siteName: 'NOVA',
      locale: isPersian ? 'fa_IR' : 'en_US',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
