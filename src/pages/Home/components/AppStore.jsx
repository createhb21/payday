import React from 'react';
import styled from 'styled-components';

import { Button, TextField } from '../../../components';
import { contactImage } from '../../../assets';
import { useScrollFadeIn, useScrollCount } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    width: 100%;
    width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url(${contactImage});
  `,
  TextWrapper: styled.div`
    box-sizing: border-box;
    width: 580px;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  Form: styled.form`
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 1rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  `,
};

const AppStore = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
  };

  const countItem = useScrollCount(4.9, 0, true, 150);

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label {...animatedItem[0]}>Get Started</S.Label>
        <S.Title {...animatedItem[1]}>
          똑똑한 재테크를 위한
          <br />
          필수 월급 관리 어플
          <br />
          페이데이
        </S.Title>
        <S.Description {...animatedItem[2]}>
          <span role="img" aria-label="sheep">
            ⭐️⭐️⭐️⭐️⭐️{' '}
          </span>
          <br />
          App store 별점 <span {...countItem}>0</span>
        </S.Description>
        <S.Form {...animatedItem[3]}>
          <TextField type="text" placeholder="Name" />
          <TextField type="text" placeholder="Work Email Address" />
          <TextField type="text" placeholder="Company Name" />
          <Button fill="solid" type="submit">
            Become a partner
          </Button>
        </S.Form>
      </S.TextWrapper>
      <S.Image image={contactImage} />
    </S.Wrapper>
  );
};

export default AppStore;
