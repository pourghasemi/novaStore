
'use client';

import { useTranslations } from 'next-intl';
import { SearchInput } from '../Header.styles';

interface HeaderSearchProps {
  variant?: 'desktop' | 'mobile';
}

export default function HeaderSearch({
  variant = 'desktop',
}: HeaderSearchProps) {
  const t = useTranslations('Header');

  return (
    <SearchInput
      $variant={variant}
      type="search"
      placeholder={t('searchPlaceholder')}
      aria-label={t('searchPlaceholder')}
    />
  );
}
