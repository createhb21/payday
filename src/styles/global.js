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
  }
`;

export default GlobalStyle;
