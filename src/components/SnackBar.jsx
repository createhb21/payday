import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '../styles';
import { popInFromBottom } from '../constant';

const S = {
  PopupBaseBlock: styled.div`
    ${media.small} {
      align-items: flex-end;
      justify-content: center;
      width: calc(100% - 50px);
      height: calc(100% - 20px);
    }
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: calc(100% - 100px);
    z-index: 1001;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `,
  SnackbarContainer: styled.div`
    ${media.small} {
      width: calc(70% + 50px);
      height: 1rem;
      padding: 1.55rem 1.77rem;
      font-size: 0.95rem;
      margin-right: 0;
      border-radius: 20px;
      color: ${(props) => props.theme.palette.lightWhite};
      background: ${(props) => props.theme.palette.lightBlack};
    }
    width: 13rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    margin-right: 7rem;
    border-radius: 10px;
    background: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.palette.primary};
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
      rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
    color: ${(props) => props.theme.palette.white};
    font-size: 1.2rem;
    font-weight: 400;
    ${(props) =>
      props.message
        ? css`
            animation: ${popInFromBottom} ${(props) => props.time} forwards
              cubic-bezier(0, 0, 0.2, 1);
          `
        : ''}
  `,
};

const Snackbar = ({
  message = '준비중입니다 😎',
  ms = 1350,
  backgroundColor,
}) => (
  <S.PopupBaseBlock>
    <S.SnackbarContainer
      message
      backgroundColor={backgroundColor}
      time={`${ms / 1000}s`}
    >
      {message}
    </S.SnackbarContainer>
  </S.PopupBaseBlock>
);

export default Snackbar;
