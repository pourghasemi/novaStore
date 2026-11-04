import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Cart from '@/components/Cart';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Cart');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function CartPage() {
  return <Cart />;
}