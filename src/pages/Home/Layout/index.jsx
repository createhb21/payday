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
  const value = useMemo(() => ({ setSnackbarMessage }), [setSnackbarMessage]); // need to optimize this.

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
    width: 100%;
    height: 100%;
  `,
  ContentWrapper: styled.main`
    ${media.small} {
      max-width: 100%;
      gap: 7rem;
      overflow: hidden;
    }
    width: 100%;
    height: calc(100% - 70px);
    display: grid;
    grid-auto-rows: minmax(720px, auto);
    gap: 5rem;

    & > section:last-child {
      transform: translateY(-5rem);
    }
  `,
};
