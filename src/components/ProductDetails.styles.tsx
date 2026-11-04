import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const BackLink = styled.div`
  margin-bottom: 32px;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ProductImage = styled.img`
  width: 350px;
  height: 400px;
  padding: 24px;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProductName = styled.h1`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ProductCategory = styled.p`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  text-transform: capitalize;
`;

export const ProductRating = styled.p`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

export const ProductPrice = styled.h2`
  margin: 24px 0 0;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 26px;
  font-weight: 700;
`;

export const StateContainer = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;