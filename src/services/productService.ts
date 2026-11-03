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

function mapProduct(apiProduct: ApiProduct): Product {
  let category: ProductCategory;

  switch (apiProduct.category) {
    case 'jewelery':
      category = 'jewelry';
      break;

    case "men's clothing":
    case "women's clothing":
      category = 'clothing';
      break;

    case 'electronics':
      category = 'digital';
      break;

    default:
      category = 'digital';
  }

  return {
    id: apiProduct.id,
    name: apiProduct.title,
    image: apiProduct.image,
    price: apiProduct.price,
    category,
    rating: apiProduct.rating?.rate,
  };
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<ApiProduct[]>('/products');

  return response.data.map(mapProduct);
};