
'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

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
  },
  {
    id: 2,
    image: '/images/slider/slide2.jpg',
    title: 'slide2.title',
    description: 'slide2.description',
  }
];

export default function Carousel() {
  const t = useTranslations('HomePage');

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

          <CarouselButton href="/products">
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
