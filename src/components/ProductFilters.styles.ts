
import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 9px 18px;
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

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
