import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { NavItem } from './';
import { logo } from '../assets';
import { media } from '../styles';
import { calendly, googleForm } from '../constant';

const S = {
  Wrapper: styled.header`
    ${media.small} {
      display: none;
    }
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.palette.white};
    box-shadow: ${(props) =>
      props.isScroll
        ? '5px 5px 10px -5px #00000070'
        : '5px 5px 10px -5px rgba(0, 0, 0, 0.09)'};
  `,
  Header: styled.div`
    ${media.large} {
      padding: 0 30px;
    }
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: ${(props) => (props.isScroll ? '70px' : '100px')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  `,
  Logo: styled.img.attrs({
    src: `${logo}`,
    alt: 'PAYDAY | 페이데이',
  })`
    width: 180px;
    height: 100px;
    max-width: 25%;
    object-fit: cover;
    cursor: pointer;
  `,
  Navigation: styled.nav`
    max-width: 50%;
    display: flex;
    justify-content: center;
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
    <S.Wrapper isScroll={isScroll} aria-label="Header">
      <S.Header isScroll={isScroll}>
        <S.Logo />
        <S.Navigation>
          <NavItem text="Contact us" to={calendly} />
          <NavItem text="for CPLA" to={googleForm} />
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
