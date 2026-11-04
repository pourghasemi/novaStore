
import styled from 'styled-components';

export const ErrorMessageContainer = styled.p`
  margin: 24px 0;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.danger};
  font-size: 14px;
  text-align: center;
`;
