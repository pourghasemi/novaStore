
'use client';

import { useEffect } from 'react';

import type { FilterOption } from '@/types/product';
import useCategoryFilter from '@/hooks/useCategoryFilter';
import { useProductStore } from '@/stores/productStore';

import {
  FiltersContainer,
  FilterButton,
} from './ProductFilters.styles';

import Loading from '@/shared/Loading';
import EmptyState from '@/shared/EmptyState';

interface ProductFiltersProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

export default function ProductFilters({
  activeFilter,
  onFilterChange,
}: ProductFiltersProps) {
  const categories = useProductStore((state) => state.categories);
  const categoriesLoading = useProductStore(
    (state) => state.categoriesLoading
  );
  const categoriesError = useProductStore(
    (state) => state.categoriesError
  );
  const fetchCategories = useProductStore(
    (state) => state.fetchCategories
  );

  const { setCategory } = useCategoryFilter();

  useEffect(() => {
    if (categories.length === 0 && !categoriesLoading && !categoriesError) {
      fetchCategories();
    }
  }, [categories.length, categoriesLoading, categoriesError, fetchCategories]);

  if (categoriesLoading) {
    return <Loading message="Loading categories..." />;
  }

  if (categoriesError) {
    return <EmptyState message="Failed to load categories." />;
  }

  const filters = [
    { value: 'all' as FilterOption, label: 'All' },
    ...categories.map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    })),
  ];

  const handleFilterClick = (category: FilterOption) => {
    onFilterChange(category);
    setCategory(category);
  };

  return (
    <FiltersContainer id="categories">
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          type="button"
          $active={activeFilter === filter.value}
          onClick={() => handleFilterClick(filter.value)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </FiltersContainer>
  );
}
