import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surface} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.surface} 75%
  );

  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

export const SkeletonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.card};
`;

export const SkeletonImage = styled(SkeletonBase)`
  width: 100%;
  height: 220px;
`;

export const SkeletonText = styled(SkeletonBase)`
  width: 80%;
  height: 16px;
`;

export const SkeletonShortText = styled(SkeletonBase)`
  width: 45%;
  height: 14px;
`;

export const SkeletonPrice = styled(SkeletonBase)`
  width: 35%;
  height: 22px;
`;