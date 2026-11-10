
import type { MetadataRoute } from 'next';

import { getProducts } from '@/services/productService';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['fa', 'en'];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }));

  try {
    // Fetch products from API
    const products = await getProducts();

    // Dynamic product pages
    const productPages: MetadataRoute.Sitemap = locales.flatMap(
      (locale) =>
        products.map((product) => ({
          url: `${BASE_URL}/${locale}/products/${product.id}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        }))
    );

    return [...staticPages, ...productPages];
  } catch {
    // Return static pages if API is unavailable
    return staticPages;
  }
}
