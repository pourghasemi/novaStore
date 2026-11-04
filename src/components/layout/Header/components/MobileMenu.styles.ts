import styled from 'styled-components';

export const MobileMenuContainer = styled.nav<{ $open: boolean }>`
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

  > a,
  > button {
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
    @media (max-width: 769px) {
      text-align: right;
    }

  }

  @media (min-width: 769px) {
    display: none;
  }
`;