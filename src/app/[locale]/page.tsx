import { useTranslations } from 'next-intl';

import Carousel from '@/components/Carousel';
import ProductList from '@/components/ProductList';

export default function Home() {
  const t = useTranslations('HomePage');
  
  return (
    <div>
      <Carousel />
      <ProductList title={t('featuredProducts')} />
    </div>
  );
}
