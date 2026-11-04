import styled from 'styled-components';

export const EmptyContainer = styled.div`
  width: 100%;
  padding: 48px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const EmptyMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
`;