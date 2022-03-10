import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { media } from '../styles';

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) scale(0.75);
  }
  25% {
    opacity: 0.9;
    transform: translateX(0px) scale(1.0);
  }
  50% {
    opacity: 0.9;
    transform: translateX(0px) scale(1.0);
  }
  75% {
    opacity: 0.9;
    transform: translateX(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100px) scale(0.75);
  }`;

const S = {
  PopupBaseBlock: styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    z-index: 60;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  `,
  SnackbarContainer: styled.div`
    ${media.small} {
      width: 10rem;
      height: 1.2rem;
      font-size: 1rem;
    }
    width: 13rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1.5rem;
    margin-left: 2rem;
    border-radius: 10px;
    background: ${(props) => props.backgroundColor};
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
      rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
    color: white;
    font-size: 1.3rem;
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
  backgroundColor = '#6E98FA',
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
