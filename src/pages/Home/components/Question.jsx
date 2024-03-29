import React from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import { customer } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.article`
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
      fill: #ffffff;
    }
  `,
  ContentBox: styled.div`
    ${media.small} {
      max-width: 100vw;
    }
    ${media.large} [
      padding: 120px 20px;

    ]width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h2`
    ${media.small} {
      ${(props) => props.theme.typography.mobileHeading};
    }
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.white};
    text-align: center;
    margin-bottom: 2rem;
  `,
  ImageWrapper: styled.div`
    width: 100%;
  `,
  ImageBox: styled.div`
    ${media.small} {
      width: 230px;
      height: 245px;
    }
    width: 350px;
    height: 400px;
    margin: 0 auto;
    padding: 3rem 2rem;
    background: no-repeat center/cover url(${customer});
  `,
};

const Question = () => {
  const animation = useScrollFadeIn('down', 1);
  const animatedImage = useScrollFadeIn('up', 0.7);

  return (
    <S.Wrapper aria-label="Question">
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
      <S.ContentBox {...animation}>
        <S.Title>
          내 월급,
          <br />
          &lsquo;제대로&rsquo;
          <br />
          받고 있는 건가?
        </S.Title>
        <S.ImageWrapper {...animatedImage}>
          <S.ImageBox />
        </S.ImageWrapper>
      </S.ContentBox>
    </S.Wrapper>
  );
};

export default Question;
