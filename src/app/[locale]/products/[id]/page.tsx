
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getProductById } from '@/services/productService';

import EmptyState from '@/shared/EmptyState';
import ErrorMessage from '@/shared/ErrorMessage';

import ProductDetailsView from '@/components/ProductDetails';

interface ProductDetailsPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations('ProductDetails');

  if (!/^[1-9]\d*$/.test(id)) {
    return {
      title: t('notFound'),
      description: t('notFound'),
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  try {
    const product = await getProductById(Number(id));

    const description = t('metaDescription', {
      product: product.name,
    });

    const productUrl = `/${locale}/products/${id}`;

    return {
      title: product.name,
      description,

      alternates: {
        canonical: productUrl,
        languages: {
          fa: `/fa/products/${id}`,
          en: `/en/products/${id}`,
        },
      },

      openGraph: {
        title: product.name,
        description,
        url: productUrl,
        images: [product.image],
        type: 'website',
      },

      twitter: {
        card: 'summary_large_image',
        title: product.name,
        description,
        images: [product.image],
      },
    };
  } catch {
    return {
      title: t('notFound'),
      description: t('notFound'),
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  const t = await getTranslations('ProductDetails');

  if (!/^[1-9]\d*$/.test(id)) {
    return <EmptyState message={t('notFound')} />;
  }

  let product;

  try {
    product = await getProductById(Number(id));
  } catch {
    return <ErrorMessage message={t('error')} />;
  }

  if (!product?.name) {
    return <EmptyState message={t('notFound')} />;
  }

  return <ProductDetailsView product={product} />;
}
