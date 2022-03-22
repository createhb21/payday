import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages';
import { Meta } from './components';
import { GlobalStyle, theme } from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
