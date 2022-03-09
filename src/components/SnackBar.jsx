import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }`;

const S = {
  PopupBaseBlock: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  PopupWrapper: styled.div`
    width: 25rem;
    border-radius: 4px;
    background: '#1E1E1E';
    padding: 2rem 1.5rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    ${(props) =>
      props.visible
        ? css`
            animation: ${popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${popOutToBottom} 0.2s forwards ease-in-out;
          `}
  `,
};

const Snackbar = ({ visible, children = '개발중 입니다 :)' }) => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;

  return (
    <>
      <S.PopupBaseBlock>
        <S.PopupWrapper visible={visible}>{children}</S.PopupWrapper>
      </S.PopupBaseBlock>
    </>
  );
};

export default Snackbar;
