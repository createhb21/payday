import React, { useMemo } from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import { arrow } from '../../../assets';
import { useSnackBar } from '../../../hooks';
import { SnackBarContext } from '../../../context';
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
      <SnackBarContext.Provider value={value}>
        <MobileHeader />
        <Header />
        <S.ContentWrapper>{ctx.children}</S.ContentWrapper>
        <Footer />
      </SnackBarContext.Provider>
      <FloatingButton src={arrow} />
      {snackbarMessage && <Snackbar key={Math.random()} />}
    </S.LayoutImpl>
  );
};

export default Layout;

const S = {
  LayoutImpl: styled.div`
    width: 100vw;
    height: 100%;
  `,
  ContentWrapper: styled.main`
    ${media.small} {
      max-width: 100%;
      gap: unset;
      margin-top: 9rem;
    }
    width: 100%;
    height: calc(100% - 70px);
    margin-top: 10rem;
    display: grid;
    grid-auto-rows: minmax(720px, auto);
    gap: 5rem;

    & > section:last-child {
      transform: translateY(-5rem);
    }
  `,
};
