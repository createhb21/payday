import React from 'react';
import styled, { keyframes } from 'styled-components';

import { media } from '../styles';

const smooth = keyframes`
    0% {
        top: 90%;
        left: -110%;
    }
    50% {
        top: -30%;
        left: 10%;
    }
    100% {
        top: -10%;
        left: -10%;
    }
`;

const S = {
  NavigationItem: styled.li`
    ${media.small} {
      a {
        font-size: 1rem;
        font-weight: normal;
        color: ${(props) => props.theme.palette.black};
      }
    }
    margin: 10px;
    width: 120px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    padding: 6px 15px;

    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: 0.275s ease-in-out;
    cursor: pointer;

    &:before {
      content: '';
      width: 175%;
      height: 175%;
      transform: rotate(45deg);
      background: ${(props) => props.theme.palette.secondary};
      top: 90%;
      left: -110%;
      position: absolute;
    }

    a {
      color: ${(props) => props.theme.palette.gray};
      font-size: 1.12rem;
      position: absolute;
      list-style: none;
      text-decoration: none;
    }

    &:hover a {
      transform: scale(1.05);
      transition: 0.2s linear;
      color: ${(props) => props.theme.palette.black};
    }

    &:hover {
      &:before {
        top: -10%;
        left: -10%;
        animation: ${smooth} 0.9s;
      }
    }
  `,
};

function NavItem({ text, to, isScroll }) {
  const dataLink = `#${text}`;
  return (
    <S.NavigationItem isScroll={isScroll} data-link={dataLink}>
      <a target="_blank" href={to} rel="noopener noreferrer">
        {text}
      </a>
    </S.NavigationItem>
  );
}

export default NavItem;
