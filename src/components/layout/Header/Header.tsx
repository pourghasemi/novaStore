
'use client';

import { useState } from 'react';
import Logo from '@/shared/Logo';
import HeaderSearch from './components/HeaderSearch';
import HeaderNavigation from './components/HeaderNavigation';
import CartButton from './components/CartButton';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';
import MobileMenu from './components/MobileMenu';

import {
  HeaderContainer,
  HeaderContent,
  LogoWrapper,
  MenuWrapper,
  MenuButton,
  MenuOverlay,
} from './Header.styles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <MenuWrapper>
          <MenuButton
            type="button"
            $open={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div />
            <div />
            <div />
          </MenuButton>
        </MenuWrapper>

        <LogoWrapper>
          <Logo/>
        </LogoWrapper>

        <HeaderSearch variant="desktop" />

        <HeaderNavigation variant="desktop" />

        <CartButton />

        <LanguageSwitcher />

        <ThemeToggle />
      </HeaderContent>

      <MenuOverlay
        $open={isMenuOpen}
        onClick={closeMenu}
      />

    <MobileMenu
      isOpen={isMenuOpen}
      onClose={closeMenu}
    />
    </HeaderContainer>
  );
}
