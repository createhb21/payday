import React, { useContext } from 'react';
import styled from 'styled-components';

import Button from './Button';
import TextField from './TextField';
import { media } from '../styles';
import { Context } from '../context';
import { rss } from '../assets';
import {
  calendly,
  googleForm,
  appStoreLink,
  googlePlayLink,
  aboutUs,
  FrequentlyAsk,
} from '../constant';

const S = {
  Wrapper: styled.footer`
    ${media.small} {
      max-width: 100vw;
      display: grid;
      grid-template-rows: repeat(4, minmax(170px, auto));
      align-items: center;
      margin-top: -5rem;
      padding-top: 5rem;
    }
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 50px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `,
  Info: styled.div`
    ${media.small} {
      max-width: 100%;
    }
    flex: 0 0 30%;
    max-width: 30%;
  `,
  Logo: styled.span`
    ${media.small} {
      margin-bottom: 1.5rem;
    }
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.darkgray};
    display: inline-block;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  Text: styled.p`
    ${(props) => props.theme.typography.body};
    color: ${(props) => props.theme.palette.gray};
    span {
      display: block;
      margin-bottom: 1rem;
    }
  `,
  Menu: styled.ul`
    ${media.small} {
      width: 100%;
    }
    flex: 0 0 20%;
    max-width: 20%;
    display: flex;
    flex-direction: column;
  `,
  MenuTitle: styled.h4`
    ${media.small} {
      width: 300px;
      color: ${(props) => props.theme.palette.accent};
      margin-bottom: 1.25rem;
    }
    ${(props) => props.theme.typography.label};
    color: ${(props) => props.theme.palette.secondary};
    margin-bottom: 2.5rem;
  `,
  MenuItem: styled.a`
    ${media.small} {
      width: 125px;
      margin-bottom: 1rem;
    }
    ${(props) => props.theme.typography.body};
    color: ${(props) => props.theme.palette.gray};
    display: inline-block;
    margin-bottom: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    @media (min-width: 768px) {
      &:hover {
        opacity: 0.5;
      }
    }
  `,
  Subscribe: styled.div`
    ${media.small} {
      width: 100%;
    }
    flex: 0 0 30%;
    p {
      line-height: 1.5;
    }
  `,
  Form: styled.form`
    ${media.small} {
      margin-top: -0.5rem;
      margin-bottom: 0.5rem;
    }
    width: 330px;
    input {
      margin-right: 1rem;
      width: 200px;
    }
    a {
      width: 100%;
    }
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  `,
  Bottom: styled.div`
    ${media.small} {
      display: none;
    }
    width: 100%;
    color: ${(props) => props.theme.palette.gray};
    margin-top: 120px;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    border-top: 1px solid ${(props) => props.theme.palette.lightgray};
    position: relative;
    span {
      ${(props) => props.theme.typography.caption};
    }
  `,
  RSS: styled.a`
    position: absolute;
    top: 25px;
    right: 15px;
    display: block;
    width: 20px;
    height: 20px;
    background: no-repeat center/cover url(${rss});
  `,
};

const Footer = () => {
  const { setSnackbarMessage } = useContext(Context);
  const handleSnackBar = (e) => {
    e.preventDefault();
    setSnackbarMessage('준비중입니다 😎');
  };

  return (
    <S.Wrapper aria-label="Footer">
      <S.Info>
        <S.Logo>PAYDAY</S.Logo>
        <S.Text>
          <span>allwage.lab@gmail.com</span>
          <span>+10 4745 9497</span>
          <span>서울특별시 도봉구 마들로 13길 61, 507호</span>
        </S.Text>
      </S.Info>
      <S.Menu>
        <S.MenuTitle>Quick Links</S.MenuTitle>
        <S.MenuItem target="_blank" href={calendly} rel="noopener noreferrer">
          Contact Us
        </S.MenuItem>
        <S.MenuItem target="_blank" href={googleForm} rel="noopener noreferrer">
          For CPLA
        </S.MenuItem>
        <S.MenuItem target="_blank" href={aboutUs} rel="noopener noreferrer">
          About us
        </S.MenuItem>
      </S.Menu>
      <S.Menu>
        <S.MenuTitle>Services</S.MenuTitle>
        <S.MenuItem
          target="_blank"
          href={appStoreLink}
          rel="noopener noreferrer"
        >
          App Store
        </S.MenuItem>
        <S.MenuItem
          target="_blank"
          href={googlePlayLink}
          rel="noopener noreferrer"
        >
          Google Play
        </S.MenuItem>
        <S.MenuItem
          target="_blank"
          href={FrequentlyAsk}
          rel="noopener noreferrer"
        >
          Frequently Ask
        </S.MenuItem>
      </S.Menu>
      <S.Subscribe>
        <S.MenuTitle>Subscribe</S.MenuTitle>
        <S.Form onSubmit={handleSnackBar}>
          <TextField type="text" placeholder="Enter Your Email" />
          <Button fill="solid" type="submit">
            Subscribe
          </Button>
        </S.Form>
        <S.Text>Let's subscribe our service, Payday! </S.Text>
      </S.Subscribe>
      <S.Bottom>
        <span>PAYDAY © 2021</span>
        <S.RSS target="_blank" href="/sitemap.xml" rel="noopener noreferrer" />
      </S.Bottom>
    </S.Wrapper>
  );
};

export default Footer;
