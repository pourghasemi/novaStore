
'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import type { Product } from '@/types/product';

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
} from './ProductDetails.styles';

interface ProductDetailsViewProps {
  product: Product;
}

export default function ProductDetailsView({
  product,
}: ProductDetailsViewProps) {
  const t = useTranslations('ProductDetails');

  return (
    <Container>
      <BackLink>
        <Link href="/">{t('backToProducts')}</Link>
      </BackLink>

      <ProductContent>
        <ProductImage
          src={product.image}
          alt={product.name}
        />

        <ProductInfo>
          <ProductName>{product.name}</ProductName>

          <ProductCategory>
            {product.category}
          </ProductCategory>

          {product.rating !== undefined && (
            <ProductRating>
              {t('rating')}: {product.rating}
            </ProductRating>
          )}

          <ProductPrice>
            ${product.price.toFixed(2)}
          </ProductPrice>
        </ProductInfo>
      </ProductContent>
    </Container>
  );
}
