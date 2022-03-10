import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset};
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif; 
  }
  body {
    overflow-x:hidden;
  }
`;

export default GlobalStyle;
