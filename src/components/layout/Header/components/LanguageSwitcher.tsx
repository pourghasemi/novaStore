
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { LanguageButton } from './LanguageSwitcher.style';

interface LanguageSwitcherProps {
  onLanguageChange?: () => void;
}

export default function LanguageSwitcher({
  onLanguageChange,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = () => {
    const nextLocale = locale === 'fa' ? 'en' : 'fa';

    router.replace(pathname, {
      locale: nextLocale,
    });

    onLanguageChange?.();
  };

  return (
    <LanguageButton
      type="button"
      onClick={switchLanguage}
      aria-label="Change language"
    >
      🌐 {locale === 'fa' ? 'English' : 'فارسی'}
    </LanguageButton>
  );
}
