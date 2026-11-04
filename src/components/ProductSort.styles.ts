import styled from 'styled-components';

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SortLabel = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  white-space: nowrap;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;