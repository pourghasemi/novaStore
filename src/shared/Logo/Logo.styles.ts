
import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  white-space: nowrap;

  img {
    display: block;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  span {
    font-size: 26px;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }

    span {
      font-size: 22px;
    }
  }
`;
