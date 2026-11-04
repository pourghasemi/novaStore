'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { useCartStore } from '@/stores/cartStore';

import {
  Container,
  PageTitle,
  EmptyCart,
  CartContent,
  CartItems,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  RemoveButton,
  Summary,
  SummaryTitle,
  SummaryRow,
  TotalPrice,
  ContinueButton,
} from './Cart.styles';

export default function Cart() {
  const t = useTranslations('Cart');

  const items = useCartStore((state) => state.items);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity,
  );
  const removeFromCart = useCartStore(
    (state) => state.removeFromCart,
  );

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <Container>
        <PageTitle>{t('title')}</PageTitle>

        <EmptyCart>
          <span>🛒</span>
          <p>{t('empty')}</p>
          <ContinueButton href="/">
            {t('continueShopping')}
          </ContinueButton>
        </EmptyCart>
      </Container>
    );
  }

  return (
    <Container>
      <PageTitle>{t('title')}</PageTitle>

      <CartContent>
        <CartItems>
          {items.map((item) => (
            <CartItem key={item.product.id}>
              <Link href={`/products/${item.product.id}`}>
                <ProductImage
                  src={item.product.image}
                  alt={item.product.name}
                />
              </Link>

              <ProductInfo>
                <ProductName>
                  <Link href={`/products/${item.product.id}`}>
                    {item.product.name}
                  </Link>
                </ProductName>

                <ProductPrice>
                  ${item.product.price.toFixed(2)}
                </ProductPrice>

                <QuantityControl>
                  <QuantityButton
                    onClick={() =>
                      decreaseQuantity(item.product.id)
                    }
                    aria-label="Decrease quantity"
                  >
                    −
                  </QuantityButton>

                  <QuantityValue>
                    {item.quantity}
                  </QuantityValue>

                  <QuantityButton
                    onClick={() => addToCart(item.product)}
                    aria-label="Increase quantity"
                  >
                    +
                  </QuantityButton>
                </QuantityControl>
              </ProductInfo>

              <RemoveButton
                onClick={() =>
                  removeFromCart(item.product.id)
                }
              >
                {t('remove')}
              </RemoveButton>
            </CartItem>
          ))}
        </CartItems>

        <Summary>
          <SummaryTitle>{t('summary')}</SummaryTitle>

          <SummaryRow>
            <span>{t('subtotal')}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </SummaryRow>

          <SummaryRow>
            <span>{t('shipping')}</span>
            <span>{t('free')}</span>
          </SummaryRow>

          <TotalPrice>
            <span>{t('total')}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </TotalPrice>

          <ContinueButton
            href="/"
            $fullWidth
          >
            {t('continueShopping')}
          </ContinueButton>
        </Summary>
      </CartContent>
    </Container>
  );
}