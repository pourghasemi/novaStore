import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import Carousel from '@/components/Carousel';
import ProductList from '@/components/ProductList';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <Carousel />
      <ProductList title={t('featuredProducts')} />
    </div>
  );
}