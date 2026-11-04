import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { LogoContainer } from './Logo.styles';

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/" aria-label="NOVA Home">
        <Image
          src="/images/nova-logo.svg"
          alt="NOVA"
          width={40}
          height={40}
        />
      </Link>

      <Link href="/">NOVA</Link>
    </LogoContainer>
  );
}