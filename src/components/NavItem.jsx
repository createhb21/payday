import React from 'react';
import styled from 'styled-components';

import { media } from '../styles';
import { smooth } from '../constant';

const S = {
  NavigationItem: styled.li`
    ${media.small} {
      margin: 0;
      a {
        font-size: 1rem !important;
        font-weight: 600 !important;
      }
    }

    margin: 10px;
    width: 120px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px 15px;

    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: 0.275s ease-in-out;
    cursor: pointer;

    a {
      color: ${(props) => props.theme.palette.gray};
      font-weight: bold;
      font-size: 1.12rem;
      position: absolute;
      list-style: none;
      text-decoration: none;
    }

    @media (min-width: 1024px) {
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
    }
  `,
};

function NavItem({ text, to }) {
  const dataLink = `#${text}`;
  return (
    <S.NavigationItem data-link={dataLink}>
      <a target="_blank" href={to} rel="noopener noreferrer">
        {text}
      </a>
    </S.NavigationItem>
  );
}

export default NavItem;
