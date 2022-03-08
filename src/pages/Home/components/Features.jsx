import React from 'react';
import styled from 'styled-components';
import { featurePhone, featurePhone2 } from '../../../assets';
import { useScrollClipPath } from '../../../hooks';

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
    justify-content: center;
    width: 580px;
  `,
  Label: styled.p`
    display: inline-block;
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${(props) => props.theme.typography.subtitle};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.span`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${(props) => props.theme.typography.description};
    &:nth-child(2) {
      color: ${(props) => props.theme.palette.darkPurple};
    }
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: #c9e0fe;
    border-radius: 50%;
    position: relative;
  `,
  Phone1: styled.div`
    width: 100%;
    height: 550px;
    position: absolute;
    top: -10px;
    left: -150px;
    background: no-repeat center/cover url(${featurePhone});
  `,
  Phone2: styled.div`
    width: 100%;
    height: 550px;
    position: absolute;
    bottom: -10px;
    right: -150px;
    background: no-repeat center/cover url(${featurePhone2});
  `,
};

const FEAURE_ITEMS = [
  '지금 받는 월급 ',
  '법적으로 받을 수 있는 월급보다 적지는 않을까?',
  '한눈에 비교하고 편하게 상담받자!',
];

const Features = () => {
  const animatedList = useScrollClipPath();
  const animatedImage = {
    0: useScrollClipPath('up'),
    1: useScrollClipPath('up', 0.2),
  };

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>Our Features</S.Label>
        <S.Title>사용자 맞춤형 월급 계산</S.Title>
        <S.Description>
          주휴/연장/휴일/야간근로까지, 내 스케줄에 맞춰서 <br />
          자동으로 월급 계산!
        </S.Description>
        <S.List {...animatedList}>
          {FEAURE_ITEMS.map((item, index) => (
            <S.ListItem key={item}>{item}</S.ListItem>
          ))}
        </S.List>
      </S.TextWrapper>
      <S.Image>
        <S.Phone1 {...animatedImage[0]} />
        <S.Phone2 {...animatedImage[1]} />
      </S.Image>
    </S.Wrapper>
  );
};

export default Features;
