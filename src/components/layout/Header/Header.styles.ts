
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;

  display: flex;
  flex-direction: row;
  direction: ltr;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 14px 16px;
    gap: 12px;
  }
`;

export const MenuWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-shrink: 0;
  }
`;

export const MenuButton = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  padding: 3px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  z-index: 1001;

  div {
    width: 27px;
    height: 3px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    transition: all 0.3s ease;
    transform-origin: 2px;

    &:first-child {
      transform: ${({ $open }) =>
        $open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $open }) => ($open ? 0 : 1)};
      transform: ${({ $open }) =>
        $open ? 'translateX(15px)' : 'translateX(0)'};
    }

    &:last-child {
      transform: ${({ $open }) =>
        $open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input<{
  $variant: 'desktop' | 'mobile';
}>`
  width: 280px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    display: ${({ $variant }) =>
      $variant === 'desktop' ? 'none' : 'block'};

    width: 100%;
  }
`;


export const Navigation = styled.nav<{
  $variant: 'desktop' | 'mobile';
}>`
  display: ${({ $variant }) =>
    $variant === 'desktop' ? 'flex' : 'none'};

  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: ${({ $variant }) =>
      $variant === 'mobile' ? 'flex' : 'none'};

    width: 100%;
    align-items: stretch;
    flex-direction: column;

    a {
      display: block;
      width: 100%;
      padding: 12px 0;
      font-size: 15px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;


export const CartLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 600;
  white-space: nowrap;
  font-size: 14px;
  flex-shrink: 0;
`;

export const LanguageButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  cursor: pointer;
  flex-shrink: 0;
`;

export const MenuOverlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'block' : 'none')};

  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuContainer  = styled.nav<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  position: fixed;
  top: 0;
  left: 0;

  width: min(320px, 85vw);
  height: 100dvh;
  padding: 100px 32px 32px;

  background: ${({ theme }) => theme.colors.surface};
  z-index: 1000;

  transform: ${({ $open }) =>
    $open ? 'translateX(0)' : 'translateX(-100%)'};

  transition: transform 0.3s ease-in-out;

  input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    background: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.text};

    font-size: 14px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.primary};
      outline-offset: 1px;
    }
  }

  a,
  button {
    display: block;
    padding: 16px 0;

    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;

    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    background: transparent;
    text-align: left;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;
