import React from 'react';
import styled from 'styled-components';

import { media } from '../styles';
import { useScroll } from '../hooks';

const S = {
  Button: styled.button`
    ${media.small} {
      display: none;
    }
    z-index: 1000;

    position: fixed;
    bottom: 100px;
    right: 23.5px;

    width: 60px;
    height: 60px;
    padding: 0 0.75rem;

    border: none;
    border-radius: 26px;

    background: ${(props) => props.theme.palette.primary};

    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
      rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;

    cursor: pointer;
    transition: all 0.8s;

    opacity: ${(props) => (props.isScroll >= 300 ? 1 : 0)};
    pointer-events: ${(props) => (props.isScroll >= 300 ? 'auto' : 'none')};

    &:hover {
      transition: 0.3s;
      transform: scale(1.055);
      opacity: 0.8;
    }
  `,
};

export default function FloatingButton() {
  const { scrollY } = useScroll();
  const scrollIntoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <S.Button isScroll={scrollY} onClick={scrollIntoTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </S.Button>
  );
}
