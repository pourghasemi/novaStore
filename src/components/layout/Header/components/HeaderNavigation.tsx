'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Navigation } from './HeaderNavigation.styles';

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
      <Link href="/#categories" onClick={onNavigate}>
        {t('categories')}
      </Link>
    </Navigation>
  );
}