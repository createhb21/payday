import React, { useMemo } from 'react';
import styled from 'styled-components';

import { arrow } from '../../../assets';
import { SnackBarContext } from '../../../context';
import { useSnackBar } from '../../../hooks';
import { Header, Footer, Snackbar, FloatingButton } from '../../../components';

const Layout = (ctx) => {
  const [snackbarMessage, setSnackbarMessage] = useSnackBar(1200);
  const value = useMemo(() => ({ setSnackbarMessage }), [setSnackbarMessage]); // need to optimize this.

  return (
    <S.LayoutImpl>
      <Header />
      <SnackBarContext.Provider value={value}>
        <S.ContentWrapper>{ctx.children}</S.ContentWrapper>
        <Footer />
      </SnackBarContext.Provider>
      <FloatingButton src={arrow} />
      {snackbarMessage && <Snackbar key={Math.random()} snackbarMessage />}
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
