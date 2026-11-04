import {
  SkeletonCard,
  SkeletonImage,
  SkeletonText,
  SkeletonShortText,
  SkeletonPrice,
} from './ProductSkeleton.styles';

interface ProductSkeletonProps {
  count?: number;
}

export default function ProductSkeleton({
  count = 6,
}: ProductSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonImage />
          <SkeletonText />
          <SkeletonShortText />
          <SkeletonPrice />
        </SkeletonCard>
      ))}
    </>
  );
}