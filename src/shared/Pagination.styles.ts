import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 32px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 40px;
  height: 40px;
  padding: 0 12px;

  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};

  border-radius: 8px;

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.card};

  color: ${({ theme, $active }) =>
    $active ? '#ffffff' : theme.colors.text};

  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;