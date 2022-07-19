import React from 'react';
import styled from 'styled-components';

import {
  review1,
  review2,
  review3,
  logoFill,
  appStore,
  googlePlay,
} from '../../../assets';
import { media } from '../../../styles';
import { Button } from '../../../components';
import { googleForm, appStoreLink, googlePlayLink } from '../../../constant';
import {
  useScrollFadeIn,
  useScrollCount,
  useScrollClipPath,
} from '../../../hooks';

const S = {
  Background: styled.article`
    width: 100vw;
    position: relative;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.palette.secondary},
      ${({ theme }) => theme.palette.accent}
    );
  `,
  Tilt: styled.div`
    width: 100%;
    overflow: hidden;
    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 247px;
      transform: rotateY(180deg);
    }
    .shape-fill {
      fill: ${(props) => props.theme.palette.white};
    }
  `,
  Wrapper: styled.div`
    ${media.small} {
      max-width: 100vw;
      padding: 120px 20px;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      button {
        display: none;
      }
    }
    width: 100%;
    max-width: 1180px;
    min-height: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  TextWrapper: styled.div`
    ${media.small} {
      width: 100%;
      padding-left: 0;
      align-items: center;
    }
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Logo: styled.div`
    ${media.small} {
      width: 100px;
      height: 100px;
    }
    width: 120px;
    height: 120px;
    border-radius: 15px;
    margin-bottom: 1rem;
    background: no-repeat center/cover url(${logoFill});
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
      rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
  `,
  Label: styled.label`
    ${media.small} {
      font-size: 1rem;
      text-align: center;
    }
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${media.small} {
      font-size: 1rem;
      text-align: center;
    }
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${media.small} {
      font-size: 1rem;
      text-align: center;
    }
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 2rem;

    span:last-child {
      font-weight: 900;
    }
  `,
  Form: styled.div`
    & > a {
      transition: all 0.2s ease-in-out;
      text-decoration: none;
      color: ${(props) => props.theme.palette.white};
      button {
        width: 70%;
        border: 1px solid ${(props) => props.theme.palette.primary};
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        button {
          font-weight: bold;
          transform: scale(1.01);
          color: ${(props) => props.theme.palette.black};
        }
      }
    }
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  Reviews: styled.div`
    ${media.small} {
      display: none;
    }
    width: 150%;
    position: relative;
  `,
  Review: styled.div`
    width: 100%;
    height: 250px;
    position: absolute;
    background: no-repeat center/cover url(${(props) => props.image});

    &:nth-child(1) {
      top: -20px;
    }
    &:nth-child(2) {
      top: 137px;
    }
    &:nth-last-child(1) {
      top: 270px;
    }
  `,
  Stores: styled.span`
    ${media.small} {
      position: static;
      justify-content: center;
    }
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 15px;
    left: 10px;
    display: flex;
    align-items: center;
  `,
  Store: styled.img.attrs({
    alt: '페이데이 앱',
  })`
    ${media.small} {
      width: 200px;
    }
    width: 260px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
  `,
};

const AppStore = () => {
  const reviewItems = [
    { id: 0, review: review1 },
    { id: 1, review: review2 },
    { id: 2, review: review3 },
  ];
  const appItems = [
    { id: 0, store: appStore },
    { id: 1, store: googlePlay },
  ];

  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollCount(4.9, 0, true, 150),
    4: useScrollFadeIn('up', 1, 0.4),
    5: useScrollClipPath('up'),
  };

  const handleSnackBar = (id) => {
    if (id > 0) {
      window.open(googlePlayLink, '_blank');
    } else {
      window.open(appStoreLink, '_blank');
    }
  };

  const mobileReviews = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
  };

  const mobilePhones = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
  };

  return (
    <S.Background aria-label="GetStart">
      <S.Tilt>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          />
        </svg>
      </S.Tilt>
      <S.Wrapper>
        <S.TextWrapper>
          <S.Logo />
          <S.Label {...animatedItem[0]}>Get Started</S.Label>
          <S.Title {...animatedItem[1]}>
            똑똑한 재테크를 위한
            <br />
            필수 월급 관리 어플
            <br />
            <p style={{ fontWeight: '900' }}>페이데이</p>
          </S.Title>
          <S.Description {...animatedItem[2]}>
            <span role="img" aria-label="sheep">
              ⭐️⭐️⭐️⭐️⭐️{' '}
            </span>
            <br />
            App store 별점 <span>4.9</span>
          </S.Description>
          <S.Form {...animatedItem[4]}>
            <a target="_blank" href={googleForm} rel="noopener noreferrer">
              <Button fill="solid" type="submit">
                Become a partner
              </Button>
            </a>
          </S.Form>
        </S.TextWrapper>
        <S.Image>
          <S.Reviews>
            {reviewItems.map((item) => (
              <S.Review
                image={item.review}
                key={item.id}
                {...mobileReviews[item.id]}
              />
            ))}
          </S.Reviews>
          <S.Stores>
            {appItems.map((item) => (
              <S.Store
                src={item.store}
                key={item.id}
                {...mobilePhones[item.id]}
                onClick={() => handleSnackBar(item.id)}
              />
            ))}
          </S.Stores>
        </S.Image>
      </S.Wrapper>
    </S.Background>
  );
};

export default AppStore;
