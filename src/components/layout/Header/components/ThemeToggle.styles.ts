import styled from 'styled-components';

export const ActionButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  cursor: pointer;
  flex-shrink: 0;
`;