'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { FilterOption } from '@/types/product';

import { useRouter } from '@/i18n/navigation';
import useCategoryFilter from '@/hooks/useCategoryFilter';

import {
  CarouselContainer,
  CarouselContent,
  CarouselText,
  CarouselTitle,
  CarouselDescription,
  CarouselButton,
  CarouselImage,
  CarouselControls,
  Dot,
} from './Carousel.styles';

const slides = [
  {
    id: 1,
    image: '/images/slider/slide1.jpg',
    title: 'slide1.title',
    description: 'slide1.description',
    category: 'jewelry' as FilterOption,
  },
  {
    id: 2,
    image: '/images/slider/slide2.jpg',
    title: 'slide2.title',
    description: 'slide2.description',
    category: 'clothing' as FilterOption,
  },
];

export default function Carousel() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const { setCategory } = useCategoryFilter();

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[activeSlide];

  return (
    <CarouselContainer>
      <CarouselContent>
        <CarouselImage
          src={slide.image}
          alt={t(slide.title)}
        />

        <CarouselText>
          <CarouselTitle>{t(slide.title)}</CarouselTitle>

          <CarouselDescription>
            {t(slide.description)}
          </CarouselDescription>

         <CarouselButton
            href={`/?category=${slide.category}#categories`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(slide.category);

              document.getElementById('categories')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            {t('shopNow')}
          </CarouselButton>
        </CarouselText>
      </CarouselContent>

      <CarouselControls>
        {slides.map((item, index) => (
          <Dot
            key={item.id}
            type="button"
            $active={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
          />
        ))}
      </CarouselControls>
    </CarouselContainer>
  );
}