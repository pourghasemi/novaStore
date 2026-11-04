
import { create } from 'zustand';

import type { Product, ProductCategory } from '@/types/product';
import { handleApiError } from '@/services/handleApiError';
import {
  getProducts,
  getProductCategories,
} from '@/services/productService';

interface ProductState {
  products: Product[];
  categories: ProductCategory[];

  loading: boolean;
  error: string | null;

  categoriesLoading: boolean;
  categoriesError: string | null;

  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  categories: [],

  loading: false,
  error: null,

  categoriesLoading: false,
  categoriesError: null,

  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const products = await getProducts();

      set({
        products,
        loading: false,
        error: null,
      });
    } catch (error) {
      const apiError = handleApiError(error);

      set({
        error: apiError.message,
        loading: false,
      });
    }
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
