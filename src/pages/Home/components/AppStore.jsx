import React, { useContext } from 'react';
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
import { SnackBarContext } from '../../../context';
import { googleForm, appStoreLink } from '../../../constant';
import {
  useScrollFadeIn,
  useScrollCount,
  useScrollClipPath,
} from '../../../hooks';

const S = {
  Background: styled.section`
    width: 100%;
    position: relative;
    background: linear-gradient(
      to top,
      ${({ theme }) => theme.palette.secondary},
      ${({ theme }) => theme.palette.accent}
    );
  `,
  Tilt: styled.article`
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
  Wrapper: styled.article`
    ${media.small} {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      flex-direction: column;
    }
    width: 100%;
    max-width: 1180px;
    height: 950px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Logo: styled.div`
    width: 120px;
    height: 120px;
    border-radius: 15px;
    margin-bottom: 1rem;
    background: no-repeat center/cover url(${logoFill});
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px, rgb(0 0 0 / 15%) 0px 8px 30px,
      rgb(255 255 255 / 20%) 0px 0px 0px 1px inset;
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.white};
    margin-bottom: 2rem;

    span:last-child {
      font-weight: 900;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
      transition: all 0.2s ease-in-out;
      a {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: ${(props) => props.theme.palette.white};
      }
      &:hover {
        transform: scale(1.01);
        a {
          opacity: 0.7;
          font-weight: bold;
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
  `,
  Reviews: styled.div`
    flex: 1 1 80%;
    width: 150%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `,
  Review: styled.div`
    width: 100%;
    height: 250px;
    background: no-repeat center/cover url(${(props) => props.image});

    &:nth-child(2) {
      transform: translateY(-97px);
    }
    &:nth-last-child(1) {
      transform: translateY(-217px);
    }
  `,
  Stores: styled.span`
    flex: 1 1 20%;
    width: 100%;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-277px);
  `,
  Store: styled.img.attrs({
    alt: 'store',
  })`
    width: 270px;
    height: 270px;

    &:nth-of-type(2) {
      transform: translateX(-50px);
    }

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

  const { setSnackbarMessage } = useContext(SnackBarContext);
  const handleSnackBar = (id) => {
    if (id > 0) {
      setSnackbarMessage('준비중입니다 😎');
    } else {
      window.open(appStoreLink, '_blank');
    }
  };

  return (
    <S.Background>
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
            App store 별점 <span {...animatedItem[3]}>0</span>
          </S.Description>
          <S.Form {...animatedItem[4]} onSubmit={(e) => e.preventDefault()}>
            <Button fill="solid" type="submit">
              <a target="_blank" href={googleForm} rel="noopener noreferrer">
                Become a partner
              </a>
            </Button>
          </S.Form>
        </S.TextWrapper>
        <S.Image {...animatedItem[5]}>
          <S.Reviews>
            {reviewItems.map((item) => (
              <S.Review image={item.review} key={item.id} />
            ))}
          </S.Reviews>
          <S.Stores>
            {appItems.map((item) => (
              <S.Store
                src={item.store}
                key={item.id}
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
