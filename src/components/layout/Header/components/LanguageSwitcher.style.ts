import styled from 'styled-components';

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