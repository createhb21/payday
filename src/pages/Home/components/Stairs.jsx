import React from 'react';
import styled, { keyframes } from 'styled-components';

import { keywords } from '../../../constant';
import { useScrollFadeIn } from '../../../hooks';
import { useScrollTextIn } from '../../../hooks';

const show = keyframes`
    from {
      -webkit-text-stroke: 1px #91b1ff;
      -webkit-text-fill-color: #ffffff;
    }
    to {
      -webkit-text-stroke: unset;
      -webkit-text-fill-color: #91b1ff;
    }
`;

const S = {
  Background: styled.section`
    width: 100%;
    /* background-color: ${(props) => props.theme.palette.background}; */
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 100px 0;
  `,
  List: styled.ul`
    display: flex;
  `,
  ListItem: styled.li`
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    &:nth-child(2) {
      border: 2px solid ${(props) => props.theme.palette.white};
      border-top: none;
      border-bottom: none;
    }
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
      -webkit-text-stroke: 1px #91b1ff;
      -webkit-text-fill-color: #ffffff;
    }

    .stairs.is-running {
      animation: ${show} 2.5s forwards cubic-bezier(0, 0, 0.2, 1);
      /* -webkit-text-stroke: unset;
      -webkit-text-fill-color: #91b1ff; */
    }

    span {
      font-size: 3.5rem;
      color: #2b51a9;
    }
  `,
  Number: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Unit: styled.span`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Title: styled.h3`
    ${(props) => props.theme.typography.subheading};
    margin: 1rem 0;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
  `,
};

const Stairs = () => {
  // const animatedItem = {
  //   0: useScrollTextIn('down', 2),
  //   1: useScrollTextIn('down', 2),
  //   2: useScrollTextIn('down', 2),
  //   3: useScrollTextIn('down', 2),
  //   4: useScrollTextIn('down', 2),
  //   5: useScrollTextIn('down', 2),
  //   6: useScrollTextIn('down', 2),
  //   7: useScrollTextIn('down', 2),
  //   8: useScrollTextIn('down', 2),
  //   9: useScrollFadeIn('down', 2, 0.9),
  // };

  // const animatedItem = Array(keywords.length).fill(
  //   useScrollTextIn('right', 1.5),
  // );   // How to iterate ???

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

  const animationPayday = useScrollFadeIn('down', 2, 0.5);

  return (
    <S.Background>
      <S.Wrapper>
        <S.Article>
          {keywords.map((item, index) => (
            <p className="stairs" {...animatedItem[index]}>
              {item}
            </p>
          ))}
          <span {...animationPayday}>PAYDAY에서 해결해 드립니다!</span>
        </S.Article>
      </S.Wrapper>
    </S.Background>
  );
};

export default Stairs;
