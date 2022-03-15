import React from 'react';
import styled from 'styled-components';

import {
  counselorChat,
  counselorPhone1,
  counselorPhone2,
  vain,
} from '../../../assets';
import { media } from '../../../styles';
import { Button } from '../../../components';
import { appStoreLink } from '../../../constant';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.article`
    ${media.small} {
      max-width: 100vw;
      justify-content: space-around;
      padding: 0px 20px;
      button {
        display: none;
      }
    }
    ${media.large} {
      padding: 120px 20px 0 20px;
    }
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > a {
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      color: ${(props) => props.theme.palette.white};
      button {
        border: 1px solid ${(props) => props.theme.palette.primary};
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        opacity: 0.7;
        font-weight: bold;
        color: ${(props) => props.theme.palette.black};
        button {
          transform: scale(1.01);
          background: transparent;
          color: ${(props) => props.theme.palette.black};
        }
      }
    }
  `,
  Label: styled.label`
    ${media.small} {
      ${(props) => props.theme.typography.mobileLabel};
    }
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${media.small} {
      ${(props) => props.theme.typography.mobileTitle};
    }
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    text-align: center;
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${media.small} {
      ${(props) => props.theme.typography.mobileDescription};
    }
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    text-align: center;
    margin-bottom: 6rem;
  `,
  Blob: styled.div`
    ${media.small} {
      width: 97%;
    }
    z-index: -1;
    width: 580px;
    aspect-ratio: 1 / 1;
    background: ${(props) => props.theme.palette.secondary};
    border-radius: 50%;
    position: relative;
    margin-bottom: 4rem;
  `,
  Phone1: styled.div`
    ${media.small} {
      display: none;
    }
    width: 100%;
    aspect-ratio: 10 / 9;
    position: absolute;
    top: 0px;
    left: -140px;
    background: no-repeat center/cover url(${counselorPhone1});
  `,
  Phone2: styled.div`
    ${media.small} {
      display: none;
    }
    width: 100%;
    aspect-ratio: 10 / 9;
    position: absolute;
    top: 0px;
    right: -140px;
    background: no-repeat center/cover url(${counselorPhone2});
  `,
  Chat: styled.div`
    ${media.small} {
      top: 20%;
      left: -6%;
      height: 300px;
    }
    width: 110%;
    height: 400px;
    position: absolute;
    top: 120px;
    left: -40px;
    background: no-repeat center/cover url(${counselorChat});
  `,
  Mobile1: styled.div`
    display: none;
    ${media.small} {
      display: block;
      width: 100%;
      aspect-ratio: 10 / 9;
      position: absolute;
      top: 5%;
      left: -25%;
      background: no-repeat center/cover url(${counselorPhone1});
    }
  `,
  Mobile2: styled.div`
    display: none;
    ${media.small} {
      display: block;
      width: 100%;
      aspect-ratio: 10 / 9;
      position: absolute;
      top: 5%;
      right: -25%;
      background: no-repeat center/cover url(${counselorPhone2});
    }
  `,
  Vain1: styled.span`
    ${media.small} {
      width: 60px;
      height: 50px;
      top: -2%;
      left: -2%;
    }
    width: 125px;
    height: 95px;
    position: absolute;
    top: -25px;
    left: -45px;
    background: no-repeat center/cover url(${vain});
    z-index: -1;
  `,
  Vain2: styled.span`
    ${media.small} {
      width: 60px;
      height: 50px;
      top: 25%;
      left: 40%;
    }
    width: 125px;
    height: 95px;
    position: absolute;
    background: no-repeat center/cover url(${vain});
    z-index: -1;
    top: 150px;
    left: 230px;
  `,
  Vain3: styled.span`
    ${media.small} {
      width: 60px;
      height: 50px;
      top: -8%;
      right: 1%;
    }
    width: 125px;
    height: 95px;
    position: absolute;
    background: no-repeat center/cover url(${vain});
    z-index: -1;
    top: -50px;
    right: -45px;
  `,
};

const Counselor = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('up', 1, -0.1),
  };

  const mobileAnimation = {
    0: useScrollFadeIn('down', 1),
    1: useScrollFadeIn('down', 1, 0.2),
  };

  return (
    <S.Wrapper aria-label="Counselors">
      <S.Label>Our Counselors</S.Label>
      <S.Title>
        노동 법률 전문가에게
        <br />
        간편 상담
      </S.Title>
      <S.Description>
        공인노무사와의 간단한 상담부터 문제 해결까지 <br />
        복잡한 과정은 건너뛰고 한번에!
      </S.Description>
      <S.Blob>
        <S.Phone1 {...animatedItem[0]} />
        <S.Phone2 {...animatedItem[1]} />
        <S.Mobile1 {...mobileAnimation[0]} />
        <S.Mobile2 {...mobileAnimation[1]} />
        <S.Chat {...animatedItem[2]} />
        <S.Vain1 />
        <S.Vain2 />
        <S.Vain3 />
      </S.Blob>
      <a target="_blank" href={appStoreLink} rel="noopener noreferrer">
        <Button fill="solid">앱 다운로드하기</Button>
      </a>
    </S.Wrapper>
  );
};

export default Counselor;
