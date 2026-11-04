
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

import LanguageSwitcher from './LanguageSwitcher';
import HeaderSearch from './HeaderSearch'
import HeaderNavigation from './HeaderNavigation'
import { MobileMenuContainer } from './MobileMenu.styles';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const t = useTranslations('Header');

  return (
    <MobileMenuContainer $open={isOpen}>
      <HeaderSearch variant="mobile"/>

      <Link href="/" onClick={onClose}>
        {t('home')}
      </Link>

      <HeaderNavigation variant="mobile"  onNavigate={onClose} />

      <LanguageSwitcher onLanguageChange={onClose} />
    </MobileMenuContainer>
  );
}
