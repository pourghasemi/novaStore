
import type { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <LayoutContainer>
      <Header />

      <MainContent>
        {children}
      </MainContent>

      <Footer />
    </LayoutContainer>
  );
}
