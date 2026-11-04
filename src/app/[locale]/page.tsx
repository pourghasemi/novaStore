import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getProducts } from '@/services/productService';

import type { Product } from '@/types/product';

import Carousel from '@/components/Carousel';
import ProductList from '@/components/ProductList';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage');

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function Home() {
  const t = await getTranslations('HomePage');

  let products: Product[] = [];
  let hasError = false;

  try {
    products = await getProducts();
  } catch {
    hasError = true;
  }

  return (
    <div>
      <Carousel />

      <ProductList
        title={t('featuredProducts')}
        initialProducts={products}
        hasError={hasError}
      />
    </div>
  );
}