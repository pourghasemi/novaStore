'use client';

import { Link } from '@/i18n/navigation';
import { useCartStore } from '@/stores/cartStore';
import type { Product } from '@/types/product';

import {
  Card,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCategory,
  ProductRating,
  AddToCartButton,
  QuantityControl,
  QuantityButton,
  QuantityValue,
} from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity,
  );

  const cartItem = useCartStore((state) =>
    state.items.find((item) => item.product.id === product.id),
  );

  return (
    <Card>
      <Link
        href={`/products/${product.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.category}</ProductCategory>

        {product.rating !== undefined && (
          <ProductRating>⭐ {product.rating}</ProductRating>
        )}

        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
      </Link>

      {cartItem ? (
        <QuantityControl>
          <QuantityButton
            type="button"
            onClick={() => decreaseQuantity(product.id)}
            aria-label="Decrease quantity"
          >
            −
          </QuantityButton>

          <QuantityValue>{cartItem.quantity}</QuantityValue>

          <QuantityButton
            type="button"
            onClick={() => addToCart(product)}
            aria-label="Increase quantity"
          >
            +
          </QuantityButton>
        </QuantityControl>
      ) : (
        <AddToCartButton
          type="button"
          onClick={() => addToCart(product)}
        >
          افزودن به سبد خرید
        </AddToCartButton>
      )}
    </Card>
  );
}