import React, { createContext, useMemo, useState } from 'react';
import styled from 'styled-components';

import { arrow } from '../../../assets';
import { useScroll } from '../../../hooks';
import { Header, Snackbar } from '../../../components';
import { Footer } from '../../../components';
import { FloatingButton } from '../../../components';

export const SnackContext = createContext({
  visible: false,
});

const Layout = (ctx) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const value = useMemo(() => ({ setVisible }), [setVisible]);

  return (
    <S.LayoutImpl>
      <Header />
      <SnackContext.Provider value={value}>
        <Snackbar visible={visible} />
        <S.ContentWrapper>{ctx.children}</S.ContentWrapper>
        <Footer />
      </SnackContext.Provider>
      <FloatingButton isScroll={scrollY} src={arrow} />
    </S.LayoutImpl>
  );
};

export default Layout;

const S = {
  LayoutImpl: styled.div`
    width: 100%;
    height: 100%;
  `,
  ContentWrapper: styled.main`
    width: 100%;
    height: calc(100% - 70px);
    display: grid;
    grid-auto-rows: minmax(720px, auto);
  `,
};
