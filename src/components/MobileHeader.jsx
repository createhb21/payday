import React from 'react';
import styled from 'styled-components';

import { NavItem } from './';
import { media } from '../styles';
import { mobileLogo } from '../assets';
import { calendly, googleForm } from '../constant';

const S = {
  Wrapper: styled.div`
    display: none;
    ${media.small} {
      display: flex;
    }
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    height: 55px;
    min-width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: 5px 5px 10px -5px rgba(0, 0, 0, 0.29);
  `,
  Logo: styled.img.attrs({
    src: `${mobileLogo}`,
  })`
    width: 50px;
    cursor: pointer;
  `,
};

const Header = () => {
  return (
    <S.Wrapper>
      <NavItem text="Contact us" to={calendly} />
      <S.Logo src={mobileLogo} />
      <NavItem text="for CPLA" to={googleForm} />
    </S.Wrapper>
  );
};

export default Header;
