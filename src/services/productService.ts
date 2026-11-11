
import { cache } from 'react';
import axiosInstance from '@/api/axiosInstance';
import type { Product, ProductCategory } from '@/types/product';

interface ApiProduct {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

const CATEGORY_MAPPING: Record<string, ProductCategory> = {
  jewelery: 'jewelry',
  "men's clothing": 'clothing',
  "women's clothing": 'clothing',
  electronics: 'digital',
};

const mapCategory = (category: string): ProductCategory => {
  return CATEGORY_MAPPING[category] ?? 'other';
};

function mapProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    name: apiProduct.title,
    image: apiProduct.image,
    price: apiProduct.price,
    category: mapCategory(apiProduct.category),
    rating: apiProduct.rating?.rate,
  };
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<ApiProduct[]>('/products');

  return response.data.map(mapProduct);
};

export const getProductById = cache(
  async (id: number): Promise<Product> => {
    const response = await axiosInstance.get<ApiProduct>(
      `/products/${id}`
    );

    return mapProduct(response.data);
  }
);

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  const response = await axiosInstance.get<string[]>('/products/categories');

  return [...new Set(response.data.map(mapCategory))];
};
