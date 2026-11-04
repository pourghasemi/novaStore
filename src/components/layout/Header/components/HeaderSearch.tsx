'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

import { useRouter } from '@/i18n/navigation';
import { useProductStore } from '@/stores/productStore';

import {
  SearchInput,
  SearchWrapper,
  SearchResults,
  SearchResultItem,
  SearchEmpty,
} from './HeaderSearch.styles';

interface HeaderSearchProps {
  variant?: 'desktop' | 'mobile';
}

export default function HeaderSearch({
  variant = 'desktop',
}: HeaderSearchProps) {
  const t = useTranslations('Header');
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const products = useProductStore((state) => state.products);

  // Filter products based on search query
  const searchTerm = query.trim().toLowerCase();

  const filteredProducts = searchTerm
    ? products
        .filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm),
        )
        .slice(0, 5)
    : [];

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to product details page
  const handleProductClick = (productId: number) => {
    setQuery('');
    setIsOpen(false);

    router.push(`/products/${productId}`);
  };

  return (
    <SearchWrapper ref={searchRef} $variant={variant}>
      <SearchInput
        type="search"
        placeholder={t('searchPlaceholder')}
        aria-label={t('searchPlaceholder')}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />

      {isOpen && query.trim() && (
        <SearchResults>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SearchResultItem
                key={product.id}
                type="button"
                onClick={() => handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-info">
                  <span className="product-name">
                    {product.name}
                  </span>

                  <span className="product-price">
                    ${product.price.toFixed(2)}
                  </span>
                </span>
              </SearchResultItem>
            ))
          ) : (
            <SearchEmpty>No products found.</SearchEmpty>
          )}
        </SearchResults>
      )}
    </SearchWrapper>
  );
}