
'use client';

import { useTranslations } from 'next-intl';
import { CartLink } from '../Header.styles';

export default function CartButton() {
  const t = useTranslations('Header');

  return (
    <CartLink href="#">
      🛒 {t('cart')}
    </CartLink>
  );
}
