'use client';

'use client';

import { useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';
import type { FilterOption } from '@/types/product';

export default function useCategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCategory = (category: FilterOption) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const query = params.toString();

    router.replace(
      query ? `/?${query}#products` : '/#products',
      { scroll: true },
    );
  };

  return { setCategory };
}