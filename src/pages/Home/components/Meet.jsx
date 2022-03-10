import React from 'react';
import styled from 'styled-components';

import { media } from '../../../styles';
import { Button } from '../../../components';
import { calendly } from '../../../constant';
import { useScrollFadeIn } from '../../../hooks';

const S = {
  Wrapper: styled.section`
    ${media.small} {
      max-width: 100%;
    }
    width: 100%;
    padding: 120px 0;
    background-color: ${(props) => props.theme.palette.background};
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 2rem;
    text-align: center;
  `,
  ButtonCover: styled.div`
    button {
      border: 1px solid ${(props) => props.theme.palette.primary};
      transition: all 0.2s ease-in-out;
      a {
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        color: ${(props) => props.theme.palette.white};
      }
      &:hover {
        transform: scale(1.01);
        background: transparent;
        a {
          opacity: 0.7;
          font-weight: bold;
          color: ${(props) => props.theme.palette.black};
        }
      }
    }
  `,
};

const Meet = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
  };

  return (
    <S.Wrapper>
      <S.Label {...animatedItem[0]}>Contact Us</S.Label>
      <S.Title {...animatedItem[1]}>
        미팅을 원하시나요?
        <br />
        저희와 상담해보세요!
      </S.Title>
      <S.ButtonCover {...animatedItem[2]}>
        <Button fill="solid" type="button">
          <a target="_blank" href={calendly} rel="noopener noreferrer">
            Get a Meet
          </a>
        </Button>
      </S.ButtonCover>
    </S.Wrapper>
  );
};

export default Meet;
