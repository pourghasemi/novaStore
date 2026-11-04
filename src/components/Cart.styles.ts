import styled from 'styled-components';
import { Link } from '@/i18n/navigation';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const PageTitle = styled.h1`
  margin: 0 0 32px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const EmptyCart = styled.div`
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  color: ${({ theme }) => theme.colors.textSecondary};

  span {
    font-size: 56px;
  }

  p {
    font-size: 18px;
  }
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  align-items: start;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 14px;
  }
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 110px;
  padding: 8px;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProductName = styled.h3`
  margin: 0 0 12px;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const ProductPrice = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  font-weight: 700;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const QuantityValue = styled.span`
  min-width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 13px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Summary = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SummaryTitle = styled.h2`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 700;
`;

export const ContinueButton = styled(Link)<{ $fullWidth?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: 12px 20px;
  margin-top: 24px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;