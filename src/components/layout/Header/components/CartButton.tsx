'use client';

import { useTranslations } from 'next-intl';
import { useCartStore } from '@/stores/cartStore';
import { CartLink } from './CartButton.styles';

export default function CartButton() {
  const t = useTranslations('Header');

  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <CartLink href="/cart">
      🛒 {t('cart')}

      {cartCount > 0 && (
        <span>{cartCount}</span>
      )}
    </CartLink>
  );
}