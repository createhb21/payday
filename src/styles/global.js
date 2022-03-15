import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif; 
  }
  html, body {
    overflow-x: hidden;
  }
  body {
    position: relative;

    font-family: 'Noto Sans KR', -apple-system, 'Apple SD Gothic Neo', 'Noto Sans CJK KR', BlinkMacSystemFont, 'Helvetica Neue', 'Malgun Gothic', '맑은 고딕', 'Nanum Gothic', arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  `;

export default GlobalStyle;
