import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { NavItem } from './';
import { media } from '../styles';
import { mobileLogo } from '../assets';
import { calendly, googleForm } from '../constant';

const S = {
  Wrapper: styled.div`
    display: none;
    ${media.small} {
      display: block;
    }
    min-width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: ${(props) =>
      props.isScroll
        ? '5px 5px 10px -5px #00000070'
        : '5px 5px 10px -5px rgba(0, 0, 0, 0.09)'};
  `,
  Header: styled.header`
    width: 100%;
    overflow: hidden;
  `,
  Navigation: styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  Logo: styled.img.attrs({
    src: `${mobileLogo}`,
  })`
    width: 60px;
    cursor: pointer;
  `,
};

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Navigation>
          <NavItem text="Contact us" to={calendly} isScroll={isScroll} />
          <S.Logo src={mobileLogo} isScroll={isScroll} />
          <NavItem text="for CPLA" to={googleForm} isScroll={isScroll} />
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
