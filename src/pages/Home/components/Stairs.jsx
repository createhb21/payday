import React from 'react';
import styled, { keyframes } from 'styled-components';

import { logo } from '../../../assets';
import { media } from '../../../styles';
import { keywords } from '../../../constant';
import { useScrollTextIn, useScrollFadeIn } from '../../../hooks';

const show = keyframes`
    from {
      -webkit-text-stroke: 1px ${(props) => props.theme.palette.lightPurple};
      -webkit-text-fill-color: ${(props) => props.theme.palette.white};
    }
    to {
      -webkit-text-stroke: unset;
      -webkit-text-fill-color: #91b1ff;
    }
`;

const S = {
  Background: styled.section`
    width: 100%;
  `,
  Wrapper: styled.div`
    ${media.small} {
      max-width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 100px 0;
  `,
  Article: styled.div`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .stairs {
      font-weight: 900;
      font-size: 4.25rem;
      line-height: 1.2;
      -webkit-text-stroke: 1px ${(props) => props.theme.palette.lightPurle};
      -webkit-text-fill-color: ${(props) => props.theme.palette.white};
    }

    .stairs.is-running {
      animation: ${show} 2.5s forwards cubic-bezier(0, 0, 0.2, 1);
      /* -webkit-text-stroke: unset;
      -webkit-text-fill-color: #91b1ff; */
    }
  `,
  LogoTicle: styled.div`
    width: 750px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Logo: styled.div`
    width: 400px;
    height: 4rem;
    background: no-repeat center/cover url(${logo});
  `,
  LogoText: styled.p`
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

  const animationPayday = useScrollFadeIn('down', 2, 0.4);

  return (
    <S.Background>
      <S.Wrapper>
        <S.Article>
          {keywords.map((item, index) => (
            <p key={item.id} className="stairs" {...animatedItem[index]}>
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
