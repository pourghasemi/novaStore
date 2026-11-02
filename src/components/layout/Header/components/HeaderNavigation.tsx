'use client';

import { useTranslations } from 'next-intl';
import { Navigation } from '../Header.styles';

interface HeaderNavigationProps {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

export default function HeaderNavigation({
  variant = 'desktop',
  onNavigate,
}: HeaderNavigationProps) {
  const t = useTranslations('Header');

  return (
    <Navigation $variant={variant}>
      <a href="#categories" onClick={onNavigate}>
        {t('categories')}
      </a>
    </Navigation>
  );
}