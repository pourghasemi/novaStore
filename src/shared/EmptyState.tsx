'use client';

import { EmptyContainer, EmptyMessage } from './EmptyState.styles';

interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <EmptyContainer>
      <EmptyMessage>{message}</EmptyMessage>
    </EmptyContainer>
  );
}