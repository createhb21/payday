import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { logo } from '../assets';
import { calendly, googleForm } from '../constant';
import { NavItem } from './';

const S = {
  Wrapper: styled.div`
    width: 100%;
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
  })`
    width: 180px;
    height: 100px;
    max-width: 25%;

    cursor: pointer;
    object-fit: cover;
  `,
  Navigation: styled.ul`
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
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo src={logo} isScroll={isScroll} />
        <S.Navigation>
          <NavItem text="Contact us" to={calendly} isScroll={isScroll} />
          <NavItem text="for CPLA" to={googleForm} isScroll={isScroll} />
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
