import styled from 'styled-components';
import Link from 'next/link';

export const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 5px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 11px;
    font-weight: 600;
  }
`;