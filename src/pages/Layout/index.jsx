import React from 'react';
import styled from 'styled-components';

import { arrow } from '../../assets';
import { useScroll } from '../../hooks';
import { Header } from '../../components';
import { Footer } from '../../components';
import FloatingButton from '../../components/FloatingButton';

const Layout = (ctx) => {
  const { scrollY } = useScroll();

  return (
    <LayoutImpl>
      <Header />
      <ContentWrapper>{ctx.children}</ContentWrapper>
      <Footer />
      <FloatingButton isScroll={scrollY} src={arrow} />
    </LayoutImpl>
  );
};

export default Layout;

const LayoutImpl = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.main`
  width: 100%;
  height: calc(100% - 70px);
  display: grid;
  grid-auto-rows: minmax(720px, auto);
`;
