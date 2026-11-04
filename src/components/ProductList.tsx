'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import type {
  Product,
  FilterOption,
  SortOption,
} from '@/types/product';

import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import ProductSort from '@/components/ProductSort';

import Pagination from '@/shared/Pagination';
import EmptyState from '@/shared/EmptyState';
import ErrorMessage from '@/shared/ErrorMessage';

import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  ProductListGrid,
} from './ProductList.styles';

interface ProductListProps {
  title: string;
  initialProducts: Product[];
  hasError: boolean;
}

const ITEMS_PER_PAGE = 6;

const validCategories: FilterOption[] = [
  'all',
  'jewelry',
  'clothing',
  'digital',
];

export default function ProductList({
  title,
  initialProducts,
  hasError,
}: ProductListProps) {
  const t = useTranslations('HomePage');
  const searchParams = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Read category from URL
  const categoryParam = searchParams.get('category');

  const activeFilter: FilterOption =
    categoryParam &&
    validCategories.includes(categoryParam as FilterOption)
      ? (categoryParam as FilterOption)
      : 'all';

  // Sort products
  const sortedProducts = useMemo(() => {
    const result = [...initialProducts];

    switch (sortBy) {
      case 'title-asc':
        return result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

      case 'price-asc':
        return result.sort((a, b) => a.price - b.price);

      case 'price-desc':
        return result.sort((a, b) => b.price - a.price);

      default:
        return result;
    }
  }, [initialProducts, sortBy]);

  // Filter products
  const filteredProducts =
    activeFilter === 'all'
      ? sortedProducts
      : sortedProducts.filter(
          (product) => product.category === activeFilter
        );

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset page when filter changes
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  // Handle sorting
  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  // API error
  if (hasError) {
    return (
      <ProductListContainer id="products">
        <ProductListHeader>
          <ProductListTitle>{title}</ProductListTitle>
        </ProductListHeader>

        <ErrorMessage message={t('loadError')} />
      </ProductListContainer>
    );
  }

  // No products
  if (initialProducts.length === 0) {
    return (
      <ProductListContainer id="products">
        <ProductListHeader>
          <ProductListTitle>{title}</ProductListTitle>
        </ProductListHeader>

        <EmptyState message={t('noProductsFound')} />
      </ProductListContainer>
    );
  }

  return (
    <ProductListContainer id="products">
      <ProductFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <ProductListHeader>
        <ProductListTitle>{title}</ProductListTitle>

        <ProductSort
          value={sortBy}
          onChange={handleSortChange}
        />
      </ProductListHeader>

      {filteredProducts.length > 0 ? (
        <>
          <ProductListGrid>
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </ProductListGrid>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <EmptyState message={t('noProductsFound')} />
      )}
    </ProductListContainer>
  );
}