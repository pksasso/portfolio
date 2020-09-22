import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </div>
  );
};

export default Layout;
