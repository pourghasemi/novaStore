'use client';

import {
  PaginationContainer,
  PageButton,
} from './Pagination.styles';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <PaginationContainer aria-label="Pagination">
      <PageButton
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </PageButton>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <PageButton
            key={page}
            type="button"
            $active={currentPage === page}
            aria-current={currentPage === page ? 'page' : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        ),
      )}

      <PageButton
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
}