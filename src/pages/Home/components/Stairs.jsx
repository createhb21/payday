import React from 'react';
import styled from 'styled-components';

import { logo } from '../../../assets';
import { media } from '../../../styles';
import { keywords, showDown } from '../../../constant';
import { useScrollTextIn, useScrollFadeIn } from '../../../hooks';

const S = {
  Background: styled.article`
    ${media.small} {
      max-width: 100vw;
    }
    width: 100%;
  `,
  Wrapper: styled.div`
    ${media.small} {
      max-width: 100%;
    }
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 100px 0;
  `,
  Article: styled.div`
    ${media.small} {
      padding-top: 0;
    }
    width: 100%;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .stairs {
      ${media.small} {
        display: none;
      }
      font-weight: 900;
      font-size: 4.25rem;
      line-height: 1.2;
      -webkit-text-stroke: 1px #91b1ff;
      -webkit-text-fill-color: ${(props) => props.theme.palette.white};
    }

    .stairs.is-running {
      animation: ${showDown} 2.5s forwards cubic-bezier(0, 0, 0.2, 1);
    }

    .mobile-stairs {
      display: none;
      ${media.small} {
        display: block;
        font-size: 1.5rem;
        font-weight: 900;
        line-height: 2;
        -webkit-text-stroke: unset;
      }
    }
    .mobile-stairs.is-running {
      animation: ${showDown} 2.5s forwards cubic-bezier(0, 0, 0.2, 1);
    }
  `,
  LogoTicle: styled.div`
    ${media.small} {
      width: 100%;
      margin-top: 2rem;
      flex-direction: column;
    }
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.div`
    ${media.small} {
      width: 200px;
      height: 2rem;
    }
    width: 400px;
    height: 4rem;
    background: no-repeat center/cover url(${logo});
  `,
  LogoText: styled.p`
    ${media.small} {
      margin-top: 1rem;
      ${(props) => props.theme.typography.mobileTitle};
    }
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.darkPurple};
  `,
};

const Stairs = () => {
  const animatedItem = {
    0: useScrollTextIn('right', 1.5),
    1: useScrollTextIn('right', 1.5),
    2: useScrollTextIn('right', 1.5),
    3: useScrollTextIn('right', 1.5),
    4: useScrollTextIn('right', 1.5),
    5: useScrollTextIn('right', 1.5),
    6: useScrollTextIn('right', 1.5),
    7: useScrollTextIn('right', 1.5),
    8: useScrollTextIn('right', 1.5),
  };

  const mobileAnimation = {
    0: useScrollTextIn('down', 1.5),
    1: useScrollTextIn('down', 1.5),
    2: useScrollTextIn('down', 1.5),
    3: useScrollTextIn('down', 1.5),
    4: useScrollTextIn('down', 1.5),
    5: useScrollTextIn('down', 1.5),
    6: useScrollTextIn('down', 1.5),
    7: useScrollTextIn('down', 1.5),
    8: useScrollTextIn('down', 1.5),
  };

  const animationPayday = useScrollFadeIn('down', 2, 0.4);

  return (
    <S.Background aria-label="Resolving">
      <S.Wrapper>
        <S.Article>
          {keywords.map((item, index) => (
            <p key={item.id} className="stairs" {...animatedItem[index]}>
              {item.text}
            </p>
          ))}
          {keywords.map((item, index) => (
            <p
              key={index + Math.random()}
              className="mobile-stairs"
              {...mobileAnimation[index]}
            >
              {item.text}
            </p>
          ))}
          <S.LogoTicle {...animationPayday}>
            <S.Logo />
            <S.LogoText>에서 해결해 드립니다!</S.LogoText>
          </S.LogoTicle>
        </S.Article>
      </S.Wrapper>
    </S.Background>
  );
};

export default Stairs;
