export type ProductCategory =
  | 'jewelry'
  | 'clothing'
  | 'digital'
  | 'other';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: ProductCategory;
  rating?: number;
}

export type FilterOption = 'all' | ProductCategory;

export type SortOption =
  | 'default'
  | 'title-asc'
  | 'price-asc'
  | 'price-desc';
