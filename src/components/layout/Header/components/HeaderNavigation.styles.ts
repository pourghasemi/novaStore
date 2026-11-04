import styled from 'styled-components';

export const Navigation = styled.nav<{
  $variant: 'desktop' | 'mobile';
}>`
  display: ${({ $variant }) =>
    $variant === 'desktop' ? 'flex' : 'none'};

  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 768px) {
    display: ${({ $variant }) =>
      $variant === 'mobile' ? 'flex' : 'none'};

    width: 100%;
    align-items: stretch;
    flex-direction: column;

    a {
      display: block;
      width: 100%;
      padding: 12px 0;
      font-size: 15px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;