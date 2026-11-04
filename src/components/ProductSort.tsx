'use client';

import { useTranslations } from 'next-intl';

import type { SortOption } from '@/types/product';
import {
  SortContainer,
  SortLabel,
  SortSelect,
} from './ProductSort.styles';

interface ProductSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function ProductSort({
  value,
  onChange,
}: ProductSortProps) {
  const t = useTranslations('HomePage');

  return (
    <SortContainer>
      <SortLabel htmlFor="product-sort">
        {t('sortBy')}:
      </SortLabel>

      <SortSelect
        id="product-sort"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as SortOption)
        }
      >
        <option value="default">{t('defaultSort')}</option>
        <option value="title-asc">{t('nameAsc')}</option>
        <option value="price-asc">{t('priceAsc')}</option>
        <option value="price-desc">{t('priceDesc')}</option>
      </SortSelect>
    </SortContainer>
  );
}