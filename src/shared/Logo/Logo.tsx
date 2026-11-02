
import Image from 'next/image';
import { LogoContainer } from './Logo.styles';

export default function Logo() {
  return (
    <LogoContainer>
      <Image
        src="/images/nova-logo.svg"
        alt="NOVA"
        width={40}
        height={40}
      />

      <span>NOVA</span>
    </LogoContainer>
  );
}
