import React from 'react';
import styled from 'styled-components';

import { questionMark } from '../../../assets';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    position: relative;
    background-image: linear-gradient(
      to top,
      ${({ theme }) => theme.palette.secondary},
      ${({ theme }) => theme.palette.accent}
    );
  `,
  Mountain: styled.div`
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
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.white};
    text-align: center;
    margin-bottom: 4rem;
  `,
  ItemWrapper: styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ItemBox: styled.li`
    width: 380px;
    padding: 3rem 2rem;
    text-align: center;
    background-color: ${(props) => props.theme.palette.white};
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
  `,
  ItemTitle: styled.h3`
    ${(props) => props.theme.typography.heading};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  ItemDescription: styled.p`
    ${(props) => props.theme.typography.description};
    margin-bottom: 1.5rem;
  `,
  ItemButton: styled.button`
    ${(props) => props.theme.typography.textbutton};
    color: ${(props) => props.theme.palette.secondary};
    margin-top: auto;
    cursor: pointer;
  `,
};

const SERVICES_ITEMS = [
  {
    title: 'Volutpat odio',
    description:
      'Facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing. In hac habitasse platea dictumst quisque sagittis purus.',
    button: 'Get started',
  },
  {
    title: 'Diam donec',
    description:
      'Adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Pulvinar elementum integer enim neque volutpat ac.',
    button: 'Switch over',
  },
  {
    title: 'Elit at imperdiet',
    description:
      'Dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent.',
    button: 'Read more',
  },
];

const Question = () => {
  const animatedItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('down', 1, 0.3),
  };

  const aniumation = useScrollFadeIn('down', 1, 0);

  return (
    <S.Wrapper>
      <S.Mountain>
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
      </S.Mountain>
      <S.ContentBox>
        <S.Title {...aniumation}>
          내 월급,
          <br />
          &lsquo;제대로&rsquo;
          <br />
          받고 있는 건가?
        </S.Title>
        <S.ItemWrapper>
          {SERVICES_ITEMS.map((item, index) => (
            <S.ItemBox key={item.title} {...animatedItem[index]}>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemDescription>{item.description}</S.ItemDescription>
              <S.ItemButton>{item.button}</S.ItemButton>
            </S.ItemBox>
          ))}
        </S.ItemWrapper>
      </S.ContentBox>
    </S.Wrapper>
  );
};

export default Question;
