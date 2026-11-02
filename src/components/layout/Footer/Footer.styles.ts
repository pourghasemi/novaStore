
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 36px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 28px 16px;
    padding: 36px 20px;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BrandTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BrandDescription = styled.p`
  max-width: 280px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  line-height: 1.8;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
`;

export const FooterLink = styled.li`
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const CopyrightSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 13px;
  }
`;
