import { create } from 'zustand';

import type { Product, ProductCategory } from '@/types/product';
import { handleApiError } from '@/services/handleApiError';
import { getProductCategories } from '@/services/productService';

interface ProductState {
  products: Product[];
  categories: ProductCategory[];

  loading: boolean;
  error: string | null;

  categoriesLoading: boolean;
  categoriesError: string | null;

  setProducts: (products: Product[]) => void;
  fetchCategories: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  categories: [],

  loading: false,
  error: null,

  categoriesLoading: false,
  categoriesError: null,

  setProducts: (products) => {
    set({
      products,
      loading: false,
      error: null,
    });
  },

  fetchCategories: async () => {
    set({
      categoriesLoading: true,
      categoriesError: null,
    });

    try {
      const categories = await getProductCategories();

      set({
        categories,
        categoriesLoading: false,
        categoriesError: null,
      });
    } catch (error) {
      const apiError = handleApiError(error);

      set({
        categoriesError: apiError.message,
        categoriesLoading: false,
      });
    }
  },
}));