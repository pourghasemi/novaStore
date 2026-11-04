import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 280px;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchWrapper = styled.div<{
  $variant: 'desktop' | 'mobile';
}>`
  position: relative;
  width: fit-content;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    display: ${({ $variant }) =>
      $variant === 'desktop' ? 'none' : 'block'};

  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  min-width: 280px;

  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  max-height: 360px;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    min-width: 0;
  }
`;

export const SearchResultItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 12px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.card};
  }

  img {
    width: 45px;
    height: 45px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 0;
    flex: 1;
  }

  .product-name {
    color: ${({ theme }) => theme.colors.text};
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product-price {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 13px;
    font-weight: 600;
  }
`;

export const SearchEmpty = styled.p`
  padding: 16px;
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 13px;
`;