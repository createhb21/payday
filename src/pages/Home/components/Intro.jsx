import React, { useEffect } from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import { useScrollFadeIn } from '../../../hooks';
import { logo, introChat, introPhone } from '../../../assets';

const S = {
  Wrapper: styled.section`
    ${media.small} {
      max-width: 100vw;
      min-height: 800px;
      flex-direction: column;
      justify-content: space-around;
    }
    ${media.large} {
      padding: 0 20px;
    }
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
  `,
  Title: styled.h1`
    ${media.small} {
      ${(props) => props.theme.typography.mobileDescription};
    }
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.lightBlack};
    margin-bottom: 0.5rem;
  `,
  Logo: styled.div`
    ${media.small} {
      width: 270px;
      height: 45px;
    }
    z-index: -1;
    width: 390px;
    height: 70px;
    background: no-repeat center/cover url(${logo});
  `,
  BlobCover: styled.div`
    width: 580px;
    ${media.small} {
      width: 110vw;
    }
    ${media.medium} {
      margin-bottom: 5rem;
    }
  `,
  Blob: styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #c9e0fe;
    border-radius: 50%;
    position: relative;
  `,
  Description: styled.p`
    ${media.small} {
      width: 100%;
      top: 7%;
      right: 20%;
      ${(props) => props.theme.typography.mobileDescription};
    }
    position: absolute;
    top: 50px;
    right: 130px;
    ${(props) => props.theme.typography.subheading};
    font-weight: 600;
    color: ${(props) => props.theme.palette.darkPurple};
    text-align: right;
  `,
  Chat: styled.div`
    ${media.small} {
      width: calc(100% * 0.47);
      bottom: 8%;
      left: 4%;
    }
    width: 280px;
    aspect-ratio: 9 / 16;
    position: absolute;
    bottom: -10px;
    left: 15px;
    background: no-repeat center/cover url(${introChat});
  `,
  Phone: styled.div`
    ${media.small} {
      width: calc(100% * 0.82);
      bottom: 11%;
      left: 27%;
    }
    width: 600px;
    aspect-ratio: 10 / 9;
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
      <S.BlobCover>
        <S.Blob>
          <S.Description {...animatedItem[2]}>
            당연한 권리를 찾으세요!
            <br />
            법적 임금 계산 & 공인노무사 중개 플랫폼
          </S.Description>
          <S.Chat className="intro" />
          <S.Phone className="intro" />
        </S.Blob>
      </S.BlobCover>
    </S.Wrapper>
  );
};

export default Intro;
