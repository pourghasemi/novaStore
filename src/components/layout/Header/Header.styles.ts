
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;

  display: flex;
  flex-direction: row;
  direction: ltr;
  align-items: center;
  justify-content: space-between;
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
  min-width: 0;
  display: flex;
  align-items: center;
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
