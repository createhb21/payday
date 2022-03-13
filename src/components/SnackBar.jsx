import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { media } from '../styles';

const popInFromBottom = keyframes`
0% {
  opacity: 0;
  transform: translateY(100px) scale(0.75);
}
25% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
50% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
75% {
  opacity: 0.9;
  transform: translateY(2.5px) scale(1.0);
}
100% {
  opacity: 0;
  transform: translateY(100px) scale(0.75);
}`;

const S = {
  PopupBaseBlock: styled.div`
    ${media.small} {
      align-items: flex-end;
      justify-content: center;
      width: calc(100% - 50px);
      height: calc(100% - 16px);
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
      padding: 1.7rem 1.3rem;
      font-size: 0.9rem;
      margin-right: 0;
      border-radius: 22px;
      opacity: 0.7;
      color: ${(props) => props.theme.palette.lightGray};
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
