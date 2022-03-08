import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { GlobalStyle, theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
