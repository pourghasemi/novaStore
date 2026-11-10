
'use client';

import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalMessage,
  ModalActions,
  CancelButton,
  ConfirmButton,
} from './Modal.styles';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  loading = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onCancel}>
      <ModalContent
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
      >
        <ModalTitle id="confirm-modal-title">
          {title}
        </ModalTitle>

        <ModalMessage>{message}</ModalMessage>

        <ModalActions>
          {cancelText && (
            <CancelButton
              onClick={onCancel}
              disabled={loading}
            >
              {cancelText}
            </CancelButton>
          )}

          {confirmText && (
            <ConfirmButton
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? '...' : confirmText}
            </ConfirmButton>
          )}
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
}
