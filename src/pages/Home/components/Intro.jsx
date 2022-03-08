import React, { useLayoutEffect, useEffect } from 'react';
import styled from 'styled-components';

import { logo, introChat, introPhone } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 580px;
    padding-top: 5rem;
  `,
  Title: styled.h1`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.lightBlack};
    margin-bottom: 0.5rem;
  `,
  Logo: styled.div`
    width: 390px;
    height: 100px;
    background: no-repeat center/cover url(${logo});
    margin: -15px -22px;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: #c9e0fe;
    border-radius: 50%;
    position: relative;
  `,
  Description: styled.p`
    position: absolute;
    top: 50px;
    right: 100px;
    ${(props) => props.theme.typography.subheading};
    color: ${(props) => props.theme.palette.darkPurple};
    text-align: right;
  `,
  Chat: styled.div`
    width: 279px;
    height: 550px;
    position: absolute;
    bottom: -50px;
    left: 15px;
    background: no-repeat center/cover url(${introChat});
  `,
  Phone: styled.div`
    width: 100%;
    height: 550px;
    position: absolute;
    bottom: -37px;
    left: 115px;
    background: no-repeat center/cover url(${introPhone});
  `,
};

const Intro = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 0.7, 0),
    1: useScrollFadeIn('up', 0.7, 0.2),
    2: useScrollFadeIn('down', 0.7, 0.2),
  };

  // useLayoutEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.intro'));

    elements.forEach((el) => {
      el.animate(
        [
          {
            transform: `translateY(77px)`,
            opacity: 0,
          },
          {
            transform: `translateY(0px)`,
            opacity: 1,
          },
        ],
        {
          duration: 700,
          easing: 'ease-in-out',
        },
      );
    });
  }, []);

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Title {...animatedItem[0]}>
          월급을 새로 정의하다
          <br />
          세상에 없던 급여 계산 서비스
        </S.Title>
        <S.Logo {...animatedItem[1]} />
      </S.TextWrapper>
      <S.Image>
        <S.Description {...animatedItem[2]}>
          당연한 권리를 찾으세요!
          <br />
          법적 임금 계산 & 공인노무사 중개 플랫폼
        </S.Description>
        <S.Chat className="intro" />
        <S.Phone className="intro" />
      </S.Image>
    </S.Wrapper>
  );
};

export default Intro;
