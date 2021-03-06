import React, { useMemo } from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import { arrow } from '../../../assets';
import { Context } from '../../../context';
import { useSnackBar } from '../../../hooks';
import {
  Header,
  Footer,
  Snackbar,
  FloatingButton,
  MobileHeader,
} from '../../../components';

const Layout = (ctx) => {
  const [snackbarMessage, setSnackbarMessage] = useSnackBar(1200);
  const value = useMemo(() => ({ setSnackbarMessage }), [setSnackbarMessage]);

  return (
    <S.LayoutImpl>
      <Context.Provider value={value}>
        <MobileHeader />
        <Header />
        <S.ContentWrapper>{ctx.children}</S.ContentWrapper>
        <Footer />
      </Context.Provider>
      <FloatingButton src={arrow} />
      {snackbarMessage && <Snackbar key={Math.random()} />}
    </S.LayoutImpl>
  );
};

export default Layout;

const S = {
  LayoutImpl: styled.main`
    width: 100vw;
    height: 100%;
  `,
  ContentWrapper: styled.section`
    ${media.small} {
      max-width: 100%;
      gap: unset;
      margin-top: 4.5rem;
    }
    width: 100%;
    height: calc(100% - 70px);
    margin-top: 10rem;
    display: grid;
    grid-auto-rows: minmax(720px, auto);
    gap: 5rem;

    & > article:last-child {
      transform: translateY(-5rem);
    }
  `,
};
