'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { getProductById } from '@/services/productService';
import type { Product } from '@/types/product';
import EmptyState from '@/shared/EmptyState';
import ErrorMessage from '@/shared/ErrorMessage';
import Loading from '@/shared/Loading';

import {
  Container,
  BackLink,
  ProductContent,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductCategory,
  ProductRating,
  ProductPrice,
  StateContainer,
} from './ProductDetails.styles';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const t = useTranslations('ProductDetails');

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const isValidId = /^[1-9]\d*$/.test(id);

  useEffect(() => {
    if (!isValidId) return;

    let cancelled = false;

    getProductById(Number(id))
      .then((data) => {
        if (!cancelled) setProduct(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, isValidId]);

  if (!isValidId) {
    return (
        <EmptyState message={t('notFound')} />
    );
  }

  if (loading) {
    return (
      <StateContainer>
        <Loading message={t('loading')} />;
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <ErrorMessage message={t('error')} />
      </StateContainer>
    );
  }

  if (!product?.name) {
    return (
      <EmptyState message={t('notFound')} />
    );
  }

  return (
    <Container>
      <BackLink>
        <Link href="/">{t('backToProducts')}</Link>
      </BackLink>

      <ProductContent>
        <ProductImage src={product.image} alt={product.name} />

        <ProductInfo>
          <ProductName>{product.name}</ProductName>

          <ProductCategory>{product.category}</ProductCategory>

          {product.rating !== undefined && (
            <ProductRating>
              {t('rating')}: {product.rating}
            </ProductRating>
          )}

          <ProductPrice>
            ${product.price?.toFixed(2)}
          </ProductPrice>
        </ProductInfo>
      </ProductContent>
    </Container>
  );
}