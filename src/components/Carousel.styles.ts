
import styled from 'styled-components';
import { Link } from '@/i18n/navigation';

export const CarouselContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 24px;
`;

export const CarouselContent = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.card};

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const CarouselImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CarouselText = styled.div`
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
  z-index: 1;
  width: 40%;
  text-align: right;

  @media (max-width: 768px) {
    right: 5%;
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 65%;
  }
`;

export const CarouselTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 12px;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.25);

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CarouselDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 14px;
  }
`;

export const CarouselButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 14px;
`;

export const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '20px' : '8px')};
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.border};
  cursor: pointer;
  transition: all 0.2s ease;
`;
