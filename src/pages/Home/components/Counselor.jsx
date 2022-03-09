import React from 'react';
import styled from 'styled-components';
import { counselorPhone1, counselorPhone2 } from '../../../assets';
import { Button } from '../../../components';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
      border: 1px solid ${(props) => props.theme.palette.primary};
      transition: all 0.2s ease-in-out;
      &:hover {
        background: transparent;
        color: ${(props) => props.theme.palette.black};
      }
    }
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
    text-align: center;
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${(props) => props.theme.typography.description};
    color: ${(props) => props.theme.palette.black};
    text-align: center;
    margin-bottom: 6rem;
  `,

  List: styled.div`
    width: 580px;
    height: 580px;
    background: ${(props) => props.theme.palette.secondary};
    border-radius: 50%;
    position: relative;
    margin-bottom: 4rem;
  `,
  Phone1: styled.div`
    width: 100%;
    height: 550px;
    position: absolute;
    top: 30px;
    left: -160px;
    background: no-repeat center/cover url(${counselorPhone1});
  `,
  Phone2: styled.div`
    width: 100%;
    height: 550px;
    position: absolute;
    top: 30px;
    right: -160px;
    background: no-repeat center/cover url(${counselorPhone2});
  `,
};

const Counselor = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
  };

  return (
    <S.Wrapper>
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
      <S.List>
        <S.Phone1 {...animatedItem[0]} />
        <S.Phone2 {...animatedItem[1]} />
      </S.List>
      <Button fill="solid">앱 다운로드하기</Button>
    </S.Wrapper>
  );
};

export default Counselor;
