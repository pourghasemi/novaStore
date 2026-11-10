
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.45);
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

export const ModalTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ModalMessage = styled.p`
  margin: 0;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 9px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled(Button)`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

export const ConfirmButton = styled(Button)`
  background: #f97316;
  color: white;
`;
