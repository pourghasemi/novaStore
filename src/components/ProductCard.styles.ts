import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  padding: 12px;
  background: #ffffff;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ProductCategory = styled.span`
  width: fit-content;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;

export const ProductRating = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProductPrice = styled.p`
  margin-top: auto;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;
export const SuccessMessage = styled.p`
  margin: 10px 0 0;
  color: ${({ theme }) => theme.colors.success};
  font-size: 13px;
  text-align: center;
`;
export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 16px;
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;