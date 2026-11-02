
'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Logo from '@/shared/Logo/Logo';

import {
  FooterContainer,
  FooterContent,
  BrandSection,
  BrandDescription,
  FooterColumn,
  ColumnTitle,
  FooterLinks,
  FooterLink,
  CopyrightSection,
} from './Footer.styles';

export default function Footer() {
  const t = useTranslations('Footer');

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo />

          <BrandDescription>
            {t('description')}
          </BrandDescription>
        </BrandSection>

        <FooterColumn>
          <ColumnTitle>
            {t('usefulLinks')}
          </ColumnTitle>

          <FooterLinks>
            <FooterLink>
              <Link href="/">
                {t('home')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('categories')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('aboutUs')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('contactUs')}
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>
            {t('shoppingGuide')}
          </ColumnTitle>

          <FooterLinks>
            <FooterLink>
              <Link href="/">
                {t('howToOrder')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('shippingInfo')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('returnPolicy')}
              </Link>
            </FooterLink>

            <FooterLink>
              <Link href="/">
                {t('faq')}
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>
            {t('contactUs')}
          </ColumnTitle>

          <FooterLinks>
            <FooterLink>
              <a href="mailto:info@nova.com">
                info@nova.com
              </a>
            </FooterLink>

            <FooterLink>
              <a href="tel:+10000000000">
                +1 000 000 0000
              </a>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>

      <CopyrightSection>
        <p>
          © {currentYear} NOVA. {t('copyright')}
        </p>
      </CopyrightSection>
    </FooterContainer>
  );
}
