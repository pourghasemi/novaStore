import { Spinner, LoadingContainer, LoadingText } from './Loading.styles';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner />
      {message && <LoadingText>{message}</LoadingText>}
    </LoadingContainer>
  );
}