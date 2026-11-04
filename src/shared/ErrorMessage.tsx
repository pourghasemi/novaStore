
import { ErrorMessageContainer } from './ErrorMessage.styles';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <ErrorMessageContainer role="alert">
      {message}
    </ErrorMessageContainer>
  );
}
